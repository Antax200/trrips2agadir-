import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import TourCard from '../ui/TourCard';
import Button from '../ui/Button';
import { tours } from '../../types';

const FeaturedTours: React.FC = () => {
  // Get the first 3 tours but replace Quad Bike Agadir with Paradise Valley
  const paradiseValleyTour = tours.find(tour => tour.title === 'Paradise Valley And Immouzzer From Agadir');
  const otherTours = tours
    .filter(tour => tour.title !== 'Quad Bike Agadir' && tour.title !== 'Paradise Valley And Immouzzer From Agadir')
    .slice(0, 2);
  const featuredTours = paradiseValleyTour ? [...otherTours, paradiseValleyTour] : otherTours;
  
  return (
    <section className="py-16 md:py-24 bg-yellow-50">
      <Container>
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-amber-800 mb-4 bg-yellow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Popular Services
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose from our most popular Services, each offering a unique perspective of Agadir's stunning landscapes and culture.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTours.map((tour, index) => (
            <motion.div 
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/tours">
            <Button variant="secondary" size="lg">
              View All Tours
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedTours;