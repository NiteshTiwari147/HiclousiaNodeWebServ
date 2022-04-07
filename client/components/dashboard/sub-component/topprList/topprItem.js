import React, { Component } from "react";

import './styles.css';

class TopprItem extends Component {
    render() {
        const {index, name, imgUrl} = this.props;
        return (
            <div className='topprListItem'>
                <div className='topprListRank'>
                    #{index}
                </div>     
                <img className='topprListImage' src={imgUrl} alt="Avatar"/>
                <div>
                    <h6 className='topprListName'>{name}</h6>
                </div>
            </div>
        )
    }
}

export default TopprItem;