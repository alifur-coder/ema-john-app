import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header container'>
            <Link to='/shop'>
                <img src={logo} alt="Logo" />
            </Link>

            <div className='header_nav'>
                <NavLink to='/shop' >Shops</NavLink>
                <NavLink to='/orders' >Order Review</NavLink>
                <NavLink to='/inventory'>Manage Inventory</NavLink>
                <NavLink to='/about' >About</NavLink>
            </div>
        </nav>
    );
};

export default Header;