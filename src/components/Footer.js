import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Footer.css';

/**
 * Footer Component
 * Displays company contact information, team members, and copyright
 * Includes WhatsApp booking link and team management section
 */
function Footer() {
  const { t } = useTranslation();

  // Team members data with roles
  const teamMembers = [
    {
      name: 'Erlan',
      position: 'Digital Manager',
      role: t('footer.digitalManager'),
      emoji: '💻'
    },
    {
      name: 'Nurlan',
      position: 'Logistics Manager',
      role: t('footer.logisticsManager'),
      emoji: '📋'
    },
    {
      name: 'Khamza',
      position: 'Guide Selection Manager',
      role: t('footer.guideManager'),
      emoji: '🧗'
    }
  ];

  return (
    <footer className="footer">
      {/* Main footer content container */}
      <div className="footer-container">
        {/* Company info section */}
        <div className="footer-section">
          <h3>{t('footer.aboutUs')}</h3>
          <p>{t('footer.description')}</p>
        </div>

        {/* Contact section with WhatsApp link */}
        <div className="footer-section">
          <h3>{t('footer.contact')}</h3>
          <div className="contact-item">
            <FaWhatsapp /> 
            <a href="https://wa.me/996706970303" target="_blank" rel="noopener noreferrer">
              +996 706 970 303
            </a>
          </div>
          <div className="contact-item">
            <FaPhone /> +996 706 970 303
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt /> Bishkek, Kyrgyzstan
          </div>
        </div>

        {/* Team management section */}
        <div className="footer-section">
          <h3>{t('footer.team')}</h3>
          <div className="team-list">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <span className="member-emoji">{member.emoji}</span>
                <div className="member-info">
                  <p className="member-name">{member.name}</p>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="footer-bottom">
        <p>&copy; 2024 KYRGYZ PEAKS ADVENTURE. {t('footer.allRights')}</p>
      </div>
    </footer>
  );
}

export default Footer;
