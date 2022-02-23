import React, { Component} from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import mutation from '../../mutation/forms/createCandidate';
import query from '../../queries/currentUser';


class BasicInfoForm extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: [], firstName: '', lastName: '', age: ''}
    }

    onSubmit() {
        const {firstName, lastName, age} = this.state;
        this.props.mutate({
            variables: { firstName,lastName, age},
            refetchQueries: [{ query }]
        }).then( res => hashHistory.push('/fillEducation') )
        .catch( res => {
            const errors = res.graphQLErrors.map(error => error.message)
            this.setState({errors});
        } );
    }
    render() {
        return (
            <div>
            <h3>Fill your basic information</h3>
            <div className="row">
                <form className="col s16" onSubmit={this.onSubmit.bind(this)} >
                    <div className="input-field">
                        <input 
                        placeholder="first name"
                        value={this.state.firstName}
                        onChange={ e => this.setState({ firstName: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input 
                        placeholder="last name"
                        value={this.state.lastName}
                        onChange={ e => this.setState({ lastName: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input 
                        placeholder="age"
                        value={this.state.age}
                        onChange={ e => this.setState({ age: e.target.value })}
                        />
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        </div>
        )
    }
};

export default graphql(query)
(graphql(mutation)(BasicInfoForm)
);