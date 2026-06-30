import { useState, useEffect, useRef } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section className="newsletter" ref={sectionRef}>
      <div className="newsletter-bg" />
      <div className={`newsletter-content container ${visible ? 'animate-in' : ''}`}>
        <span className="section-label">Stay Connected</span>
        <h2 className="section-title">Join Our <span className="text-highlight">Coffee Club</span></h2>
        <p className="newsletter-desc">
          Be the first to know about new brews, exclusive offers, and café events.
        </p>

        {subscribed ? (
          <div className="newsletter-success">
            <span>✓</span> You have joined the Coffee Club!
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
