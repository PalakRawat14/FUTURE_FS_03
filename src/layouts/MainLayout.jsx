import Navbar from '../sections/Navbar';
import './MainLayout.css';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
