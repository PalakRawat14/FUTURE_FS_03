import { useEffect, useRef, useState } from 'react';
import './Stats.css';

const counters = [
  { key: 'customers', end: 5000, suffix: '+', label: 'Happy Customers' },
  { key: 'orders', end: 120, suffix: '+', label: 'Daily Orders' },
  { key: 'recipes', end: 40, suffix: '+', label: 'Coffee Recipes' },
  { key: 'years', end: 7, suffix: '', label: 'Years Experience' },
];

export default function Stats() {
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const stepTime = 25;
    const steps = duration / stepTime;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const next = {};
      counters.forEach(({ key, end, suffix }) => {
        next[key] = Math.floor(progress * end) + suffix;
      });
      setCounts(next);
      if (progress >= 1) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [started]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-bg" />
      <div className="stats-grid container">
        {counters.map((c, i) => (
          <div
            key={c.key}
            className={`stat-block ${started ? 'stat-enter' : ''}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="stat-number">{counts[c.key] || `0${c.suffix}`}</span>
            <span className="stat-desc">{c.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
