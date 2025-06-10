import React from 'react';
import { useNavigate } from 'react-router-dom';
import './eventstyle.css';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div
      className="event-card"
      onClick={() => navigate(`/event/${event.id}`)}
      style={{ backgroundImage: `url(${event.thumbnail})` }}
    >
      <div className="event-title">{event.name}</div>
    </div>
  );
};

export default EventCard;
