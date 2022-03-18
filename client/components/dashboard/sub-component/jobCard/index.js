import React, { Component } from "react";

import './styles.css';
import StatBox from "../statsBox";

import { companyLogoData } from '../../../../../data/companyData';

class JobCard extends Component {
    render() {
        const { logo, companyName, slryRnge, position, skills } = this.props;
        return (
            <div className="jobCardContainer">
                <img className="companyImage"  src={logo} /> 
                <div className="introduction">
                    <h5 style={{marginBottom: '0.1rem'}}>{companyName}</h5>
                    <h7 style={{marginTop: '0.1rem', color: 'blue'}}>Read Job Description</h7>
                </div>
                <div className="stateBoxContainer">
                    <StatBox title='Position' value={position} />
                    <StatBox title='Skill Req' value={skills} />
                    <StatBox title='Salary' value={slryRnge} />
                    <StatBox title='Compatibility' value='89%' />
                </div>
            </div>
        )
    }
}

export default JobCard;