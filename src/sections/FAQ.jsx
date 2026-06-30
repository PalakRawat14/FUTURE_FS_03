import { useState, useEffect, useRef } from 'react';
import { faqs } from '../utils/siteData';
import './FAQ.css';

export default function FAQ() {
  const [open, setOpen] = useState(null);
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
    <section id="faq" className="faq" ref={sectionRef}>
      <div className="faq-bg" />
      <div className="container">
        <div className={`faq-header ${visible ? 'animate-in' : ''}`}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked <span className="text-highlight">Questions</span></h2>
        </div>

        <div className={`faq-list ${visible ? 'animate-in' : ''}`}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? 'open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <button className="faq-question" aria-expanded={open === i}>
                <span>{faq.question}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-answer" style={{ maxHeight: open === i ? '200px' : '0' }}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
