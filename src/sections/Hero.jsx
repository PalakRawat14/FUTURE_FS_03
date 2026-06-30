import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const stats = [
  { value: '★★★★★', label: 'Rating', className: 'stars' },
  { value: '5000+', label: 'Happy Customers' },
  { value: '40+', label: 'Coffee Varieties' },
  { value: '7', label: 'Years Experience' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState({});
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const targets = [
      { key: 'customers', end: 5000, suffix: '+' },
      { key: 'varieties', end: 40, suffix: '+' },
      { key: 'years', end: 7, suffix: '' },
    ];

    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);

      const newCounts = {};
      targets.forEach(({ key, end, suffix }) => {
        const value = Math.floor(progress * end);
        newCounts[key] = value + suffix;
      });

      setCounts(newCounts);

      if (progress >= 1) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [visible]);

  const scrollToFeatured = () => {
    document.querySelector('#featured')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      <div className="hero-overlay" />
      <div className="hero-bg" />

      <div className="hero-decorations">
        <div className="floating-bean bean-1" />
        <div className="floating-bean bean-2" />
        <div className="floating-bean bean-3" />
      </div>

      <div className="hero-content container">
        <span className="hero-badge">Welcome to Brew Haven</span>
        <h1 className={`hero-title ${visible ? 'animate-in' : ''}`}>
          Brewed to <span className="hero-highlight">Perfection</span>
        </h1>
        <p className={`hero-subtitle ${visible ? 'animate-in' : ''}`}>
          Experience handcrafted coffee, artisan pastries, and unforgettable moments.
        </p>

        <div className={`hero-actions ${visible ? 'animate-in' : ''}`}>
          <a href="#featured" className="btn btn-primary hero-btn" onClick={(e) => { e.preventDefault(); scrollToFeatured(); }}>
            Explore Menu
          </a>
          <a href="#reservation" className="btn btn-outline hero-btn">
            Reserve a Table
          </a>
        </div>

        <div className={`hero-stats ${visible ? 'animate-in' : ''}`} ref={statsRef}>
          <div className="stat-item">
            <span className="stat-value stars">★★★★★</span>
            <span className="stat-label">Rating</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">{counts.customers || '0+'}</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">{counts.varieties || '0+'}</span>
            <span className="stat-label">Coffee Varieties</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">{counts.years || '0'}</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>

      <button className="scroll-indicator" onClick={scrollToFeatured} aria-label="Scroll to explore">
        <span className="scroll-text">Scroll</span>
        <span className="scroll-line" />
      </button>
    </section>
  );
}
