import React, { Component } from "react";

import './styles.css';

class TopprItem extends Component {
    render() {
        const {index, name} = this.props;
        return (
            <div className='topprListItem'>
                <div className='topprListRank'>
                    #{index}
                </div>     
                <img className='topprListImage' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80" alt="Avatar"/>
                <div>
                    <h6 className='topprListName'>{name}</h6>
                </div>
            </div>
        )
    }
}

export default TopprItem;