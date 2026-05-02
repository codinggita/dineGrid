import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Filter, Plus, List, LayoutGrid } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatusPill from '../../components/ui/StatusPill';

const initialBookings = [
  { time: '19:00', name: 'Rajesh Kumar', vip: true, pax: 4, table: 'T-12', status: 'Confirmed', preorder: true },
  { time: '19:30', name: 'Anjali Sharma', pax: 2, table: 'T-05', status: 'Arrived',   preorder: false },
  { time: '20:00', name: 'Vikram Singh',  pax: 6, table: 'Booth 1', status: 'Reserved',  preorder: true,  tablePink: true },
  { time: '20:15', name: 'Priya Patel',   pax: 3, table: 'T-08', status: 'Confirmed', preorder: false },
  { time: '21:00', name: 'Amit Desai',    pax: 8, table: 'PDR',   status: 'Late',     preorder: true,  timeLate: true },
  { time: '21:30', name: 'Neha Gupta',    pax: 2, table: 'Unassigned', status: 'Waitlist', preorder: false, tableGray: true },
];

const days = [
  [null, null, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, null, null],
];

const Reservations = () => {
  const [view, setView] = useState('list');
  const [bookings, setBookings] = useState(initialBookings);
  const [filter, setFilter] = useState('All');
  
  // Modal / Inputs state
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);

  const [newBooking, setNewBooking] = useState({
    time: '',
    name: '',
    vip: false,
    pax: 2,
    table: 'Unassigned',
    status: 'Confirmed',
    preorder: false
  });

  const handleAddBooking = (e) => {
    e.preventDefault();
    if (!newBooking.name || !newBooking.time) return;
    setBookings([newBooking, ...bookings]);
    setNewBooking({ time: '', name: '', vip: false, pax: 2, table: 'Unassigned', status: 'Confirmed', preorder: false });
    setShowAddModal(false);
  };

  const handleEditClick = (booking) => {
    setEditingBooking(booking);
    setShowEditModal(true);
  };

  const handleUpdateBooking = (e) => {
    e.preventDefault();
    if (!editingBooking.name || !editingBooking.time) return;
    setBookings(bookings.map(b => b.name === editingBooking.name ? editingBooking : b));
    setShowEditModal(false);
    setEditingBooking(null);
  };

  const handleFilterToggle = () => {
    const filters = ['All', 'Confirmed', 'Arrived', 'Reserved', 'Late', 'Waitlist'];
    const nextIdx = (filters.indexOf(filter) + 1) % filters.length;
    setFilter(filters[nextIdx]);
  };

  const filteredBookings = bookings.filter(b => filter === 'All' || b.status === filter);

  return (
    <AdminLayout>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#171d16]">Reservations</h1>
            <p className="text-sm text-[#6f7a6b] mt-0.5">Manage all table bookings and guest arrivals</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={handleFilterToggle} className="flex items-center gap-2 border border-[#becab9] bg-white text-[#3f4a3c] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#f0f6ea] transition"><Filter className="w-4 h-4" /> Filter: {filter}</button>
            <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 bg-[#006e1c] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#005016] transition"><Plus className="w-4 h-4" /> New Booking</button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left: Calendar + Summary */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            {/* Calendar */}
            <div className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[#171d16]">October 2023</h3>
                <div className="flex gap-1">
                  <button onClick={() => alert('Previous month')} className="w-7 h-7 rounded-lg hover:bg-[#f0f6ea] flex items-center justify-center"><ChevronLeft className="w-4 h-4 text-[#6f7a6b]" /></button>
                  <button onClick={() => alert('Next month')} className="w-7 h-7 rounded-lg hover:bg-[#f0f6ea] flex items-center justify-center"><ChevronRight className="w-4 h-4 text-[#6f7a6b]" /></button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                  <div key={d} className="text-[10px] font-bold text-[#6f7a6b] py-1">{d}</div>
                ))}
              </div>
              {days.map((week, wi) => (
                <div key={wi} className="grid grid-cols-7 gap-1 text-center">
                  {week.map((d, di) => (
                    <div key={di} className={`text-xs py-1.5 rounded-full cursor-pointer font-medium transition ${
                      d === 12 ? 'bg-[#006e1c] text-white' : d === 13 ? 'text-[#006e1c] font-bold' : d ? 'text-[#3f4a3c] hover:bg-[#f0f6ea]' : ''
                    }`}>
                      {d || ''}
                      {d === 13 && <div className="w-1 h-1 bg-[#006e1c] rounded-full mx-auto mt-0.5" />}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm">
              <h3 className="font-bold text-[#171d16] mb-4">Today's Service</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-[#6f7a6b]">Total Covers</span>
                <span className="text-2xl font-bold text-[#171d16]">{bookings.reduce((acc, cur) => acc + (cur.pax || 0), 0)}</span>
              </div>
              <div className="space-y-3">
                <div className="border-l-4 border-[#006e1c] pl-3"><div className="text-xs text-[#6f7a6b]">Upcoming</div><div className="font-bold text-[#006e1c] text-lg">{bookings.filter(b => b.status === 'Confirmed').length}</div></div>
                <div className="border-l-4 border-[#ef5350] pl-3"><div className="text-xs text-[#6f7a6b]">Waitlist</div><div className="font-bold text-[#ef5350] text-lg">{bookings.filter(b => b.status === 'Waitlist').length}</div></div>
              </div>
            </div>
          </div>

          {/* Right: Bookings Table */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-xl border border-[#becab9] shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#eaf0e4]">
                <h3 className="font-bold text-[#171d16]">Bookings for Oct 12</h3>
                <div className="flex gap-1">
                  <button onClick={() => setView('list')} className={`w-8 h-8 rounded-lg flex items-center justify-center transition ${view === 'list' ? 'bg-[#006e1c] text-white' : 'hover:bg-[#f0f6ea] text-[#6f7a6b]'}`}><List className="w-4 h-4" /></button>
                  <button onClick={() => setView('grid')} className={`w-8 h-8 rounded-lg flex items-center justify-center transition ${view === 'grid' ? 'bg-[#006e1c] text-white' : 'hover:bg-[#f0f6ea] text-[#6f7a6b]'}`}><LayoutGrid className="w-4 h-4" /></button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[650px]">
                  <thead className="bg-[#f0f6ea]">
                    <tr>
                      {['Time','Guest Name','Pax','Table','Status','Pre-order','Actions'].map(h => (
                        <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-[#6f7a6b] uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBookings.map((b, i) => (
                      <tr key={i} className="border-b border-[#eaf0e4] hover:bg-[#f5fbef] transition">
                        <td className={`px-4 py-3.5 font-mono font-semibold ${b.timeLate ? 'text-[#ef5350]' : 'text-[#171d16]'}`}>{b.time}</td>
                        <td className="px-4 py-3.5">
                          <span className="font-semibold text-[#171d16]">{b.name}</span>
                          {b.vip && <span className="ml-1 text-yellow-500">★</span>}
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#eaf0e4] text-xs font-bold text-[#3f4a3c]">{b.pax}</span>
                        </td>
                        <td className={`px-4 py-3.5 text-sm font-medium ${b.tablePink ? 'text-[#c2185b]' : b.tableGray ? 'text-[#9e9e9e] italic' : 'text-[#3f4a3c]'}`}>{b.table}</td>
                        <td className="px-4 py-3.5"><StatusPill status={b.status} /></td>
                        <td className="px-4 py-3.5 text-center">{b.preorder ? <span className="text-[#006e1c] font-bold text-lg">✓</span> : <span className="text-[#becab9]">—</span>}</td>
                        <td className="px-4 py-3.5">
                          <button onClick={() => handleEditClick(b)} className="text-xs text-[#006e1c] font-semibold border border-[#006e1c] px-3 py-1 rounded-full hover:bg-[#e8f5e9] transition">Edit</button>
                        </td>
                      </tr>
                    ))}
                    {filteredBookings.length === 0 && (
                      <tr><td colSpan="7" className="py-12 text-center text-[#6f7a6b]">No bookings found with filter: {filter}</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Add Booking Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#becab9]">
              <h2 className="text-xl font-bold text-[#171d16] mb-4">New Booking</h2>
              <form onSubmit={handleAddBooking} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Guest Name</label>
                  <input required value={newBooking.name} onChange={(e) => setNewBooking({...newBooking, name: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" placeholder="Ansh Patel" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Time</label>
                    <input required value={newBooking.time} onChange={(e) => setNewBooking({...newBooking, time: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" placeholder="19:30" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Guests (Pax)</label>
                    <input type="number" required value={newBooking.pax} onChange={(e) => setNewBooking({...newBooking, pax: parseInt(e.target.value) || 2})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Table</label>
                    <input value={newBooking.table} onChange={(e) => setNewBooking({...newBooking, table: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" placeholder="T-05" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Status</label>
                    <select value={newBooking.status} onChange={(e) => setNewBooking({...newBooking, status: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-3 py-2.5 outline-none text-[#171d16] text-sm bg-white">
                      <option value="Confirmed">Confirmed</option>
                      <option value="Arrived">Arrived</option>
                      <option value="Reserved">Reserved</option>
                      <option value="Late">Late</option>
                      <option value="Waitlist">Waitlist</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <label className="flex items-center gap-2 text-sm text-[#171d16]">
                    <input type="checkbox" checked={newBooking.vip} onChange={(e) => setNewBooking({...newBooking, vip: e.target.checked})} className="rounded text-[#006e1c]" /> VIP Guest
                  </label>
                  <label className="flex items-center gap-2 text-sm text-[#171d16]">
                    <input type="checkbox" checked={newBooking.preorder} onChange={(e) => setNewBooking({...newBooking, preorder: e.target.checked})} className="rounded text-[#006e1c]" /> Pre-Order
                  </label>
                </div>
                <div className="flex gap-2 justify-end pt-2">
                  <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-[#becab9] text-[#6f7a6b] font-semibold rounded-xl text-sm hover:bg-[#f0f6ea] transition">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-[#006e1c] text-white font-semibold rounded-xl text-sm hover:bg-[#005016] transition">Create</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Edit Booking Modal */}
        {showEditModal && editingBooking && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#becab9]">
              <h2 className="text-xl font-bold text-[#171d16] mb-4">Edit Booking</h2>
              <form onSubmit={handleUpdateBooking} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Guest Name</label>
                  <input required value={editingBooking.name} onChange={(e) => setEditingBooking({...editingBooking, name: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Time</label>
                    <input required value={editingBooking.time} onChange={(e) => setEditingBooking({...editingBooking, time: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Guests (Pax)</label>
                    <input type="number" required value={editingBooking.pax} onChange={(e) => setEditingBooking({...editingBooking, pax: parseInt(e.target.value) || 2})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Table</label>
                    <input value={editingBooking.table} onChange={(e) => setEditingBooking({...editingBooking, table: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Status</label>
                    <select value={editingBooking.status} onChange={(e) => setEditingBooking({...editingBooking, status: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-3 py-2.5 outline-none text-[#171d16] text-sm bg-white">
                      <option value="Confirmed">Confirmed</option>
                      <option value="Arrived">Arrived</option>
                      <option value="Reserved">Reserved</option>
                      <option value="Late">Late</option>
                      <option value="Waitlist">Waitlist</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <label className="flex items-center gap-2 text-sm text-[#171d16]">
                    <input type="checkbox" checked={editingBooking.vip} onChange={(e) => setEditingBooking({...editingBooking, vip: e.target.checked})} className="rounded text-[#006e1c]" /> VIP Guest
                  </label>
                  <label className="flex items-center gap-2 text-sm text-[#171d16]">
                    <input type="checkbox" checked={editingBooking.preorder} onChange={(e) => setEditingBooking({...editingBooking, preorder: e.target.checked})} className="rounded text-[#006e1c]" /> Pre-Order
                  </label>
                </div>
                <div className="flex gap-2 justify-end pt-2">
                  <button type="button" onClick={() => setShowEditModal(false)} className="px-4 py-2 border border-[#becab9] text-[#6f7a6b] font-semibold rounded-xl text-sm hover:bg-[#f0f6ea] transition">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-[#006e1c] text-white font-semibold rounded-xl text-sm hover:bg-[#005016] transition">Save</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </motion.div>
    </AdminLayout>
  );
};

export default Reservations;
