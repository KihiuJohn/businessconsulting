import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import TrainingPage from './pages/TrainingPage'; // Update the import path if necessary
import Consulting from './pages/Consulting';
import TrainingCalendar from './pages/TrainingCalendar';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/training-calendar" element={<TrainingCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;