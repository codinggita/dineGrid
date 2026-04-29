import React from 'react';
import { motion } from 'framer-motion';
import { Save, Building, Clock, CreditCard } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const Settings = () => (
  <AdminLayout>
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#171d16]">Settings</h1>
          <p className="text-sm text-[#6f7a6b] mt-0.5">Manage your restaurant configuration</p>
        </div>
        <button className="flex items-center gap-2 bg-[#006e1c] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#005016] transition">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>

      <div className="space-y-6">
        {/* General Info */}
        <div className="bg-white rounded-xl border border-[#becab9] p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Building className="w-5 h-5 text-[#006e1c]" />
            <h2 className="text-lg font-bold text-[#171d16]">Restaurant Profile</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#6f7a6b] uppercase mb-1">Restaurant Name</label>
              <input type="text" defaultValue="The Spice House" className="w-full bg-[#f5fbef] border border-[#becab9] rounded-lg px-4 py-2 text-sm text-[#171d16] outline-none focus:border-[#006e1c]" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#6f7a6b] uppercase mb-1">Contact Email</label>
              <input type="email" defaultValue="hello@spicehouse.com" className="w-full bg-[#f5fbef] border border-[#becab9] rounded-lg px-4 py-2 text-sm text-[#171d16] outline-none focus:border-[#006e1c]" />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-bold text-[#6f7a6b] uppercase mb-1">Address</label>
              <input type="text" defaultValue="123 Culinary Blvd, Food District" className="w-full bg-[#f5fbef] border border-[#becab9] rounded-lg px-4 py-2 text-sm text-[#171d16] outline-none focus:border-[#006e1c]" />
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="bg-white rounded-xl border border-[#becab9] p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-[#006e1c]" />
            <h2 className="text-lg font-bold text-[#171d16]">Operating Hours</h2>
          </div>
          <div className="space-y-3">
            {['Monday - Friday', 'Saturday - Sunday'].map(day => (
              <div key={day} className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#3f4a3c] w-32">{day}</span>
                <div className="flex items-center gap-2">
                  <input type="time" defaultValue="11:00" className="bg-[#f5fbef] border border-[#becab9] rounded-lg px-3 py-1.5 text-sm outline-none" />
                  <span className="text-[#6f7a6b]">to</span>
                  <input type="time" defaultValue="23:00" className="bg-[#f5fbef] border border-[#becab9] rounded-lg px-3 py-1.5 text-sm outline-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Settings */}
        <div className="bg-white rounded-xl border border-[#becab9] p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="w-5 h-5 text-[#006e1c]" />
            <h2 className="text-lg font-bold text-[#171d16]">Payment Configuration</h2>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm font-medium text-[#3f4a3c] cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-[#006e1c] rounded border-[#becab9] focus:ring-[#006e1c]" />
              Accept Credit Cards
            </label>
            <label className="flex items-center gap-2 text-sm font-medium text-[#3f4a3c] cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-[#006e1c] rounded border-[#becab9] focus:ring-[#006e1c]" />
              Accept UPI / Wallets
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  </AdminLayout>
);

export default Settings;
