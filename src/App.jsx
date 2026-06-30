import { useState, useEffect, lazy, Suspense } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import StickyReserve from './components/StickyReserve';

const MainLayout = lazy(() => import('./layouts/MainLayout'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-primary)',
    }}>
      <div className="coffee-cup" style={{ transform: 'scale(0.6)' }}>
        <div className="cup-body" />
        <div className="cup-handle" />
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [route, setRoute] = useState('home');
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  const navigate = (to) => {
    setTransition(true);
    setTimeout(() => {
      setRoute(to);
      setTransition(false);
    }, 300);
  };

  const renderPage = () => {
    switch (route) {
      case 'home':
        return <Home />;
      default:
        return <NotFound />;
    }
  };

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.5s ease',
        }}
      >
        <ScrollProgress />

        <Suspense fallback={<PageFallback />}>
          <div className={transition ? 'page-exit' : 'page-enter'}>
            <MainLayout>
              {renderPage()}
            </MainLayout>
          </div>
        </Suspense>

        <BackToTop />
        <WhatsAppButton />
        <StickyReserve />
      </div>
    </>
  );
}
