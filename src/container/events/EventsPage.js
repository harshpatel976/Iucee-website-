import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LazyImage from '../../components/LazyImage';
import events from './event.json';
import './eventstyle.css';

const EventDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === id);

  const [selectedImage, setSelectedImage] = useState(null); // for modal

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!event) return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '50vh',
      color: '#fff',
      fontSize: '18px'
    }}>
      Event not found
    </div>
  );

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
          {event.images && event.images.length > 0 ? (
            event.images.map((img, index) => (
              <div key={index} className="event-image-container" onClick={() => setSelectedImage(img)}>
                <LazyImage 
                  src={img} 
                  alt={`${event.name} ${index + 1}`}
                  className="event-gallery-image"
                />
              </div>
            ))
          ) : (
            <div style={{color: 'red', fontWeight: 'bold'}}>No images found for this event.</div>
          )}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <span className="close-button" onClick={() => setSelectedImage(null)}>&times;</span>
          <img className="modal-image" src={selectedImage} alt="Full View" />
        </div>
      )}
    </>
  );
};

export default EventDetailPage;
