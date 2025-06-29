import React from 'react';
import { useNavigate } from 'react-router-dom';
import './foote.css';

const Footer = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
    // Scroll to top when navigating to homepage
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  const navigateToPage = (path) => {
    navigate(path);
    // Scroll to top when navigating to a new page
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <footer className="custom-footer">
      <div className="footer-links">
        <a href="#" onClick={navigateToHome}>Home</a>
        <span>/</span>
        <a href="#" onClick={() => navigateToPage('/events')}>Events</a>
        <span>/</span>
        <a href="#" onClick={() => navigateToPage('/core-members')}>Core Members</a>
        <span>/</span>
        <a href="#" onClick={() => navigateToPage('/projects')}>Projects</a>
        <span>/</span>
        <a href="#" onClick={() => navigateToPage('/achievement')}>Achievements</a>
      </div>

      <div className="footer-content">
        {/* Contact Information Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-person">
              <h4>President</h4>
              <p>Hemanth CS</p>
              <p>📞 +91 88671 97294</p>
            </div>
            <div className="contact-person">
              <h4>Secretary</h4>
              <p>Shashank G</p>
              <p>📞 +91 93537 91927</p>
            </div>
            <div className="contact-person">
              <h4>Email</h4>
              <p>📧 nieiucee@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="footer-section">
          <h3>Location</h3>
          <div className="location-info">
            
            <p>National Institute of Engineering</p>
            <p>Mysore - 570008, Karnataka</p>
            <p>India</p>
            <div className="map-link">
              <a 
                href="https://maps.google.com/?q=National+Institute+of+Engineering+Golden+Jubilee+Block+Mysore+Karnataka" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>📍 View on Map</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/anvaya-iucee-student-chapter/" target="_blank" rel="noopener noreferrer">
              <img src="/image/LinkedIn_icon.svg.png" alt="LinkedIn" className="social-icon-img" />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/iucee_nie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <img src="/image/instagram-6338393_1280.webp" alt="Instagram" className="social-icon-img" />
              <span>Instagram</span>
            </a>
            
            
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <p>© 2025 Anvaya. All Rights Reserved</p>
          <p>National Institute Of Engineering Mysore</p>
          <p>NIE-IUCEE Student Chapter</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
