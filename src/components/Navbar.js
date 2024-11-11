// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const [calendarDropdownOpen, setCalendarDropdownOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(
    'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'
  );

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    // Close dropdowns when sidebar is toggled
    if (sidebarOpen) {
      setTrainingDropdownOpen(false);
      setCalendarDropdownOpen(false);
    }
  };

  // Toggle Training dropdown
  const toggleTrainingDropdown = () => {
    setTrainingDropdownOpen(!trainingDropdownOpen);
  };

  // Toggle Training Calendar dropdown
  const toggleCalendarDropdown = () => {
    setCalendarDropdownOpen(!calendarDropdownOpen);
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
    { title: 'Consulting', path: '/consulting' },
  ];

  // Training dropdown items
  const trainingDropdownItems = [
    { title: 'Certified Budget Specialist (CBS)', path: '/training/certified-budget-specialist' },
    { title: 'Certified Monitoring and Evaluation Professional (CMEP)', path: '/training/certified-monitoring-evaluation-professional' },
    { title: 'Advanced Excel and Data Manipulation', path: '/training/advanced-excel' },
    { title: 'Certified Disaster Risk Management', path: '/training/disaster-risk-management' },
    { title: 'Project Management Development', path: '/training/project-management-development' },
    { title: 'Public Investment Management (PIM)', path: '/training/public-investment-management' },
    { title: 'Public Asset Management', path: '/training/public-asset-management' },
    { title: 'Public-Private Partnership (PPP) Certification Program', path: '/training/public-private-partnership' },
    { title: 'Public Procurement Course Outline', path: '/training/public-procurement-course' },
    { title: 'Property Law and Conveyancing Certification', path: '/training/property-law-conveyancing' },
    { title: 'The Work Planning and Strategy Execution', path: '/training/work-planning-strategy-execution' },
    { title: 'Customer Service Excellence', path: '/training/customer-service-excellence' },
    { title: 'Consumer Complaints Handling and Resolution', path: '/training/consumer-complaints-handling' },
    { title: 'Conflict Resolution Skills', path: '/training/conflict-resolution-skills' },
    { title: 'Change Management', path: '/training/change-management' },
    { title: 'Enterprise Risk Management', path: '/training/enterprise-risk-management' },
    { title: 'Sustainable Management and Environmental Rehabilitation', path: '/training/sustainable-management-environmental-rehabilitation' },
    { title: 'Public Complaints Handling and Resolution', path: '/training/public-complaints-handling' },
    { title: 'Procurement & Contracts Management', path: '/training/procurement-contracts-management' },
    { title: 'Occupational Health & Safety', path: '/training/occupational-health-safety' },
    { title: 'Operations Efficiency & Effective Management', path: '/training/operations-efficiency-management' },
    { title: 'Corporate Governance Training Course', path: '/training/corporate-governance' },
    { title: 'Strategic Leadership & Management Training Program', path: '/training/strategic-leadership-management' },
    { title: 'Leadership Development Training Program', path: '/training/leadership-development-program' },
    { title: 'Leadership and Governance in Health Systems', path: '/training/leadership-governance-health-systems' },
    { title: 'Health Care Financing: Principles, Policies, and Practices', path: '/training/health-care-financing' },
    { title: 'Ethics, Integrity, Compliance and Corruption Prevention', path: '/training/ethics-integrity-compliance' },
  ];

  // Calendar dropdown items
  const calendarDropdownItems = [
    { title: 'Upcoming Events', path: '/calendar/upcoming-events' },
    { title: 'Past Events', path: '/calendar/past-events' },
    { title: 'Online Trainings', path: '/calendar/online-trainings' },
  ];

  return (
    <>
      <nav className="navbar" style={{ background: navbarBackground }}>
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/">
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
              <p>expromsconsulting@gmail.com</p>
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
              <Link to={item.path} className="navbar-link">
                {item.title}
              </Link>
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
                  <Link to={item.path} className="dropdown-link">
                    {item.title}
                  </Link>
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
                  <Link to={item.path} className="dropdown-link">
                    {item.title}
                  </Link>
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
                <Link to={item.path} className="sidebar-link" onClick={toggleSidebar}>
                  {item.title}
                </Link>
              </li>
            ))}

            {/* Sidebar Training Dropdown */}
            <li className="sidebar-link dropdown">
              <div className="dropdown-toggle" onClick={toggleTrainingDropdown}>
                Training <FaChevronDown className={trainingDropdownOpen ? 'rotate' : ''} />
              </div>
              <ul className={`dropdown-menu ${trainingDropdownOpen ? 'show' : ''}`}>
                {trainingDropdownItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} className="dropdown-link" onClick={toggleSidebar}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Sidebar Training Calendar Dropdown */}
            <li className="sidebar-link dropdown">
              <div className="dropdown-toggle" onClick={toggleCalendarDropdown}>
                Training Calendar <FaChevronDown className={calendarDropdownOpen ? 'rotate' : ''} />
              </div>
              <ul className={`dropdown-menu ${calendarDropdownOpen ? 'show' : ''}`}>
                {calendarDropdownItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} className="dropdown-link" onClick={toggleSidebar}>
                      {item.title}
                    </Link>
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
