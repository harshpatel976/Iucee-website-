import React from 'react';
import { useNavigate } from 'react-router-dom';
import LazyImage from '../../components/LazyImage';
import './eventstyle.css';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <div className="event-card" onClick={handleClick}>
    <div className='events-card-section'>
      <div className="event-image">
        <LazyImage 
          src={event.thumbnail} 
          alt={event.name}
          className="event-thumbnail"
        />
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
      </div></div>
    </div>
  );
};

export default EventCard;
