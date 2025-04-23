import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm <span class="underline-hover">Narendra Reddy Meruva</span> — a curious coder and tech enthusiast studying
              <span class="underline-hover">Computer Science</span> at <span class="underline-hover">SRKR Engineering College</span>, Bhimavaram.
              I enjoy building things that make a difference, from tracking
              <span class="underline-hover">agriculture market prices</span> to creating smooth
              <span class="underline-hover">team management tools</span>. I work mainly with
              <span class="underline-hover">Java</span>, <span class="underline-hover">Python</span>, <span class="underline-hover">JavaScript</span>,
              <span class="underline-hover">React</span>, and <span class="underline-hover">Node.js</span> — tools that help me bring
              ideas to life. Whether it’s solo projects or teaming up for
              <span class="underline-hover">hackathons</span>, I’m all about solving real problems with smart, clean solutions.
            </p>

          </div>

          <div className="about-image">
            <img
              src="/myimage.jpg"
              alt="Narendra Reddy Meruva"
              className="about-profile-image"
            />
        </div>
      </div>
    </div>
    </section >
  );
};

export default About;