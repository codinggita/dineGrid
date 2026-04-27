import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, ChevronDown, X, Users, Clock, RefreshCw } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatusPill from '../../components/ui/StatusPill';

const floorTables = [
  { id: 'T1', shape: 'rect', status: 'available', seats: 4, label: '4 SEATS',     top: 60,  left: 30  },
  { id: 'T2', shape: 'rect', status: 'occupied',  seats: 4, label: '45 MIN',      top: 60,  left: 200 },
  { id: 'T3', shape: 'rect', status: 'cleaning',  seats: 4, label: 'CLEANING',    top: 60,  left: 370 },
  { id: 'T4', shape: 'rect', status: 'reserved',  seats: 4, label: '7:30 PM',     top: 60,  left: 540 },
  { id: 'T5', shape: 'round',status: 'available', seats: 6, label: '6 SEATS',     top: 200, left: 50  },
  { id: 'T6', shape: 'round',status: 'occupied',  seats: 6, label: '1H 15M',      top: 200, left: 220 },
  { id: 'T7', shape: 'round',status: 'available', seats: 6, label: '6 SEATS',     top: 200, left: 390 },
];

const colorMap = {
  available: { border: '#4caf50', bg: '#e8f5e9', text: '#2e7d32' },
  occupied:  { border: '#ef5350', bg: '#ffebee', text: '#c62828' },
  cleaning:  { border: '#ffb300', bg: '#fff8e1', text: '#e65100' },
  reserved:  { border: '#f48fb1', bg: '#fce4ec', text: '#c2185b' },
};

const tableDetail = {
  id: 'T6', status: 'Occupied', capacity: 6, timeSat: '1h 15m',
  server: 'Sarah Jenkins',
  order: [
    { item: '2x Margherita Pizza', price: '₹720' },
    { item: '1x Truffle Pasta',    price: '₹480' },
    { item: '3x Craft Pilsner',    price: '₹420' },
  ],
  subtotal: '₹1,620',
};

const TablesFloorPlan = () => {
  const [selected, setSelected] = useState(null);

  return (
    <AdminLayout>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#171d16]">Tables & Floor Plan</h1>
            <p className="text-sm text-[#6f7a6b] mt-0.5">Real-time table status and management</p>
          </div>
          <div className="flex items-center gap-3">
            {[['available','#4caf50','Available'],['occupied','#ef5350','Occupied'],['cleaning','#ffb300','Cleaning'],['reserved','#f48fb1','Reserved']].map(([,c,l])=>(
              <div key={l} className="flex items-center gap-1.5 text-xs text-[#6f7a6b] font-medium">
                <span className="w-2.5 h-2.5 rounded-full" style={{background:c}}/>{l}
              </div>
            ))}
            <button className="flex items-center gap-2 bg-[#006e1c] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#005016] transition">
              <Plus className="w-4 h-4" /> Add Table
            </button>
            <button className="flex items-center gap-2 border border-[#becab9] bg-white text-[#3f4a3c] text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#f0f6ea] transition">
              Main Dining <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex gap-5">
          {/* Floor Plan Canvas */}
          <div className="flex-1 bg-[#eaf0e4] rounded-2xl border border-[#becab9] relative overflow-hidden" style={{ minHeight: 380 }}>
            {floorTables.map(t => {
              const c = colorMap[t.status];
              const isRound = t.shape === 'round';
              return (
                <div
                  key={t.id}
                  onClick={() => setSelected(t.id === selected ? null : t.id)}
                  className="absolute cursor-pointer flex flex-col items-center justify-center text-center transition-all hover:scale-105"
                  style={{
                    top: t.top, left: t.left,
                    width: isRound ? 100 : 130, height: isRound ? 100 : 72,
                    background: c.bg, border: `2px solid ${c.border}`,
                    borderRadius: isRound ? '9999px' : '8px',
                    boxShadow: selected === t.id ? `0 0 0 3px ${c.border}` : '0px 4px 12px rgba(0,0,0,0.05)',
                  }}
                >
                  <span className="text-xs font-black" style={{color: c.text}}>{t.id}</span>
                  <span className="text-[10px] font-medium mt-0.5" style={{color: c.text}}>{t.label}</span>
                </div>
              );
            })}
            {/* Bar Area placeholder */}
            <div className="absolute bottom-6 left-6 right-6 h-14 bg-[#d4dbd0] rounded-lg flex items-center justify-center">
              <span className="text-[11px] font-bold text-[#6f7a6b] uppercase tracking-widest">Bar Area</span>
            </div>
          </div>

          {/* Detail Panel */}
          {selected && (
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
              className="w-72 bg-white rounded-2xl border border-[#becab9] p-5 shadow-sm flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[#171d16]">Table {selected}</h3>
                <button onClick={() => setSelected(null)} className="w-7 h-7 rounded-full bg-[#f0f6ea] flex items-center justify-center hover:bg-[#eaf0e4] transition">
                  <X className="w-4 h-4 text-[#6f7a6b]" />
                </button>
              </div>
              <StatusPill status={tableDetail.status} />
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-[#f5fbef] rounded-xl p-3 text-center">
                  <Users className="w-4 h-4 text-[#6f7a6b] mx-auto mb-1" />
                  <p className="text-xs text-[#6f7a6b]">Capacity</p>
                  <p className="text-lg font-bold text-[#171d16]">{tableDetail.capacity}</p>
                </div>
                <div className="bg-[#f5fbef] rounded-xl p-3 text-center">
                  <Clock className="w-4 h-4 text-[#6f7a6b] mx-auto mb-1" />
                  <p className="text-xs text-[#6f7a6b]">Time Seated</p>
                  <p className="text-lg font-bold text-[#171d16]">{tableDetail.timeSat}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[#eaf0e4]">
                <p className="text-[11px] font-bold text-[#6f7a6b] uppercase tracking-wider mb-3">Server</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#006e1c] flex items-center justify-center text-white text-xs font-bold">SJ</div>
                  <span className="text-sm font-semibold text-[#171d16] flex-1">{tableDetail.server}</span>
                  <button className="w-7 h-7 rounded-full bg-[#f0f6ea] flex items-center justify-center hover:bg-[#eaf0e4]">
                    <RefreshCw className="w-3.5 h-3.5 text-[#6f7a6b]" />
                  </button>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[#eaf0e4] flex-1">
                <p className="text-[11px] font-bold text-[#6f7a6b] uppercase tracking-wider mb-3">Current Order</p>
                <div className="space-y-2">
                  {tableDetail.order.map(o => (
                    <div key={o.item} className="flex justify-between text-sm">
                      <span className="text-[#3f4a3c]">{o.item}</span>
                      <span className="font-semibold text-[#171d16]">{o.price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm font-bold border-t border-[#eaf0e4] pt-2 mt-2">
                    <span>Subtotal</span><span>{tableDetail.subtotal}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <button className="w-full bg-[#ff9800] hover:bg-[#f57c00] text-white py-2.5 rounded-xl font-semibold text-sm transition">Mark for Cleaning</button>
                <button className="w-full border border-[#006e1c] text-[#006e1c] py-2.5 rounded-xl font-semibold text-sm hover:bg-[#e8f5e9] transition">View Full Bill</button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default TablesFloorPlan;
