import React, { Component} from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import mutation from '../../mutation/logInMutation';
import query from '../../queries/currentUser';
import AuthForm from './AuthForm';

class LogInForm extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: []}
    }

    componentWillUpdate(nextProps) {
        if(!this.props.data.user && nextProps.data.user) {
            hashHistory.push('/dashboard')
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
            <div className="loginBox right">
                <h3>Log In </h3>
                <AuthForm 
                onSubmit={this.onSubmit.bind(this)} 
                errors={this.state.errors}
                />
            </div>

        )
    }
}

export default graphql(query)
(graphql(mutation)(LogInForm)
);