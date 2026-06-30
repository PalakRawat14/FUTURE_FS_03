import { useEffect, useRef, useState } from 'react';
import { contactInfo } from '../utils/siteData';
import './Contact.css';

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-bg" />
      <div className="container">
        <div className={`contact-header ${visible ? 'animate-in' : ''}`}>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Visit <span className="text-highlight">Brew Haven</span></h2>
          <p className="section-subtitle">
            We would love to hear from you. Drop by, give us a call, or send a message.
          </p>
        </div>

        <div className={`contact-grid ${visible ? 'animate-in' : ''}`}>
          <div className="contact-info">
            <div className="contact-card">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>{contactInfo.address}</p>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>{contactInfo.phone}</p>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>{contactInfo.email}</p>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">🕐</span>
              <div>
                <h4>Opening Hours</h4>
                {contactInfo.hours.map((h) => (
                  <p key={h.day} className="hours-row">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                {contactInfo.social.map((s) => (
                  <a key={s.name} href={s.url} className="social-link" aria-label={s.name}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="Brew Haven location"
              src={contactInfo.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
