import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';

/**
 * HeroSection Component
 * Main landing page hero with animated text and background
 * Features: Staggered text animations, CTA button, responsive design
 */
function HeroSection() {
  // Text animation variants for staggered entrance
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.6
      }
    }
  };

  return (
    <section className="hero-section">
      {/* Overlay for image darkening effect */}
      <div className="hero-overlay"></div>
      
      {/* Hero content with animations */}
      <div className="hero-content">
        {/* Main title with animation */}
        <motion.h1
          className="hero-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Discover Kyrgyzstan
        </motion.h1>
        
        {/* Subtitle with delayed animation */}
        <motion.p
          className="hero-subtitle"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Your personalized adventure awaits in the heart of Central Asia
        </motion.p>
        
        {/* CTA button with animation */}
        <motion.button
          className="hero-cta-btn"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          Explore Tours
        </motion.button>
      </div>
    </section>
  );
}

export default HeroSection;
