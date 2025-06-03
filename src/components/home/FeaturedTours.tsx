import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import TourCard from '../ui/TourCard';
import Button from '../ui/Button';
import { tours } from '../../types';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrow Components
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-amber-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-amber-700 focus:outline-none"
    aria-label="Next services"
  >
    <ChevronRight size={20} />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-amber-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-amber-700 focus:outline-none"
    aria-label="Previous services"
  >
    <ChevronLeft size={20} />
  </button>
);

const FeaturedTours: React.FC = () => {
  // Get the first 3 tours but replace Quad Bike Agadir with Paradise Valley
  const paradiseValleyTour = tours.find(tour => tour.title === 'Paradise Valley And Immouzzer From Agadir');
  const otherTours = tours
    .filter(tour => tour.title !== 'Quad Bike Agadir' && tour.title !== 'Paradise Valley And Immouzzer From Agadir')
    .slice(0, 2);
  const featuredTours = paradiseValleyTour ? [...otherTours, paradiseValleyTour] : otherTours;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          centerMode: true,
          centerPadding: '0px',
        }
      }
    ]
  };
  
  return (
    <section className="py-20 md:py-24 bg-yellow-50">
      <Container>
        <div className="text-center mb-12 md:mb-12">
          <motion.h2 
            className="text-4xl md:text-4xl font-bold text-amber-800 mb-5 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Popular Services
          </motion.h2>
          <motion.p 
            className="text-lg md:text-lg text-gray-600 max-w-3xl mx-auto px-8 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose from our most popular Services, each offering a unique perspective of Agadir's stunning landscapes and culture.
          </motion.p>
        </div>
        
        <div className="px-0 md:px-12 relative">
          <Slider {...settings}>
            {featuredTours.map((tour, index) => (
              <div key={tour.id} className="px-2 md:px-2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="transform hover:scale-[1.02] transition-transform duration-300 mx-2 md:mx-0"
                >
                  <TourCard tour={tour} />
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="text-center mt-12 md:mt-12">
          <Link to="/tours">
            <Button 
              variant="secondary" 
              size="lg"
              className="w-full md:w-auto text-lg md:text-lg py-5 md:py-4 px-10 md:px-8"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedTours;