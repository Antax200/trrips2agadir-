import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Contact Us | Trips 2 Agadir';
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          formType: 'contact'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <main className="pt-20 pb-16">
      {/* Hero Banner */}
      <div className="relative h-80 bg-gray-900 mb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/PzCxY5Cn/contact.jpg" 
            alt="Contact Trips 2 Agadir" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-tealbrand-900/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-2xl">Have questions? We're here to help you plan your perfect adventure.</p>
          </div>
        </div>
      </div>
      
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h3>
                <p className="text-green-600 mb-4">
                  Thank you for contacting Trips 2 Agadir. We've received your message and will get back to you within 24 hours.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)} 
                  variant="outline"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="tour">Tour Information</option>
                    <option value="prices">Pricing & Availability</option>
                    <option value="groups">Group Bookings</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" variant="secondary">
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-amber-600 text-white rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex">
                  <MapPin className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-tealbrand-100">123 Adventure Road<br />Agadir, Morocco</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-tealbrand-100">+212664884242</p>
                    <p className="text-tealbrand-100">+212643306702</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-tealbrand-100">contact@trips2agadir.com</p>
                    <p className="text-tealbrand-100">trips2agadir@hotmail.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Office Hours</h3>
                    <p className="text-tealbrand-100">Monday - Friday: 8am - 8pm</p>
                    <p className="text-tealbrand-100">Saturday - Sunday: 9am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Response Promise</h3>
              <p className="text-gray-700 mb-4">
                We're committed to providing you with prompt assistance. Our typical response time as soon as possible.
              </p>
              <p className="text-gray-700">
                For urgent inquiries or same-day bookings, please call us directly for immediate assistance.
              </p>
            </div>
          </motion.div>
        </div>
      
        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110098.31950214875!2d-9.660146003238005!3d30.419869165265197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9daad1cc9%3A0xbcf8d0b78bf48474!2sAgadir%2080000!5e0!3m2!1sfr!2sma!4v1747649525039!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Contact;