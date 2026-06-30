import { useState, useEffect, useRef } from 'react';
import { menuCategories } from '../utils/menuData';
import './FullMenu.css';

export default function FullMenu() {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const activeCategory = menuCategories.find((c) => c.id === activeTab);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" className="full-menu" ref={sectionRef}>
      <div className="menu-bg" />
      <div className="container">
        <div className={`menu-header ${visible ? 'animate-in' : ''}`}>
          <span className="section-label">Our Menu</span>
          <h2 className="section-title">Crafted to <span className="text-highlight">Perfection</span></h2>
          <p className="section-subtitle">
            Explore our thoughtfully curated selection, from bold espresso blends to delicate pastries.
          </p>
        </div>

        <div className={`menu-tabs ${visible ? 'animate-in' : ''}`}>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              className={`menu-tab ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu-items-grid" key={activeTab}>
          {activeCategory?.items.map((item, i) => (
            <div
              className={`menu-item ${visible ? 'item-enter' : ''}`}
              style={{ animationDelay: `${i * 0.06}s` }}
              key={item.id}
            >
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} loading="lazy" />
                {item.veg && <span className="veg-badge">V</span>}
              </div>
              <div className="menu-item-body">
                <div className="menu-item-header">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p className="menu-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
