import { useState, useEffect } from 'react';
import './StickyReserve.css';

export default function StickyReserve() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#reservation"
      className={`sticky-reserve ${visible ? 'visible' : ''}`}
      aria-label="Reserve a table"
    >
      <span>Reserve a Table</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
