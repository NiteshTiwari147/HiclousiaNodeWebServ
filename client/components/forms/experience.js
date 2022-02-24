import React, { Component} from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import './styles.css';
import mutation from '../../mutation/forms/addExperience';
import query from '../../queries/currentUser';

class AddExperience extends Component {
    constructor(props) {
        super(props);
        this.state ={error: [],organization: '', position: '', start_year: '', end_year: '', current: true}
    }

    addExperience() {
        const {organization, position, start_year, end_year, current} = this.state
        this.props.mutate({
            variables:  {organisation: organization, position, start_year, end_year, current},
            refetchQueries: [{ query }]
        }).then( res => window.location.reload())
        .catch( res => {
            const errors = res.graphQLErrors.map(error => error.message)
            this.setState({errors});
        });
    }

    submitExperience() {
        const {organization, position, start_year, end_year, current} = this.state
        this.props.mutate({
            variables:  {organisation: organization, position, start_year, end_year, current},
            refetchQueries: [{ query }]
        }).then( res => hashHistory.push('/fillproject'))
        .catch( res => {
            const errors = res.graphQLErrors.map(error => error.message)
            this.setState({errors});
        });
    }
    render() {
        return (
            <div className='form_container'>
                <div className='form_title'>
                    <h3>Add Experience data</h3>
                </div>
                <div className="row">
                    <form className="col s16 formContent">
                        <div className="form_inputBox input-field">
                            <div className='formLabel_title'>
                                Organization
                            </div>
                            <div className='formInput'>
                                <input 
                                    placeholder="Enter organization name"
                                    value={this.state.organization}
                                    onChange={ e => this.setState({ organization: e.target.value })}
                                />    
                            </div>                    
                        </div>
                        <div className="form_inputBox input-field">
                            <div className='formLabel_title'>
                                Designation
                            </div>
                            <div className='formInput'>
                                <input 
                                    placeholder="Enter your designation"
                                    value={this.state.position}
                                    onChange={ e => this.setState({ position: e.target.value })}
                                />    
                            </div>                    
                        </div>
                        <div className="form_inputBox input-field">
                            <div className='formLabel_title'>
                                Start Year
                            </div>
                            <div className='formInput'>
                                <input 
                                    placeholder="Enter your designation"
                                    value={this.state.start_year}
                                    onChange={ e => this.setState({ start_year: e.target.value })}
                                />    
                            </div>                    
                        </div>
                        <div className="form_inputBox input-field">
                            <div className='formLabel_title'>
                                Currently Working
                            </div>
                            <div className='formInput'>
                                <button className="small btn" style={{'margin-right': '2rem'}} onClick={() => this.setState({current: true})}>Yes</button>
                                <button className="small btn" onClick={() => this.setState({current: false})}>No</button>
                            </div>                    
                        </div>
                        {!this.state.current && 
                            <div className="form_inputBox input-field">
                            <div className='formLabel_title'>
                                End Year
                            </div>
                            <div className='formInput'>
                                <input 
                                    placeholder="Enter your designation"
                                    value={this.state.end_year}
                                    onChange={ e => this.setState({ end_year: e.target.value })}
                                />    
                            </div>                    
                        </div>
                        }
                        <div className='btnOption'>
                            <button className="btn" onClick={this.submitExperience.bind(this)}>Submit And Go </button>
                            <button className="btn" onClick={this.addExperience.bind(this)}>Add New Experience</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default graphql(query)
(graphql(mutation)(AddExperience)
);