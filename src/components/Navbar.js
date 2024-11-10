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
  const [sidebarTrainingDropdownOpen, setSidebarTrainingDropdownOpen] = useState(false);
  const [sidebarCalendarDropdownOpen, setSidebarCalendarDropdownOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState('rgba(255, 255, 255, 0)');

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    // Close sidebar dropdowns when sidebar is closed
    if (sidebarOpen) {
      setSidebarTrainingDropdownOpen(false);
      setSidebarCalendarDropdownOpen(false);
    }
  };

  // Toggle Training dropdown in sidebar
  const toggleSidebarTrainingDropdown = () => {
    setSidebarTrainingDropdownOpen(!sidebarTrainingDropdownOpen);
  };

  // Toggle Training Calendar dropdown in sidebar
  const toggleSidebarCalendarDropdown = () => {
    setSidebarCalendarDropdownOpen(!sidebarCalendarDropdownOpen);
  };

  // Handle navbar background on scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const opacity = Math.min(scrollY / 200, 1); // Adjust 200 for scroll range
    setNavbarBackground(`rgba(255, 255, 255, ${opacity})`);
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
        setSidebarTrainingDropdownOpen(false);
        setSidebarCalendarDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

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
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="navbar-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/consulting" className="navbar-link">
              Consulting
            </Link>
          </li>

          {/* Training Dropdown */}
          <li className="navbar-link dropdown">
            <div className="dropdown-toggle">
              Training <FaChevronDown />
            </div>
            <ul className="dropdown-menu">
              <li>
                <Link to="/training/certified-budget-specialist" className="dropdown-link">
                  Certified Budget Specialist (CBS)
                </Link>
              </li>
              <li>
                <Link to="/training/certified-monitoring-evaluation-professional" className="dropdown-link">
                  Certified Monitoring and Evaluation Professional (CMEP)
                </Link>
              </li>
              <li>
                <Link to="/training/advanced-excel" className="dropdown-link">
                  Advanced Excel and Data Manipulation
                </Link>
              </li>
              <li>
                <Link to="/training/disaster-risk-management" className="dropdown-link">
                  Certified Disaster Risk Management
                </Link>
              </li>
              <li>
                <Link to="/training/project-management-development" className="dropdown-link">
                  Project Management Development
                </Link>
              </li>
              <li>
                <Link to="/training/public-investment-management" className="dropdown-link">
                  Public Investment Management (PIM)
                </Link>
              </li>
              <li>
                <Link to="/training/public-asset-management" className="dropdown-link">
                  Public Asset Management
                </Link>
              </li>
              <li>
                <Link to="/training/public-private-partnership" className="dropdown-link">
                  Public-Private Partnership (PPP) Certification Program
                </Link>
              </li>
              <li>
                <Link to="/training/public-procurement-course" className="dropdown-link">
                  Public Procurement Course Outline
                </Link>
              </li>
              <li>
                <Link to="/training/property-law-conveyancing" className="dropdown-link">
                  Property Law and Conveyancing Certification
                </Link>
              </li>
              <li>
                <Link to="/training/work-planning-strategy-execution" className="dropdown-link">
                  The Work Planning and Strategy Execution
                </Link>
              </li>
              <li>
                <Link to="/training/customer-service-excellence" className="dropdown-link">
                  Customer Service Excellence
                </Link>
              </li>
              <li>
                <Link to="/training/consumer-complaints-handling" className="dropdown-link">
                  Consumer Complaints Handling and Resolution
                </Link>
              </li>
              <li>
                <Link to="/training/conflict-resolution-skills" className="dropdown-link">
                  Conflict Resolution Skills
                </Link>
              </li>
              <li>
                <Link to="/training/change-management" className="dropdown-link">
                  Change Management
                </Link>
              </li>
              <li>
                <Link to="/training/enterprise-risk-management" className="dropdown-link">
                  Enterprise Risk Management
                </Link>
              </li>
              <li>
                <Link to="/training/sustainable-management-environmental-rehabilitation" className="dropdown-link">
                  Sustainable Management and Environmental Rehabilitation
                </Link>
              </li>
              <li>
                <Link to="/training/public-complaints-handling" className="dropdown-link">
                  Public Complaints Handling and Resolution
                </Link>
              </li>
              <li>
                <Link to="/training/procurement-contracts-management" className="dropdown-link">
                  Procurement & Contracts Management
                </Link>
              </li>
              <li>
                <Link to="/training/occupational-health-safety" className="dropdown-link">
                  Occupational Health & Safety
                </Link>
              </li>
              <li>
                <Link to="/training/operations-efficiency-management" className="dropdown-link">
                  Operations Efficiency & Effective Management
                </Link>
              </li>
              <li>
                <Link to="/training/corporate-governance" className="dropdown-link">
                  Corporate Governance Training Course
                </Link>
              </li>
              <li>
                <Link to="/training/strategic-leadership-management" className="dropdown-link">
                  Strategic Leadership & Management Training Program
                </Link>
              </li>
              <li>
                <Link to="/training/leadership-development-program" className="dropdown-link">
                  Leadership Development Training Program
                </Link>
              </li>
              <li>
                <Link to="/training/leadership-governance-health-systems" className="dropdown-link">
                  Leadership and Governance in Health Systems
                </Link>
              </li>
              <li>
                <Link to="/training/health-care-financing" className="dropdown-link">
                  Health Care Financing: Principles, Policies, and Practices
                </Link>
              </li>
              <li>
                <Link to="/training/ethics-integrity-compliance" className="dropdown-link">
                  Ethics, Integrity, Compliance and Corruption Prevention
                </Link>
              </li>
            </ul>
          </li>

          {/* Training Calendar Dropdown */}
          <li className="navbar-link dropdown">
            <div className="dropdown-toggle">
              Training Calendar <FaChevronDown />
            </div>
            <ul className="dropdown-menu">
              <li>
                <Link to="/calendar/upcoming-events" className="dropdown-link">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link to="/calendar/past-events" className="dropdown-link">
                  Past Events
                </Link>
              </li>
              <li>
                <Link to="/calendar/online-trainings" className="dropdown-link">
                  Online Trainings
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Sidebar (Visible on small screens when sidebarOpen is true) */}
        <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
          <ul className="sidebar-list">
            <li>
              <Link to="/" className="sidebar-link" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="sidebar-link" onClick={toggleSidebar}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/consulting" className="sidebar-link" onClick={toggleSidebar}>
                Consulting
              </Link>
            </li>

            {/* Training Dropdown in Sidebar */}
            <li className="sidebar-link dropdown">
              <div className="dropdown-toggle" onClick={toggleSidebarTrainingDropdown}>
                Training <FaChevronDown className={sidebarTrainingDropdownOpen ? 'rotate' : ''} />
              </div>
              <ul className={`dropdown-menu ${sidebarTrainingDropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link
                    to="/training/certified-budget-specialist"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Certified Budget Specialist (CBS)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/certified-monitoring-evaluation-professional"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Certified Monitoring and Evaluation Professional (CMEP)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/advanced-excel"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Advanced Excel and Data Manipulation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/disaster-risk-management"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Certified Disaster Risk Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/project-management-development"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Project Management Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/public-investment-management"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Public Investment Management (PIM)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/public-asset-management"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Public Asset Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/public-private-partnership"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Public-Private Partnership (PPP) Certification Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/public-procurement-course"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Public Procurement Course Outline
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/property-law-conveyancing"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Property Law and Conveyancing Certification
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/work-planning-strategy-execution"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    The Work Planning and Strategy Execution
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/customer-service-excellence"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Customer Service Excellence
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/consumer-complaints-handling"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Consumer Complaints Handling and Resolution
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/conflict-resolution-skills"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Conflict Resolution Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/change-management"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Change Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/enterprise-risk-management"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Enterprise Risk Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/sustainable-management-environmental-rehabilitation"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Sustainable Management and Environmental Rehabilitation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/public-complaints-handling"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Public Complaints Handling and Resolution
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/procurement-contracts-management"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Procurement & Contracts Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/occupational-health-safety"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Occupational Health & Safety
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/operations-efficiency-management"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Operations Efficiency & Effective Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/corporate-governance"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Corporate Governance Training Course
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/strategic-leadership-management"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Strategic Leadership & Management Training Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/leadership-development-program"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Leadership Development Training Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/leadership-governance-health-systems"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Leadership and Governance in Health Systems
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/health-care-financing"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Health Care Financing: Principles, Policies, and Practices
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/ethics-integrity-compliance"
                    className="dropdown-link"
                    onClick={toggleSidebar}
                  >
                    Ethics, Integrity, Compliance and Corruption Prevention
                  </Link>
                </li>
              </ul>
            </li>

            {/* Training Calendar Dropdown in Sidebar */}
            <li className="sidebar-link dropdown">
              <div className="dropdown-toggle" onClick={toggleSidebarCalendarDropdown}>
                Training Calendar <FaChevronDown className={sidebarCalendarDropdownOpen ? 'rotate' : ''} />
              </div>
              <ul className={`dropdown-menu ${sidebarCalendarDropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link to="/calendar/upcoming-events" className="dropdown-link" onClick={toggleSidebar}>
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link to="/calendar/past-events" className="dropdown-link" onClick={toggleSidebar}>
                    Past Events
                  </Link>
                </li>
                <li>
                  <Link to="/calendar/online-trainings" className="dropdown-link" onClick={toggleSidebar}>
                    Online Trainings
                  </Link>
                </li>
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
