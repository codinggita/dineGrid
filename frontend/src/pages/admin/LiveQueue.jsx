import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatusPill from '../../components/ui/StatusPill';

const initialQueue = [
  { pos: 1, name: 'Rahul Patel',  phone: '+91 98765 43210', party: 4, joined: '18:45', wait: '15 min', status: 'Waiting', table: null },
  { pos: 2, name: 'Priya Sharma', phone: '+91 87654 32109', party: 2, joined: '18:50', wait: '20 min', status: 'Notified', table: null },
  { pos: 3, name: 'Amit Joshi',   phone: '+91 76543 21098', party: 6, joined: '19:05', wait: '35 min', status: 'Waiting', table: null },
  { pos: 4, name: 'Sneha Desai',  phone: '+91 91234 56789', party: 3, joined: '18:20', wait: '—',      status: 'Seated',  table: 'Table 12' },
];

const LiveQueue = () => {
  const [queue, setQueue] = useState(initialQueue);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [newParty, setNewParty] = useState({ name: '', phone: '', party: 2 });

  const handleNotify = (pos) => {
    alert('SMS notification sent to guest!');
    setQueue(queue.map(q => q.pos === pos ? { ...q, status: 'Notified' } : q));
  };

  const handleSeat = (pos) => {
    const tableNum = Math.floor(Math.random() * 20) + 1;
    setQueue(queue.map(q => q.pos === pos ? { ...q, status: 'Seated', wait: '—', table: `Table ${tableNum}` } : q));
  };

  const handleFilterToggle = () => {
    const filters = ['All', 'Waiting', 'Notified', 'Seated'];
    const nextIdx = (filters.indexOf(filter) + 1) % filters.length;
    setFilter(filters[nextIdx]);
  };

  const handleAddParty = (e) => {
    e.preventDefault();
    if (!newParty.name || !newParty.phone) return;
    
    const now = new Date();
    const joined = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    const nextPos = queue.length > 0 ? Math.max(...queue.map(q => q.pos)) + 1 : 1;
    
    setQueue([
      ...queue, 
      { pos: nextPos, ...newParty, joined, wait: '45 min', status: 'Waiting', table: null }
    ]);
    
    setNewParty({ name: '', phone: '', party: 2 });
    setShowAddModal(false);
  };

  const filteredQueue = queue
    .filter(r => r.name.toLowerCase().includes(search.toLowerCase()) || r.phone.includes(search))
    .filter(r => filter === 'All' || r.status === filter);

  return (
    <AdminLayout>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#171d16]">Live Queue</h1>
            <p className="text-sm text-[#6f7a6b] mt-0.5">Real-time guest waitlist management</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-[#becab9] rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-[#6f7a6b]" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search guests…" className="text-sm outline-none bg-transparent text-[#171d16] placeholder:text-[#6f7a6b] w-40" />
            </div>
            <button onClick={handleFilterToggle} className="flex items-center gap-2 border border-[#becab9] bg-white text-[#3f4a3c] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#f0f6ea] transition">
              <Filter className="w-4 h-4" /> Filter: {filter}
            </button>
            <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 bg-[#006e1c] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#005016] transition">
              <Plus className="w-4 h-4" /> Add Party
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#becab9] shadow-sm overflow-x-auto">
          <table className="w-full text-sm min-w-[800px]">
            <thead className="bg-[#f0f6ea] border-b border-[#becab9]">
              <tr>
                {['POS','CUSTOMER NAME','PHONE','PARTY','JOINED AT','EST. WAIT','STATUS','ACTIONS'].map(h => (
                  <th key={h} className="px-5 py-3.5 text-left text-[11px] font-bold text-[#6f7a6b] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredQueue.map((row) => (
                <tr key={row.pos} className="border-b border-[#eaf0e4] hover:bg-[#f5fbef] transition">
                  <td className="px-5 py-4 font-bold text-[#171d16]">#{row.pos}</td>
                  <td className="px-5 py-4">
                    <div className="font-semibold text-[#171d16]">{row.name}</div>
                    {row.table && <div className="text-xs text-[#006e1c] font-medium mt-0.5">{row.table}</div>}
                  </td>
                  <td className="px-5 py-4 text-[#3f4a3c]">{row.phone}</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#eaf0e4] text-[#3f4a3c] font-bold text-xs">{row.party}</span>
                  </td>
                  <td className="px-5 py-4 text-[#3f4a3c] font-mono">{row.joined}</td>
                  <td className="px-5 py-4 font-semibold text-[#e65100]">{row.wait}</td>
                  <td className="px-5 py-4"><StatusPill status={row.status} /></td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleSeat(row.pos)} className="text-xs font-semibold text-[#006e1c] border border-[#006e1c] px-3 py-1 rounded-full hover:bg-[#e8f5e9] transition">Seat</button>
                      <button onClick={() => handleNotify(row.pos)} className="text-xs font-semibold text-[#e65100] border border-[#ff9800] px-3 py-1 rounded-full hover:bg-[#fff3e0] transition">Notify</button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredQueue.length === 0 && (
                <tr><td colSpan="8" className="py-12 text-center text-[#6f7a6b]">No guests match your search or filter.</td></tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-5 py-4 border-t border-[#eaf0e4] bg-[#f5fbef]">
            <span className="text-xs text-[#6f7a6b]">Showing {filteredQueue.length} entries</span>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-lg border border-[#becab9] flex items-center justify-center hover:bg-white transition"><ChevronLeft className="w-4 h-4 text-[#6f7a6b]" /></button>
              <span className="w-8 h-8 rounded-lg bg-[#006e1c] text-white text-xs font-bold flex items-center justify-center">1</span>
              <button className="w-8 h-8 rounded-lg border border-[#becab9] flex items-center justify-center hover:bg-white transition"><ChevronRight className="w-4 h-4 text-[#6f7a6b]" /></button>
            </div>
          </div>
        </div>

        {/* Add Party Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#becab9]">
              <h2 className="text-xl font-bold text-[#171d16] mb-4">Add Party to Waitlist</h2>
              <form onSubmit={handleAddParty} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Guest Name</label>
                  <input required value={newParty.name} onChange={(e) => setNewParty({...newParty, name: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" placeholder="e.g. John Doe" />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Phone Number</label>
                  <input required value={newParty.phone} onChange={(e) => setNewParty({...newParty, phone: e.target.value})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#6f7a6b] uppercase tracking-wider block mb-1">Party Size</label>
                  <input type="number" required value={newParty.party} onChange={(e) => setNewParty({...newParty, party: parseInt(e.target.value) || 2})} className="w-full border border-[#becab9] rounded-xl px-4 py-2.5 outline-none text-[#171d16] text-sm" />
                </div>
                <div className="flex gap-2 justify-end pt-2">
                  <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-[#becab9] text-[#6f7a6b] font-semibold rounded-xl text-sm hover:bg-[#f0f6ea] transition">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-[#006e1c] text-white font-semibold rounded-xl text-sm hover:bg-[#005016] transition">Add to Queue</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </motion.div>
    </AdminLayout>
  );
};

export default LiveQueue;
