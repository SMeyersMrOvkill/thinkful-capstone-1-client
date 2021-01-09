import React from 'react';
import { Link } from 'react-router-dom';

import TokenService from '../services/token-service';

import './Nav.css';

class Nav extends React.Component
{

    /**
     * Clear the local storage and redirect to the login page
     */
    logout = () => {
        window.localStorage.clear();
        window.location = '/login';
    }

    render() {
        return (
            <header>
                <h1>Library</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {TokenService.hasAuthToken() ? (
                            <>
                                <li><Link to="/books">Books</Link></li>
                                <li><button onClick={this.logout}>Log out</button></li>
                            </>
                        ) : ''}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Nav;