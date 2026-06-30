import { useEffect, useRef, useState } from 'react';
import { timeline } from '../utils/aboutData';
import './About.css';

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-bg" />
      <div className="container">
        <div className={`about-grid ${visible ? 'animate-in' : ''}`}>
          <div className="about-image-wrapper">
            <div className="about-image-frame">
              <img
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80"
                alt="Brew Haven Café interior"
                loading="lazy"
              />
            </div>
            <div className="about-image-accent" />
            <div className="about-experience-badge">
              <span className="badge-number">7+</span>
              <span className="badge-label">Years of Excellence</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">The Brew Haven <span className="text-highlight">Journey</span></h2>
            <p className="about-description">
              Brew Haven was born from a simple belief — that great coffee has the power to bring people together.
              Founded in 2018, we set out to create more than just a café; we built a sanctuary where every sip tells
              a story of passion, craftsmanship, and community.
            </p>
            <p className="about-description">
              From our carefully sourced single-origin beans to our artisanal pastries baked fresh each morning,
              every detail is designed to elevate your experience. We don&rsquo;t just serve coffee — we craft moments
              that linger long after the last drop.
            </p>

            <div className="about-timeline">
              {timeline.map((item, i) => (
                <div key={item.year} className={`timeline-item ${visible ? 'timeline-enter' : ''}`} style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
                  <div className="timeline-marker">
                    <span className="timeline-dot" />
                    <span className="timeline-line" />
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
