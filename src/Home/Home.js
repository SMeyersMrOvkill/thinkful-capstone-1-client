import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component
{
    render() {
        return (
            <div className="Home">
                <h4>Welcome to Library!</h4>
                <p>This app functions as a personal library. 
                Please <Link to="/login">Log in</Link> or <Link to="/register">Register</Link></p>
            </div>
        )
    }
}

export default Home;