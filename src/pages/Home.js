// src/pages/Home.js

import React, { useState, useEffect } from 'react';
import './Home.css';
import conferenceImage1 from '../assets/images/conferenceimage1.jpg';
import conferenceImage2 from '../assets/images/conferenceimage2.jpg';
import conferenceImage3 from '../assets/images/conferenceimage3.jpg';
import conferenceImage4 from '../assets/images/conferenceimage4.jpg';
import Navbar from '../components/Navbar';
// Remove Footer import
// import Footer from '../components/Footer'; // Import Footer Component
import { FaLaptop, FaChartPie, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
  const images = [
    conferenceImage1,
    conferenceImage2,
    conferenceImage3,
    conferenceImage4
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (currentIndex) => (currentIndex + 1) % images.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
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

      {/* About Expro Training & Consulting Ltd Section */}
      <div className="full-width-section about-us-background">
        <div className="section-container">
          <h2>About Expro Training & Consulting Ltd</h2>
          <p>
            The Expro Training & Consulting in East Africa is a renowned Training & Consulting company dedicated to providing leadership development and training programs for individuals and organizations in East Africa and the broader African region. Expro Training & Consulting focuses on equipping participants with the knowledge, skills, and mindset required to excel in their roles and drive positive change in their respective fields.
          </p>
          <h3>Programs and Offerings:</h3>
          <ol>
            <li style={{ marginBottom: '10px' }}><strong>Capacity Building Programs:</strong> Expro Training & Consulting offers comprehensive capacity building courses to individuals and organisations, helping them develop skills, knowledge, and resources to enhance performance and effectiveness. These courses cover a wide range of topics, including Project & Program Management, Communication & Soft Skills, Technical & Digital Skills, Financial & Business Development, Community & Social Development and technical skills.</li>
            <li style={{ marginBottom: '10px' }}><strong>Organisation Customized Training and Consultancy:</strong> Expro Training & Consulting offers customized training and consultancy programs tailored to the specific needs and challenges faced by organizations. These programs address training needs, organizational culture, team building and other aspects crucial for achieving business objectives.</li>
            <li style={{ marginBottom: '10px' }}><strong>Executive Training and Consultancy Programs:</strong> Designed for experienced leaders and executives, these programs focus on advanced training leadership strategies, organizational transformation, change management, and driving innovation. Participants gain insights into effective leadership training in complex and dynamic environments.</li>
            <li style={{ marginBottom: '10px' }}><strong>Leadership Development Programs:</strong> Expro Training & Consulting offers comprehensive leadership development programs tailored to various levels of leadership, from emerging leaders to senior executives. These programs cover a wide range of topics, including leadership theories, strategic thinking, decision making, communication, and team management.</li>
            <li style={{ marginBottom: '10px' }}><strong>Global Partnerships and Collaborations:</strong> Expro Training & Consulting collaborates with renowned global training and consultancy institutes and organizations to bring global best practices in training and consultancy development to Africa. These partnerships facilitate knowledge sharing, networking opportunities, and exposure to diverse leadership perspectives.</li>
            <li style={{ marginBottom: '10px' }}><strong>Women and Youth in Leadership Programs:</strong> Recognizing the importance of gender diversity in leadership, Expro Training & Consulting provides specialized programs aimed at empowering women and youth leaders. These programs focus on overcoming gender and age-related barriers, developing leadership competencies, and fostering inclusive leadership practices.</li>
            <li style={{ marginBottom: '10px' }}><strong>New Trainings Programs Trends Research:</strong> Expro Training & Consulting conducts research on changing trainings trends and practices, aiming to contribute to the advancement of training knowledge and its application in the African context.</li>
            <li style={{ marginBottom: '10px' }}><strong>Coaching and Mentoring:</strong> Expro Training & Consulting offers coaching and mentoring services to provide personalized guidance and support to individuals seeking to enhance their leadership capabilities. These services are provided by experienced coaches who help participants identify their strengths, overcome challenges, and achieve their leadership goals.</li>
          </ol>
          <a href="/Expro%20Training%20Company%20Profile.pdf" target="_blank" className="company-profile-link" style={{ fontWeight: 'bold', fontSize: '1.2em' }}>View Company Profile</a>
        </div>
      </div>

      {/* Vision, Mission, and Core Values */}
      <div className="full-width-section vision-mission-background">
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
      </div>

      {/* Remove the Footer component */}
      {/* <Footer /> {/* Use Footer Component */}
    </div>
  );
};

export default Home;
