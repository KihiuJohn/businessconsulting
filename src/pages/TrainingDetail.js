// src/pages/TrainingDetail.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import Plus and Minus icons
import './TrainingDetail.css'; // Ensure this CSS file exists

const TrainingDetail = ({ training, trainingData }) => {
  // State to track expanded training items (by path)
  const [expandedItems, setExpandedItems] = useState([]);

  // Function to toggle expansion of a training item
  const toggleItem = (path) => {
    if (expandedItems.includes(path)) {
      // If already expanded, remove it from the array
      setExpandedItems(expandedItems.filter((item) => item !== path));
    } else {
      // If not expanded, add it to the array
      setExpandedItems([...expandedItems, path]);
    }
  };

  // Determine if we're displaying all training items or a specific one
  const isAllTrainings = !training;

  return (
    <>
      <div className="training-detail-container">
        {/* Two-Column Grid for Large Screens */}
        {!isAllTrainings && (
          <div className="training-grid">
            {/* Sidebar - 20% */}
            <aside className="training-sidebar" aria-label="Training Navigation">
              <ul>
                {trainingData.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => (isActive ? 'training-link active' : 'training-link')}
                      aria-current={item.path === window.location.pathname ? 'page' : undefined}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Main Content - 80% */}
            <main className="training-main-content">
              <h1>{training.title}</h1>
              <p>{training.description}</p>
            </main>
          </div>
        )}

        {/* Title for Small Devices */}
        {isAllTrainings && (
          <h2 className="training-title">Our Training Courses</h2>
        )}

        {/* Accordion for Small Screens */}
        {isAllTrainings && (
          <div className="training-accordion">
            {trainingData.map((item, index) => (
              <div className="accordion-item" key={index}>
                <div
                  className={`accordion-header ${expandedItems.includes(item.path) ? 'active' : ''}`}
                  onClick={() => toggleItem(item.path)}
                  role="button"
                  aria-expanded={expandedItems.includes(item.path)}
                  aria-controls={`accordion-content-${index}`}
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      toggleItem(item.path);
                    }
                  }}
                >
                  <span>{item.title}</span>
                  <span className="accordion-icon">
                    {expandedItems.includes(item.path) ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <div
                  id={`accordion-content-${index}`}
                  className="accordion-content"
                  role="region"
                  aria-labelledby={`accordion-header-${index}`}
                >
                  {expandedItems.includes(item.path) && (
                    <p>{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer is included globally in App.js, so no need to include it here */}
    </>
  );
};

export default TrainingDetail;
