import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Portfolio
        </Link>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
  <li className="nav-item">
    <a href="#about" className="nav-links" onClick={closeMenu}>
      About
    </a>
  </li>
  <li className="nav-item">
    <a href="#skills" className="nav-links" onClick={closeMenu}>
      Skills
    </a>
  </li>
  <li className="nav-item">
    <a href="#projects" className="nav-links" onClick={closeMenu}>
      Projects
    </a>
  </li>
  <li className="nav-item">
    <a href="#certificates" className="nav-links" onClick={closeMenu}>
      certifications
    </a>
  </li>
  <li className="nav-item">
    <a href="#contact" className="nav-links" onClick={closeMenu}>
      Contact
    </a>
  </li>
  
  
</ul>

      </div>
    </nav>
  );
};

export default Navbar;