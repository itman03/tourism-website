import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';

/**
 * Contact Page Component
 * Displays contact information and contact form with WhatsApp integration
 * Features: Contact methods, contact form, WhatsApp direct messaging
 */
function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => (
      {
        ...prev,
        [name]: value
      }
    ));
  };

  // Handle form submission - sends via WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello! My name is ${formData.name}. ${formData.message}. Please contact me at ${formData.phone} or ${formData.email}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/996706970303?text=${encodedMessage}`, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="contact-page">
      {/* Page header */}
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have questions? We're here to help plan your perfect Kyrgyzstan adventure</p>
      </div>

      {/* Main contact container */}
      <div className="contact-container">
        {/* Contact information section */}
        <motion.section
          className="contact-info-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2>Contact Us</h2>
          
          <div className="contact-methods">
            {/* WhatsApp Contact */}
            <div className="contact-method">
              <FaWhatsapp className="contact-icon whatsapp" />
              <h3>WhatsApp (Preferred)</h3>
              <a href="https://wa.me/996706970303" target="_blank" rel="noopener noreferrer">
                +996 706 970 303
              </a>
              <p>Fastest way to reach us. Send a message anytime!</p>
            </div>

            {/* Phone Contact */}
            <div className="contact-method">
              <FaPhone className="contact-icon phone" />
              <h3>Phone</h3>
              <a href="tel:+996706970303">+996 706 970 303</a>
              <p>Call us directly for immediate assistance</p>
            </div>

            {/* Location */}
            <div className="contact-method">
              <FaMapMarkerAlt className="contact-icon location" />
              <h3>Location</h3>
              <p>Bishkek, Kyrgyzstan</p>
              <p>We're based in Kyrgyzstan and know every trail, every village, and every corner of this beautiful country.</p>
            </div>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section
          className="contact-form-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Name input */}
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            {/* Email input */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone input */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+996 700 000 000"
              />
            </div>

            {/* Message textarea */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                placeholder="Tell us about your tour interests, dates, and any special requests..."
              ></textarea>
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp /> Send via WhatsApp
            </motion.button>
          </form>
        </motion.section>
      </div>
    </div>
  );
}

export default Contact;
