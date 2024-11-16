// src/pages/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Ensure this CSS file exists

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <Link to="/" className="home-link">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
