import React, { createContext, useContext, useState, ReactNode } from 'react';

type BookingData = {
  startDate: string;
  adults: number;
  children: number;
};

type BookingContextType = {
  bookingData: BookingData;
  setBookingData: (data: BookingData) => void;
};

const defaultBookingData: BookingData = {
  startDate: '',
  adults: 1,
  children: 0,
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookingData, setBookingData] = useState<BookingData>(defaultBookingData);

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
