import React, { Component } from 'react';

import './styles.css';
class CandidateInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const url = [
            {
                link: 'https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_960_720.png'
            },
            {
                link: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80"
            }
        ]
        const {firstName, lastName, currentEmploymnt} = this.props
        return (
            <div className='basicInfoContainer shadow'>
                <img className="profilePic"src={url[0].link} alt="Avatar"/>
                <h5 className="profileName">{firstName} {lastName}</h5>
                <text className="profilePosition">{currentEmploymnt.designation} at {currentEmploymnt.company}</text>
                <button className="viewPortfolioBtn">View Portfolio</button>
            </div>
        )
    }
}

export default CandidateInfo;