import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tour: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('https://formspree.io/f/xzzgpwnk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'quick_inquiry'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          tour: ''
        });
      } else {
        setError('Failed to send inquiry. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('An error occurred. Please try again later.');
    }
  };

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
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <h4 className="text-lg font-bold text-green-700 mb-2">
                  Inquiry Sent!
                </h4>
                <p className="text-green-600 mb-4">
                  Thank you for your inquiry. We'll get back to you shortly.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-2"
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <select 
                    name="tour"
                    value={formData.tour}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  >
                    <option value="">Select Tour</option>
                    <option value="Agadir Boat Trip">Agadir Boat Trip</option>
                    <option value="Sandboarding Agadir Trip">Sandboarding Agadir Trip</option>
                    <option value="Berber Night Show in Agadir Fantasia Show">Berber Night Show in Agadir Fantasia Show</option>
                    <option value="Paradise Valley And Immouzzer From Agadir">Paradise Valley And Immouzzer From Agadir</option>
                  </select>
                </div>
                <Button variant="primary" type="submit" fullWidth>
                  Send Inquiry
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;