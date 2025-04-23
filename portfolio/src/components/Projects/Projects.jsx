import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: "AI-Powered TripPlanner App",
    description: "Designed a React Native travel assistant leveraging Gemini API to auto-generate detailed itineraries—including attractions, transport, and lodging—based on user preferences, streamlining trip planning from start to finish.",
    technologies: ["ReactNative", "Expo", "GeminiAI api"],
    image: "trip.jpeg",
    liveLink: "#",
    codeLink: "https://github.com/NarendraReddyMeruva/tripplanner/tree/main/guideride"
  },
  {
    title: "Agriculture Real-Time Market Prices Website",
    description: "Developed a farmer-centric web platform using React, Node.js, and MongoDB to display live crop prices and connect agricultural workers with employers through a dedicated registration system, enhancing market transparency and job accessibility.",
    technologies: ["React", "Node.js", "MongoDB", "countries API", "chakraUI"],
    image: "agriculture.png",
    liveLink: "#",
    codeLink: "https://github.com/NarendraReddyMeruva/Agriculture_website"
  },
  {
    title: "Plant Disease Prediction System",
    description: "Collaborated in a 4-member team to create an AI-powered ReactJS/MERN stack application that diagnoses plant diseases from images and suggests treatments, handling both frontend design and backend data processing.",
    technologies: ["React", "MongoDB", "Express", "NOde.js"],
    image: "plant.png",
    liveLink: "#",
    codeLink: "https://github.com/NarendraReddyMeruva/mlpro"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website to showcase my work with animations and modern design.",
    technologies: ["React", "Express", "MongoDB"],
    image: "portfo.jpg",
    liveLink: "#",
    codeLink: "https://github.com/NarendraReddyMeruva/Portfolio"
  },
  {
    title: "Language Nest Club Website – Teams Page",
    description: "Built a dynamic team management interface with JavaScript, Express.js, and MongoDB, enabling seamless CRUD operations for member data as part of the Language Nest club's official website.",
    technologies: ["React", "MongoDB", "ChakraUi", "NOde.js"],
    image: "teams.jpeg",
    liveLink: "#",
    codeLink: "https://github.com/NarendraReddyMeruva/teams_backend"
  }

];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveLink}
                    className="project-link live-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="project-link view-code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;