import React, { Component } from 'react';

import { projectImages } from '../../../../../data/projectImages';
import './styles.css';

class Project extends Component {

        renderSkills(skills) {
            if(skills.length > 0) {
                return skills.map((obj,index) => {
                    if(index < 3) {
                        return <div className='skillBox shadow'>{obj}</div>
                    }
                    if( index == 3) {
                        return <div className='skillBox shadow'>+ {skills.length - 3} More</div>
                    }
                })
            }
        }
        render(){
            const { title, duration, coreSkills, softSkills } = this.props.data;
            const idx = this.props.idx % 10;
            return(
                <div className='projectContainer shadow'>
                    <img className='projectImage' src={projectImages[idx].url} />
                    <div className='projectInfoContainer'>
                        <div className='projectTitle'>{title}</div>
                        { coreSkills && <div style={{'fontSize': 'medium'}}>
                            Core Skills: {coreSkills.length}
                        </div>}
                        <div className='skillsContainer' style={{'marginBottom': '1rem'}}>
                            {this.renderSkills(coreSkills)}
                        </div>
                        { softSkills && <div style={{'fontSize': 'medium'}}>
                            Soft Skills: {softSkills.length}
                        </div>}
                        <div className='skillsContainer'>
                            {this.renderSkills(softSkills)}
                        </div>
                    </div>
                    <div className='projectStatContainer'>
                        <div className='projectStat'>
                            <div style={{ marginLeft: '1rem'}}>
                                <div className="projectStatTitle">
                                    Duration
                                </div>
                                <div>
                                    <h8 style={{color: '#1072EB', margin: '0.1rem'}}>{duration} months</h8>
                                </div>
                             </div>
                        </div>
                        <div className='projectStat'>
                            <div style={{ marginLeft: '1rem'}}>
                                <div className="projectStatTitle">
                                    Company
                                </div>
                                <div>
                                    <h8 style={{color: '#1072EB', margin: '0.1rem'}}>N.A.</h8>
                                </div>
                             </div>
                        </div>
                        <div className='projectStat'>
                            <div style={{ marginLeft: '1rem'}}>
                                <div className="projectStatTitle">
                                    Play Video
                                </div>
                                <div>
                                    <h8 style={{color: '#1072EB', margin: '0.1rem'}}>2:05 mins</h8>
                                </div>
                             </div>
                        </div>
                        <button className="projectDetailsBtn">
                            View Details 
                        </button>
                    </div>
                </div>
            )
        }
}

export default Project;