import React from 'react';
import { motion } from 'framer-motion';
import { Filter, ArrowUpDown, ShoppingBag, ChefHat, Package } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatCard from '../../components/ui/StatCard';
import StatusPill from '../../components/ui/StatusPill';

const PreOrders = () => (
  <AdminLayout>
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#171d16]">Pre-Orders Dashboard</h1>
          <p className="text-sm text-[#6f7a6b] mt-0.5">Track and manage kitchen pre-order queue</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-[#becab9] bg-white text-[#3f4a3c] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#f0f6ea] transition"><Filter className="w-4 h-4" /> Filter</button>
          <button className="flex items-center gap-2 border border-[#becab9] bg-white text-[#3f4a3c] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#f0f6ea] transition"><ArrowUpDown className="w-4 h-4" /> Sort: Urgency</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard label="Total Pre-Orders" value="24" color="text-[#e65100]" icon={<ShoppingBag className="w-5 h-5 text-[#ff9800]"/>} />
        <StatCard label="Preparing" value="8" color="text-[#006e1c]" icon={<ChefHat className="w-5 h-5 text-[#006e1c]"/>} />
        <StatCard label="Ready for Pickup" value="3" color="text-[#c2185b]" icon={<Package className="w-5 h-5 text-[#f26f9d]"/>} />
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Active Kitchen Queue */}
        <div className="col-span-7 space-y-4">
          <h2 className="text-base font-bold text-[#171d16] border-l-4 border-[#ff9800] pl-3">Active Kitchen Queue</h2>

          {/* Order 1042 */}
          <div className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-xs font-mono text-[#6f7a6b]">#1042</span>
                <h4 className="font-bold text-[#171d16]">Rahul Sharma</h4>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#6f7a6b]">Queue Pos: <strong className="text-[#171d16]">3</strong></span>
                <StatusPill status="Preparing" />
              </div>
            </div>
            <div className="bg-[#f5fbef] rounded-lg p-3 space-y-1.5 mb-4">
              <div className="flex justify-between text-sm"><span className="text-[#3f4a3c]">2x Paneer Butter Masala</span><span className="font-semibold">₹560</span></div>
              <div className="text-[11px] text-[#6f7a6b] pl-2">Medium spicy, extra butter</div>
              <div className="flex justify-between text-sm"><span className="text-[#3f4a3c]">1x Dal Tadka</span><span className="font-semibold">₹180</span></div>
              <div className="flex justify-between text-sm"><span className="text-[#3f4a3c]">3x Jeera Rice</span><span className="font-semibold">₹450</span></div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 border border-[#becab9] text-[#3f4a3c] py-2 rounded-lg text-sm font-semibold hover:bg-[#f0f6ea] transition">Details</button>
              <button className="flex-1 bg-[#006e1c] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#005016] transition">Mark Ready</button>
            </div>
          </div>

          {/* Order 1045 */}
          <div className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-xs font-mono text-[#6f7a6b]">#1045</span>
                <h4 className="font-bold text-[#171d16]">Priya Patel</h4>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#6f7a6b]">Queue Pos: <strong className="text-[#171d16]">5</strong></span>
                <StatusPill status="Received" />
              </div>
            </div>
            <div className="bg-[#f5fbef] rounded-lg p-3 space-y-1.5 mb-4">
              <div className="flex justify-between text-sm"><span className="text-[#3f4a3c]">1x Veg Biryani</span><span className="font-semibold">₹220</span></div>
              <div className="flex justify-between text-sm"><span className="text-[#3f4a3c]">2x Garlic Naan</span><span className="font-semibold">₹90</span></div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 border border-[#becab9] text-[#3f4a3c] py-2 rounded-lg text-sm font-semibold hover:bg-[#f0f6ea] transition">Details</button>
              <button className="flex-1 bg-[#171d16] text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition">Start Prep</button>
            </div>
          </div>
        </div>

        {/* Right: Ready + Upcoming */}
        <div className="col-span-5 space-y-4">
          <h2 className="text-base font-bold text-[#171d16] border-l-4 border-[#006e1c] pl-3">Ready / Assigned</h2>
          <div className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-xs font-mono text-[#6f7a6b]">#1038</span>
                <h4 className="font-bold text-[#171d16]">Amit Kumar</h4>
                <p className="text-xs text-[#6f7a6b]">₹890</p>
              </div>
              <span className="text-xs font-semibold text-[#006e1c] bg-[#e8f5e9] px-3 py-1 rounded-full">Ready - Table 12</span>
            </div>
            <div className="bg-[#f5fbef] rounded-lg p-3 space-y-1 mb-4">
              {['1x Chicken Tikka','2x Butter Naan','1x Lassi'].map(item => (
                <div key={item} className="text-sm text-[#3f4a3c]">• {item}</div>
              ))}
            </div>
            <button className="w-full border-2 border-[#006e1c] text-[#006e1c] py-2.5 rounded-xl font-semibold text-sm hover:bg-[#e8f5e9] transition">Complete Order</button>
          </div>

          <div className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm">
            <h3 className="font-bold text-[#171d16] mb-3">Upcoming in Queue</h3>
            {[{n:'#6 Neha Gupta',i:'4 items'},{n:'#7 Vikram Singh',i:'2 items'}].map(u=>(
              <div key={u.n} className="flex items-center justify-between py-2.5 border-b border-[#eaf0e4] last:border-0">
                <span className="text-sm font-semibold text-[#171d16]">{u.n}</span>
                <span className="text-xs text-[#6f7a6b]">{u.i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </AdminLayout>
);

export default PreOrders;
