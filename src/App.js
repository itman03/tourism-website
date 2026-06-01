import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tours from './pages/Tours';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/App.css';

/**
 * Main App Component
 * Handles routing and page structure for the entire application
 * Uses React Router for navigation between pages
 * Includes Navbar and Footer on all pages
 */
function App() {
  const { i18n } = useTranslation();

  return (
    <Router>
      <div className="app-container">
        {/* Navigation bar appears on all pages */}
        <Navbar />
        
        {/* Main content area - routes render here */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
