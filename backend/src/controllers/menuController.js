import Menu from '../models/menuModel.js';

// CREATE — POST /api/menu
export const createMenuItem = async (req, res) => {
  try {
    const item = await Menu.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// READ ALL — GET /api/menu
export const getAllMenuItems = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const items = await Menu.find(filter).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// READ ONE — GET /api/menu/:id
export const getMenuItemById = async (req, res) => {
  try {
    const item = await Menu.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Menu item not found' });
    }
    res.status(200).json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE — PUT /api/menu/:id
export const updateMenuItem = async (req, res) => {
  try {
    const item = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return res.status(404).json({ success: false, message: 'Menu item not found' });
    }
    res.status(200).json({ success: true, data: item });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE — DELETE /api/menu/:id
export const deleteMenuItem = async (req, res) => {
  try {
    const item = await Menu.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Menu item not found' });
    }
    res.status(200).json({ success: true, message: 'Menu item deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
