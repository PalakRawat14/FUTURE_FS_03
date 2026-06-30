import { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 2;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => onFinish?.(), 600);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress, onFinish]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="coffee-cup">
          <div className="cup-body">
            <div className="cup-fill" />
            <div className="coffee-surface" />
          </div>
          <div className="cup-handle" />
          <div className="steam-container">
            <div className="steam steam-1" />
            <div className="steam steam-2" />
            <div className="steam steam-3" />
          </div>
        </div>

        <div className="loading-text">
          <h1 className="loading-title">Brew Haven</h1>
          <p className="loading-tagline">Crafting excellence, one cup at a time</p>
        </div>

        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="progress-percentage">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
