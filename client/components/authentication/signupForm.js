import React, { Component} from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import mutation from '../../mutation/signUpMutation';
import query from '../../queries/currentUser';
import AuthForm from './AuthForm';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: []}
    }

    componentWillUpdate(nextProps) {
        if(!this.props.data.user && nextProps.data.user) {
            hashHistory.push('/fillBasicInfo')
        }
    }
    onSubmit({email, password}) {
        this.props.mutate({
            variables: { email, password},
            refetchQueries: [{ query }]
        }).catch( res => {
            const errors = res.graphQLErrors.map(error => error.message)
            this.setState({errors});
        } );
    }
    render() {
        return (
            <div className="form_container">
                <div className='form_title'>
                    <h3>SIGN UP</h3>
                </div>
                <AuthForm 
                onSubmit={this.onSubmit.bind(this)} 
                errors={this.state.errors}
                msg="SIGN ME UP"
                />
            </div>

        )
    }
}

export default graphql(query)
(graphql(mutation)(SignUpForm)
);