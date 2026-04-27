import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, LayoutGrid, ShoppingBag, Megaphone, UserPlus, CheckSquare } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatCard from '../../components/ui/StatCard';

const tables = [
  { id: 'T1', status: 'available' }, { id: 'T2', status: 'occupied' },
  { id: 'T3', status: 'occupied' }, { id: 'T4', status: 'reserved' },
  { id: 'T5', status: 'available' }, { id: 'T6', status: 'action' },
  { id: 'B1', status: 'available' }, { id: 'B2', status: 'occupied' },
  { id: 'B3', status: 'available' },
];

const tableColor = {
  available: 'bg-[#e8f5e9] border-[#4caf50] text-[#2e7d32]',
  occupied:  'bg-[#ffebee] border-[#ef5350] text-[#c62828]',
  reserved:  'bg-[#fce4ec] border-[#f48fb1] text-[#c2185b]',
  action:    'bg-[#fff8e1] border-[#ffb300] text-[#e65100]',
};

const bars = [
  { label: '11a', h: 20 }, { label: '12p', h: 40 }, { label: '1p', h: 85, active: true },
  { label: '2p', h: 55 },  { label: '3p', h: 30 },  { label: '4p', h: 15 },
  { label: '5p', h: 10 },
];

const AdminDashboard = () => (
  <AdminLayout>
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      {/* Alert Banner */}
      <div className="bg-[#ff9800] text-white rounded-xl px-6 py-3 flex items-center gap-3 mb-4 shadow-sm">
        <Clock className="w-5 h-5 shrink-0" />
        <span className="font-semibold">Current Estimated Wait Time: <strong>38 minutes</strong></span>
      </div>

      {/* Up Next Bar */}
      <div className="bg-white border border-[#becab9] rounded-xl px-6 py-3 flex items-center gap-3 mb-5 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#006e1c] animate-pulse" />
        <span className="text-sm font-semibold text-[#3f4a3c]">UP NEXT</span>
        <span className="text-sm text-[#171d16] ml-2">1. <strong>Sarah J.</strong> (Party of 4)</span>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Call Next Guest', icon: Megaphone },
          { label: 'Add Walk-in',     icon: UserPlus },
          { label: 'Mark Table Ready',icon: CheckSquare },
        ].map(({ label, icon: Icon }) => (
          <button key={label} className="flex items-center justify-center gap-2 bg-[#006e1c] hover:bg-[#005016] text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all shadow-sm hover:shadow-md">
            <Icon className="w-4 h-4" />{label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left: Stats */}
        <div className="col-span-5 space-y-4">
          <StatCard label="People in Queue" value="32" color="text-[#006e1c]" icon={<Users className="w-5 h-5 text-[#006e1c]" />} />
          <StatCard label="Avg Wait Time Today" value="41 min" color="text-[#171d16]" icon={<Clock className="w-5 h-5 text-[#6f7a6b]" />} />
          <StatCard label="Tables Occupied" value="19/26" sub="73% capacity" color="text-[#171d16]" icon={<LayoutGrid className="w-5 h-5 text-[#006e1c]" />} progress={73} />
          <StatCard label="Pre-Orders Pending" value="8 orders" color="text-[#e65100]" icon={<ShoppingBag className="w-5 h-5 text-[#ff9800]" />} />
        </div>

        {/* Right: Floor Plan + Chart */}
        <div className="col-span-7 space-y-5">
          {/* Floor Plan */}
          <div className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#3f4a3c] mb-4">Live Floor Plan</h3>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {tables.map(t => (
                <div key={t.id} className={`border-2 rounded-lg px-3 py-2 text-center text-xs font-bold ${tableColor[t.status]}`}>
                  {t.id}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              {[['available','#4caf50','Available'],['occupied','#ef5350','Occupied'],['reserved','#f48fb1','Reserved'],['action','#ffb300','Action']].map(([,c,l])=>(
                <div key={l} className="flex items-center gap-1.5 text-[11px] text-[#6f7a6b] font-medium">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />{l}
                </div>
              ))}
            </div>
          </div>

          {/* Hourly Chart */}
          <div className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#3f4a3c] mb-4">Hourly Occupancy Trend</h3>
            <div className="flex items-end gap-3 h-32">
              {bars.map(b => (
                <div key={b.label} className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full rounded-t-md transition-all" style={{ height: `${b.h}%`, background: b.active ? '#006e1c' : '#dee4d9' }} />
                  <span className={`text-[11px] font-medium ${b.active ? 'text-[#006e1c]' : 'text-[#6f7a6b]'}`}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AdminLayout>
);

export default AdminDashboard;
