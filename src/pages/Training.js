// src/pages/Training.js

import React from 'react';
import TrainingDetail from './TrainingDetail'; // Reuse TrainingDetail component
import trainingData from '../data/trainingData'; // Import Training Data

const Training = () => {
  return (
    <TrainingDetail trainingData={trainingData} />
  );
};

export default Training;
