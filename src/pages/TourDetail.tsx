import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Clock, DollarSign, CheckCircle, Mountain, Compass, Activity } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import BookingForm from '../components/ui/BookingForm';
import { tours } from '../types';
import { testimonials } from '../data/testimonials';
import { useBooking } from '../components/ui/BookingContext';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Tours':
      return <Mountain size={16} className="mr-2" />;
    case 'Excursions':
      return <Compass size={16} className="mr-2" />;
    case 'Activites':
      return <Activity size={16} className="mr-2" />;
    default:
      return <Mountain size={16} className="mr-2" />;
  }
};

const TourDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { bookingData } = useBooking();
  const [activeTab, setActiveTab] = useState('overview');
  const [newReview, setNewReview] = useState({
    rating: 0,
    text: '',
    name: '',
    email: ''
  });
  const [hoveredRating, setHoveredRating] = useState(0);

  const tour = tours.find(t => t.slug === slug);
  const tourTestimonials = testimonials.filter(t => t.tourName === tour?.title);

  const gallerySettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    if (tour) {
      document.title = `${tour.title} | Trips 2 Agadir`;
    }

    if (window.location.hash === '#booking') {
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [tour]);

  if (!tour) {
    return (
      <Container className="pt-28 pb-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Tour Not Found</h1>
        <p className="text-gray-600 mb-6">The tour you're looking for doesn't exist or has been removed.</p>
        <Link to="/tours">
          <Button variant="primary">View All Tours</Button>
        </Link>
      </Container>
    );
  }

  return (
    <main className="pt-20 pb-16">
      {/* Hero Banner */}
      <div className="relative h-96 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img src={tour.imageUrl} alt={tour.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">{tour.title}</h1>
              <div className="flex flex-wrap gap-1.5 sm:gap-4 text-white mb-4 sm:mb-6">
                <div className="flex items-center bg-amber-600/90 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md text-xs sm:text-base">
                  <Clock size={12} className="mr-1 sm:mr-2" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center bg-yellow-800/90 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md text-xs sm:text-base">
                  {getCategoryIcon(tour.category)}
                  <span>{tour.category}</span>
                </div>
                <div className="flex items-center bg-green-700/90 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md text-xs sm:text-base">
                  <DollarSign size={12} className="mr-1 sm:mr-2" />
                  <span>${tour.price} per person</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Container className="py-6 md:py-12">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-4 md:mb-6">
              <div className="flex flex-wrap -mb-px">
                {['overview', 'itinerary', 'gallery', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`mr-4 md:mr-8 py-3 md:py-4 text-sm font-medium border-b-2 ${
                      activeTab === tab
                        ? 'border-amber-600 text-amber-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="mb-6 md:mb-8">
              {activeTab === 'overview' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">About This Tour</h2>
                  <div className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed space-y-3 md:space-y-4">
                    {tour.description.split('\n').map((paragraph, index) => (
                      <p key={index} className="whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 md:mb-6">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-sm md:text-base">
                        <CheckCircle size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">What's Included</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 md:mb-6">
                    {tour.included.map((item, index) => (
                      <li key={index} className="flex items-start text-sm md:text-base">
                        <CheckCircle size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === 'itinerary' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Tour Itinerary</h2>
                  <p className="text-gray-700 mb-6">Follow the journey of your {tour.duration} adventure.</p>
                  <div className="space-y-6">
                    {tour.itinerary.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4">
                          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                            {item.time}
                          </div>
                          {index < tour.itinerary.length - 1 && (
                            <div className="w-0.5 h-16 bg-amber-200 mx-auto"></div>
                          )}
                        </div>
                        <div className="pt-2">
                          <h4 className="font-medium text-gray-800 mb-1">{item.activity}</h4>
                          <p className="text-gray-600"></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'gallery' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Tour Gallery</h2>
                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">Preview the breathtaking sights you'll experience on this tour.</p>
                  <div className="relative -mx-4 md:mx-0">
                    <Slider {...gallerySettings}>
                      {tour.gallery.map((image, index) => (
                        <div key={index} className="outline-none px-1 md:px-0">
                          <img
                            src={image}
                            alt={`${tour.title} - Image ${index + 1}`}
                            className="w-full h-64 md:h-96 object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
                  
                  {/* Review Submission Form */}
                  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Write a Review</h3>
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      // Here you would typically send the review to your backend
                      console.log('New review:', newReview);
                      // Reset form
                      setNewReview({
                        rating: 0,
                        text: '',
                        name: '',
                        email: ''
                      });
                    }}>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Your Rating</label>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onMouseEnter={() => setHoveredRating(star)}
                              onMouseLeave={() => setHoveredRating(0)}
                              onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                              className="focus:outline-none"
                            >
                              <Star
                                size={24}
                                className={`${
                                  star <= (hoveredRating || newReview.rating)
                                    ? 'text-amber-500 fill-amber-500'
                                    : 'text-gray-300'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Your Review</label>
                        <textarea
                          value={newReview.text}
                          onChange={(e) => setNewReview(prev => ({ ...prev, text: e.target.value }))}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          rows={4}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-gray-700 mb-2">Your Name</label>
                          <input
                            type="text"
                            value={newReview.name}
                            onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Your Email</label>
                          <input
                            type="email"
                            value={newReview.email}
                            onChange={(e) => setNewReview(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" variant="secondary">
                        Submit Review
                      </Button>
                    </form>
                  </div>

                  {/* Existing Reviews */}
                  {tourTestimonials.length > 0 ? (
                    <div className="space-y-6">
                      {tourTestimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
                          <div className="flex mb-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                size={18}
                                className={`${
                                  i < testimonial.rating
                                    ? 'text-amber-500 fill-amber-500'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700 mb-4 italic whitespace-pre-line">"{testimonial.text}"</p>
                          <div className="flex items-center">
                            {testimonial.avatar.length === 2 ? (
                              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-semibold text-lg mr-4">
                                {testimonial.avatar}
                              </div>
                            ) : (
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-10 h-10 rounded-full object-cover mr-4"
                              />
                            )}
                            <div>
                              <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                              <p className="text-sm text-gray-500">
                                {new Date(testimonial.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                })}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">
                      No reviews yet for this tour. Be the first to leave a review after your adventure!
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column - Booking Form with prefill data */}
          <div className="lg:w-1/3" id="booking">
            <BookingForm 
              tour={tour} 
              prefill={{
                startDate: bookingData?.startDate,
                adults: bookingData?.adults,
                children: bookingData?.children
              }} 
            />
          </div>
        </div>
      </Container>
    </main>
  );
};

// Star component for reviews
const Star: React.FC<{ size: number; className: string }> = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default TourDetail;
