import React, { useState, useEffect } from 'react';
import './Home.css';
import conferenceImage1 from '../assets/images/conferenceimage1.jpg';
import conferenceImage2 from '../assets/images/conferenceimage2.jpg';
import conferenceImage3 from '../assets/images/conferenceimage3.jpg';
import conferenceImage4 from '../assets/images/conferenceimage4.jpg';
import Navbar from '../components/Navbar';
import {
  FaLaptop,
  FaChartPie,
  FaCalendarAlt,
  FaCode,
  FaChartLine,
  FaLightbulb,
  FaUsers,
  FaHandshake,
  FaMoneyBillWave,
} from 'react-icons/fa';

const Home = () => {
  const images = [
    conferenceImage1,
    conferenceImage2,
    conferenceImage3,
    conferenceImage4,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentIndex) =>
        (currentIndex + 1) % images.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

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
            className={`top-panel-image ${
              index === currentImageIndex ? 'active' : ''
            }`}
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
              <FaLaptop size={50} />
              <h3>Training & Consultancy</h3>
            </div>
            <div className="grid-item">
              <FaChartPie size={50} />
              <h3>Data Analytics & Visualisation</h3>
            </div>
            <div className="grid-item">
              <FaCalendarAlt size={50} />
              <h3>Training Calendar</h3>
            </div>
          </div>
        </div>
      </div>

      {/* About Expro MS Section */}
      <div className="full-width-section about-expro-background">
        <div className="section-container">
          <h2>About Expro MS Training & Consulting Ltd</h2>
          <p>
            Founded in 2018, Expro MS Training & Consultant Ltd has positioned
            itself in the market as a fast-growing and transformative consultant
            services provider. Our theory of change is anchored on solid theoretical
            training in Monitoring and Evaluation, Business Management, Strategic
            Management, and Customer Services, among others, ensuring high-impact
            interventions.
          </p>
          <p>
            We are registered by the Registrar of Companies in Kenya, affirming
            the quality of our programs. We partner with international consulting
            organizations on high-impact training and mentorship programs.
          </p>
        </div>
      </div>

      {/* Vision, Mission, and Core Values */}
      <div className="full-width-section vision-mission-background">
        <div className="section-container">
          <h2>Our Vision</h2>
          <p>
            To be an oasis for the social-economic transformation in Kenya and beyond through enterprise development services.
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
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container footer-content">
          <div className="footer-left">
            <h3>CONTACT DETAILS</h3>
            <h4>Kenya Office</h4>
            <p>St. Georges House, 4th Floor, Parliament Road</p>
            <p>P.O. Box 48564 - 00200 Nairobi, Kenya</p>
            <p>Tel: 020 2395380 | Cell: +254 720090959</p>
            <p>Email: jimkelly@expromsconsulting.com</p>
            <h4>Rwanda Office</h4>
            <p>KN 14 Avenue Plot 43 Kigali, Rwanda</p>
            <p>Tel: +250724128627</p>
          </div>
          <div className="footer-right">
            <h3>Consulting Services</h3>
            <p>Advanced Analytics</p>
            <p>Change Management</p>
            <p>Corporate Finance</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
