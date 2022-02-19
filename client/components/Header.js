import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/currentUser';
import logOut from '../mutation/logOutMutation';

class Header extends Component {

    onLogOutClick() {
        this.props.mutate({
            refetchQueries: [{ query }]
        })
    }
    renderButtons() {
        const { loading, user} = this.props.data
        if(loading) {
            return (
                <div>
                    Loading....
                </div>
            )
        }
        if(user) {
            return (
                <li>
                    <a onClick={this.onLogOutClick.bind(this)}>
                        Log Out
                    </a>
                </li>
            )
        }

        return (
            <div>
                <li>
                    <Link to='/signup'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/login'>Log In</Link>
                </li>
            </div>

        )
    }

    render() {
        return (
            <nav>
                <Link to='/' className='brand-logo left padding-left '>
                    Hiclousia
                </Link>
                <div className='nav-wrapper'>
                    <ul className='right'>
                        {this.renderButtons()}
                    </ul>  
                </div>
            </nav>
        )
    }
}

export default graphql(logOut)(
    graphql(query)(Header)
);