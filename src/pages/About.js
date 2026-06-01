import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../styles/About.css';

/**
 * About Page Component
 * Displays company mission, values, team information, and why Kyrgyzstan
 * Features: Team member profiles, company values, mission statement
 */
function About() {
  const { t } = useTranslation();

  // Team members with roles and descriptions
  const teamMembers = [
    {
      name: 'Erlan',
      position: 'Digital Manager',
      description: 'Oversees all digital operations, website development, and online presence',
      icon: '💻'
    },
    {
      name: 'Nurlan',
      position: 'Logistics Manager',
      description: 'Ensures smooth coordination of all tours, transportation, and accommodations',
      icon: '📋'
    },
    {
      name: 'Khamza',
      position: 'Guide Selection Manager',
      description: 'Recruits and manages professional certified mountain guides',
      icon: '🧗'
    }
  ];

  // Animation variants for items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="about-page">
      {/* Page header */}
      <div className="about-header">
        <h1>About KYRGYZ PEAKS ADVENTURE</h1>
        <p>Personalized adventures in the heart of Central Asia</p>
      </div>

      {/* Main content container */}
      <div className="about-container">
        {/* Mission Section */}
        <motion.section
          className="mission-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2>Our Mission</h2>
          <p>
            We believe tourism should be personal, authentic, and unforgettable. Our mission is to create individualized 
            journeys that connect you with the true beauty of Kyrgyzstan. Every tour is carefully crafted to match your 
            interests, fitness level, and travel style. We're not about mass tourism - we're about creating meaningful experiences.
          </p>
        </motion.section>

        {/* Why Kyrgyzstan Section */}
        <motion.section
          className="kyrgyzstan-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2>Why Kyrgyzstan?</h2>
          <div className="highlights">
            <div className="highlight-item">
              <h3>🏔️ Majestic Mountains</h3>
              <p>Home to some of Central Asia's most stunning peaks and valleys. Pure mountain wilderness at its finest.</p>
            </div>
            <div className="highlight-item">
              <h3>💧 Alpine Lakes</h3>
              <p>Crystal-clear lakes surrounded by pristine nature. Issyk-Kul is the world's second-largest alpine lake.</p>
            </div>
            <div className="highlight-item">
              <h3>🏇 Nomadic Culture</h3>
              <p>Experience authentic Central Asian nomadic traditions still alive today. Stay with local families and learn their ways.</p>
            </div>
            <div className="highlight-item">
              <h3>🌄 Untouched Nature</h3>
              <p>Explore vast wilderness with minimal tourism infrastructure. Real adventure in pristine landscapes.</p>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="team-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Our Team</h2>
          <p className="team-intro">
            Our dedicated team works behind the scenes to ensure every aspect of your journey is perfect. 
            From digital planning to logistics and guide selection, we've got you covered.
          </p>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="team-icon">{member.icon}</div>
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="description">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="values-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>🎯 Personalization</h3>
              <p>Every tour is tailored to your specific interests, fitness level, and travel preferences.</p>
            </div>
            <div className="value-item">
              <h3>✅ Quality</h3>
              <p>We maintain the highest standards in guides, accommodations, food, and service.</p>
            </div>
            <div className="value-item">
              <h3>🌍 Sustainability</h3>
              <p>We protect Kyrgyzstan's natural heritage for future generations through responsible tourism.</p>
            </div>
            <div className="value-item">
              <h3>💪 Safety</h3>
              <p>Your safety is our top priority. All guides are certified with years of mountain experience.</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default About;
