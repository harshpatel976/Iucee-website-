import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import achievements from './achievement.json';
import './Achievement.css';

const AchievementDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const achievement = achievements.find(a => a.id === id);

  if (!achievement) return <p>Achievement not found</p>;

  const handleBackClick = () => {
    navigate('/achievement');
  };

  return (
    <>
    <div className='page-header'>
      <h1 className='page-title'>ACHIEVEMENT GALLERY</h1>
    </div>
    
    <div className="achievement-detail">
      <div className="back-button-container">
        <button className="back-button" onClick={handleBackClick}>
          ← Back to Achievements
        </button>
      </div>
      
      <div className="achievement-info">
        <h2 className="achievement-name">{achievement.name}</h2>
        <p className="achievement-description">{achievement.description}</p>
      </div>
      <div className="achievement-images">
        {achievement.images.map((img, index) => (
          <div key={index} className="achievement-image-container">
            <img src={img} alt={`${achievement.name} ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default AchievementDetailPage; 