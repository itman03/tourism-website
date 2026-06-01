import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import '../styles/Navbar.css';

/**
 * Navbar Component
 * Navigation bar with responsive mobile menu and language switcher
 * Features: Mobile hamburger menu, language dropdown, smooth navigation
 */
function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);

  // Handle language change function
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageDropdown(false);
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and brand name */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🏔️</span>
          KYRGYZ PEAKS
        </Link>

        {/* Mobile menu toggle button */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation links */}
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            {t('nav.home')}
          </Link>
          <Link to="/tours" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            {t('nav.tours')}
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            {t('nav.about')}
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            {t('nav.contact')}
          </Link>
        </div>

        {/* Language switcher dropdown */}
        <div className="language-switcher">
          <button 
            className="language-btn"
            onClick={() => setLanguageDropdown(!languageDropdown)}
          >
            <FaGlobe /> {i18n.language.toUpperCase()}
          </button>
          {languageDropdown && (
            <div className="language-dropdown">
              <button onClick={() => changeLanguage('en')} className="lang-option">🇺🇸 English</button>
              <button onClick={() => changeLanguage('ru')} className="lang-option">🇷🇺 Русский</button>
              <button onClick={() => changeLanguage('fr')} className="lang-option">🇫🇷 Français</button>
              <button onClick={() => changeLanguage('de')} className="lang-option">🇩🇪 Deutsch</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
