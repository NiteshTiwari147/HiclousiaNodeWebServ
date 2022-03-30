import React, { Component } from "react";
import { Link } from 'react-router';

import './styles.css';

class PageBar extends Component {
    render() {
        return(
            <div className="pageBarContainer shadow">
                <Link to='addExperience' className='pageBarBtn'>
                    Add Education
                </Link>
                <Link to='fillEducation' className='pageBarBtn'>
                   Add Experience
                </Link>
                <Link to='fillProject' className='pageBarBtn highlight'>
                    Add Projects
                </Link>
            </div>
        )
    }
}

export default PageBar;