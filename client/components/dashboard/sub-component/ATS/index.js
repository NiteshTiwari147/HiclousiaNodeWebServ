import React, { Component } from 'react';

import './styles.css';

class ATS extends Component {
    render() {
        const { projectLen, skills, userScore} = this.props;
        return (
            <div className='ATScontainer shadow'>
                <div className="miniBox">
                    <div>
                        <h6 className="headingATS">Communication</h6> 
                    </div>
                    <h6 className="ATS_score" style={{marginRight: '0.5rem'}}>
                        86%
                    </h6>
                </div>
                <div className="miniBox">
                    <div>
                        <h6 className="headingATS">Total Projects</h6> 
                    </div>
                    <h6 className="ATS_score" style={{marginRight: '1rem'}}>
                        {projectLen}
                    </h6>
                </div>
                <div className="miniBox">
                    <div>
                        <h6 className="headingATS">Skills</h6> 
                    </div>
                    <h6 className="ATS_score" style={{marginRight: '1rem'}}>
                        {skills}
                    </h6>
                </div>
                <div className="miniBox">
                    <div>
                        <h6 className="headingATS">Score</h6> 
                    </div>
                    <h6 className="ATS_score" style={{marginRight: '1rem'}}>
                        {userScore}
                    </h6>
                </div>
            </div>
        )
    }
}

export default ATS;