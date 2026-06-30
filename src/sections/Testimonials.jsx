import { useState, useEffect, useRef } from 'react';
import { testimonials } from '../utils/siteData';
import './Testimonials.css';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDot = (i) => {
    setActive(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 5000);
  };

  const t = testimonials[active];

  return (
    <section id="reviews" className="testimonials" ref={sectionRef}>
      <div className="testimonials-bg" />
      <div className="container">
        <div className={`testimonials-header ${visible ? 'animate-in' : ''}`}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our <span className="text-highlight">Guests Say</span></h2>
        </div>

        <div className={`testimonial-card ${visible ? 'animate-in' : ''}`}>
          <div className="testimonial-inner">
            <div className="testimonial-image">
              <img src={t.image} alt={t.name} />
            </div>
            <div className="testimonial-stars">
              {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
            </div>
            <p className="testimonial-text">"{t.text}"</p>
            <span className="testimonial-name">{t.name}</span>
          </div>

          <div className="testimonial-controls">
            <button className="testimonial-arrow" onClick={prev} aria-label="Previous">←</button>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === active ? 'active' : ''}`}
                  onClick={() => handleDot(i)}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button className="testimonial-arrow" onClick={next} aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
