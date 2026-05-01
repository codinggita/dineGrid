import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatusPill from '../../components/ui/StatusPill';

const initialRequests = [
  { id: 1, initials: 'NP', avatarColor: '#006e1c', name: 'Neha Patel',  phone: '+91 98765 43210', request: 'Request for 12 person birthday party', datetime: 'Today, 8:00 PM',     notes: 'Needs wheelchair access. Eggless cake.', status: 'Pending' },
  { id: 2, initials: 'RJ', avatarColor: '#ff9800', name: 'Rahul Jain',  phone: '+91 99887 76655', request: 'Corporate Team Dinner - 25 Guests',   datetime: 'Tomorrow, 7:30 PM',  notes: 'Private dining area preferred. Preset menu.', status: 'Pending' },
  { id: 3, initials: 'SM', avatarColor: '#c2185b', name: 'Priya Sharma',phone: '+91 91234 56789', request: 'Anniversary Setup - Table for 2',      datetime: 'Oct 25, 9:00 PM',   notes: 'Corner table. Wants roses on table.', status: 'Pending' },
];

const Approvals = () => {
  const [requests, setRequests] = useState(initialRequests);
  const [filter, setFilter] = useState('All');

  const updateStatus = (id, newStatus) => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  const handleFilterToggle = () => {
    const filters = ['All', 'Pending', 'Approved', 'Rejected'];
    const nextIdx = (filters.indexOf(filter) + 1) % filters.length;
    setFilter(filters[nextIdx]);
  };

  const filteredRequests = requests.filter(r => filter === 'All' || r.status === filter);

  return (
    <AdminLayout>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#171d16]">Approvals</h1>
            <p className="text-sm text-[#6f7a6b] mt-0.5">Review and manage pending special requests and large group bookings.</p>
          </div>
          <button 
            onClick={handleFilterToggle}
            className="flex items-center gap-2 border border-[#becab9] bg-white text-[#3f4a3c] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#f0f6ea] transition"
          >
            <Filter className="w-4 h-4" /> Filter: {filter}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRequests.map((r) => (
            <div key={r.id} className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm flex flex-col">
              {/* Guest */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ background: r.avatarColor }}>
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-[#171d16] text-sm">{r.name}</p>
                  <p className="text-xs text-[#6f7a6b]">{r.phone}</p>
                </div>
                <div className="ml-auto"><StatusPill status={r.status} /></div>
              </div>

              {/* Request */}
              <div className="mb-3">
                <p className="text-[10px] font-bold text-[#6f7a6b] uppercase tracking-wider mb-1">Request Details</p>
                <p className="text-sm text-[#171d16] font-medium leading-snug">{r.request}</p>
              </div>

              {/* Date */}
              <div className="bg-[#f5fbef] rounded-lg px-3 py-2 mb-3">
                <p className="text-[10px] font-bold text-[#6f7a6b] uppercase tracking-wider mb-0.5">Date & Time</p>
                <p className="text-sm font-semibold text-[#171d16]">{r.datetime}</p>
              </div>

              {/* Notes */}
              <div className="bg-[#fff8e1] rounded-lg px-3 py-2 mb-5 flex-1">
                <p className="text-[10px] font-bold text-[#6f7a6b] uppercase tracking-wider mb-0.5">Notes</p>
                <p className="text-sm text-[#3f4a3c]">{r.notes}</p>
              </div>

              {/* Actions */}
              {r.status === 'Pending' ? (
                <div className="flex gap-2">
                  <button onClick={() => updateStatus(r.id, 'Rejected')} className="flex-1 border-2 border-[#ef5350] text-[#ef5350] py-2 rounded-xl font-semibold text-sm hover:bg-[#ffebee] transition">Reject</button>
                  <button onClick={() => updateStatus(r.id, 'Approved')} className="flex-1 bg-[#006e1c] text-white py-2 rounded-xl font-semibold text-sm hover:bg-[#005016] transition">Approve</button>
                </div>
              ) : (
                <div className={`text-center py-2 rounded-xl font-semibold text-sm ${r.status === 'Approved' ? 'bg-[#e8f5e9] text-[#2e7d32]' : 'bg-[#ffebee] text-[#c62828]'}`}>
                  {r.status}
                </div>
              )}
            </div>
          ))}
          {filteredRequests.length === 0 && (
            <div className="col-span-full py-12 text-center text-[#6f7a6b]">No requests found with filter: {filter}</div>
          )}
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default Approvals;
