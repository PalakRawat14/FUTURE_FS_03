import { useEffect, useRef, useState } from 'react';
import { featuredCoffee } from '../utils/coffeeData';
import './FeaturedCoffee.css';

export default function FeaturedCoffee() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section id="featured" className="featured" ref={sectionRef}>
      <div className="featured-bg" />
      <div className="container">
        <div className={`featured-header ${visible ? 'animate-in' : ''}`}>
          <span className="section-label">Our Selection</span>
          <h2 className="section-title">Featured Coffee</h2>
          <p className="section-subtitle">
            From velvety lattes to bold cold brews, each cup is a masterpiece
            crafted with premium single-origin beans.
          </p>
        </div>

        <div className="featured-grid">
          {featuredCoffee.map((coffee, index) => (
            <div
              key={coffee.id}
              className={`coffee-card ${visible ? 'card-enter' : ''}`}
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="coffee-card-image">
                <img src={coffee.image} alt={coffee.name} loading="lazy" />
                <div className="coffee-card-overlay">
                  <span className="coffee-card-price">{coffee.price}</span>
                </div>
              </div>
              <div className="coffee-card-body">
                <h3 className="coffee-card-name">{coffee.name}</h3>
                <p className="coffee-card-desc">{coffee.description}</p>
                <span className="coffee-card-price-mobile">{coffee.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
