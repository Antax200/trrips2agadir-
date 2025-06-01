import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-amber-600 text-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="max-w-2xl mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Agadir Adventure?</h2>
            <p className="text-lg text-amber-100 mb-6">
              Book your experience today and create memories that will last a lifetime. Our friendly team is ready to help you plan the perfect adventure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/tours">
                <Button variant="secondary" size="lg">
                  Explore Tours
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md text-gray-800 w-full md:w-auto md:min-w-[300px]"
          >
            <h3 className="text-xl font-bold mb-4">Quick Inquiry</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                >
                  <option value="">Select Tour</option>
                  <option value="Agadir Boat Trip">Agadir Boat Trip</option>
                  <option value="Sandboarding Agadir Trip">Sandboarding Agadir Trip
                  </option>
                  <option value="Berber Night Show in Agadir Fantasia Show">Berber Night Show in Agadir Fantasia Show
                  </option>
                  <option value="Paradise Valley And Immouzzer From Agadir">Paradise Valley And Immouzzer From Agadir
                  </option>
                </select>
              </div>
              <Button variant="primary" type="submit" fullWidth>
                Send Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;