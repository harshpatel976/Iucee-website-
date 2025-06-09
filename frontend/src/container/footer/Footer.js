import React from 'react';
import './foote.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-links">
        <a href="#">Home</a>
        <span>/</span>
        <a href="#">Mission & Vision</a>
        <span>/</span>
        <a href="#">Aim</a>
        <span>/</span>
        <a href="#">Core Members</a>
        <span>/</span>
        <a href="#">Projects</a>
        <span>/</span>
        <a href="#">About Us</a>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <p>© 2025 Anvaya. All Rights Reserved</p>
          <p>National Institute Of Engineering Mysore </p>
        </div>
        <div className="footer-right">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <span className="social-icon">in </span> 
           
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
           <span className='social-icon'> Instagram</span>
           
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
