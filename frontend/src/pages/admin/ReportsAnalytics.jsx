import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2 } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const ReportsAnalytics = () => (
  <AdminLayout>
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-20 h-20 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6">
        <BarChart2 className="w-10 h-10 text-[#006e1c]" />
      </div>
      <h1 className="text-3xl font-bold text-[#171d16] mb-2">Reports & Analytics</h1>
      <p className="text-[#6f7a6b] text-base mb-1">This section is under construction.</p>
      <p className="text-sm text-[#becab9]">Revenue trends, peak hours, and guest insights will be displayed here.</p>
    </motion.div>
  </AdminLayout>
);

export default ReportsAnalytics;
