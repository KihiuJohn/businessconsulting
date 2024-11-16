// src/components/Footer/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Column 1: Kenya Office */}
          <div className="footer-column kenya-office">
            <h3>Kenya Office</h3>
            <p>Carman Ridgeways, Kiambu Road</p>
            <p>Suite 05, Ground Flr</p>
            <p>Kenya</p>
            <p>+254720090959</p>
            <p>+254724402062</p>
          </div>

          {/* Column 2: Rwanda Office */}
          <div className="footer-column rwanda-office">
            <h3>Rwanda Office</h3>
            <p>+250724128627</p>
          </div>

          {/* Column 3: USA Office, Email & Website */}
          <div className="footer-column usa-office">
            <h3>USA Office</h3>
            <p>7741 Radcliffe Drive 53719</p>
            <p>Madison, Wisconsin</p>
            <p>+1-6089571534</p>
            <p><strong>Email:</strong> <a href="mailto:info@expromsconsulting.com">info@expromsconsulting.com</a></p>
            <p><strong>Website:</strong> <a href="https://www.expromsconsulting.com" target="_blank" rel="noopener noreferrer">www.expromsconsulting.com</a></p>
          </div>
        </div>
        {/* Map Below the Grid */}
        <div className="footer-map">
          <iframe
            title="Expro Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.518314234123!2d36.81563261511671!3d-1.283253099072219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1766b7b8de3b%3A0x9c17b9cfca1a1aaf!2sCarman%20Ridgeways%20Kiambu%20Road!5e0!3m2!1sen!2ske!4v1699289236451!5m2!1sen!2ske"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
