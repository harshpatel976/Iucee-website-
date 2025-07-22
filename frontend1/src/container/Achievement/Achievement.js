import React from "react";
import achievements from './achievement.json';
import './Achievement.css';
import AchievementCard from './AchievementCard';

const AchievementPage = () => {
  return (
    <div className="achievement-container">
      {achievements.map(achievement => (
        <AchievementCard key={achievement.id} achievement={achievement} />
      ))}
    </div>
  );
};

export default AchievementPage;
