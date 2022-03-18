import React, { Component } from 'react';

import TopprItem from './topprItem';
import './styles.css';

class TopprList extends Component {
    render() {
        const data = [
            {
                name: 'Praful Jain'
            },
            {
                name: 'Shaleen singh'
            },
            {
                name: 'John Bee'
            },
            {
                name: 'Mahesh raj'
            }
        ]
        return (
            <div className='topprListContainer shadow'>
                <div className='topprListTitle'>
                    <h5>
                        Topper List 
                    </h5>
                </div>
                {data.map( (value,index) => <TopprItem index={index+1} name={value.name} /> )}            
            </div>
        )
    }
}

export default TopprList;