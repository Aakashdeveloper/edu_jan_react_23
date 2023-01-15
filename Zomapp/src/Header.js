import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <header>
            <div id="icon">
                <h1>Xomato</h1>
            </div>
            <div id="loginset">
                <Link to="/" className="btn btn-success">Home</Link>
                <button>Login</button>
                <button>Register</button>
            </div>

        </header>
    )
}

export default Footer