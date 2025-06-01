import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import FeaturedTours from '../components/home/FeaturedTours';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Trips 2 Agadir | Home '
  }, []);

  return (
    <main>
      <HeroSection />
      <IntroSection />
      <FeaturedTours />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default Home;