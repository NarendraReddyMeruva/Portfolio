import React from 'react';
import './Skills.css';

// Skill data with logos
const skillsData = {
  technical: [
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
   
  ],
  nonTechnical: [
    'Communication', 'Teamwork', 'Problem Solving',
    'Time Management', 'Leadership', 'Creativity',
    'Adaptability', 'Critical Thinking'
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-grid">
          <div className="skills-category">
            <h3 className="skills-category-title">
              <i className="fas fa-code"></i> Technical Skills
            </h3>
            <div className="skills-list">
              {skillsData.technical.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-logo">
                    <img src={skill.logo} alt={skill.name} />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="skills-category-title">
              <i className="fas fa-users"></i> Non-Technical Skills
            </h3>
            <div className="skills-list">
              {skillsData.nonTechnical.map((skill, index) => (
                <div key={index} className="skill-card soft-skill">
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;