import React from 'react';
import { useParams } from 'react-router-dom';
import events from './event.json';
import './eventstyle.css';

const EventDetailPage = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === id);

  if (!event) return <p>Event not found</p>;

  return (
    <>

   <div className='corememberpage'>
         Glimpse <span >  of Event  </span>
    </div>
    
    <div className="event-detail">
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <div className="event-images">
        {event.images.map((img, index) => (
          <img key={index} src={img} alt={`${event.name} ${index}`} />
        ))}
      </div>
    </div>
     </>
  );
};

export default EventDetailPage;
