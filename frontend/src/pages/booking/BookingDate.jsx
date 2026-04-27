import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar as CalendarIcon, Clock, Users, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import BookingLayout from './BookingLayout';
import { useBooking } from '../../context/BookingContext';

const generateTimeSlots = () => {
  const slots = [];
  for (let i = 0; i < 48; i++) {
    const hour = Math.floor(i / 2);
    const minute = i % 2 === 0 ? '00' : '30';
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    slots.push(`${String(displayHour).padStart(2, '0')}:${minute} ${ampm}`);
  }
  return slots;
};

const timeSlots = generateTimeSlots();
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const BookingDate = () => {
  const navigate = useNavigate();
  const { bookingData, updateBookingData } = useBooking();

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(bookingData.date ? new Date(bookingData.date) : new Date());
  const [selectedTime, setSelectedTime] = useState(bookingData.time || '07:00 PM');
  const [guests, setGuests] = useState(bookingData.guests || 2);

  const handleNext = () => {
    updateBookingData({
      date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
      guests,
    });
    navigate('/book/table');
  };

  const prevMonth = () =>
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const nextMonth = () =>
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const cells = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`e-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedDate.toDateString() === date.toDateString();
      const isToday = today.toDateString() === date.toDateString();
      const isPast = date < today;

      cells.push(
        <button
          key={day}
          onClick={() => !isPast && setSelectedDate(date)}
          disabled={isPast}
          className={`aspect-square flex items-center justify-center rounded-xl text-sm font-semibold transition-all relative
            ${isSelected ? 'bg-[var(--color-primary)] text-white shadow-md' : ''}
            ${isToday && !isSelected ? 'ring-2 ring-[var(--color-primary)] text-[var(--color-primary)]' : ''}
            ${!isSelected && !isToday && !isPast ? 'hover:bg-gray-100 text-gray-700' : ''}
            ${isPast ? 'text-gray-300 cursor-not-allowed' : ''}
          `}
        >
          {day}
        </button>
      );
    }
    return cells;
  };

  return (
    <BookingLayout currentStep={1}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ─── Left: Calendar ─── */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            {/* Month Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-[var(--color-primary)]" />
                <h2 className="text-base font-bold text-gray-800">
                  {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h2>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChevronLeft className="w-4 h-4 text-gray-500" />
                </button>
                <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 mb-1">
              {weekDays.map(d => (
                <div key={d} className="text-center text-xs font-bold text-gray-400 py-1">{d}</div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {renderCalendar()}
            </div>

            {/* Today indicator legend */}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-50 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[var(--color-primary)]" /> Selected
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full ring-2 ring-[var(--color-primary)] bg-white" /> Today
              </span>
            </div>
          </div>

          {/* ─── Right: Time + Guests + Summary ─── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Guests */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-[var(--color-primary)]" />
                <span className="text-sm font-bold text-gray-700">Guests</span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-9 h-9 bg-white rounded-lg shadow-sm text-lg font-bold text-[var(--color-primary)] flex items-center justify-center hover:shadow-md transition-all"
                >
                  −
                </button>
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-gray-800">{guests}</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">People</div>
                </div>
                <button
                  onClick={() => setGuests(guests + 1)}
                  className="w-9 h-9 bg-white rounded-lg shadow-sm text-lg font-bold text-[var(--color-primary)] flex items-center justify-center hover:shadow-md transition-all"
                >
                  +
                </button>
              </div>
            </div>

            {/* Time Slots */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                <span className="text-sm font-bold text-gray-700">Select Time</span>
              </div>
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto custom-scrollbar pr-1">
                {timeSlots.map(slot => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-center transition-all border
                      ${selectedTime === slot
                        ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md'
                        : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100 hover:border-gray-200'
                      }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-[var(--color-primary)] rounded-2xl p-5 text-white shadow-lg shadow-green-100">
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-75 mb-3">Your Reservation</div>
              <div className="text-lg font-bold leading-snug mb-1">
                {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="text-[var(--color-secondary)] font-bold text-base mb-3">at {selectedTime}</div>
              <div className="flex justify-between text-sm opacity-90 border-t border-white/20 pt-3 mb-4">
                <span>Party Size</span>
                <span className="font-bold">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
              </div>
              <button
                onClick={handleNext}
                className="w-full bg-white text-[var(--color-primary)] py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-all active:scale-95"
              >
                Next: Choose Table <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </BookingLayout>
  );
};

export default BookingDate;
