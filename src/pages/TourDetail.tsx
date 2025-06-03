import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, DollarSign, CheckCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import BookingForm from '../components/ui/BookingForm';
import { tours, Tour, Review } from '../types';
import { useBooking } from '../components/ui/BookingContext';
import ReviewForm from '../components/ui/ReviewForm';
import ReviewList from '../components/ui/ReviewList';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TourDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { bookingData } = useBooking();
  const [reviews] = useState<Review[]>([
    {
      id: '1',
      name: 'John Doe',
      rating: 5,
      comment: 'Amazing experience! The tour guide was knowledgeable and friendly.',
      date: '2024-03-15',
      tourId: '1',
      tourTitle: 'Agadir Boat Trip'
    },
    {
      id: '2',
      name: 'Jane Smith',
      rating: 4,
      comment: 'Great tour, beautiful views. Would recommend!',
      date: '2024-03-10',
      tourId: '1',
      tourTitle: 'Agadir Boat Trip'
    }
  ]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const tour = tours.find((t: Tour) => t.slug === slug);

  const gallerySettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Tours':
        return '🏖️';
      case 'Excursions':
        return '🚗';
      case 'Activites':
        return '🎯';
      default:
        return '📍';
    }
  };

  useEffect(() => {
    if (tour) {
      document.title = `${tour.title} | Trips 2 Agadir`;
    }
  }, [tour]);

  if (!tour) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <p className="text-xl text-gray-600">Tour not found</p>
      </div>
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
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Customer Reviews</h2>
                    <Button
                      variant="outline"
                      onClick={() => setShowReviewForm(!showReviewForm)}
                    >
                      {showReviewForm ? 'Cancel Review' : 'Write a Review'}
                    </Button>
                          </div>

                  {showReviewForm && (
                    <div className="mb-8">
                      <ReviewForm
                        tourId={tour.id}
                        tourTitle={tour.title}
                        onReviewSubmitted={() => setShowReviewForm(false)}
                      />
                    </div>
                  )}
                  
                  {reviews.length > 0 ? (
                    <ReviewList reviews={reviews} />
                  ) : (
                    <div className="text-center py-8 bg-gray-50 rounded-lg">
                      <p className="text-gray-600">No reviews yet. Be the first to review this tour!</p>
                    </div>
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

export default TourDetail;
