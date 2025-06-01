import React, { useState } from 'react';
import Button from './Button';

interface ReviewFormProps {
  tourId: string;
  tourTitle: string;
  onReviewSubmitted: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ tourId, tourTitle, onReviewSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
          tourId,
          tourTitle,
          formType: 'review'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          rating: 5,
          comment: ''
        });
        onReviewSubmitted();
      } else {
        setError('Failed to submit review. Please try again.');
      }
    } catch (err) {
      console.error('Review submission error:', err);
      setError('An error occurred. Please try again later.');
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <h4 className="text-lg font-bold text-green-700 mb-2">
          Review Submitted!
        </h4>
        <p className="text-green-600 mb-4">
          Thank you for your review. We appreciate your feedback!
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mt-2"
        >
          Write Another Review
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      
      <div>
        <label className="block text-gray-700 mb-2">Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Rating</label>
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        >
          <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
          <option value="4">⭐⭐⭐⭐ Very Good</option>
          <option value="3">⭐⭐⭐ Good</option>
          <option value="2">⭐⭐ Fair</option>
          <option value="1">⭐ Poor</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Your Review</label>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white-500"
          required
        />
      </div>

      <Button type="submit" variant="secondary" fullWidth>
        Submit Review
      </Button>
    </form>
  );
};

export default ReviewForm; 