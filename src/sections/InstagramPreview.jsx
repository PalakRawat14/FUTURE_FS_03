import { useEffect, useRef, useState } from 'react';
import Lightbox from '../components/Lightbox';
import './InstagramPreview.css';

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80', alt: 'Morning pour over' },
  { id: 2, src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80', alt: 'Latte art' },
  { id: 3, src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&q=80', alt: 'Café interior' },
  { id: 4, src: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80', alt: 'Pastry display' },
  { id: 6, src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80', alt: 'Latte art heart' },
];

export default function InstagramPreview() {
  const [lightbox, setLightbox] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="instagram-preview" ref={sectionRef}>
      <div className={`insta-header ${visible ? 'animate-in' : ''}`}>
        <span className="section-label">Follow Us</span>
        <h2 className="section-title">@brewhaven <span className="text-highlight">Café</span></h2>
        <p className="section-subtitle">Tag us in your Brew Haven moments for a chance to be featured.</p>
      </div>

      <div className="insta-grid">
        {images.map((img, i) => (
          <div
            key={img.id}
            className={`insta-item ${visible ? 'item-enter' : ''}`}
            style={{ animationDelay: `${i * 0.06}s` }}
            onClick={() => setLightbox(img)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="insta-overlay">
              <span>📷</span>
            </div>
          </div>
        ))}
      </div>

      {lightbox && <Lightbox image={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}
