import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectGallery from './pages/ProjectGallery';
import AllPhotos from './pages/AllPhotos';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectGallery />} />
          <Route path="/gallery" element={<AllPhotos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;