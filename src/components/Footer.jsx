
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
  <div className="footer-left">
    <p>Title: MTEverse Weather Reported</p>
    <p>Created By: Moshiur Tanvin</p>
    <p>Contact: Email: tanvinevan9@gmail.com | Mobile: +8801886611862</p>
    <div className="social-links">
      <a href="https://www.facebook.com/MoshiurTanvinEvan">Facebook</a>
      <a href="https://github.com/mtevan">GitHub</a>
    </div>
  </div>
  <div className="footer-right">
    <p>&copy; 2024 MTEvan_Unknown. All rights reserved.</p>
    <a href="https://mtevan.bio.link">Visit My Website</a>
  </div>
</footer>
    );
};

export default Footer;
