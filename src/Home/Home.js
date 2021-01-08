import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends React.Component
{
    render() {
        return (
            <div className="Home">
                <div className="Home__panel">
                    <h4>Welcome to Library!</h4>
                    <p>This app functions as a personal library. 
                    Please <Link to="/login">Log in</Link> or <Link to="/register">Register</Link></p>
                    <p>If you just want to poke around and see how the app works, here's an account you can use to do that:</p>
                    <p>Username: SMeyers</p>
                    <p>Password: password</p>
                </div>
            </div>
        )
    }
}

export default Home;