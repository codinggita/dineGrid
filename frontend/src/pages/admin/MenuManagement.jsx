import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const defaultMenuItems = [
  { id: 'M1', name: 'Truffle Mushroom Risotto', category: 'Mains', price: '₹650', status: 'Available', img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=100&h=100&q=80' },
  { id: 'M2', name: 'Crispy Calamari', category: 'Starters', price: '₹420', status: 'Low Stock', img: 'https://images.unsplash.com/photo-1599487405270-b1932ab1b54a?auto=format&fit=crop&w=100&h=100&q=80' },
  { id: 'M3', name: 'Classic Margherita', category: 'Pizza', price: '₹380', status: 'Available', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=100&h=100&q=80' },
  { id: 'M4', name: 'Tiramisu', category: 'Desserts', price: '₹320', status: 'Out of Stock', img: 'https://images.unsplash.com/photo-1571877227200-a08c8e4d7d32?auto=format&fit=crop&w=100&h=100&q=80' },
];

const categories = ['All', 'Starters', 'Mains', 'Pizza', 'Desserts', 'Beverages'];

const MenuManagement = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [items, setItems] = useState(defaultMenuItems);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals / Input State
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [newItem, setNewItem] = useState({
    name: '',
    category: 'Starters',
    price: '',
    status: 'Available',
    img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=100&h=100&q=80'
  });

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.price) return;
    const item = {
      id: 'M' + (items.length + 1),
      ...newItem,
      price: newItem.price.startsWith('₹') ? newItem.price : `₹${newItem.price}`
    };
    setItems([item, ...items]);
    setNewItem({ name: '', category: 'Starters', price: '', status: 'Available', img: newItem.img });
    setShowAddModal(false);
  };

  const handleDeleteItem = (id) => {
    if (window.confirm(`Are you sure you want to delete item #${id}?`)) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const handleEditClick = (item) => {
    setEditingItem(item);
    setShowEditModal(true);
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();
    if (!editingItem.name || !editingItem.price) return;
    const updated = {
      ...editingItem,
      price: editingItem.price.startsWith('₹') ? editingItem.price : `₹${editingItem.price}`
    };
    setItems(items.map(item => item.id === editingItem.id ? updated : item));
    setShowEditModal(false);
    setEditingItem(null);
  };

  return (
    <AdminLayout>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#171d16]">Menu Management</h1>
            <p className="text-sm text-[#6f7a6b] mt-0.5">Manage your digital menu and pricing</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 bg-white border border-[#becab9] rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-[#6f7a6b]" />
              <input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search items..." 
                className="text-sm outline-none bg-transparent text-[#171d16] placeholder:text-[#6f7a6b] w-40" 
              />
            </div>
            <button 
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 bg-[#006e1c] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#005016] transition"
            >
              <Plus className="w-4 h-4" /> Add Item
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map(c => (
            <button 
              key={c}
              onClick={() => setActiveTab(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition ${activeTab === c ? 'bg-[#171d16] text-white' : 'bg-white border border-[#becab9] text-[#3f4a3c] hover:bg-[#f0f6ea]'}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Menu Table */}
        <div className="bg-white rounded-xl border border-[#becab9] shadow-sm overflow-x-auto">
          <table className="w-full text-sm min-w-[700px]">
            <thead className="bg-[#f0f6ea] border-b border-[#becab9]">
              <tr>
                <th className="px-5 py-3.5 text-left text-[11px] font-bold text-[#6f7a6b] uppercase tracking-wider">Item</th>
                <th className="px-5 py-3.5 text-left text-[11px] font-bold text-[#6f7a6b] uppercase tracking-wider">Category</th>
                <th className="px-5 py-3.5 text-left text-[11px] font-bold text-[#6f7a6b] uppercase tracking-wider">Price</th>
                <th className="px-5 py-3.5 text-left text-[11px] font-bold text-[#6f7a6b] uppercase tracking-wider">Status</th>
                <th className="px-5 py-3.5 text-left text-[11px] font-bold text-[#6f7a6b] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items
                .filter(m => activeTab === 'All' || m.category === activeTab)
                .filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((item) => (
                  <tr key={item.id} className="border-b border-[#eaf0e4] hover:bg-[#f5fbef] transition">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img src={item.img} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
                        <div>
                          <div className="font-semibold text-[#171d16]">{item.name}</div>
                          <div className="text-xs text-[#6f7a6b]">#{item.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-[#3f4a3c] font-medium">{item.category}</td>
                    <td className="px-5 py-4 font-bold text-[#171d16]">{item.price}</td>
                    <td className="px-5 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.status === 'Available' ? 'bg-[#e8f5e9] text-[#2e7d32]' : 
                        item.status === 'Low Stock' ? 'bg-[#fff8e1] text-[#e65100]' : 
                        'bg-[#ffebee] text-[#c62828]'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleEditClick(item)}
                          className="w-8 h-8 rounded-lg border border-[#becab9] flex items-center justify-center hover:bg-white text-[#006e1c] transition"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteItem(item.id)}
                          className="w-8 h-8 rounded-lg border border-[#becab9] flex items-center justify-center hover:bg-[#ffebee] hover:border-[#ef5350] hover:text-[#ef5350] text-[#6f7a6b] transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Add Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#becab9]">
              <h2 className="text-xl font-bold text-[#171d16] mb-4">Add Menu Item</h2>
              <form onSubmit={handleAddItem} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Name</label>
                  <input required value={newItem.name} onChange={(e) => setNewItem({...newItem, name: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" placeholder="e.g. Classic Bruschetta" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Category</label>
                    <select value={newItem.category} onChange={(e) => setNewItem({...newItem, category: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-3 py-2.5 outline-none text-[#171d16] text-sm bg-white">
                      {categories.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Price</label>
                    <input required value={newItem.price} onChange={(e) => setNewItem({...newItem, price: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" placeholder="₹320" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Status</label>
                  <select value={newItem.status} onChange={(e) => setNewItem({...newItem, status: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-3 py-2.5 outline-none text-[#171d16] text-sm bg-white">
                    <option value="Available">Available</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>
                <div className="flex gap-2 justify-end pt-2">
                  <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-[#becab9] text-[#6f7a6b] font-semibold rounded-xl text-sm hover:bg-[#f0f6ea] transition">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-[#006e1c] text-white font-semibold rounded-xl text-sm hover:bg-[#005016] transition">Add Item</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Edit Modal */}
        {showEditModal && editingItem && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#becab9]">
              <h2 className="text-xl font-bold text-[#171d16] mb-4">Edit Menu Item</h2>
              <form onSubmit={handleUpdateItem} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Name</label>
                  <input required value={editingItem.name} onChange={(e) => setEditingItem({...editingItem, name: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Category</label>
                    <select value={editingItem.category} onChange={(e) => setEditingItem({...editingItem, category: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-3 py-2.5 outline-none text-[#171d16] text-sm bg-white">
                      {categories.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Price</label>
                    <input required value={editingItem.price} onChange={(e) => setEditingItem({...editingItem, price: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Status</label>
                  <select value={editingItem.status} onChange={(e) => setEditingItem({...editingItem, status: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-3 py-2.5 outline-none text-[#171d16] text-sm bg-white">
                    <option value="Available">Available</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>
                <div className="flex gap-2 justify-end pt-2">
                  <button type="button" onClick={() => setShowEditModal(false)} className="px-4 py-2 border border-[#becab9] text-[#6f7a6b] font-semibold rounded-xl text-sm hover:bg-[#f0f6ea] transition">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-[#006e1c] text-white font-semibold rounded-xl text-sm hover:bg-[#005016] transition">Save Changes</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </motion.div>
    </AdminLayout>
  );
};

export default MenuManagement;
