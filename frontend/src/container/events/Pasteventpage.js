import React from 'react';
import { Link } from 'react-router-dom';
import sliderData from '../../page/SliderData.json';
import './eventstyle.css';

const PastEventsPage = () => {
    const currentDate = new Date('2025-06-11'); // Current date: June 11, 2025

    // Filter past events (before June 11, 2025)
    const pastEvents = sliderData.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate <= currentDate;
    });

    return (
        <div className="past-events-page">
            <header className="past-events-header">
                <div className="logo">Justice Row</div>
                <nav>
                    <span>Established 1999</span>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/events" className="nav-link">Upcoming Events</Link>
                </nav>
            </header>
            <section className="past-events-section">
                <h1>Past Events</h1>
                {pastEvents.length === 0 ? (
                    <p className="no-events">No past events available.</p>
                ) : (
                    <div className="past-events-list">
                        {pastEvents.map((event, index) => (
                            <div key={index} className="past-event-card">
                                <img
                                    src={event.bgImage}
                                    alt={event.title}
                                    className="past-event-image"
                                />
                                <div className="past-event-info">
                                    <h2>{event.title}</h2>
                                    <p className="past-event-date">Date: {event.date}</p>
                                    <p className="past-event-description">
                                        {event.textLeft} {event.textRight}
                                    </p>
                                    <Link to={`/past-event/${index}`} className="show-more-button">
                                        Show More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default PastEventsPage;