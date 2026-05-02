import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Mail, Phone, X, Trash2 } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const initialStaff = [
  { id: 'S01', name: 'Sarah Jenkins', role: 'Head Server', shift: 'Morning', status: 'On Duty', avatar: 'SJ', color: '#006e1c' },
  { id: 'S02', name: 'Michael Chen', role: 'Chef', shift: 'Evening', status: 'Off Duty', avatar: 'MC', color: '#ff9800' },
  { id: 'S03', name: 'David Smith', role: 'Bartender', shift: 'Night', status: 'On Duty', avatar: 'DS', color: '#c2185b' },
  { id: 'S04', name: 'Emma Wilson', role: 'Hostess', shift: 'Morning', status: 'On Break', avatar: 'EW', color: '#1976d2' },
];

const colors = ['#006e1c', '#ff9800', '#c2185b', '#1976d2', '#8e24aa', '#e53935'];

const Staff = () => {
  const [staffList, setStaffList] = useState(initialStaff);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStaff, setNewStaff] = useState({ name: '', role: '', shift: 'Morning' });
  const [staffToDelete, setStaffToDelete] = useState(null);

  const handleAddStaff = (e) => {
    e.preventDefault();
    if (!newStaff.name || !newStaff.role) return;

    const initials = newStaff.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const staffEntry = {
      id: `S0${staffList.length + 1}`,
      name: newStaff.name,
      role: newStaff.role,
      shift: newStaff.shift,
      status: 'On Duty',
      avatar: initials,
      color: randomColor
    };

    setStaffList([...staffList, staffEntry]);
    setNewStaff({ name: '', role: '', shift: 'Morning' });
    setIsModalOpen(false);
  };

  const handleRemoveStaff = (id) => {
    setStaffToDelete(id);
  };

  const confirmRemove = () => {
    if (staffToDelete) {
      setStaffList(staffList.filter(staff => staff.id !== staffToDelete));
      setStaffToDelete(null);
    }
  };

  return (
    <AdminLayout>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#171d16]">Staff Management</h1>
            <p className="text-sm text-[#6f7a6b] mt-0.5">Manage your team, roles, and shifts</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-[#006e1c] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#005016] transition"
            >
              <Plus className="w-4 h-4" /> Add Staff
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {staffList.map(staff => (
            <div key={staff.id} className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-3" style={{ background: staff.color }}>
                {staff.avatar}
              </div>
              <h3 className="font-bold text-[#171d16]">{staff.name}</h3>
              <p className="text-xs text-[#6f7a6b] mb-3">{staff.role}</p>
              
              <div className="flex gap-2 w-full mb-4">
                <span className="flex-1 bg-[#f5fbef] text-[#3f4a3c] text-xs font-semibold py-1 rounded-md border border-[#eaf0e4]">
                  {staff.shift}
                </span>
                <span className={`flex-1 text-xs font-semibold py-1 rounded-md border ${
                  staff.status === 'On Duty' ? 'bg-[#e8f5e9] text-[#2e7d32] border-[#a5d6a7]' :
                  staff.status === 'On Break' ? 'bg-[#fff8e1] text-[#f57f17] border-[#ffe082]' :
                  'bg-[#f5f5f5] text-[#9e9e9e] border-[#e0e0e0]'
                }`}>
                  {staff.status}
                </span>
              </div>

              <div className="flex justify-center gap-3 w-full border-t border-[#eaf0e4] pt-4">
                <button className="p-2 rounded-full bg-[#f0f6ea] text-[#006e1c] hover:bg-[#e8f5e9] transition" title="Call">
                  <Phone className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-[#f0f6ea] text-[#006e1c] hover:bg-[#e8f5e9] transition" title="Email">
                  <Mail className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleRemoveStaff(staff.id)}
                  className="p-2 rounded-full bg-[#fff0f0] text-[#d32f2f] hover:bg-[#ffebee] transition ml-auto" 
                  title="Remove Staff"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Staff Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 border border-[#becab9]"
              >
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl font-bold text-[#171d16]">Add New Staff</h2>
                  <button onClick={() => setIsModalOpen(false)} className="p-1 rounded-full hover:bg-[#f0f6ea] transition">
                    <X className="w-5 h-5 text-[#6f7a6b]" />
                  </button>
                </div>
                
                <form onSubmit={handleAddStaff} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#6f7a6b] uppercase mb-1">Full Name</label>
                    <input 
                      type="text" 
                      value={newStaff.name}
                      onChange={e => setNewStaff({...newStaff, name: e.target.value})}
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#f5fbef] border border-[#becab9] rounded-lg px-4 py-2.5 text-sm text-[#171d16] outline-none focus:border-[#006e1c]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#6f7a6b] uppercase mb-1">Role</label>
                    <input 
                      type="text" 
                      value={newStaff.role}
                      onChange={e => setNewStaff({...newStaff, role: e.target.value})}
                      placeholder="e.g. Server, Chef"
                      className="w-full bg-[#f5fbef] border border-[#becab9] rounded-lg px-4 py-2.5 text-sm text-[#171d16] outline-none focus:border-[#006e1c]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#6f7a6b] uppercase mb-1">Shift</label>
                    <select 
                      value={newStaff.shift}
                      onChange={e => setNewStaff({...newStaff, shift: e.target.value})}
                      className="w-full bg-[#f5fbef] border border-[#becab9] rounded-lg px-4 py-2.5 text-sm text-[#171d16] outline-none focus:border-[#006e1c]"
                    >
                      <option value="Morning">Morning</option>
                      <option value="Evening">Evening</option>
                      <option value="Night">Night</option>
                    </select>
                  </div>
                  
                  <div className="pt-2">
                    <button type="submit" className="w-full bg-[#006e1c] text-white font-bold py-3 rounded-xl hover:bg-[#005016] transition shadow-sm">
                      Add Staff Member
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Remove Confirmation Modal */}
        <AnimatePresence>
          {staffToDelete && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 border border-[#becab9] text-center"
              >
                <div className="w-16 h-16 bg-[#fff0f0] rounded-full flex items-center justify-center mx-auto mb-4 text-[#d32f2f]">
                  <Trash2 className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold text-[#171d16] mb-2">Remove Staff</h2>
                <p className="text-sm text-[#6f7a6b] mb-6">Are you sure you want to remove this staff member?</p>
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => setStaffToDelete(null)}
                    className="flex-1 bg-[#f5fbef] border border-[#becab9] text-[#3f4a3c] font-bold py-2.5 rounded-xl hover:bg-[#eaf0e4] transition"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={confirmRemove}
                    className="flex-1 bg-[#d32f2f] text-white font-bold py-2.5 rounded-xl hover:bg-[#b71c1c] transition shadow-sm"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </motion.div>
    </AdminLayout>
  );
};

export default Staff;
