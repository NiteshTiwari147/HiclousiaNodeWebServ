import React,{ Component } from 'react';

import './styles.css';

import JobsBarGraph from '../visualization/jobBarGraph';
import JobStat from '../visualization/JobStats';
import JobCard from '../dashboard/sub-component/jobCard';

import { companyData } from '../../../data/companyData';

class MarketAnalysis extends Component {
    render() {
        return (
            <div className='marketAnalysisLayout'>
                <h5 className="jobAnalysisHeading">Jobs Analysis</h5>
                <div className='analysisRow shadow'>
                    <JobsBarGraph />
                    <JobStat />
                </div>
                <h5 className="recommendationHeading">Jobs Recommendation</h5>
                <div className='recommendation'>
                    {companyData.map( obj => <JobCard logo={obj.url} companyName={obj.name} slryRnge={obj.slryRnge} position={obj.position} skills={obj.skills} />)}
                </div>              
            </div>
        )
    }
}

export default MarketAnalysis;