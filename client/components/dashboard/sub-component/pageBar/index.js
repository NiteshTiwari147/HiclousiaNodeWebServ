import React, { Component } from "react";

import './styles.css';

class PageBar extends Component {
    render() {
        return(
            <div className="pageBarContainer shadow">
                <a className='pageBarBtn'>
                    Education
                </a>
                <a className='pageBarBtn'>
                    Experience
                </a>
                <a className='pageBarBtn highlight'>
                    Projects
                </a>
                <a className='pageBarBtn'>
                    Jobs
                </a>
                <a className='pageBarBtn'>
                    Guidance
                </a>
            </div>
        )
    }
}

export default PageBar;