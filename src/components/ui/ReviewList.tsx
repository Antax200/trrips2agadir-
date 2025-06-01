import React from 'react';
import { motion } from 'framer-motion';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No reviews yet. Be the first to review this tour!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-bold text-gray-800">{review.name}</h4>
              <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-500">
                  {i < review.rating ? '★' : '☆'}
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ReviewList; 