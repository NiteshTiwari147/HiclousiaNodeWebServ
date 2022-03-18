import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/currentUser';
import logOut from '../mutation/logOutMutation';
import reactImage from '../images/react-js.svg';
import './styles.css';

class Header extends Component {

    onLogOutClick() {
        this.props.mutate({
            refetchQueries: [{ query }]
        })
    }
    renderButtons() {
        const { loading, user} = this.props.data
        const pgrp = window.location.hash;
        if(loading) {
            return (
                <div>
                    Loading....
                </div>
            )
        }
        const isDashboard = pgrp.includes('dashboard');
        const isMrkt = pgrp.includes('market');
        if(user) {
            return (
                <div>
                    {isDashboard && <li>
                            <Link to='/marketAnalysis' className='headerBtn'>Market Analysis</Link>
                        </li>}
                    {isMrkt && <li>
                            <Link to='/dashboard' className='headerBtn'>Dashboard</Link>
                        </li>}
                    <li>
                        <Link to='/fillProject' className='headerBtn'>Account</Link>
                    </li>
                    <li>
                        <Link to='/settings' className='headerBtn'>Settings</Link>
                    </li>
                    <li>
                        <a onClick={this.onLogOutClick.bind(this)} className='headerBtn'>
                            Log Out
                        </a>
                    </li>
                </div>         
            )
        }

        return (
            <div>
                <li>
                    <Link to='/signup' className='headerBtn'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/login' className='headerBtn'>Log In</Link>
                </li>
            </div>

        )
    }

    render() {
        return (
            <nav className='navigationBar'>
                 <div className="navigationBarContent">
                    <div >
                        <Link to='/' className="brand-logo companyLogo">
                            HICLOUSIA
                        </Link>
                    </div>
                    {/* <img src={reactImage} alt="" />; */}
                    <div className='nav-wrapper'>
                        <ul className='right'>
                            {this.renderButtons()}
                        </ul>  
                    </div>
                 </div>
            </nav>
        )
    }
}

export default graphql(logOut)(
    graphql(query)(Header)
);