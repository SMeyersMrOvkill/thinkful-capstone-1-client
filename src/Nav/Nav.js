import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

class Nav extends React.Component
{
    render() {
        return (
            <header>
                <h1>Library</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Nav;