import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Filter, Plus, List, LayoutGrid } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatusPill from '../../components/ui/StatusPill';

const bookings = [
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

  return (
    <AdminLayout>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#171d16]">Reservations</h1>
            <p className="text-sm text-[#6f7a6b] mt-0.5">Manage all table bookings and guest arrivals</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border border-[#becab9] bg-white text-[#3f4a3c] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#f0f6ea] transition"><Filter className="w-4 h-4" /> Filter</button>
            <button className="flex items-center gap-2 bg-[#006e1c] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#005016] transition"><Plus className="w-4 h-4" /> New Booking</button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left: Calendar + Summary */}
          <div className="col-span-4 space-y-4">
            {/* Calendar */}
            <div className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[#171d16]">October 2023</h3>
                <div className="flex gap-1">
                  <button className="w-7 h-7 rounded-lg hover:bg-[#f0f6ea] flex items-center justify-center"><ChevronLeft className="w-4 h-4 text-[#6f7a6b]" /></button>
                  <button className="w-7 h-7 rounded-lg hover:bg-[#f0f6ea] flex items-center justify-center"><ChevronRight className="w-4 h-4 text-[#6f7a6b]" /></button>
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
                <span className="text-2xl font-bold text-[#171d16]">84</span>
              </div>
              <div className="space-y-3">
                <div className="border-l-4 border-[#006e1c] pl-3"><div className="text-xs text-[#6f7a6b]">Upcoming</div><div className="font-bold text-[#006e1c] text-lg">12</div></div>
                <div className="border-l-4 border-[#ef5350] pl-3"><div className="text-xs text-[#6f7a6b]">Waitlist</div><div className="font-bold text-[#ef5350] text-lg">3</div></div>
              </div>
            </div>
          </div>

          {/* Right: Bookings Table */}
          <div className="col-span-8">
            <div className="bg-white rounded-xl border border-[#becab9] shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#eaf0e4]">
                <h3 className="font-bold text-[#171d16]">Bookings for Oct 12</h3>
                <div className="flex gap-1">
                  <button onClick={() => setView('list')} className={`w-8 h-8 rounded-lg flex items-center justify-center transition ${view === 'list' ? 'bg-[#006e1c] text-white' : 'hover:bg-[#f0f6ea] text-[#6f7a6b]'}`}><List className="w-4 h-4" /></button>
                  <button onClick={() => setView('grid')} className={`w-8 h-8 rounded-lg flex items-center justify-center transition ${view === 'grid' ? 'bg-[#006e1c] text-white' : 'hover:bg-[#f0f6ea] text-[#6f7a6b]'}`}><LayoutGrid className="w-4 h-4" /></button>
                </div>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-[#f0f6ea]">
                  <tr>
                    {['Time','Guest Name','Pax','Table','Status','Pre-order','Actions'].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-[#6f7a6b] uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b, i) => (
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
                        <button className="text-xs text-[#006e1c] font-semibold border border-[#006e1c] px-3 py-1 rounded-full hover:bg-[#e8f5e9] transition">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default Reservations;
