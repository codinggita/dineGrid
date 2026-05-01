import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number'],
  },
  date: {
    type: String,
    required: [true, 'Please provide a date'],
  },
  time: {
    type: String,
    required: [true, 'Please provide a time'],
  },
  guests: {
    type: Number,
    required: [true, 'Please provide number of guests'],
    min: 1,
  },
  tableNumber: {
    type: Number,
    default: null,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  },
  specialRequests: {
    type: String,
    default: '',
  },
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
