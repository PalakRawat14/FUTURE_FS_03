import { contactInfo } from '../utils/siteData';
import './Footer.css';

const footerLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Reservation', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-icon">☕</span>
              <span className="logo-text">Brew Haven</span>
            </a>
            <p className="footer-desc">
              Crafting exceptional coffee experiences since 2018. Every cup tells a story of passion, quality, and community.
            </p>
            <div className="footer-social">
              {contactInfo.social.map((s) => (
                <a key={s.name} href={s.url} className="footer-social-link" aria-label={s.name}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Opening Hours</h4>
            <ul className="footer-hours">
              {contactInfo.hours.map((h) => (
                <li key={h.day}>
                  <span className="hours-day">{h.day}</span>
                  <span className="hours-time">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Newsletter</h4>
            <p className="footer-newsletter-desc">
              Subscribe for exclusive offers and new brew announcements.
            </p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" required />
              <button type="submit" className="btn btn-primary">Join</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>&copy; {year} Brew Haven Café. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
