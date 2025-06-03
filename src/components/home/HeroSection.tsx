import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { useBooking } from '../ui/BookingContext';
import { format, addDays } from 'date-fns';
import Container from '../ui/Container';

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
    // If date is provided, save the booking data
    if (startDate) {
      setBookingData({ startDate, adults, children });
    }
    // Navigate to tours page
    navigate('/tours');
  };

  return (
    <>
      {/* Hero Section */}
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
        <div className="relative z-10 flex flex-col items-left justify-center h-full text-left px-4 md:px-40">
          <motion.h1 
            className="text-3xl md:text-6xl font-bold text-white max-w-4xl mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="md:hidden">Explore Agadir's Best Tours & Adventures!</span>
            <span className="hidden md:inline">Discover Agadir - sun, culture, and adventure!</span>
          </motion.h1>

          <motion.p 
            className="text-base md:text-xl text-gray-200 max-w-2xl mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="md:hidden">Experience the best of Agadir with our curated tours. From desert adventures to cultural experiences, we've got you covered!</span>
            <span className="hidden md:inline">Discover stunning landscapes, from golden sand dunes to coastal adventures along Agadir's natural coastline.</span>
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              onClick={handleSearch}
              className="w-full md:w-auto"
            >
              <Button size="lg" variant="secondary" className="w-full md:w-auto text-base md:text-lg py-3 md:py-4 px-6 md:px-8">
                Explore Tours
              </Button>
            </button>
            <Link to="/contact#booking" className="w-full md:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full md:w-auto text-base md:text-lg py-3 md:py-4 px-6 md:px-8 border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Booking Form Section - With original functionality */}
      <section className="relative z-10 -mt-8 md:-mt-12 mb-8 md:mb-12">
        <Container>
          <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-0">
                Plan Your Stay
              </h2>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input 
                  type="date" 
                  value={startDate}
                  min={tomorrow}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" 
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                <input 
                  type="number" 
                  min="1" 
                  value={adults}
                  onChange={(e) => setAdults(Math.max(1, Number(e.target.value)))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" 
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                <input 
                  type="number" 
                  min="0" 
                  value={children}
                  onChange={(e) => setChildren(Math.max(0, Number(e.target.value)))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" 
                />
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-amber-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <span>Search</span>
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
