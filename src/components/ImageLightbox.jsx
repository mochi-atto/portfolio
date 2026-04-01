import { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './ImageLightbox.css';

export default function ImageLightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const goNext = () => setCurrent((prev) => (prev + 1) % images.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose}>
          <FiX />
        </button>

        {images.length > 1 && (
          <button className="lightbox__arrow lightbox__arrow--left" onClick={goPrev}>
            <FiChevronLeft />
          </button>
        )}

        <img
          className="lightbox__image"
          src={images[current]}
          alt={`Image ${current + 1} of ${images.length}`}
        />

        {images.length > 1 && (
          <button className="lightbox__arrow lightbox__arrow--right" onClick={goNext}>
            <FiChevronRight />
          </button>
        )}

        {images.length > 1 && (
          <p className="lightbox__counter">
            {current + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  );
}