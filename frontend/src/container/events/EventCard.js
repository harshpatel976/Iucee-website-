import React from 'react';
import { useNavigate } from 'react-router-dom';
import './eventstyle.css';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <div className="event-card" onClick={handleClick}>
      <div className="event-image">
        <img src={event.thumbnail} alt={event.name} />
        <div className="event-photos-count">
          {event.images ? `${event.images.length} photos` : '1 photo'}
        </div>
      </div>
      <div className="event-content">
        <div className="event-title">{event.name}</div>
        {event.description && (
          <div className="event-description">
            {event.description}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
