import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  { id: 1, name: 'Date & Time' },
  { id: 2, name: 'Select Table' },
  { id: 3, name: 'Guest Details' },
  { id: 4, name: 'Payment' },
  { id: 5, name: 'Complete' }
];

const BookingProgressBar = ({ currentStep }) => {
  return (
    <div className="w-full py-8 px-2 max-w-3xl mx-auto">
      <div className="relative flex justify-between items-start">
        {/* Background line */}
        <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 z-0">
          <motion.div
            className="h-full bg-[var(--color-primary)]"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>

        {steps.map((step) => {
          const isDone = step.id < currentStep;
          const isActive = step.id === currentStep;
          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-2 flex-1">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: isDone || isActive ? 'var(--color-primary)' : 'white',
                  borderColor: isDone || isActive ? 'var(--color-primary)' : '#D1D5DB',
                }}
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all shadow-sm"
                style={{
                  color: isDone || isActive ? 'white' : '#9CA3AF',
                }}
              >
                {isDone ? <Check className="w-4 h-4" /> : step.id}
              </motion.div>
              <span
                className={`text-xs font-semibold text-center leading-tight transition-colors ${
                  isActive ? 'text-[var(--color-primary)]' : isDone ? 'text-gray-500' : 'text-gray-400'
                }`}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingProgressBar;
