import { useEffect, useRef, useState } from 'react';
import { todaysSpecial } from '../utils/menuData';
import './TodaySpecial.css';

export default function TodaySpecial() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="special" className="today-special" ref={sectionRef}>
      <div className="special-bg">
        <img src={todaysSpecial.image} alt="" aria-hidden="true" />
        <div className="special-overlay" />
      </div>

      <div className={`special-content container ${visible ? 'animate-in' : ''}`}>
        <span className="section-label">Today&rsquo;s Special</span>
        <h2 className="special-name">{todaysSpecial.name}</h2>
        <p className="special-desc">{todaysSpecial.description}</p>
        <div className="special-footer">
          <span className="special-price">{todaysSpecial.price}</span>
          <a href="#reservation" className="btn btn-primary">
            Reserve Now
          </a>
        </div>
      </div>
    </section>
  );
}
