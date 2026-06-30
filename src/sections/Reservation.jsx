import { useState, useEffect, useRef } from 'react';
import './Reservation.css';

const initial = { name: '', email: '', phone: '', guests: '', date: '', time: '', request: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Invalid email address';
  if (!form.phone.trim()) errors.phone = 'Phone is required';
  else if (!/^[+]?[\d\s()-]{7,15}$/.test(form.phone)) errors.phone = 'Invalid phone number';
  if (!form.guests) errors.guests = 'Number of guests is required';
  if (!form.date) errors.date = 'Date is required';
  if (!form.time) errors.time = 'Time is required';
  return errors;
}

export default function Reservation() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm(initial);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const fields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
    { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 98765 43210' },
    { name: 'guests', label: 'Guests', type: 'number', placeholder: '2' },
    { name: 'date', label: 'Date', type: 'date' },
    { name: 'time', label: 'Time', type: 'time' },
  ];

  return (
    <section id="reservation" className="reservation" ref={sectionRef}>
      <div className="reservation-bg" />
      <div className="container">
        <div className={`reservation-inner ${visible ? 'animate-in' : ''}`}>
          <div className="reservation-info">
            <span className="section-label">Reservation</span>
            <h2 className="section-title">Book Your <span className="text-highlight">Experience</span></h2>
            <p className="reservation-desc">
              Reserve your table at Brew Haven and indulge in an unforgettable coffee experience.
              Whether it is a quiet morning or a celebratory evening, we have the perfect spot for you.
            </p>
            <div className="reservation-details">
              <div className="reservation-detail">
                <span className="detail-icon">📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="reservation-detail">
                <span className="detail-icon">✉️</span>
                <span>hello@brewhavencafe.com</span>
              </div>
              <div className="reservation-detail">
                <span className="detail-icon">📍</span>
                <span>42 Serenity Lane, Dehradun, Uttarakhand</span>
              </div>
            </div>
          </div>

          <form className="reservation-form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <div className="reservation-success">
                <span className="success-icon">✓</span>
                <div>
                  <strong>Reservation Submitted!</strong>
                  <p>We will confirm your booking shortly.</p>
                </div>
              </div>
            )}

            <div className="form-grid">
              {fields.map((f) => (
                <div key={f.name} className="form-group">
                  <label htmlFor={`res-${f.name}`}>{f.label}</label>
                  <input
                    id={`res-${f.name}`}
                    type={f.type}
                    name={f.name}
                    value={form[f.name]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    min={f.type === 'number' ? 1 : undefined}
                    className={errors[f.name] ? 'error' : ''}
                  />
                  {errors[f.name] && <span className="form-error">{errors[f.name]}</span>}
                </div>
              ))}
            </div>

            <div className="form-group full">
              <label htmlFor="res-request">Special Request</label>
              <textarea
                id="res-request"
                name="request"
                value={form.request}
                onChange={handleChange}
                placeholder="Any special occasion or dietary requirements?"
                rows={3}
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              Reserve Table
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
