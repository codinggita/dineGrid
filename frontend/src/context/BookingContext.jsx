import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    guests: 4,
    tableId: null,
    guestInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      occasion: '',
      requests: ''
    }
  });

  const updateBookingData = (newData) => {
    setBookingData(prev => ({ ...prev, ...newData }));
  };

  return (
    <BookingContext.Provider value={{ bookingData, updateBookingData }}>
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
