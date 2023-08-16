import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header container'>
            <a href="/">
                <img src={logo} alt="Logo" />
            </a>
            <div className='header_nav'>
                <a href="#"> Order test</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory </a>
                <a href="#">Login</a>
            </div>
        </nav>
    );
};

export default Header;