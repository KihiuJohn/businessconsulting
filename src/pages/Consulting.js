// src/pages/Consulting.js

import React from 'react';
import ConsultingDetail from './ConsultingDetail'; // Reuse ConsultingDetail component
import consultingData from '../data/consultingData'; // Import Consulting Data

const Consulting = () => {
  return (
    <ConsultingDetail consultingData={consultingData} />
  );
};

export default Consulting;
