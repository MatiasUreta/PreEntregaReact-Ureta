import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    '/img/grafico.jpg',
    '/img/redes.jpg',
    '/img/carouseluno.webp',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ maxHeight: '400px' }}>
        <img
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default Carousel;
