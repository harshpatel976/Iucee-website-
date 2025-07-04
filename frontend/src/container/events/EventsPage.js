import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import events from './event.json';
import './eventstyle.css';

const EventDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === id);

  if (!event) return <p>Event not found</p>;

  const handleBackClick = () => {
    navigate('/events');
  };

  return (
    <>
    <div className='page-header'>
      <h1 className='page-title'>EVENT GALLERY</h1>
    </div>
    
    <div className="event-detail">
      <div className="back-button-container">
        <button className="back-button" onClick={handleBackClick}>
          ← Back to Events
        </button>
      </div>
      
      <div className="event-info">
        <h2 className="event-name">{event.name}</h2>
        <p className="event-description">{event.description}</p>
      </div>
      <div className="event-images">
        {event.images.map((img, index) => (
          <div key={index} className="event-image-container">
            <img src={img} alt={`${event.name} ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default EventDetailPage;
