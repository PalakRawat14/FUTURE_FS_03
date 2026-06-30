import { useEffect, useRef, useState } from 'react';
import { baristas } from '../utils/siteData';
import './Baristas.css';

export default function Baristas() {
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
    <section id="baristas" className="baristas" ref={sectionRef}>
      <div className="baristas-bg" />
      <div className="container">
        <div className={`baristas-header ${visible ? 'animate-in' : ''}`}>
          <span className="section-label">Our Team</span>
          <h2 className="section-title">Meet Our <span className="text-highlight">Baristas</span></h2>
          <p className="section-subtitle">
            Passionate artisans dedicated to crafting your perfect cup, every single time.
          </p>
        </div>

        <div className="baristas-grid">
          {baristas.map((b, i) => (
            <div
              key={b.id}
              className={`barista-card ${visible ? 'card-enter' : ''}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="barista-image">
                <img src={b.image} alt={b.name} loading="lazy" />
                <div className="barista-image-ring" />
              </div>
              <h3 className="barista-name">{b.name}</h3>
              <div className="barista-meta">
                <span className="barista-exp">{b.experience}</span>
                <span className="barista-dot">·</span>
                <span className="barista-specialty">{b.specialty}</span>
              </div>
              <p className="barista-quote">"{b.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
