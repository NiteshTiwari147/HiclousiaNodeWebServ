import React, { Component } from 'react';

import './styles.css';

class Project extends Component {
        render(){
            const { title, duration } = this.props.data;
            return(
                <div className='projectContainer shadow'>
                    <img className='projectImage' src="https://media.istockphoto.com/photos/technology-abstract-picture-id1148091793" />
                    <div className='projectTitle'>
                        <h5>{title}</h5>
                    </div>
                    <div className='projectStatContainer'>
                        <div className='projectStat'>
                            <div style={{ marginLeft: '1rem'}}>
                                <div className="projectStatTitle">
                                    Duration
                                </div>
                                <div>
                                    <h8 style={{color: '#0370ff', margin: '0.1rem'}}>{duration} months</h8>
                                </div>
                             </div>
                        </div>
                        <div className='projectStat'>
                            <div style={{ marginLeft: '1rem'}}>
                                <div className="projectStatTitle">
                                    Company
                                </div>
                                <div>
                                    <h8 style={{color: '#0370ff', margin: '0.1rem'}}>N.A.</h8>
                                </div>
                             </div>
                        </div>
                        <div className='projectStat'>
                            <div style={{ marginLeft: '1rem'}}>
                                <div className="projectStatTitle">
                                    Play Video
                                </div>
                                <div>
                                    <h8 style={{color: '#0370ff', margin: '0.1rem'}}>2:05 mins</h8>
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