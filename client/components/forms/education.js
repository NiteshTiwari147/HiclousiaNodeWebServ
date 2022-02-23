import React, { Component} from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import mutation from '../../mutation/forms/addEducation';
import query from '../../queries/currentUser';

class AddEducation extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: [], school: '', degree: '', field_of_study: '', start_year: '', end_year: '', grade: ''}
    }
    
    onSubmit() {
        const {school, degree, field_of_study, start_year, end_year, grade} = this.state;
        this.props.mutate({
            variables: { school, degree, field_of_study, start_year, end_year, grade},
            refetchQueries: [{ query }]
        }).then( res => hashHistory.push('/fillProject'))
        .catch( res => {
            const errors = res.graphQLErrors.map(error => error.message)
            this.setState({errors});
        } );
    }

    render() {
        return(
            <div>
                <h3>Fill your basic information</h3>
                <div className="row">
                <form className="col s16" onSubmit={this.onSubmit.bind(this)} >
                    <div className="input-field">
                        <input 
                        placeholder="School"
                        value={this.state.school}
                        onChange={ e => this.setState({ school: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input 
                        placeholder="Degree"
                        value={this.state.degree}
                        onChange={ e => this.setState({ degree: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input 
                        placeholder="Field of study"
                        value={this.state.field_of_study}
                        onChange={ e => this.setState({ field_of_study: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input 
                        placeholder="Year of starting"
                        value={this.state.start_year}
                        onChange={ e => this.setState({ start_year: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input 
                        placeholder="Year of ending"
                        value={this.state.end_year}
                        onChange={ e => this.setState({ end_year: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input 
                        placeholder="Grade"
                        value={this.state.grade}
                        onChange={ e => this.setState({ grade: e.target.value })}
                        />
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
            </div>

        )
    }
}

export default graphql(query)
(graphql(mutation)(AddEducation)
);