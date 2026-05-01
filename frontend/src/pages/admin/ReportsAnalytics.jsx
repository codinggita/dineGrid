import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, ShoppingBag, Download } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatCard from '../../components/ui/StatCard';

const ReportsAnalytics = () => {
  const handleExport = () => {
    alert('Generating restaurant performance report (CSV/PDF) to download...\nExport complete!');
  };

  return (
    <AdminLayout>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#171d16]">Reports & Analytics</h1>
            <p className="text-sm text-[#6f7a6b] mt-0.5">Overview of your restaurant's performance</p>
          </div>
          <button 
            onClick={handleExport}
            className="flex items-center gap-2 border border-[#becab9] bg-white text-[#3f4a3c] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#f0f6ea] transition"
          >
            <Download className="w-4 h-4" /> Export Report
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total Revenue" value="₹1,24,500" sub="+12% from last week" color="text-[#171d16]" icon={<DollarSign className="w-5 h-5 text-[#006e1c]"/>} />
          <StatCard label="Total Orders" value="342" sub="+5% from last week" color="text-[#171d16]" icon={<ShoppingBag className="w-5 h-5 text-[#ff9800]"/>} />
          <StatCard label="Total Guests" value="890" sub="+18% from last week" color="text-[#171d16]" icon={<Users className="w-5 h-5 text-[#1976d2]"/>} />
          <StatCard label="Avg Ticket Size" value="₹850" sub="Steady" color="text-[#171d16]" icon={<TrendingUp className="w-5 h-5 text-[#c2185b]"/>} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm h-80 flex flex-col justify-center items-center relative">
             <div className="absolute top-5 left-5">
               <h3 className="text-lg font-bold text-[#171d16]">Revenue Trend</h3>
             </div>
             <div className="w-full h-40 bg-[#f5fbef] rounded-lg mt-8 flex items-end justify-between px-4 pb-4">
                {[40, 60, 45, 80, 50, 90, 70].map((h, i) => (
                  <div key={i} className="w-8 bg-[#006e1c] rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
             </div>
          </div>
          <div className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm h-80 flex flex-col relative">
             <h3 className="text-lg font-bold text-[#171d16] mb-4">Popular Items</h3>
             <div className="w-full space-y-4">
                {[
                  { name: 'Truffle Risotto', sales: 120, percent: 80 },
                  { name: 'Margherita Pizza', sales: 95, percent: 65 },
                  { name: 'Crispy Calamari', sales: 80, percent: 50 },
                  { name: 'Tiramisu', sales: 65, percent: 35 }
                ].map(item => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-semibold text-[#3f4a3c]">{item.name}</span>
                      <span className="text-[#6f7a6b]">{item.sales} orders</span>
                    </div>
                    <div className="w-full h-2 bg-[#eaf0e4] rounded-full overflow-hidden">
                      <div className="h-full bg-[#ff9800]" style={{ width: `${item.percent}%` }}></div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default ReportsAnalytics;
