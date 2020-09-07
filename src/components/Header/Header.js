import React from 'react';
import logo from '../../logo.png';
import './Header.css';


const Header = () => {
    return (
        <div class="header">
           <img src={logo} alt="logo"/>
           <h1>Social Buddy!</h1>
        </div>
    );
};

export default Header;
