import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import TourCard from '../components/ui/TourCard';
import { tours } from '../types';
import { Tour } from '../types';

const Tours: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Trips 2 Agadir | Services '
  }, []);

  const [filteredTours, setFilteredTours] = useState<Tour[]>(tours);
  const [filters, setFilters] = useState({
    category: 'all',
    duration: 'all',
    price: 'all'
  });

  const handleFilterChange = (filterType: string, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    // Apply filters
    let result = [...tours];
    
    if (newFilters.category !== 'all') {
      result = result.filter(tour => tour.category === newFilters.category);
    }
    
    if (newFilters.duration !== 'all') {
      result = result.filter(tour => {
        const hours = parseInt(tour.duration.split(' ')[0]);
        switch (newFilters.duration) {
          case 'short':
            return hours <= 2;
          case 'medium':
            return hours > 2 && hours <= 4;
          case 'long':
            return hours > 4;
          default:
            return true;
        }
      });
    }
    
    if (newFilters.price !== 'all') {
      result = result.filter(tour => {
        switch (newFilters.price) {
          case 'budget':
            return tour.price <= 50;
          case 'standard':
            return tour.price > 50 && tour.price <= 70;
          case 'premium':
            return tour.price > 70;
          default:
            return true;
        }
      });
    }
    
    setFilteredTours(result);
  };

  return (
    <main className="pt-20 pb-16">
      {/* Hero Banner */}
      <div className="relative h-24 md:h-80 bg-gray-900 mb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/M5MQB64K/cover-services-02.jpg" 
            alt="Tours Cover" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-amber-600/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-base md:text-5xl font-bold text-white mb-0.5 md:mb-4">Discover Our Services</h1>
            <p className="text-[10px] md:text-xl text-white/90 max-w-2xl">Discover the perfect adventure for your style</p>
          </div>
        </div>
      </div>
      
      <Container>
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Filter Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {/* Difficulty Filter */}
            <div>
              <label className="block text-gray-700 mb-2">category</label>
              <select 
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="all">All Services</option>
                <option value="Tours">Tours</option>
                <option value="Excursions">Excursions</option>
                <option value="Activites">Activites</option>
              </select>
            </div>
            
            {/* Duration Filter */}
            <div>
              <label className="block text-gray-700 mb-2">Duration</label>
              <select 
                value={filters.duration}
                onChange={(e) => handleFilterChange('duration', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="all">All Durations</option>
                <option value="short">Short (≤ 2 hours)</option>
                <option value="medium">Medium (3-4 hours)</option>
                <option value="long">Long (5+ hours)</option>
              </select>
            </div>
            
            {/* Price Filter */}
            <div>
              <label className="block text-gray-700 mb-2">Price Range</label>
              <select 
                value={filters.price}
                onChange={(e) => handleFilterChange('price', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="all">All Prices</option>
                <option value="budget">Budget (≤ $50)</option>
                <option value="standard">Standard ($51-$70)</option>
                <option value="premium">Premium ($71+)</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Tour Listings */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredTours.map((tour, index) => (
              <motion.div 
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="transform scale-[0.98] md:scale-100"
              >
                <TourCard tour={tour} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 md:py-12">
            <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">No tours match your filters</h3>
            <p className="text-sm md:text-base text-gray-600">Try adjusting your filter criteria to see more options.</p>
          </div>
        )}
      </Container>
    </main>
  );
};

export default Tours;