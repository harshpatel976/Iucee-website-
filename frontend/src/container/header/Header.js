import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Scroll to top and close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Dimmed backdrop when menu is open */}
      {isOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}

      <div className="core-members-header">
        <img src="/image/logo.png" alt="Logo" className="logo" />

        <div className="nav-wrapper">
          <div className="core-members-header-links desktop-nav">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/events" onClick={closeMenu}>Events</Link>
            <Link to="/core-members" onClick={closeMenu}>Team</Link>
            <Link to="/projects" onClick={closeMenu}>Projects</Link>
            <Link to="/achievement" onClick={closeMenu}>Achievements</Link>
            
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <span className={`bar ${isOpen ? 'rotate1' : ''}`}></span>
            <span className={`bar ${isOpen ? 'hide' : ''}`}></span>
            <span className={`bar ${isOpen ? 'rotate2' : ''}`}></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`core-members-header-links mobile-nav ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/events" onClick={closeMenu}>Events</Link>
        <Link to="/core-members" onClick={closeMenu}>Team</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/achievement" onClick={closeMenu}>Achievements</Link>
        
      </div>
    </>
  );
};

export default Header;
