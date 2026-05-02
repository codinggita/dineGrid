import express from 'express';
import { acceptOrder, createOrder, getOrders } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/', getOrders);
router.patch('/:id/accept', acceptOrder);

export default router;
