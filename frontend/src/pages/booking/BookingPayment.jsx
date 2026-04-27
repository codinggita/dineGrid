import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Lock, Calendar, Users, Clock, Layout, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import BookingLayout from './BookingLayout';
import { useBooking } from '../../context/BookingContext';

const BookingPayment = () => {
  const navigate = useNavigate();
  const { bookingData, updateBookingData } = useBooking();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardData, setCardData] = useState({ number: '', name: '', expiry: '', cvv: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    let val = value;
    if (name === 'number') val = value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
    if (name === 'expiry') val = value.replace(/\D/g, '').slice(0, 4).replace(/(\d{2})(\d)/, '$1/$2');
    if (name === 'cvv') val = value.replace(/\D/g, '').slice(0, 3);
    setCardData(p => ({ ...p, [name]: val }));
  };

  const handlePay = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      updateBookingData({ paid: true, paymentMethod });
      navigate('/book/success');
    }, 1800);
  };

  // SVG logos for payment methods
  const VisaLogo = () => (
    <svg viewBox="0 0 48 16" className="h-5 w-auto" fill="none">
      <path d="M18.7 0.4L12.6 15.6H8.4L5.4 3.2C5.2 2.4 5 2.1 4.4 1.8 3.4 1.3 1.7 0.8 0.2 0.5L0.3 0.4H6.8C7.6 0.4 8.3 1 8.5 1.9L10.1 10.5 14.5 0.4H18.7ZM35.1 10.6C35.1 6.6 29.6 6.4 29.6 4.6 29.6 4 30.2 3.4 31.4 3.2 32 3.1 33.7 3 35.5 3.9L36.2 0.8C35.2 0.4 34 0 32.5 0 28.6 0 25.8 2.1 25.8 5.1 25.8 7.4 27.8 8.6 29.4 9.3 31 10 31.6 10.5 31.6 11.2 31.6 12.3 30.3 12.7 29.1 12.7 27.1 12.7 25.9 12.1 25 11.7L24.3 14.9C25.2 15.3 26.9 15.7 28.7 15.7 32.8 15.7 35.5 13.7 35.1 10.6ZM44.9 15.6H48.6L45.4 0.4H41.9C41.2 0.4 40.6 0.8 40.3 1.5L34.5 15.6H38.7L39.5 13.3H44.5L44.9 15.6ZM40.7 10.3L42.8 4.4 44 10.3H40.7ZM24.3 0.4L21 15.6H17L20.3 0.4H24.3Z" fill="#1A1F71"/>
    </svg>
  );

  const MastercardLogo = () => (
    <svg viewBox="0 0 38 24" className="h-5 w-auto">
      <rect width="38" height="24" rx="4" fill="white"/>
      <circle cx="15" cy="12" r="7" fill="#EB001B"/>
      <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
      <path d="M19 6.8a7 7 0 010 10.4A7 7 0 0119 6.8z" fill="#FF5F00"/>
    </svg>
  );

  const PayPalLogo = () => (
    <svg viewBox="0 0 101 32" className="h-6 w-auto">
      <path d="M12.2 2H5.5L.8 28.9h5.3l1.3-8.2h3.5c5.8 0 9.7-3.1 10.8-8.7C22.9 6.3 19.3 2 12.2 2zm1.1 9.9c-.5 3.1-2.9 3.1-5.2 3.1H6.9l1.2-7.4H9.4c2.3 0 4.1.5 3.9 4.3z" fill="#003087"/>
      <path d="M32.1 2h-6.7l-4.7 26.9h5.3l1.3-8.2h3.5c5.8 0 9.7-3.1 10.8-8.7C42.8 6.3 39.2 2 32.1 2zm1.1 9.9c-.5 3.1-2.9 3.1-5.2 3.1h-1.2l1.2-7.4h1.3c2.3 0 4.1.5 3.9 4.3z" fill="#0070E0"/>
      <path d="M56.1 11.1h-5.3l-.3 1.7c-.9-1.3-2.5-2.1-4.7-2.1-4.8 0-8.9 4-8.9 9 0 3.9 2.4 6.3 5.8 6.3 2.1 0 3.9-.9 5.1-2.4l-.3 2h5l2.6-14.5zm-7.4 7.3c-.4 2.2-2.1 3.7-4 3.7-1.7 0-2.8-1.1-2.8-2.9 0-2.2 1.7-3.8 3.9-3.8 1.7 0 2.9 1.1 2.9 3z" fill="#003087"/>
      <path d="M74.6 11.1h-5.4l-4.8 8.1-2-8.1h-5.3l3.8 13.4-3.6 5.2h5.3l12-18.6z" fill="#003087"/>
    </svg>
  );

  const GooglePayLogo = () => (
    <svg viewBox="0 0 120 48" className="h-7 w-auto">
      <path d="M60.2 24.8v7h-2.2V14.4h5.9c1.5 0 2.8.5 3.8 1.5 1 1 1.5 2.2 1.5 3.7s-.5 2.7-1.5 3.7c-1 1-2.3 1.5-3.8 1.5h-3.7zm0-8.5v6.6h3.8c.9 0 1.7-.3 2.3-.9.6-.6.9-1.4.9-2.4 0-.9-.3-1.7-.9-2.3-.6-.6-1.3-.9-2.3-.9h-3.8z" fill="#4285F4"/>
      <path d="M73.2 20.6c1.6 0 2.9.4 3.8 1.3.9.9 1.4 2.1 1.4 3.6v7.3h-2.1V31h-.1c-.9 1.3-2.1 2-3.6 2-1.3 0-2.4-.4-3.3-1.2-.9-.8-1.3-1.8-1.3-3 0-1.3.5-2.3 1.4-3 1-.8 2.3-1.1 3.9-1.1 1.4 0 2.6.3 3.5.8v-.5c0-.8-.3-1.5-.9-2.1-.6-.6-1.4-.8-2.3-.8-1.3 0-2.4.6-3.1 1.7l-1.9-1.2c1-1.4 2.6-2 4.6-2zm-2.9 8.8c0 .6.3 1.1.8 1.5.5.4 1.1.6 1.8.6 1 0 1.9-.4 2.6-1.1.7-.7 1.1-1.6 1.1-2.5-.7-.6-1.7-.9-3-.9-.9 0-1.7.2-2.3.7-.6.4-.9 1-.9 1.6h-.1z" fill="#EA4335"/>
      <path d="M90.6 20.9l-7.3 16.8H81l2.7-5.8-4.8-11h2.4l3.5 8.4 3.4-8.4h2.4z" fill="#4285F4"/>
      <path d="M46.5 22.4c0-.7-.1-1.3-.2-1.9H36v3.7h5.9c-.3 1.4-1 2.5-2.2 3.2v2.6h3.5c2-1.9 3.3-4.6 3.3-7.6z" fill="#4285F4"/>
      <path d="M36 33.8c2.9 0 5.3-1 7.1-2.6l-3.5-2.6c-1 .6-2.2 1-3.6 1-2.8 0-5.1-1.9-5.9-4.4h-3.6v2.7c1.8 3.5 5.4 5.9 9.5 5.9z" fill="#34A853"/>
      <path d="M30.1 25.2c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2v-2.7h-3.6c-.8 1.5-1.2 3.1-1.2 4.7s.4 3.2 1.2 4.7l3.6-2.7z" fill="#FBBC05"/>
      <path d="M36 18.8c1.6 0 3 .5 4.1 1.6l3.1-3.1C41.3 15.5 38.9 14.5 36 14.5c-4.1 0-7.7 2.4-9.5 5.9l3.6 2.7c.8-2.5 3.1-4.3 5.9-4.3z" fill="#EA4335"/>
    </svg>
  );

  const paymentMethods = [
    { id: 'card',   label: 'Credit / Debit',  Logo: () => <div className="flex gap-1.5 items-center"><VisaLogo /><MastercardLogo /></div> },
    { id: 'paypal', label: 'PayPal',          Logo: PayPalLogo },
    { id: 'gpay',   label: 'Google Pay',      Logo: GooglePayLogo },
  ];

  return (
    <BookingLayout currentStep={4}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ─── Left: Payment Form ─── */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-gray-800">Payment</h2>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5">
                <Lock className="w-3 h-3 text-[var(--color-primary)]" />
                <span className="font-semibold">Secure Checkout</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="mb-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Payment Method</p>
              <div className="grid grid-cols-3 gap-3">
                {paymentMethods.map(({ id, label, Logo }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setPaymentMethod(id)}
                    className={`flex flex-col items-center justify-center gap-2 py-3 px-2 rounded-xl border-2 transition-all
                      ${paymentMethod === id
                        ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5 shadow-sm'
                        : 'border-gray-100 hover:border-gray-200 bg-white'
                      }`}
                  >
                    <Logo />
                    <span className={`text-[10px] font-bold leading-tight ${paymentMethod === id ? 'text-[var(--color-primary)]' : 'text-gray-400'}`}>
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Card Form */}
            {paymentMethod === 'card' && (
              <form onSubmit={handlePay} className="space-y-4">
                {/* Card Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Card Number</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input
                      name="number"
                      value={cardData.number}
                      onChange={handleChange}
                      placeholder="0000 0000 0000 0000"
                      required
                      className="w-full pl-10 pr-28 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-mono text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all"
                    />
                    {/* Card network logos inside input */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-4 w-auto" />
                      <svg viewBox="0 0 38 24" className="h-4 w-auto"><circle cx="15" cy="12" r="7" fill="#EB001B"/><circle cx="23" cy="12" r="7" fill="#F79E1B"/><path d="M19 6.8a7 7 0 010 10.4A7 7 0 0119 6.8z" fill="#FF5F00"/></svg>
                    </div>
                  </div>
                </div>

                {/* Card Holder */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Card Holder Name</label>
                  <input
                    name="name"
                    value={cardData.name}
                    onChange={handleChange}
                    placeholder="e.g. Julian Chen"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Expiry Date</label>
                    <input
                      name="expiry"
                      value={cardData.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-mono text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">CVV</label>
                    <input
                      name="cvv"
                      value={cardData.cvv}
                      onChange={handleChange}
                      placeholder="•••"
                      required
                      type="password"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-mono text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => navigate('/book/details')}
                    className="flex-1 py-3.5 border-2 border-gray-200 text-gray-500 font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-[2] py-3.5 bg-[var(--color-primary)] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md shadow-green-100 active:scale-95 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Processing…
                      </>
                    ) : (
                      <>Confirm & Pay $10.00 <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* PayPal / GPay placeholder */}
            {paymentMethod !== 'card' && (
              <div className="space-y-4">
                <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl py-12 text-center flex flex-col items-center gap-4">
                  {(() => { const m = paymentMethods.find(x => x.id === paymentMethod); return m ? <m.Logo /> : null; })()}
                  <p className="text-sm text-gray-400 font-medium">You'll be redirected to complete payment securely.</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => navigate('/book/details')}
                    className="flex-1 py-3.5 border-2 border-gray-200 text-gray-500 font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    onClick={() => { setLoading(true); setTimeout(() => navigate('/book/success'), 1200); }}
                    className="flex-[2] py-3.5 bg-[var(--color-primary)] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md"
                  >
                    Continue to {paymentMethods.find(m => m.id === paymentMethod)?.label} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ─── Right: Order Summary ─── */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Order Summary</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-[var(--color-secondary)]" />
                  {bookingData.date ? new Date(bookingData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' }) : '—'}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-[var(--color-secondary)]" />
                  {bookingData.time || '—'}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Users className="w-4 h-4 text-[var(--color-secondary)]" />
                  {bookingData.guests || '—'} Guests
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Layout className="w-4 h-4 text-[var(--color-secondary)]" />
                  Table {bookingData.tableId || '—'}
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-gray-100 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Reservation Fee</span>
                  <span className="font-semibold">$10.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Taxes & Fees</span>
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-extrabold text-[var(--color-primary)]">$10.00</span>
                </div>
              </div>
            </div>

          

            {/* Accepted card logos - all inline SVG */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-3">We Accept</p>
              <div className="flex items-center gap-3 flex-wrap">
                {/* Visa */}
                <div className="h-8 px-3 bg-[#1A1F71] rounded-md flex items-center justify-center">
                  <svg viewBox="0 0 48 16" className="h-4 w-auto" fill="white">
                    <path d="M18.7 0.4L12.6 15.6H8.4L5.4 3.2C5.2 2.4 5 2.1 4.4 1.8 3.4 1.3 1.7 0.8 0.2 0.5L0.3 0.4H6.8C7.6 0.4 8.3 1 8.5 1.9L10.1 10.5 14.5 0.4H18.7ZM35.1 10.6C35.1 6.6 29.6 6.4 29.6 4.6 29.6 4 30.2 3.4 31.4 3.2 32 3.1 33.7 3 35.5 3.9L36.2 0.8C35.2 0.4 34 0 32.5 0 28.6 0 25.8 2.1 25.8 5.1 25.8 7.4 27.8 8.6 29.4 9.3 31 10 31.6 10.5 31.6 11.2 31.6 12.3 30.3 12.7 29.1 12.7 27.1 12.7 25.9 12.1 25 11.7L24.3 14.9C25.2 15.3 26.9 15.7 28.7 15.7 32.8 15.7 35.5 13.7 35.1 10.6ZM44.9 15.6H48.6L45.4 0.4H41.9C41.2 0.4 40.6 0.8 40.3 1.5L34.5 15.6H38.7L39.5 13.3H44.5L44.9 15.6ZM40.7 10.3L42.8 4.4 44 10.3H40.7ZM24.3 0.4L21 15.6H17L20.3 0.4H24.3Z"/>
                  </svg>
                </div>
                {/* Mastercard */}
                <div className="h-8 px-2 bg-gray-50 border border-gray-100 rounded-md flex items-center justify-center">
                  <svg viewBox="0 0 38 24" className="h-6 w-auto">
                    <circle cx="15" cy="12" r="9" fill="#EB001B"/>
                    <circle cx="23" cy="12" r="9" fill="#F79E1B"/>
                    <path d="M19 5.8a9 9 0 010 12.4A9 9 0 0119 5.8z" fill="#FF5F00"/>
                  </svg>
                </div>
                {/* PayPal */}
                <div className="h-8 px-3 bg-gray-50 border border-gray-100 rounded-md flex items-center justify-center gap-1">
                  <svg viewBox="0 0 12 14" className="h-4 w-auto">
                    <path d="M10.2 1.8C9.5.9 8.2.4 6.5.4H2.3C2 .4 1.7.6 1.6.9L0 11.1c0 .3.2.5.4.5h2.8l.7-4.4v.1c.1-.3.4-.5.7-.5h1.5c2.9 0 5.1-1.2 5.8-4.5 0-.1 0-.2.1-.3-.2-.1-.2-.2-.2-.2z" fill="#009EE3"/>
                    <path d="M4.5 3.7c.1-.4.4-.6.8-.6h5c.6 0 1.1.1 1.6.2-.5 3.2-2.6 4.3-5.4 4.3H4.9l-.7 4.5H1.5L0 3.2h3.8l.7.5z" fill="#113984"/>
                  </svg>
                  <span className="text-[11px] font-extrabold text-[#003087]">Pay<span className="text-[#009EE3]">Pal</span></span>
                </div>
                {/* Google Pay */}
                <div className="h-8 px-3 bg-gray-50 border border-gray-100 rounded-md flex items-center justify-center gap-0.5">
                  <span className="text-[11px] font-black" style={{color:'#4285F4'}}>G</span>
                  <span className="text-[11px] font-black" style={{color:'#EA4335'}}>o</span>
                  <span className="text-[11px] font-black" style={{color:'#FBBC05'}}>o</span>
                  <span className="text-[11px] font-black" style={{color:'#4285F4'}}>g</span>
                  <span className="text-[11px] font-black" style={{color:'#34A853'}}>l</span>
                  <span className="text-[11px] font-black" style={{color:'#EA4335'}}>e</span>
                  <span className="text-xs font-bold text-gray-500 ml-1">Pay</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </BookingLayout>
  );
};

export default BookingPayment;
