import './NotFound.css';

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-bg" />
      <div className="not-found-content">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-desc">
          Oops! This page seems to have wandered off — perhaps in search of a fresh brew.
        </p>
        <a href="#hero" className="btn btn-primary">
          Back to Home
        </a>
      </div>
    </main>
  );
}
