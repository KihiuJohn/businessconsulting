import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Consulting from './pages/Consulting';
import TrainingCalendar from './pages/TrainingCalendar';
import TrainingCalendar2025 from './pages/TrainingCalendar2025'; // Import new page
import Training from './pages/Training'; // Import Training Component
import TrainingDetail from './pages/TrainingDetail';
import ConsultingDetail from './pages/ConsultingDetail'; // Import ConsultingDetail Component
import NotFound from './pages/NotFound';
import trainingData from './data/trainingData'; // Import Training Data
import consultingData from './data/consultingData'; // Import Consulting Data
import './App.css'; // Import App.css

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-wrap">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* Static Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/training-calendar" element={<TrainingCalendar />} />
              <Route path="/training-calendar-2025" element={<TrainingCalendar2025 />} />

              {/* Training Overview Route */}
              <Route path="/training" element={<Training />} />

              {/* Dynamic Routes for Each Training Item */}
              {trainingData.map((training, index) => (
                <Route
                  key={index}
                  path={training.path}
                  element={<TrainingDetail training={training} trainingData={trainingData} />}
                />
              ))}

              {/* Dynamic Routes for Each Consulting Item */}
              {consultingData.map((consulting, index) => (
                <Route
                  key={index}
                  path={consulting.path}
                  element={<ConsultingDetail consulting={consulting} consultingData={consultingData} />}
                />
              ))}

              {/* 404 Not Found Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
