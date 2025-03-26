// src/pages/TrainingCalendar2025.js

import React from 'react';
import Navbar from '../components/Navbar';
import '../pages/TrainingCalendar2025.css'; 

const TrainingCalendar2025 = () => {
  return (
    <>
      <Navbar />
      <div className="training-calendar-container">
        <h1>Training Calendar 2025</h1>
        <p>Download our company profile and training calendar for 2025.</p>
        <div className="download-links">
          <a href="/Expro%20Training%20Company%20Profile.pdf" target="_blank" rel="noopener noreferrer" className="download-link">
            View Company Profile
          </a>
          <a href="/Expro%20Training%20Calendar%202025.pdf" target="_blank" rel="noopener noreferrer" className="download-link">
            View Training Calendar 2025
          </a>
          <a href="/Time_Table.pdf" target="_blank" rel="noopener noreferrer" className="download-link">
            View Time Table
          </a>
        </div>
      </div>
    </>
  );
};

export default TrainingCalendar2025;
