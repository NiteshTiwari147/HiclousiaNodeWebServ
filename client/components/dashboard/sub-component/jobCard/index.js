import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import CompanyEmployeesGraph from '../../../visualization/companyEmployeeGraphs';

import './styles.css';
import StatBox from "../statsBox";


const data = [
    {
        match: 'JS',
        unMatch: 'Java'
    },
    {
        match: 'NodeJS',
        unMatch: 'Python'
    },
    {
        match: 'React',
        unMatch: null
    },
    {
        match: '2 yrs Exp',
        unMatch: null
    },
    {
        match: 'GraphQL',
        unMatch: null
    },
    {
        match: 'CSS',
        unMatch: null
    },
    {
        match: 'Rest-API',
        unMatch: null
    }
];

class JobCard extends Component {
    render() {
        const { logo, companyName, slryRnge, position, skills } = this.props;
        return (
            <div className="jobCardContainer shadow" data-tip data-for='comp'>
                <div className="jobCardHeadingContainer">
                    <div>
                        <img className="companyImage"  src={logo} /> 
                    </div>
                    <div className="introduction">
                        <h5 style={{marginBottom: '0.2rem'}}>{companyName}</h5>
                        <h7 style={{marginTop: '0.3rem', color: 'blue'}}>Read Job Description</h7>
                        <button style={{marginTop: '0.5rem', color: 'blue'}} className="applyBtn">
                            Apply 
                        </button>
                    </div>
                </div>
                <div className="stateBoxContainer">
                    <StatBox title='Position' value={position} />
                    <StatBox title='Skill Req' value={skills} />
                    <StatBox title='Salary' value={slryRnge} />
                    <StatBox title='Compatibility' value='89%'/>
                </div>
                <ReactTooltip id='comp' effect="solid" className="toolTip" >
                    <div>
                        <div className="modalTitle">
                            <h4>Detailed comparison with the job</h4>
                        </div>
                        <div className="jobComparison">
                            <table>
                                <tr className='tableRow'>
                                    <th className='matchedHeader'>
                                        Matched Skill
                                    </th>
                                    <th className='unMatchedHeader'>
                                        Un-Matched Skill
                                    </th>
                                </tr>
                                {data.map( obj => {
                                return <tr>
                                        <td>
                                            {obj.match && <div className='matchedSkill'>{obj.match}</div>}
                                        </td>
                                        <td>
                                            {obj.unMatch && <div className='unMatchedSkill'>{obj.unMatch}</div>}
                                        </td>
                                    </tr>
                                })}
                            </table>
                            <CompanyEmployeesGraph companyName={'Facebook'} />
                        </div>
                    </div>
                </ReactTooltip>
            </div>
        )
    }
}

export default JobCard;