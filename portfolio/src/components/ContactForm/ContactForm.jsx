import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';
import api from '../../api'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post( api +'/contact', formData);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <p>narendrareddy0312@example.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <p>+91 9059017447</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-text">
                <h3>Location</h3>
                <p>SRKR engineering college,Bhimavaram</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            {submitStatus === 'success' && (
              <div className="alert success">
                <i className="fas fa-check-circle"></i>
                <p>Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="alert error">
                <i className="fas fa-exclamation-circle"></i>
                <p>Failed to send message. Please try again later.</p>
              </div>
            )}
            
            <div className="form-group">
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <span className="input-border"></span>
              </div>
              
              <div className="input-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <span className="input-border"></span>
              </div>
            </div>
            
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="input-border"></span>
            </div>
            
            <div className="input-group">
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
              <span className="input-border"></span>
            </div>
            
            <div className="input-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <span className="input-border"></span>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Send Message
                </>
              )}
              <span className="btn-glow"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;