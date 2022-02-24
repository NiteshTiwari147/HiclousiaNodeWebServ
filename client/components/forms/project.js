import React, { Component} from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import './styles.css';
import mutation from '../../mutation/forms/addProject';
import query from '../../queries/currentUser';

class AddProject extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: [], tittle: '', problemStatement: '', solution: '', coreSkill: '',
        coreSkills: [],softSkill: '', softSkills: [], duration: ''}
    }

    addProject() {
        const {tittle, problemStatement, solution, softSkills, coreSkills, duration} = this.state;
        this.props.mutate({
            variables: {tittle, problemStatement, solution, softSkills, coreSkills, duration},
            refetchQueries: [{ query }]
        }).then( res => window.location.reload())
        .catch( res => {
            const errors = res.graphQLErrors.map(error => error.message)
            this.setState({errors});
        });
    }

    submitProject() {
        const {tittle, problemStatement, solution, softSkills, coreSkills, duration} = this.state;
        this.props.mutate({
            variables: {tittle, problemStatement, solution, softSkills, coreSkills, duration},
            refetchQueries: [{ query }]
        }).then( res => hashHistory.push('/addExperience'))
        .catch( res => {
            const errors = res.graphQLErrors.map(error => error.message)
            this.setState({errors});
        });
    }

    addCoreSkill() {
        const skill = this.state.coreSkill;
        const coreSkills = this.state.coreSkills;
        coreSkills.push(skill);
        this.setState({coreSkill: ''})
        this.setState({coreSkills: coreSkills});

    }

    addSoftSkill() {
        const skill = this.state.softSkill;
        const softSkills = this.state.softSkills;
        softSkills.push(skill);
        this.setState({softSkill: ''});
        this.setState({softSkills: softSkills});
    }
    render() {
        return (
            <div className='form_container'>
                <div className='form_title'>
                    <h3>Add Project data</h3>
                </div>
                <div className="row">
                    <form className="col s16 formContent">
                        <div className="form_inputBox input-field">
                            <div className='formLabel_title'>
                                Title
                            </div>
                            <div className='formInput'>
                                <input 
                                    placeholder="Enter project title"
                                    value={this.state.tittle}
                                    onChange={ e => this.setState({ tittle: e.target.value })}
                                />    
                            </div>                    
                        </div>
                        <div className="form_inputBox input-field">
                            <div className='formLabel_title'>
                                Problem Statement
                            </div>
                            <div className='formInput'>
                                <input
                                    placeholder="Enter problem statement of the project"
                                    value={this.state.problemStatement}
                                    onChange={ e => this.setState({ problemStatement: e.target.value })}
                                />
                            </div>                         
                        </div>
                        <div className="form_inputBox input-field">
                            <div>
                                Solution
                            </div>
                            <div>
                                <input
                                    placeholder="Enter solution"
                                    value={this.state.solution}
                                    onChange={ e => this.setState({ solution: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="form_inputBox input-field">
                            <div>
                                Core Skills
                            </div>
                            <div>
                                <input
                                    placeholder="Add core Skill "
                                    value={this.state.coreSkill}
                                    onChange={ e => this.setState({ coreSkill: e.target.value })}
                                />
                                <div className='skill_options'>
                                    <button className="small btn" onClick={this.addCoreSkill.bind(this)}>Add</button>
                                    <div className='addedSkill'>
                                        {this.state.coreSkills && this.state.coreSkills.map( skill => <p style={{'margin-left': '1rem'}}>{skill}</p>)}
                                    </div>        
                                </div>                               
                            </div>
                        </div>
                        <div className="form_inputBox input-field">
                            <div>
                                Soft Skills
                            </div>
                            <div>
                                <input
                                    placeholder="Add soft Skill "
                                    value={this.state.softSkill}
                                    onChange={ e => this.setState({ softSkill: e.target.value })}
                                />
                                <div className='skill_options'>
                                    <button className="small btn" onClick={this.addSoftSkill.bind(this)}>Add</button>
                                    <div className='addedSkill'>
                                        {this.state.softSkills && this.state.softSkills.map( skill => <p style={{'margin-left': '1rem'}}>{skill}</p>)}
                                    </div>        
                                </div>                               
                            </div>
                        </div>
                        <div className="form_inputBox input-field">
                            <div>
                                Duration
                            </div>
                            <div>
                                <input
                                    placeholder="Enter duration of the project"
                                    value={this.state.duration}
                                    onChange={ e => this.setState({ duration: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className='btnOption'>
                            <button className="btn" onClick={this.submitProject.bind(this)}>Submit And Go </button>
                            <button className="btn" onClick={this.addProject.bind(this)}>Add New Project</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default graphql(query)
(graphql(mutation)(AddProject)
);