import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide item name'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
    min: 0,
  },
  category: {
    type: String,
    enum: ['starters', 'mains', 'breads', 'biryani', 'desserts', 'drinks'],
    required: [true, 'Please provide a category'],
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  isVeg: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    default: '',
  },
}, { timestamps: true });

const Menu = mongoose.model('Menu', menuSchema);
export default Menu;
