import React from 'react'
import Slider from '../container/events/Slider'
import EventsPage from '../container/events/EventPage'

const Events = () => {
  return (
    <>
    <div className='corememberpage'>
       Events
    </div>
    <div className='eventstitless'>Last Event</div>  
    <Slider/>
    <div className='eventstitless'>Previous Events  </div>
    <EventsPage/>

</>
  )
}

export default Events