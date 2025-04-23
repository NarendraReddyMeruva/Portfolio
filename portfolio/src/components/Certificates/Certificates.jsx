import React, { useState } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  // This state manages which certificate is currently selected for modal view
  const certificates = [
    {
      id: 1,
      title: " Introduction to Blockchain",
      issuer: "AWS Training and Certification",
      date: " December 5, 2023",
      image: "aws.jpg"
    },
    {
      id: 2,
      title: "AI-ML Virtual Internship",
      issuer: "AICTE, EduSkills, and Google for Developers",
      date: " January - March 2025",
      image: "gml.jpg"
    },
    {
      id: 3,
      title: "Participation in Dev Challenge Hackathon",
      issuer: "Google Developers Group",
      date: "January 31 - February 1, 2024",
      image: "devcha.jpg"
    },
    {
      id: 4,
      title: " Hands-on Training Program on Deep Reinforcement Learning (DRL) Application Development",
      issuer: "AICTE IDEALab, SRKR Engineering College",
      date: "November 5-22, 2024",
      image: "idealab.jpg"
    },
    {
      id: 5,
      title: "Special Prize in Vedic Vision-2K24 Hackathon",
      issuer: " Department of Physical Education, SRKR Engineering College",
      date: "August 14-15, 2024",
      image: "phyhack.jpg"
    },
    {
      id: 6,
      title: "Python Essentials 1,2",
      issuer: "Cisco Networking Academy",
      date: " October 20, 2024",
      image: "py.jpg"
    }
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);// Set the selected certificate for the modal
  };

  const closeModal = () => {
    setSelectedCert(null); // Close modal by resetting selected certificate
  };

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <h2 className="section-title">My Certifications</h2>
        
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image-container">
                <img src={cert.image} alt={cert.title} className="certificate-image" />
                <div className="certificate-overlay"></div>
              </div>
              
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <div className="certificate-meta">
                  <span className="issuer">
                    <i className="fas fa-award"></i> {cert.issuer}
                  </span>
                  <span className="date">
                    <i className="far fa-calendar-alt"></i> {cert.date}
                  </span>
                </div>
                
                <button 
                  className="view-certificate-btn"
                  onClick={() => openModal(cert)}
                >
                  <i className="fas fa-eye"></i> View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="certificate-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <h3>{selectedCert.title}</h3>
            <p className="modal-issuer">{selectedCert.issuer} • {selectedCert.date}</p>
            <img 
              src={selectedCert.image} 
              alt={selectedCert.title} 
              className="modal-certificate-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;