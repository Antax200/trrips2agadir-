import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import Button from './Button';
import { Tour } from '../../types';

interface BookingFormProps {
  tour: Tour;
  prefill?: {
    startDate?: string;
    adults?: number;
    children?: number;
  };
}

const BookingForm: React.FC<BookingFormProps> = ({ tour, prefill }) => {
  const today = new Date();
  const tomorrow = addDays(today, 1);

  const [formData, setFormData] = useState({
    date: prefill?.startDate || format(tomorrow, 'yyyy-MM-dd'),
    adults: prefill?.adults ?? 1,
    children: prefill?.children ?? 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'adults' || name === 'children') {
      const numericValue = value === '' ? '' : Math.max(0, Number(value));
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const calculateTotal = () => {
    const adults = Number(formData.adults) || 0;
    const children = Number(formData.children) || 0;
    const totalParticipants = adults + children;
    return tour.price * totalParticipants;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-green-700 mb-2">
          Booking Successful!
        </h3>
        <p className="mb-4 text-green-600">
          Thank you for booking the {tour.title} tour. We've sent a confirmation
          email to {formData.email}.
        </p>
        <p className="text-green-600">
          Your adventure is scheduled for{' '}
          {format(new Date(formData.date), 'MMMM dd, yyyy')} with{' '}
          {Number(formData.adults) + Number(formData.children)} participant(s).
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mt-4"
        >
          Book Another Tour
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-amber-600 mb-4">Book Your Adventure</h3>
      <form onSubmit={handleSubmit}>
        {/* Tour date, adults, children */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-1">Tour Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              min={format(tomorrow, 'yyyy-MM-dd')}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Adults</label>
            <input
              type="number"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              min={1}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Children</label>
            <input
              type="number"
              name="children"
              value={formData.children}
              onChange={handleChange}
              min={0}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* User contact info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
        </div>

        {/* Optional message */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Special Requests (Optional)</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Price summary */}
        <div className="bg-amber-50 p-4 rounded-md mb-4">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Price per person:</span>
            <span>${tour.price}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Adults:</span>
            <span>{formData.adults}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Children:</span>
            <span>{formData.children}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t border-amber-200 pt-2 mt-2">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>

        <Button type="submit" variant="secondary" fullWidth>
          Complete Booking
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
