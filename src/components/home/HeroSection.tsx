import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { useBooking } from '../ui/BookingContext';
import { format, addDays } from 'date-fns';

const HeroSection: React.FC = () => {
  const { bookingData, setBookingData } = useBooking();
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  // Get tomorrow's date as minimum date
  const tomorrow = format(addDays(new Date(), 1), 'yyyy-MM-dd');

  useEffect(() => {
    // Populate form with existing bookingData (if any)
    if (bookingData) {
      setStartDate(bookingData.startDate || '');
      setAdults(bookingData.adults || 1);
      setChildren(bookingData.children || 0);
    }
  }, [bookingData]);

  const handleSearch = () => {
    if (!startDate) {
      alert('Please select a date');
      return;
    }
    setBookingData({ startDate, adults, children });
    navigate('/tours');
  };

  return (
    <>
      <div className="relative h-screen min-h-[600px] bg-gray-900">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://toursinagadir.com/wp-content/uploads/2021/07/agadir-4834349_1920.jpg" 
            alt="Quad biking adventure in Agadir" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-left justify-center h-full text-left px-40">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover Agadir - sun, culture, and adventure!
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover stunning landscapes, from golden sand dunes to coastal adventures along Agadir's natural coastline.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button onClick={handleSearch}>
              <Button size="lg" variant="secondary">
                Explore Tours
              </Button>
            </button>
            <Link to="/contact#booking">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        >
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>

      {/* Booking Form Section */}
      <section className="p-4 bg-yellow-100 rounded-xl max-w-4xl mx-auto mt-6">
        <h2 className="text-xl font-semibold mb-4">Plan Your Stay</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input 
              type="date" 
              value={startDate}
              min={tomorrow}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border rounded" 
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Adults</label>
            <input 
              type="number" 
              min="1" 
              value={adults}
              onChange={(e) => setAdults(Math.max(1, Number(e.target.value)))}
              className="w-full p-2 border rounded" 
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Children</label>
            <input 
              type="number" 
              min="0" 
              value={children}
              onChange={(e) => setChildren(Math.max(0, Number(e.target.value)))}
              className="w-full p-2 border rounded" 
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-amber-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
