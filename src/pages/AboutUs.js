// src/pages/AboutUs.js

import React from 'react';
import './AboutUs.css';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Navigation Bar */}
      <Navbar />

      {/* About Us Content */}
      <section className="about-us-content">
        <div className="section-container">
          <h2>Who We Are</h2>
          <p>
            Founded in 2018, Expro MS Training & Consultant Ltd has positioned itself in the market as a fast-growing and transformative consultant services provider. Our theory of change is anchored on a hybrid of solid theoretical training in Monitoring and Evaluation, Business Management, Strategic Management, Customer Services, Enterprise Risk Management, Root Cause Analysis, Project Management, among others, ensuring high-impact interventions. We are registered with the Registrar of Companies in Kenya, an affirmation of the quality of our programs.
          </p>
          <p>
            The organization is also a partner with other international consulting organizations including NITA, Global Governance and Leadership Center, Africa Consultum, among others, on a high-impact training and mentorship programme known as "Start and Increase Efficiency." Our clientele includes Governments, Small and Medium Enterprises, Parastatals, Financial Institutions, NGOs, and Consultancy firms.
          </p>
        </div>
      </section>

      {/* Vision, Mission, and Core Values */}
      <section className="vision-mission-values">
        <div className="section-container">
          <h2>Our Vision</h2>
          <p>
            To be an oasis for the socio-economic transformation in Kenya and beyond through enterprise development services.
          </p>

          <h2>Our Mission</h2>
          <p>
            We provide client-centered trainings and results-oriented solutions to promote enterprise growth and development.
          </p>

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
      </section>
    </div>
  );
};

export default AboutUs;
