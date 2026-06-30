import { useState, useEffect } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Baristas', href: '#baristas' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Reservation', href: '#reservation' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const scrolled = useScrollPosition(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-solid' : ''}`}>
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-logo" onClick={closeMobile}>
          <span className="logo-icon">☕</span>
          <span className="logo-text">Brew Haven</span>
        </a>

        <div className={`navbar-links ${mobileOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={closeMobile}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <a href="#reservation" className="btn btn-primary nav-cta" onClick={closeMobile}>
            Reserve Table
          </a>
          <button
            className={`hamburger ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {mobileOpen && <div className="navbar-overlay" onClick={closeMobile} />}
    </nav>
  );
}
