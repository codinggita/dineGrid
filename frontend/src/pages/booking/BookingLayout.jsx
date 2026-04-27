import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BookingProgressBar from '../../components/booking/BookingProgressBar';
import { motion, AnimatePresence } from 'framer-motion';

const BookingLayout = ({ children, currentStep }) => {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)] flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <BookingProgressBar currentStep={currentStep} />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingLayout;
