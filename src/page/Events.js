import React from 'react'
import EventsPage from '../container/events/EventPage'

const Events = () => {
  return (
    <div className='eventspage'>
    <div className='page-headers'>
       <h1 className='page-title'>EVENTS</h1>
    </div>
    
    <div className='events-description'>
      <p>
        Welcome to our Events Gallery! Here you can explore the exciting events and activities 
        organized by the NIE-IUCEE Student Chapter. From technical workshops and innovation 
        challenges to collaborative seminars and community-driven projects, each event represents 
        our commitment to fostering creativity, learning, and meaningful connections within our 
        engineering community.
      </p>
      
    </div>
    
    <div className='eventstitless'>All Events</div>
    <EventsPage/>
    </div>
  )
}

export default Events