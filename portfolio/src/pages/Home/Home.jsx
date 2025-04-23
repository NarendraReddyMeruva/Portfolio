import React from 'react';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Home.css';
import Certificates from '../../components/Certificates/Certificates';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero section-animate">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">Hi, I'm a</span>
            <span className="hero-title-main">
              <span className="text-gradient">Full Stack</span> Developer
            </span>
          </h1>
          <p className="hero-subtitle">
            Creating beautiful, functional web experiences with modern technologies
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn-glow">
              Get In Touch
              <span className="btn-glow-effect"></span>
            </a>
          </div>
        </div>
        <div className="hero-pattern"></div>
      </section>

      <section id="about" className="section-animate">
        <About />
      </section>

      <section id="skills" className="section-animate">
        <Skills />
      </section>

      <section id="projects" className="section-animate">
        <Projects />
      </section>

      <section id="certificates" className="section-animate">
        <Certificates />
      </section>

      <section id="contact" className="section-animate">
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;