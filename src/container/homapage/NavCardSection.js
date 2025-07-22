import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const navCards = [
  {
    title: 'Events',
    image: '/events/Events1/photo7.JPG',
    path: '/events',
  },
  {
    title: 'Team',
    image: '/Coremember/group.jpg',
    path: '/core-members',
  },
  {
    title: 'Projects',
    image: '/Projects/photo.jpeg',
    path: '/projects',
  },
  {
    title: 'Achievements',
    image: '/achievements/photo.jpeg',
    path: '/achievement',
  },
];

const NavCardSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
    // Scroll to top when navigating to a new page
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="nav-card-section">
      <h2 className="nav-card-section-title">Explore More</h2>
      <div className="nav-card-list">
        {navCards.map((card) => (
         <div
  key={card.title}
  className="nav-card"
  onClick={() => handleCardClick(card.path)}
>
  <div className="nav-card-overlay">
    <div className="nav-card-title">{card.title}</div>
  </div>
  <img src={card.image} alt={card.title} className="nav-card-image" />
</div>

        ))}
      </div>
    </div>
  );
};

export default NavCardSection; 