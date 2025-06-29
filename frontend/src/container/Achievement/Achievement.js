import React from "react";
import { useNavigate } from "react-router-dom";
import "./Achievement.css";

const achievements = [
  {
    id: 1,
    title: "HDSE",
    prize: "Attended the HDSE at kuppam",
    images: ["/events/Events1/photo2.JPG", "/events/Events1/photo2.JPG"],
    thumbnail: "/events/Events1/photo2.JPG"
  },
  
];

const AchievementPage = () => {
  const navigate = useNavigate();

  const handleClick = (achievement) => {
    navigate(`/achievement/${achievement.id}`);
  };

  return (
    <div className="achievement-container">
      {achievements.map((achievement, index) => (
        <div 
          className="achievement-card" 
          key={index}
          onClick={() => handleClick(achievement)}
        >
          <div className="achievement-image">
            <img src={achievement.thumbnail} alt={achievement.title} />
            <div className="achievement-photos-count">
              {achievement.images ? `${achievement.images.length} photos` : '1 photo'}
            </div>
          </div>
          <div className="achievement-content">
            <div>
              <h2 className="achievement-title">{achievement.title}</h2>
              <p className="achievement-prize">{achievement.prize}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementPage;
