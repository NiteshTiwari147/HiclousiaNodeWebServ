import React, { Component} from 'react';
import { graphql } from 'react-apollo';

import './styles.css';

import CandidateInfo from './sub-component/candidateInfo';
import SkillPieChart from '../visualization/skillPieChart';
import SkillHorizontalBar from '../visualization/skillHorizontalBar';
import Score from '../visualization/score';
import ATS from './sub-component/ATS';
import PageBar from './sub-component/pageBar';
import JobCard from './sub-component/jobCard';
import Project from './sub-component/project';
import TopprList from './sub-component/topprList';

import query from '../../queries/getCandidateDetails';

class Dashboard extends Component {
    render(){
        if(this.props.data.loading) {
            return null
        }
        const { ProjectList, firstName, lastName, SkillSet, Scorecard, ExperienceList }  = this.props.data.getCandidateBasicInfo;
        var designation, company;
        ExperienceList.map(obj => {
            if(obj.current === true) {
                designation = obj.position;
                company= obj.organisation;
                return;
            }
        });
        var currentEmploymnt = {
            designation,
            company
        }
        return(
            <div className='dashboardLayout'>
                <div className='dashboardStack'>
                    <CandidateInfo firstName={firstName} lastName={lastName} currentEmploymnt={currentEmploymnt} />
                    <SkillPieChart  data={SkillSet.skillSet} />
                    <SkillHorizontalBar data={SkillSet.skillSet}/>
                </div>
                <div className='dashboardStack'>
                    <ATS projectLen={ProjectList.length} skills={SkillSet.skillSet.length} />
                    <PageBar />
                    {false ? <JobCard />: null}
                    {ProjectList ? ProjectList.map((value,index) => <Project key={index} data={value} /> ): null}
                </div>
                <div className='dashboardStack'>
                    <Score data={Scorecard}/>
                    <TopprList />
                </div>
            </div>
        )
    }
}

export default graphql(query)(Dashboard);