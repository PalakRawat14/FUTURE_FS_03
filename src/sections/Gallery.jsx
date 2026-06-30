import { useState, useEffect, useRef } from 'react';
import { galleryImages, galleryFilters } from '../utils/galleryData';
import Lightbox from '../components/Lightbox';
import './Gallery.css';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const filtered = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="gallery" ref={sectionRef}>
      <div className="gallery-bg" />
      <div className="container">
        <div className={`gallery-header ${visible ? 'animate-in' : ''}`}>
          <span className="section-label">Our Gallery</span>
          <h2 className="section-title">Visual <span className="text-highlight">Moments</span></h2>
          <p className="section-subtitle">
            A glimpse into the Brew Haven experience — where every corner tells a story.
          </p>
        </div>

        <div className={`gallery-filters ${visible ? 'animate-in' : ''}`}>
          {galleryFilters.map((f) => (
            <button
              key={f.id}
              className={`gallery-filter ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid" key={activeFilter}>
          {filtered.map((img, i) => (
            <div
              className={`gallery-item ${visible ? 'item-in' : ''}`}
              style={{ animationDelay: `${i * 0.05}s` }}
              key={img.id}
              onClick={() => setLightboxImage(img)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-item-overlay">
                <span className="gallery-item-label">{img.alt}</span>
                <span className="gallery-item-icon">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </section>
  );
}
