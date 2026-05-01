import express from 'express';
import {
  createMenuItem,
  getAllMenuItems,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem,
} from '../controllers/menuController.js';

const router = express.Router();

router.post('/', createMenuItem);       // CREATE
router.get('/', getAllMenuItems);        // READ ALL  (supports ?category=mains)
router.get('/:id', getMenuItemById);    // READ ONE
router.put('/:id', updateMenuItem);     // UPDATE
router.delete('/:id', deleteMenuItem);  // DELETE

export default router;
