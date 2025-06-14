import React, { useState, useEffect } from 'react';
import sliderData from './SliderData.json';
import './eventstyle.css';

// Slide Component
const Slide = ({ slide, isActive }) => {
    return (
        <div
            className={`slide ${isActive ? 'active' : 'inactive'}`}
            style={{ backgroundImage: `url('${slide.bgImage}')`}}
        ><div className="overlay"></div>
            <div className="slide-content">
                <div className="text-left">
                    <h1>{slide.title}</h1>
                    <p>{slide.textLeft}</p>
                </div>
                <div className="text-right">
                    <p>{slide.textRight}</p>
                </div>
            </div>
            <a href="#" className="cta-button">
                Inauguration 
            </a>
        </div>
    );
};

// Header Component


// Slider Component
const Slider = () => {
    const currentDate = new Date('2025-06-11'); // Current date: June 11, 2025

    // Filter future events
    const futureEvents = sliderData.filter((slide) => {
        const eventDate = new Date(slide.date);
        return eventDate > currentDate;
    });

    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        if (futureEvents.length === 0) return; // No events to slide

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % futureEvents.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [futureEvents.length]);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    if (futureEvents.length === 0) {
        return (
            <div>
               
                <div className="no-events">
                    <p>No upcoming events at this time.</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            
            <section className="slider">
                <div className="slides-container">
                    {futureEvents.map((slide, index) => (
                        <Slide
                            key={index}
                            slide={slide}
                            isActive={index === currentSlide}
                        />
                    ))}
                </div>
                {/* Navigation Elements */}
                <div className="slider-footer">
                    <div className="slide-counter">
                        {`0${currentSlide + 1}-0${futureEvents.length}`}
                    </div>
                    <div className="nav-dots">
                        {futureEvents.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleSlideChange(index)}
                                className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
                            ></button>
                        ))}
                    </div>
                    <div className="unit">in</div>
                </div>
            </section>
        </div>
    );
};

export default Slider;