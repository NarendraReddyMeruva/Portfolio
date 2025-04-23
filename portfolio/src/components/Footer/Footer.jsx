import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='footer' className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span>Portfolio</span>
        </div>
        
        <div className="footer-links">
          <div className="footer-link-group">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-link-group">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://github.com/NarendraReddyMeruva" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/narendra-reddy-meruva-99301829a/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:narendrareddy0312@email.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;