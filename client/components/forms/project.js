import React, { Component} from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

class AddProject extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: [], tittle: '', problemStatement: '', solution: '', coreSkill: '', coreSkills: [], softSkills: [], duration: ''}
    }

    onSubmit() {
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h3>Add Project data</h3>
                <div className="row">
                    <form className="col s16" onSubmit={this.onSubmit.bind(this)}>
                        <div className="input-field">
                            <input 
                                placeholder="Tittle"
                                value={this.state.tittle}
                                onChange={ e => this.setState({ tittle: e.target.value })}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                placeholder="Problem Statement"
                                value={this.state.problemStatement}
                                onChange={ e => this.setState({ problemStatement: e.target.value })}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                placeholder="Solution"
                                value={this.state.solution}
                                onChange={ e => this.setState({ solution: e.target.value })}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                placeholder="Add core Skill "
                                value={this.state.coreSkill}
                            />
                        </div>

                        <button className="btn">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddProject;