import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, Clock, Users, ArrowLeft, ArrowRight, Shield } from 'lucide-react';
import BookingLayout from './BookingLayout';
import { useBooking } from '../../context/BookingContext';

const occasions = ['Birthday', 'Anniversary', 'Business', 'Date Night', 'Other'];

const BookingDetails = () => {
  const navigate = useNavigate();
  const { bookingData, updateBookingData } = useBooking();
  const [form, setForm] = useState(bookingData.guestInfo || {
    firstName: '', lastName: '', email: '', phone: '', occasion: '', requests: ''
  });

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    updateBookingData({ guestInfo: form });
    navigate('/book/payment');
  };

  const InputField = ({ label, name, type = 'text', placeholder, icon: Icon }) => (
    <div className="space-y-1.5">
      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />}
        <input
          required
          type={type}
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full ${Icon ? 'pl-10' : 'px-4'} pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium text-gray-700 placeholder-gray-300
            focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all`}
        />
      </div>
    </div>
  );

  return (
    <BookingLayout currentStep={3}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ─── Left: Form ─── */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-gray-800">Guest Details</h2>
              <span className="text-xs font-bold text-[var(--color-secondary)] bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">Step 3 of 5</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">Tell us who's coming so we can prepare your table perfectly.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <InputField label="First Name" name="firstName" placeholder="e.g. Julian" icon={User} />
                <InputField label="Last Name" name="lastName" placeholder="e.g. Chen" />
              </div>
              <InputField label="Email Address" name="email" type="email" placeholder="you@example.com" icon={Mail} />
              <InputField label="Phone Number" name="phone" type="tel" placeholder="+1 (555) 000-0000" icon={Phone} />

              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Occasion (Optional)</label>
                <div className="flex flex-wrap gap-2">
                  {occasions.map(occ => (
                    <button
                      key={occ}
                      type="button"
                      onClick={() => setForm(p => ({ ...p, occasion: p.occasion === occ ? '' : occ }))}
                      className={`px-4 py-2 rounded-full text-xs font-bold border-2 transition-all
                        ${form.occasion === occ
                          ? 'bg-[var(--color-secondary)]/10 border-[var(--color-secondary)] text-[var(--color-secondary)]'
                          : 'border-gray-100 text-gray-400 hover:border-gray-200'
                        }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Special Requests</label>
                <textarea
                  name="requests"
                  value={form.requests}
                  onChange={handleChange}
                  placeholder="Dietary requirements, seating preference, etc."
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium text-gray-700 placeholder-gray-300
                    focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/book/table')}
                  className="flex-1 py-3.5 border-2 border-gray-200 text-gray-500 font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Table
                </button>
                <button
                  type="submit"
                  className="flex-[2] py-3.5 bg-[var(--color-secondary)] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md shadow-orange-100 active:scale-95"
                >
                  Continue to Payment <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* ─── Right: Summary ─── */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Restaurant Preview */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-28 relative">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
                  alt="Restaurant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-800">Lumina Bistro</h4>
                <p className="text-xs text-gray-400 font-medium">Downtown District</p>

                <div className="mt-4 space-y-2.5">
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                    {bookingData.date ? new Date(bookingData.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : '—'}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                    {bookingData.time || '—'}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <Users className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                    {bookingData.guests || '—'} Guests
                  </div>
                </div>
              </div>
            </div>

            {/* Price Estimate */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Estimated Total</h4>
              <div className="flex justify-between items-end">
                <span className="text-sm text-gray-500">Reservation Fee</span>
                <span className="text-2xl font-extrabold text-gray-800">$0.00</span>
              </div>
              <p className="text-[10px] text-gray-400 italic mt-1">Payment settled at the restaurant.</p>
            </div>

            {/* Guarantee */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex gap-3">
              <Shield className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <p className="text-xs font-bold text-emerald-700">Table Guaranteed</p>
                <p className="text-xs text-emerald-600 mt-0.5 leading-relaxed">Your selection is held for 10 minutes while you complete your details.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </BookingLayout>
  );
};

export default BookingDetails;
