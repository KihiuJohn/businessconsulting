import React from 'react';
import './Home.css';
import backgroundImage from '../assets/images/nairobi-conference.jpg';
import kihiu from '../assets/images/kihiu.jpeg';
import patience from '../assets/images/dr-patience.jpeg';
import mugambi from '../assets/images/mugambi.jpg';
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
  return (
    <div className="home-container">
      {/* Top Panel */}
      <div
        className="top-panel"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '40vh',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="top-panel-content">
          <h1>Welcome to Expro MS Training & Consulting Ltd</h1>
          <p>Your trusted partner in corporate training and consulting.</p>
        </div>
      </div>

      {/* Three Column Grid */}
      <div className="grid-section section-container">
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

      {/* About Us Section */}
      <div className="about-us-section section-container">
        <h2>About Us</h2>
        <p>
          <strong>We Deliver Enduring Results</strong>
          <br />
          Expro MS Training & Consulting Ltd is a transformational training and
          consulting company that delivers corporate training, consulting,
          coaching, and workshop services.
        </p>
        <p>
          Our management facilitators and consultants have many years of
          experience transforming people & performance in leading organisations
          in Africa. We support organisations in becoming thriving places to
          work, connect and succeed.
        </p>
        <p>
          <strong>Contact: +254-724402062</strong>
        </p>
      </div>

      {/* Our Services Section */}
      <div className="services-section section-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <FaCode size={50} />
            <h3>Information Technology</h3>
          </div>
          <div className="service-item">
            <FaLightbulb size={50} />
            <h3>Digital Strategy</h3>
          </div>
          <div className="service-item">
            <FaChartLine size={50} />
            <h3>Advanced Analytics</h3>
          </div>
          <div className="service-item">
            <FaUsers size={50} />
            <h3>Change Management</h3>
          </div>
          <div className="service-item">
            <FaHandshake size={50} />
            <h3>Mergers and Acquisitions</h3>
          </div>
          <div className="service-item">
            <FaMoneyBillWave size={50} />
            <h3>Corporate Finance</h3>
          </div>
        </div>
      </div>

      {/* Our Consultants Section */}
      <div className="consultants-section section-container">
        <h2>Our Consultants</h2>
        <p>
          <strong>Meet Our Leadership Team</strong>
          <br />
          We work with change-oriented executives to help them make better
          decisions, convert those decisions to actions.
        </p>
        <div className="consultants-grid">
          <div className="consultant-item">
            <img src={kihiu} alt="John K. Chere" />
            <h3>John K. Chere</h3>
            <p>Operations Manager</p>
            <p>
              Fintech consultant specializing in digital transformation,
              payments, data analytics & visualization. Helping institutions
              innovate and thrive in the digital age.
            </p>
          </div>
          <div className="consultant-item">
            <img src={patience} alt="Dr. Patience W. Karimi" />
            <h3>Dr. Patience W. Karimi</h3>
            <p>Co-founder of Expro</p>
            <p>
              Diversity of experience helping organizations harness the power
              of technology. I geek out on data-driven decisions and making
              systems work for people.
            </p>
          </div>
          <div className="consultant-item">
            <img src={mugambi} alt="Jim Kelly" />
            <h3>Jim Kelly</h3>
            <p>Founder</p>
            <p>
              Economist & financial consultant providing expert advice on
              data-driven investment decisions, strategies, risk management,
              macro & micro economic forecasting.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer section-container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>BizNest</h3>
            <p>
              We help global leaders with their organization's most critical
              issues and opportunities. Together, we create enduring change and
              results.
            </p>
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
            <p>Customer Strategy & Marketing</p>
            <p>Information Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
