import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.section-animate');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;