import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Achievement.css';

const AchievementCard = ({ achievement }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/achievement/${achievement.id}`);
  };

  return (
    <div className="achievement-card" onClick={handleClick}>
      <div className="achievement-image">
        <img src={achievement.thumbnail} alt={achievement.name} />
        <div className="achievement-photos-count">
          {achievement.images ? `${achievement.images.length} photos` : '1 photo'}
        </div>
      </div>
      <div className="achievement-content">
        <div className="achievement-title">{achievement.name}</div>
        {achievement.description && (
          <div className="achievement-prize">
            {achievement.description}
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementCard; 