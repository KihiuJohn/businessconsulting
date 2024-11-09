import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Import the logo image
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <ul className="navbar-list">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/about-us" className="navbar-link">About Us</Link></li>
          <li><Link to="/training" className="navbar-link">Training</Link></li>
          <li><Link to="/consulting" className="navbar-link">Consulting</Link></li>
          <li><Link to="/training-calendar" className="navbar-link">Training Calendar</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
