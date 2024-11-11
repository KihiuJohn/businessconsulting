// src/pages/Home.js

import React, { useState, useEffect } from 'react';
import './Home.css';
import conferenceImage1 from '../assets/images/conferenceimage1.jpg';
import conferenceImage2 from '../assets/images/conferenceimage2.jpg';
import conferenceImage3 from '../assets/images/conferenceimage3.jpg';
import conferenceImage4 from '../assets/images/conferenceimage4.jpg';
import Navbar from '../components/Navbar';
import { FaLaptop, FaChartPie, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
  const images = [conferenceImage1, conferenceImage2, conferenceImage3, conferenceImage4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <Navbar />

      {/* Top Panel */}
      <div className="top-panel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Conference"
            className={`top-panel-image ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
        <div className="top-panel-content">
          <h1>Welcome to Expro MS Training & Consulting Ltd</h1>
          <p>Your trusted partner in corporate training and consulting.</p>
        </div>
      </div>

      {/* Three Column Grid Section */}
      <div className="full-width-section services-background">
        <div className="section-container">
          <div className="grid-section">
            <div className="grid-item">
              <FaLaptop size={50} color="#ffffff" />
              <h3>Training & Consultancy</h3>
              <p>Empowering your workforce with top-notch training solutions.</p>
            </div>
            <div className="grid-item">
              <FaChartPie size={50} color="#ffffff" />
              <h3>Data Analytics & Visualization</h3>
              <p>Transforming data into actionable insights.</p>
            </div>
            <div className="grid-item">
              <FaCalendarAlt size={50} color="#ffffff" />
              <h3>Training Calendar</h3>
              <p>Stay updated with our latest training sessions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Expro MS Training & Consulting Ltd Section */}
      <div className="full-width-section about-us-background">
        <div className="section-container">
          <h2>About Expro MS Training & Consulting Ltd</h2>
          <p>
            Founded in 2018, Expro MS Training & Consultant Ltd has positioned itself in the market as a fast-growing and transformative consultant services provider. Our theory of change is anchored on a hybrid of solid theoretical training in Monitoring and Evaluation, Business Management, Strategic Management, Customer Services, Enterprise Risk Management, Root Cause Analysis, Project Management, among others, ensuring high-impact interventions. We are registered with the Registrar of Companies in Kenya, an affirmation of the quality of our programs. The organization is also a partner with other international consulting organizations including Global Leadership Institute, Global Governance and Leadership Center, Africa Consultum, among others, on a high-impact training and mentorship programme known as "Start and Increase Efficiency." Our clientele includes Governments, Small and Medium Enterprises, Parastatals, Financial Institutions, NGOs, and Consultancy firms.
          </p>
        </div>
      </div>

      {/* Vision, Mission, and Core Values */}
      <div className="full-width-section vision-mission-background">
        <div className="section-container">
          <h2>Our Vision</h2>
          <p>To be an oasis for the socio-economic transformation in Kenya and beyond through enterprise development services.</p>
          <h2>Our Mission</h2>
          <p>We provide client-centered trainings and results-oriented solutions to promote enterprise growth and development.</p>
          <h2>Our Core Values</h2>
          <ul>
            <li>Professionalism</li>
            <li>Transparency and Trust</li>
            <li>Research and Innovation</li>
            <li>Equity</li>
            <li>Sustainability</li>
            <li>Empowerment</li>
            <li>Collaboration and Partnership</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-left">
              <h3>BizNest</h3>
              <p>We help global leaders with their organization's most critical issues and opportunities.</p>
            </div>
            <div className="footer-middle">
              <h3>Head Office</h3>
              <p>Anniversary Towers, University Way</p>
              <p>Nairobi, Kenya</p>
              <p>jimkelly@expromsconsulting.com</p>
              <p>+254724402062</p>
            </div>
            <div className="footer-right">
              <h3>Consulting Services</h3>
              <p>Advanced Analytics</p>
              <p>Change Management</p>
              <p>Corporate Finance</p>
            </div>
          </div>
          <div className="footer-map">
            <iframe
              title="Expro Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.518314234123!2d36.81563261511671!3d-1.283253099072219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10fda5556c0f%3A0x4627f7bc0d7364c7!2sAnniversary%20Towers!5e0!3m2!1sen!2ske!4v1699289236451!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
