import React, { Component} from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import './styles.css';
import mutation from '../../mutation/forms/addEducation';
import query from '../../queries/currentUser';

class AddEducation extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: [], school: '', degree: '', field_of_study: '', start_year: '', end_year: '', grade: ''}
    }

    addEducation() {
        const {school, degree, field_of_study, start_year, end_year, grade} = this.state;
        this.props.mutate({
            variables: { school, degree, field_of_study, start_year, end_year, grade},
            refetchQueries: [{ query }]
        }).then( res => window.location.reload())
        .catch( res => {
            const errors = res.graphQLErrors.map(error => error.message)
            this.setState({errors});
        } );
    }
    
    submitEducation() {
        const {school, degree, field_of_study, start_year, end_year, grade} = this.state;
        this.props.mutate({
            variables: { school, degree, field_of_study, start_year, end_year, grade},
            refetchQueries: [{ query }]
        }).then( res => hashHistory.push('/addExperience'))
        .catch( res => {
            const errors = res.graphQLErrors.map(error => error.message)
            this.setState({errors});
        } );
    }

    render() {
        return(
            <div className='form_container'>
                <div className='form_title'>
                    <h3>Fill your basic information</h3>
                </div>
                <div className="row">
                <form className="col s16 formContent">
                    <div className="form_inputBox input-field">
                        <div className='formLabel_title'>
                            School
                        </div>
                        <div className='formInput'>
                            <input 
                                placeholder="Enter School name"
                                value={this.state.school}
                                onChange={ e => this.setState({ school: e.target.value })}
                            />    
                        </div>                    
                    </div>
                    <div className="form_inputBox input-field">
                        <div className='formLabel_title'>
                            Degree
                        </div>
                        <div className='formInput'>
                            <input 
                                placeholder="Enter Degree name"
                                value={this.state.degree}
                                onChange={ e => this.setState({ degree: e.target.value })}
                            />    
                        </div>                    
                    </div>
                    <div className="form_inputBox input-field">
                        <div className='formLabel_title'>
                            Field of study
                        </div>
                        <div className='formInput'>
                            <input 
                                placeholder="Enter Field of study"
                                value={this.state.field_of_study}
                                onChange={ e => this.setState({ field_of_study: e.target.value })}
                            />    
                        </div>                    
                    </div>
                    <div className="form_inputBox input-field">
                        <div className='formLabel_title'>
                            Year of starting
                        </div>
                        <div className='formInput'>
                            <input 
                                placeholder="Enter start year"
                                value={this.state.start_year}
                                onChange={ e => this.setState({ start_year: e.target.value })}
                            />    
                        </div>                    
                    </div>
                    <div className="form_inputBox input-field">
                        <div className='formLabel_title'>
                            Year of ending
                        </div>
                        <div className='formInput'>
                            <input 
                                placeholder="Enter end year"
                                value={this.state.end_year}
                                onChange={ e => this.setState({ end_year: e.target.value })}
                            />    
                        </div>                    
                    </div>
                    <div className="form_inputBox input-field">
                        <div className='formLabel_title'>
                            Grade
                        </div>
                        <div className='formInput'>
                            <input 
                                placeholder="Enter Grade"
                                value={this.state.grade}
                                onChange={ e => this.setState({ grade: e.target.value })}
                            />    
                        </div>                    
                    </div>
                    <div className='btnOption'>
                        <button className="btn" onClick={this.submitEducation.bind(this)}>Submit And Go </button>
                        <button className="btn" onClick={this.addEducation.bind(this)}>Add New Education</button>
                    </div>
                </form>
            </div>
            </div>

        )
    }
}

export default graphql(query)
(graphql(mutation)(AddEducation)
);