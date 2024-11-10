import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu and close
import logo from '../assets/images/logo.png'; // Ensure the path is correct
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Company Logo" />
            </Link>
          </div>
          <ul className="navbar-list">
            <li><Link to="/" className="navbar-link">Home</Link></li>
            <li><Link to="/about-us" className="navbar-link">About Us</Link></li>
            <li><Link to="/training" className="navbar-link">Training</Link></li>
            <li><Link to="/consulting" className="navbar-link">Consulting</Link></li>
            <li><Link to="/training-calendar" className="navbar-link">Training Calendar</Link></li>
          </ul>
          <button className="menu-icon" onClick={toggleSidebar} aria-label="Toggle menu">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Sidebar for Small Devices */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-list">
          <li><Link to="/" className="sidebar-link" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/about-us" className="sidebar-link" onClick={toggleSidebar}>About Us</Link></li>
          <li><Link to="/training" className="sidebar-link" onClick={toggleSidebar}>Training</Link></li>
          <li><Link to="/consulting" className="sidebar-link" onClick={toggleSidebar}>Consulting</Link></li>
          <li><Link to="/training-calendar" className="sidebar-link" onClick={toggleSidebar}>Training Calendar</Link></li>
        </ul>
      </div>

      {/* Overlay when Sidebar is open */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;
