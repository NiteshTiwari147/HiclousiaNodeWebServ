import React, { Component } from 'react';

import TopprItem from './topprItem';
import './styles.css';

class TopprList extends Component {
    render() {
        const data = [
            {
                name: 'Praful Jain',
                url: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
            },
            {
                name: 'Shaleen singh',
                url: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png'
            },
            {
                name: 'John Bee',
                url : 'https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png'
            },
            {
                name: 'Mahesh raj',
                url: 'https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png'
            }
        ]
        return (
            <div className='topprListContainer shadow'>
                <div className='topprListTitle'>
                    <h5>
                        Topper List 
                    </h5>
                </div>
                {data.map( (value,index) => <TopprItem index={index+1} name={value.name} imgUrl={value.url} /> )}            
            </div>
        )
    }
}

export default TopprList;