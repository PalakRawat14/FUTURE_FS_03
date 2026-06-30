import { useEffect } from 'react';
import './Lightbox.css';

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ✕
      </button>
      <img
        className="lightbox-image"
        src={image.src}
        alt={image.alt}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
