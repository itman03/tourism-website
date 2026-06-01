import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import TourCard from '../components/TourCard';
import '../styles/Home.css';

/**
 * Home Page Component
 * Main landing page with hero section, featured tours, and service highlights
 * Features: Why choose us section, featured tours showcase, what's included section
 */
function Home() {
  const { t } = useTranslation();

  // Featured tours data for homepage
  const featuredTours = [
    {
      id: 1,
      name: 'Ala-Too Peak Adventure',
      description: 'Experience the breathtaking views of Kyrgyzstan\'s highest peak with professional mountaineers.',
      route: 'Ala-Too Peak - Son Kul Lake',
      duration: '5 Days',
      groupSize: '2-8 Persons',
      price: '$450 per person',
      image: 'https://via.placeholder.com/400x300?text=Ala-Too+Peak+Kyrgyzstan',
      includes: [
        'Mountain hiking experience',
        'Professional certified guide',
        'All meals included',
        'Accommodation at base camps',
        'All transport from Bishkek'
      ]
    },
    {
      id: 2,
      name: 'Issyk-Kul Lake Paradise',
      description: 'Relax on the shores of the world\'s second-largest alpine lake with crystal clear waters.',
      route: 'Issyk-Kul Lake - Beach Towns',
      duration: '3 Days',
      groupSize: '2-10 Persons',
      price: '$320 per person',
      image: 'https://via.placeholder.com/400x300?text=Issyk-Kul+Lake+Kyrgyzstan',
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
      description: 'Explore the stunning Jyrgalan Valley with its pristine nature and nomadic culture.',
      route: 'Jyrgalan Valley - Trekking Routes',
      duration: '4 Days',
      groupSize: '2-6 Persons',
      price: '$380 per person',
      image: 'https://via.placeholder.com/400x300?text=Jyrgalan+Valley+Kyrgyzstan',
      includes: [
        'Valley trekking with expert guides',
        'Nature exploration and photography',
        'Nomadic lifestyle experience',
        'Full board meals included',
        'Complete transportation'
      ]
    }
  ];

  // Container animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection />

      {/* Main home page content */}
      <div className="home-container">
        {/* Why Choose Us Section */}
        <section className="why-choose-us">
          <h2>Why Choose KYRGYZ PEAKS ADVENTURE?</h2>
          <p className="section-subtitle">We offer personalized, all-inclusive tours with professional guides and complete support</p>
          
          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Feature 1: Personalized Tours */}
            <motion.div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Individualized Routes</h3>
              <p>Every tour is customized to your preferences, fitness level, and interests. We don't do mass tourism.</p>
            </motion.div>

            {/* Feature 2: Complete Service */}
            <motion.div className="feature-card">
              <div className="feature-icon">🛫</div>
              <h3>Complete Care from Arrival to Departure</h3>
              <p>We handle everything: SIM cards, accommodation, transportation from airport to hotel, and back. You relax, we manage.</p>
            </motion.div>

            {/* Feature 3: Professional Guides */}
            <motion.div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Expert Local Guides</h3>
              <p>Certified mountain guides with years of experience. They know every trail, every village, and every story of Kyrgyzstan.</p>
            </motion.div>

            {/* Feature 4: Affordable Prices */}
            <motion.div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Transparent Pricing</h3>
              <p>No hidden fees. What you see is what you pay. Premium experience at competitive prices.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Tours Section */}
        <section className="featured-tours">
          <h2>Our Featured Tours</h2>
          <p className="section-subtitle">Handpicked adventures across Kyrgyzstan's most stunning landscapes</p>
          
          <motion.div
            className="tours-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </motion.div>
        </section>

        {/* What's Included Section */}
        <section className="whats-included">
          <h2>Everything is Included</h2>
          <p className="section-subtitle">Your comfort and convenience are our priority</p>
          <div className="included-grid">
            {/* SIM Card Service */}
            <motion.div
              className="included-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="included-icon">📱</div>
              <h3>SIM Card</h3>
              <p>Get a local SIM card with data plan immediately upon arrival. Stay connected throughout your journey.</p>
            </motion.div>

            {/* Accommodation */}
            <motion.div
              className="included-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="included-icon">🏨</div>
              <h3>Accommodation</h3>
              <p>Comfortable hotels, guesthouses, or traditional yurts depending on your tour. All bookings handled by us.</p>
            </motion.div>

            {/* Transportation */}
            <motion.div
              className="included-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="included-icon">🚗</div>
              <h3>Full Transport</h3>
              <p>Airport pickup, drop-off at your hotel, and all transportation during the tour. No extra costs.</p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
