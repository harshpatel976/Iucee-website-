import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"


const Header = () => (
  <div className="core-members-header">
    <img src="/image/logo.png" alt="Logo" />
    <div className="core-members-header-links">
    <Link to="/">Home</Link>
      {/* <Link to="/mission-vision">Mission & Vision</Link> */}
      <Link to="/events">Events</Link>
      <Link to="/core-members">Core Members</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/achievement">Achievements</Link>
    </div>
  </div>
);

export default Header;