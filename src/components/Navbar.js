// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import './Navbar.css';
import trainingData from '../data/trainingData'; // Import Training Data
import consultingData from '../data/consultingData'; // Import Consulting Data

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const [consultingDropdownOpen, setConsultingDropdownOpen] = useState(false);
  const [calendarDropdownOpen, setCalendarDropdownOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(
    'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'
  );

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    // Close all dropdowns when sidebar is toggled off
    if (sidebarOpen) {
      setTrainingDropdownOpen(false);
      setConsultingDropdownOpen(false);
      setCalendarDropdownOpen(false);
    }
  };

  // Toggle Training dropdown
  const toggleTrainingDropdown = () => {
    setTrainingDropdownOpen(!trainingDropdownOpen);
    // Close other dropdowns when one is toggled
    if (!trainingDropdownOpen) {
      setConsultingDropdownOpen(false);
      setCalendarDropdownOpen(false);
    }
  };

  // Toggle Consulting dropdown
  const toggleConsultingDropdown = () => {
    setConsultingDropdownOpen(!consultingDropdownOpen);
    // Close other dropdowns when one is toggled
    if (!consultingDropdownOpen) {
      setTrainingDropdownOpen(false);
      setCalendarDropdownOpen(false);
    }
  };

  // Toggle Training Calendar dropdown
  const toggleCalendarDropdown = () => {
    setCalendarDropdownOpen(!calendarDropdownOpen);
    // Close other dropdowns when one is toggled
    if (!calendarDropdownOpen) {
      setTrainingDropdownOpen(false);
      setConsultingDropdownOpen(false);
    }
  };

  // Helper function to close sidebar and dropdowns
  const closeSidebar = () => {
    setSidebarOpen(false);
    setTrainingDropdownOpen(false);
    setConsultingDropdownOpen(false);
    setCalendarDropdownOpen(false);
  };

  // Handle navbar background on scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const opacity = Math.min(scrollY / 110, 1); // Fade after 110px
    setNavbarBackground(
      `linear-gradient(to bottom, rgba(255, 255, 255, ${0.1 + 0.9 * opacity}), rgba(255, 255, 255, 0))`
    );
  };

  // Add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close sidebar when resizing to large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && sidebarOpen) {
        setSidebarOpen(false);
        setTrainingDropdownOpen(false);
        setConsultingDropdownOpen(false);
        setCalendarDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  // Menu items data
  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about-us' },
  ];

  // Consulting dropdown items
  const consultingDropdownItems = consultingData; // Reuse consultingData

  // Training dropdown items
  const trainingDropdownItems = trainingData; // Reuse trainingData

  // Training Calendar dropdown items
  const calendarDropdownItems = [
    { title: 'Upcoming Events', path: '/training-calendar/upcoming-events' },
    { title: 'Past Events', path: '/training-calendar/past-events' },
    { title: 'Online Trainings', path: '/training-calendar/online-trainings' },
  ];

  return (
    <>
      <nav className="navbar" style={{ background: navbarBackground }}>
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/" onClick={closeSidebar}>
              <img src={logo} alt="Company Logo" />
            </Link>
          </div>

          {/* Contact Items (Visible on large screens) */}
          <div className="navbar-contact">
            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <span>Call Us Any Time</span>
              <p>Tel: +250724128627 | Cell: +254720090959</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <span>Email Us</span>
              <p>info@expromsconsulting.com</p>
              <button className="inquiry-button">Inquiries</button>
            </div>
          </div>

          {/* Hamburger Menu Icon (Visible on small screens) */}
          <div className="navbar-hamburger" onClick={toggleSidebar}>
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Navbar List (Visible on large screens) */}
        <ul className="navbar-list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
              >
                {item.title}
              </NavLink>
            </li>
          ))}

          {/* Training Dropdown */}
          <li className="navbar-link dropdown">
            <div className="dropdown-toggle" onClick={toggleTrainingDropdown}>
              Training <FaChevronDown className={trainingDropdownOpen ? 'rotate' : ''} />
            </div>
            <ul className={`dropdown-menu ${trainingDropdownOpen ? 'show' : ''}`}>
              {trainingDropdownItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'dropdown-link active' : 'dropdown-link')}
                    onClick={() => setTrainingDropdownOpen(false)} // Close dropdown on click
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          {/* Consulting Dropdown */}
          <li className="navbar-link dropdown">
            <div className="dropdown-toggle" onClick={toggleConsultingDropdown}>
              Consulting <FaChevronDown className={consultingDropdownOpen ? 'rotate' : ''} />
            </div>
            <ul className={`dropdown-menu ${consultingDropdownOpen ? 'show' : ''}`}>
              {consultingDropdownItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'dropdown-link active' : 'dropdown-link')}
                    onClick={() => setConsultingDropdownOpen(false)} // Close dropdown on click
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          {/* Training Calendar Dropdown */}
          <li className="navbar-link dropdown">
            <div className="dropdown-toggle" onClick={toggleCalendarDropdown}>
              Training Calendar <FaChevronDown className={calendarDropdownOpen ? 'rotate' : ''} />
            </div>
            <ul className={`dropdown-menu ${calendarDropdownOpen ? 'show' : ''}`}>
              {calendarDropdownItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'dropdown-link active' : 'dropdown-link')}
                    onClick={() => setCalendarDropdownOpen(false)} // Close dropdown on click
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Sidebar (Visible on small screens when sidebarOpen is true) */}
        <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
          <ul className="sidebar-list">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}
                  onClick={toggleSidebar}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}

            {/* Training Link in Sidebar (Simple Link to /training) */}
            <li>
              <NavLink
                to="/training"
                className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}
                onClick={toggleSidebar}
              >
                Training
              </NavLink>
            </li>

            {/* Consulting Link in Sidebar (Simple Link to /consulting) */}
            <li>
              <NavLink
                to="/consulting"
                className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}
                onClick={toggleSidebar}
              >
                Consulting
              </NavLink>
            </li>

            {/* Training Calendar Dropdown in Sidebar */}
            <li className="sidebar-link dropdown">
              <div className="dropdown-toggle" onClick={toggleCalendarDropdown}>
                Training Calendar <FaChevronDown className={calendarDropdownOpen ? 'rotate' : ''} />
              </div>
              <ul className={`dropdown-menu ${calendarDropdownOpen ? 'show' : ''}`}>
                {calendarDropdownItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => (isActive ? 'dropdown-link active' : 'dropdown-link')}
                      onClick={() => {
                        toggleSidebar();
                        setCalendarDropdownOpen(false);
                      }}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        {/* Overlay to close sidebar when clicking outside */}
        {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      </nav>
    </>
  );
};

export default Navbar;
