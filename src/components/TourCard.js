import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaWhatsapp } from 'react-icons/fa';
import '../styles/TourCard.css';

/**
 * TourCard Component
 * Displays individual tour information with Framer Motion animations
 * Features: Hover effects, WhatsApp booking integration, tour details display
 */
function TourCard({ tour }) {
  // Framer Motion animation variants for card entrance and hover
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: {
      y: -10,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 }
    }
  };

  // Handle WhatsApp booking button click
  const handleBooking = () => {
    const message = `Hello! I'm interested in booking the ${tour.name} tour.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/996706970303?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.div
      className="tour-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      {/* Tour image container with price overlay */}
      <div className="tour-image-container">
        <img src={tour.image} alt={tour.name} className="tour-image" />
        <div className="tour-overlay">
          <span className="tour-price">{tour.price}</span>
        </div>
      </div>

      {/* Tour details container */}
      <div className="tour-details">
        {/* Tour name heading */}
        <h3 className="tour-name">{tour.name}</h3>
        
        {/* Tour description text */}
        <p className="tour-description">{tour.description}</p>

        {/* Tour information: route, duration, group size */}
        <div className="tour-info">
          <div className="info-item">
            <FaMapMarkerAlt /> <span>{tour.route}</span>
          </div>
          <div className="info-item">
            <FaCalendarAlt /> <span>{tour.duration}</span>
          </div>
          <div className="info-item">
            <FaUsers /> <span>{tour.groupSize}</span>
          </div>
        </div>

        {/* Tour highlights - what's included */}
        <div className="tour-highlights">
          <h4>What's Included:</h4>
          <ul>
            {tour.includes.map((item, index) => (
              <li key={index}>✓ {item}</li>
            ))}
          </ul>
        </div>

        {/* WhatsApp booking button */}
        <button className="book-btn" onClick={handleBooking}>
          <FaWhatsapp /> Book via WhatsApp
        </button>
      </div>
    </motion.div>
  );
}

export default TourCard;
