// src/pages/ConsultingDetail.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import Plus and Minus icons
import './ConsultingDetail.css'; // Ensure this CSS file exists

const ConsultingDetail = ({ consulting, consultingData }) => {
  // State to track expanded consulting items (by path)
  const [expandedItems, setExpandedItems] = useState([]);

  // Function to toggle expansion of a consulting item
  const toggleItem = (path) => {
    if (expandedItems.includes(path)) {
      // If already expanded, remove it from the array
      setExpandedItems(expandedItems.filter((item) => item !== path));
    } else {
      // If not expanded, add it to the array
      setExpandedItems([...expandedItems, path]);
    }
  };

  // Determine if we're displaying all consulting items or a specific one
  const isAllConsultings = !consulting;

  return (
    <>
      <div className="consulting-detail-container">
        {/* Two-Column Grid for Large Screens */}
        {!isAllConsultings && (
          <div className="consulting-grid">
            {/* Sidebar - 20% */}
            <aside className="consulting-sidebar" aria-label="Consulting Navigation">
              <ul>
                {consultingData.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => (isActive ? 'consulting-link active' : 'consulting-link')}
                      aria-current={item.path === window.location.pathname ? 'page' : undefined}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Main Content - 80% */}
            <main className="consulting-main-content">
              <h1>{consulting.title}</h1>
              <p>{consulting.description}</p>
            </main>
          </div>
        )}

        {/* Title for Small Devices */}
        {isAllConsultings && (
          <h2 className="consulting-title">Our Consulting Services</h2>
        )}

        {/* Accordion for Small Screens */}
        {isAllConsultings && (
          <div className="consulting-accordion">
            {consultingData.map((item, index) => (
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

export default ConsultingDetail;
