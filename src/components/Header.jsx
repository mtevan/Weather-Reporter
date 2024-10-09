// src/components/Header.jsx
import React from 'react';
import '../styles/Header.css'; // Import CSS for the header
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="app-header">
            <a href="#"><img className="logo" src="public/ScreenShots/logo.png"/></a>
            <h1>MTEverse Weather Reporter</h1>
        </header>
    );
}

export default Header;
