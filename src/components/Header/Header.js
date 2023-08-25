import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header container'>
            <Link to='/home'>
                <img src={logo} alt="Logo" />
            </Link>

            <div className='header_nav'>
                <Link to='/shop'>Shops</Link>
                <Link to='/orders'>Order Review</Link>
                <Link to='/inventory'>Manage Inventory</Link>
                <Link to='/about'>About</Link>
            </div>
        </nav>
    );
};

export default Header;