import { useEffect, useRef, useState } from 'react';
import { whyChooseUs } from '../utils/aboutData';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
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
    <section id="why-us" className="why-choose" ref={sectionRef}>
      <div className="why-choose-bg" />
      <div className="container">
        <div className={`why-choose-header ${visible ? 'animate-in' : ''}`}>
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">What Makes Us <span className="text-highlight">Different</span></h2>
          <p className="section-subtitle">
            Every detail at Brew Haven is intentional — from bean to cup, from kitchen to table.
          </p>
        </div>

        <div className="why-choose-grid">
          {whyChooseUs.map((item, i) => (
            <div
              key={item.title}
              className={`why-card ${visible ? 'card-enter' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="why-icon">{item.icon}</span>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
