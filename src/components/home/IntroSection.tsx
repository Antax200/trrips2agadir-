import React from 'react';
import { motion } from 'framer-motion';
import { CalendarX2Icon, SmilePlusIcon, HeartHandshakeIcon } from 'lucide-react';
import Container from '../ui/Container';

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
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us ?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IntroSection;