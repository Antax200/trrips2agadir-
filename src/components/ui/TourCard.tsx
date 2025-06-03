import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, Compass, Mountain, Activity, Star } from 'lucide-react';
import { Tour } from '../../types';
import Button from './Button';

interface TourCardProps {
  tour: Tour;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Tours':
      return <Mountain className="w-5 h-5" />;
    case 'Excursions':
      return <Compass className="w-5 h-5" />;
    case 'Activites':
      return <Activity className="w-5 h-5" />;
    default:
      return <MapPin className="w-5 h-5" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Tours':
      return 'bg-blue-600';
    case 'Excursions':
      return 'bg-green-600';
    case 'Activites':
      return 'bg-amber-600';
    default:
      return 'bg-gray-600';
  }
};

const getRatingColor = (rating: number) => {
  if (rating >= 4.8) return 'text-yellow-500 bg-yellow-50';
  if (rating >= 4.5) return 'text-amber-500 bg-amber-50';
  return 'text-orange-500 bg-orange-50';
};

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering && tour.gallery.length > 0) {
      setCurrentImageIndex(1);
    } else {
      setCurrentImageIndex(0);
    }
  }, [isHovering, tour.gallery.length]);

  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform scale-[0.98] md:scale-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div 
        className="relative h-48 md:h-64 overflow-hidden group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ 
            width: '200%',
            transform: `translateX(-${currentImageIndex * 50}%)`
          }}
        >
          <img 
            src={tour.imageUrl} 
            alt={tour.title} 
            className="w-1/2 h-full object-cover flex-shrink-0"
          />
          {tour.gallery.length > 0 && (
            <img 
              src={tour.gallery[0]} 
              alt={`${tour.title} - Gallery Image`}
              className="w-1/2 h-full object-cover flex-shrink-0"
            />
          )}
        </div>
        <div className={`absolute top-0 right-0 ${getCategoryColor(tour.category)} text-white py-1 px-2 md:px-3 m-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1`}>
          {getCategoryIcon(tour.category)}
          <span>{tour.category}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 md:p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 line-clamp-1 flex-1">{tour.title}</h3>
          <div className="ml-4 bg-amber-500 text-white px-3 md:px-3 py-1.5 rounded-lg font-bold text-base md:text-lg">
            ${tour.price}
          </div>
        </div>

        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-4 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">{tour.shortDescription}</p>

        <div className="flex flex-wrap gap-2 md:gap-3 mb-5 md:mb-6">
          <div className="flex items-center text-blue-600 bg-blue-50 px-3 md:px-3 py-1.5 rounded-full">
            <Clock size={16} className="mr-1.5 md:w-4 md:h-4" />
            <span className="text-sm md:text-sm font-medium">{tour.duration}</span>
          </div>
          <div className={`flex items-center ${getRatingColor(tour.rating)} px-3 md:px-3 py-1.5 rounded-full`}>
            <Star size={16} className="mr-1.5 md:w-4 md:h-4 fill-current" />
            <span className="text-sm md:text-sm font-medium">{tour.rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="flex justify-between items-center gap-3 md:gap-4">
          <Link to={`/tours/${tour.slug}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full text-sm md:text-sm py-2 md:py-2">
              View Details
            </Button>
          </Link>
          <Link to={`/tours/${tour.slug}#booking`} className="flex-1">
            <Button variant="secondary" size="sm" className="w-full text-sm md:text-sm py-2 md:py-2">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;