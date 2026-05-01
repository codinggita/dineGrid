import express from 'express';
import {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', createBooking);        // CREATE
router.get('/', getAllBookings);         // READ ALL
router.get('/:id', getBookingById);     // READ ONE
router.put('/:id', updateBooking);      // UPDATE
router.delete('/:id', deleteBooking);   // DELETE

export default router;
