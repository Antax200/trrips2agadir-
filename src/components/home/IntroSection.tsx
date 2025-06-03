import React from 'react';
import { motion } from 'framer-motion';
import { CalendarX2Icon, SmilePlusIcon, HeartHandshakeIcon } from 'lucide-react';
import Container from '../ui/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const features = [
  {
    icon: <SmilePlusIcon className="w-12 h-12 text-amber-600" />,
    title: 'Satisfied or satisfied',
    description: 'We continually strive to ensure your satisfaction, because we value your trust.'
  },
  {
    icon: <HeartHandshakeIcon className="w-12 h-12 text-amber-600" />,
    title: '7/7 Support',
    description: 'From 08:00 to 20:00, we are at your disposal for any further information.'
  },
  {
    icon: <CalendarX2Icon className="w-12 h-12 text-amber-600" />,
    title: 'Free cancellation',
    description: 'You can cancel your booking at any time, in case of unforeseen circumstances.'
  }
];

const IntroSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <section className="py-12 md:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <motion.h2 
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us ?
          </motion.h2>
        </div>
        
        <div className="px-4 md:px-0">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="px-2">
                <motion.div 
                  className="bg-gray-50 rounded-lg p-6 md:p-8 text-center hover:shadow-lg transition-shadow duration-300 h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex justify-center mb-4 md:mb-6">
                    {React.cloneElement(feature.icon, { className: "w-10 h-10 md:w-12 md:h-12 text-amber-600" })}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default IntroSection;