import React from 'react';
import events from './event.json';
import './eventstyle.css';
import EventCard from './EventCard';

const EventsPage = () => {
  return (
    <div className="events-container">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsPage;
