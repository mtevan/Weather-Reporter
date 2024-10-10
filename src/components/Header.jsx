// src/components/Header.jsx
import React from 'react';
import '../styles/Header.css'; // Import CSS for the header
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="app-header">
            <a href="https://mteverse.vercel.app/"><img className="logo" src="/ScreenShots/logo.png alt="MTEVERSE"/></a>
            <h1>MTEverse Weather Reporter</h1>
        </header>
    );
}

export default Header;
