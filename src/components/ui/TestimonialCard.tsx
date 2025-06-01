import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, date, rating, text, tourName, avatar } = testimonial;
  
  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Check if avatar is initials (2 characters) or an image URL
  const isInitials = avatar.length === 2;
  
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={`${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-4 italic">"{text}"</p>
      
      <div className="flex items-center">
        {isInitials ? (
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-semibold text-lg mr-4">
            {avatar}
          </div>
        ) : (
          <img 
            src={avatar} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <div className="text-sm text-gray-500">
            <p>{tourName}</p>
            <p>{formattedDate}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;