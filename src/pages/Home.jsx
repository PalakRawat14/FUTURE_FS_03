import Hero from '../sections/Hero';
import FeaturedCoffee from '../sections/FeaturedCoffee';
import About from '../sections/About';
import WhyChooseUs from '../sections/WhyChooseUs';
import Stats from '../sections/Stats';
import TodaySpecial from '../sections/TodaySpecial';
import FullMenu from '../sections/FullMenu';
import Baristas from '../sections/Baristas';
import Testimonials from '../sections/Testimonials';
import Gallery from '../sections/Gallery';
import InstagramPreview from '../sections/InstagramPreview';
import Reservation from '../sections/Reservation';
import FAQ from '../sections/FAQ';
import Newsletter from '../sections/Newsletter';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCoffee />
      <About />
      <WhyChooseUs />
      <Stats />
      <TodaySpecial />
      <FullMenu />
      <Baristas />
      <Testimonials />
      <Gallery />
      <InstagramPreview />
      <Reservation />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
