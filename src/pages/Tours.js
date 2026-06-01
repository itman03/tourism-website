import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TourCard from '../components/TourCard';
import '../styles/Tours.css';

/**
 * Tours Page Component
 * Displays complete tour catalog with filtering options
 * Features: Filter by duration, detailed tour listings, WhatsApp booking
 */
function Tours() {
  const { t } = useTranslation();
  const [selectedDuration, setSelectedDuration] = useState('all');

  // Complete tours catalog with all available tours
  const allTours = [
    {
      id: 1,
      name: 'Ala-Too Peak Adventure',
      description: 'Experience the breathtaking views of Kyrgyzstan\'s highest peak with professional mountaineers.',
      route: 'Ala-Too Peak - Son Kul Lake',
      duration: '5 Days',
      groupSize: '2-8 Persons',
      price: '$450 per person',
      image: 'https://via.placeholder.com/400x300?text=Ala-Too+Peak',
      durationDays: 5,
      includes: [
        'Mountain hiking experience',
        'Professional guide',
        'All meals included',
        'Accommodation at base camps',
        'All transport from Bishkek'
      ]
    },
    {
      id: 2,
      name: 'Issyk-Kul Lake Paradise',
      description: 'Relax on the shores of the world\'s second-largest alpine lake.',
      route: 'Issyk-Kul Lake - Beaches',
      duration: '3 Days',
      groupSize: '2-10 Persons',
      price: '$320 per person',
      image: 'https://via.placeholder.com/400x300?text=Issyk-Kul+Lake',
      durationDays: 3,
      includes: [
        'Beach activities and relaxation',
        'Water sports options',
        'Local cuisine tasting',
        'Hotel accommodation',
        'Pickup and drop-off service'
      ]
    },
    {
      id: 3,
      name: 'Jyrgalan Valley Trek',
      description: 'Explore the stunning Jyrgalan Valley with its pristine nature.',
      route: 'Jyrgalan Valley - Trekking Routes',
      duration: '4 Days',
      groupSize: '2-6 Persons',
      price: '$380 per person',
      image: 'https://via.placeholder.com/400x300?text=Jyrgalan+Valley',
      durationDays: 4,
      includes: [
        'Valley trekking with expert guides',
        'Nature exploration and photography',
        'Nomadic lifestyle experience',
        'Full board meals included',
        'Complete transportation'
      ]
    },
    {
      id: 4,
      name: 'Son Kul Lake Camping',
      description: 'Experience nomadic culture at the stunning Son Kul Lake.',
      route: 'Son Kul Lake - High Alpine Region',
      duration: '3 Days',
      groupSize: '2-8 Persons',
      price: '$340 per person',
      image: 'https://via.placeholder.com/400x300?text=Son+Kul+Lake',
      durationDays: 3,
      includes: [
        'Nomadic camping experience',
        'Horse riding',
        'Traditional meals',
        'Yurt accommodation',
        'Full transport from Bishkek'
      ]
    },
    {
      id: 5,
      name: 'Karakol Cultural Tour',
      description: 'Discover the rich culture and history of Karakol city.',
      route: 'Karakol City - Cultural Heritage Sites',
      duration: '2 Days',
      groupSize: '2-12 Persons',
      price: '$250 per person',
      image: 'https://via.placeholder.com/400x300?text=Karakol',
      durationDays: 2,
      includes: [
        'City cultural tour',
        'Historical site visits',
        'Local market exploration',
        'Hotel accommodation',
        'Transportation included'
      ]
    },
    {
      id: 6,
      name: 'Premium Mountain Experience',
      description: 'Ultimate adventure combining multiple destinations.',
      route: 'Ala-Too - Son Kul - Jyrgalan Circuit',
      duration: '8 Days',
      groupSize: '2-6 Persons',
      price: '$680 per person',
      image: 'https://via.placeholder.com/400x300?text=Premium+Adventure',
      durationDays: 8,
      includes: [
        'Multi-region mountain experience',
        'Expert professional guides',
        'All meals prepared by chefs',
        'Premium accommodations',
        'Complete support throughout'
      ]
    }
  ];

  // Filter tours based on selected duration
  const filteredTours = selectedDuration === 'all'
    ? allTours
    : allTours.filter(tour => tour.durationDays <= parseInt(selectedDuration));

  // Container animation for staggered display
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="tours-page">
      {/* Page header section */}
      <div className="tours-header">
        <h1>All Tours</h1>
        <p>Discover our complete collection of personalized tours across Kyrgyzstan</p>
      </div>

      {/* Filter section for tour duration */}
      <div className="tours-filter">
        <h3>Filter by Duration</h3>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${selectedDuration === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedDuration('all')}
          >
            All Tours
          </button>
          <button
            className={`filter-btn ${selectedDuration === '3' ? 'active' : ''}`}
            onClick={() => setSelectedDuration('3')}
          >
            Up to 3 Days
          </button>
          <button
            className={`filter-btn ${selectedDuration === '5' ? 'active' : ''}`}
            onClick={() => setSelectedDuration('5')}
          >
            Up to 5 Days
          </button>
          <button
            className={`filter-btn ${selectedDuration === '8' ? 'active' : ''}`}
            onClick={() => setSelectedDuration('8')}
          >
            Extended (8 Days)
          </button>
        </div>
      </div>

      {/* Tours grid display */}
      <motion.div
        className="all-tours-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredTours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </motion.div>

      {/* Message when no tours match filter */}
      {filteredTours.length === 0 && (
        <div className="no-tours">
          <p>No tours found for the selected duration.</p>
        </div>
      )}
    </div>
  );
}

export default Tours;
