import React, { useState } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = null,
  webpSrc = null,
  ...props 
}) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <div 
      className={`lazy-image-container ${className}`}
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0'
      }}
    >
      {/* Main image */}
      <img
        src={src}
        alt={alt}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        {...props}
      />

      {/* Error placeholder */}
      {error && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            fontSize: '14px'
          }}
        >
          Image not available
        </div>
      )}
    </div>
  );
};

export default LazyImage; 