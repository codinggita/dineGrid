import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Calendar, Clock, Users, Layout, MapPin, Copy, Home, Download } from 'lucide-react';
import BookingLayout from './BookingLayout';
import { useBooking } from '../../context/BookingContext';

const BookingSuccess = () => {
  const navigate = useNavigate();
  const { bookingData } = useBooking();
  const bookingIdRef = useRef(`DG-${Math.floor(1000 + Math.random() * 9000)}-${Math.random().toString(36).substring(2, 5).toUpperCase()}`);

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingIdRef.current);
  };

  return (
    <BookingLayout currentStep={5}>
      <div className="max-w-4xl mx-auto py-6">

        {/* ── Hero Success Banner ── */}
        <div className="bg-[var(--color-primary)] rounded-3xl p-8 md:p-10 text-white text-center mb-8 relative overflow-hidden shadow-xl shadow-green-100">
          {/* Decorative blobs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Booking Confirmed! 🎉</h1>
            <p className="text-white/80 text-sm md:text-base max-w-md mx-auto font-medium">
              Your table is reserved. We've sent a confirmation to your email with all the details.
            </p>

            {/* Booking ID */}
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3 mt-6">
              <div className="text-left">
                <p className="text-[10px] opacity-70 uppercase tracking-widest font-bold">Booking ID</p>
                <p className="text-lg font-bold tracking-widest">{bookingIdRef.current}</p>
              </div>
              <button onClick={handleCopy} className="p-2 hover:bg-white/20 rounded-xl transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Booking Card ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="relative h-44">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-end p-6">
              <div>
                <span className="bg-[var(--color-secondary)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Confirmed Reservation
                </span>
                <h2 className="text-white text-xl font-bold mt-2">L'Avenue Bistro</h2>
                <div className="flex items-center gap-1.5 text-white/80 text-xs mt-1">
                  <MapPin className="w-3 h-3" />
                  42nd Culinary Avenue, Gastronomy District
                </div>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100">
            {[
              { icon: Calendar, label: 'Date', value: bookingData?.date ? new Date(bookingData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A' },
              { icon: Clock,    label: 'Time',   value: bookingData?.time || 'N/A' },
              { icon: Users,    label: 'Guests', value: `${bookingData?.guests || 0} People` },
              { icon: Layout,   label: 'Table',  value: `Table ${bookingData?.tableId || '—'}` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white p-4 md:p-5 text-center">
                <div className="flex items-center justify-center mb-1.5">
                  <Icon className="w-4 h-4 text-[var(--color-secondary)]" />
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</p>
                <p className="text-sm font-bold text-gray-800 mt-0.5">{value}</p>
              </div>
            ))}
          </div>

          {/* Payment Summary */}
          <div className="p-6 border-t border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400 font-medium">Reservation Fee</span>
              <span className="text-sm font-bold text-gray-700">$10.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base font-bold text-gray-800">Total Paid</span>
              <span className="text-2xl font-extrabold text-[var(--color-primary)]">$10.00</span>
            </div>
            <p className="text-[10px] text-gray-400 italic mt-3 flex gap-2 bg-orange-50 border border-orange-100 rounded-xl p-3">
              <span className="text-orange-400">ℹ️</span>
              Please arrive 10 minutes early. Table will be held 15 minutes past booking time.
            </p>
          </div>
        </div>

        {/* ── Action Buttons ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/')}
            className="py-4 bg-[var(--color-primary)] text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md shadow-green-100 active:scale-95"
          >
            <Home className="w-5 h-5" /> Back to Home
          </button>
          <button
            onClick={() => window.print()}
            className="py-4 border-2 border-gray-200 text-gray-500 font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
          >
            <Download className="w-5 h-5" /> Download Receipt
          </button>
        </div>

      </div>
    </BookingLayout>
  );
};

export default BookingSuccess;
