import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ArrowUpDown, ShoppingBag, ChefHat, Package } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatCard from '../../components/ui/StatCard';
import StatusPill from '../../components/ui/StatusPill';

const initialQueue = [
  { id: '#1042', name: 'Rahul Sharma', queuePos: 3, status: 'Preparing', items: [
    { name: '2x Paneer Butter Masala', price: '₹560', detail: 'Medium spicy, extra butter' },
    { name: '1x Dal Tadka', price: '₹180' },
    { name: '3x Jeera Rice', price: '₹450' }
  ]},
  { id: '#1045', name: 'Priya Patel', queuePos: 5, status: 'Received', items: [
    { name: '1x Veg Biryani', price: '₹220' },
    { name: '2x Garlic Naan', price: '₹90' }
  ]}
];

const initialReady = [
  { id: '#1038', name: 'Amit Kumar', price: '₹890', table: 'Table 12', items: ['1x Chicken Tikka', '2x Butter Naan', '1x Lassi'] }
];

const PreOrders = () => {
  const [queue, setQueue] = useState(initialQueue);
  const [readyList, setReadyList] = useState(initialReady);
  const [filter, setFilter] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleStartPrep = (orderId) => {
    setQueue(queue.map(o => o.id === orderId ? { ...o, status: 'Preparing' } : o));
  };

  const handleMarkReady = (orderId) => {
    const orderToMove = queue.find(o => o.id === orderId);
    if (!orderToMove) return;

    // Remove from queue
    setQueue(queue.filter(o => o.id !== orderId));

    // Calculate total price
    const totalPriceNum = orderToMove.items.reduce((sum, item) => sum + parseInt(item.price.replace('₹', '') || 0), 0);

    // Add to ready list
    const newReady = {
      id: orderToMove.id,
      name: orderToMove.name,
      price: `₹${totalPriceNum}`,
      table: 'TBD Table',
      items: orderToMove.items.map(i => i.name)
    };
    setReadyList([newReady, ...readyList]);
  };

  const handleCompleteOrder = (orderId) => {
    setReadyList(readyList.filter(o => o.id !== orderId));
  };

  const handleFilterToggle = () => {
    const filters = ['All', 'Preparing', 'Received'];
    const nextIdx = (filters.indexOf(filter) + 1) % filters.length;
    setFilter(filters[nextIdx]);
  };

  const filteredQueue = queue.filter(o => filter === 'All' || o.status === filter);

  return (
    <AdminLayout>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#171d16]">Pre-Orders Dashboard</h1>
            <p className="text-sm text-[#6f7a6b] mt-0.5">Track and manage kitchen pre-order queue</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleFilterToggle} className="flex items-center gap-2 border border-[#becab9] bg-white text-[#3f4a3c] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#f0f6ea] transition"><Filter className="w-4 h-4" /> Filter: {filter}</button>
            <button onClick={() => alert('Sorting by urgency applied!')} className="flex items-center gap-2 border border-[#becab9] bg-white text-[#3f4a3c] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#f0f6ea] transition"><ArrowUpDown className="w-4 h-4" /> Sort: Urgency</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <StatCard label="Total Pre-Orders" value={queue.length + readyList.length} color="text-[#e65100]" icon={<ShoppingBag className="w-5 h-5 text-[#ff9800]"/>} />
          <StatCard label="Preparing" value={queue.filter(o => o.status === 'Preparing').length} color="text-[#006e1c]" icon={<ChefHat className="w-5 h-5 text-[#006e1c]"/>} />
          <StatCard label="Ready for Pickup" value={readyList.length} color="text-[#c2185b]" icon={<Package className="w-5 h-5 text-[#f26f9d]"/>} />
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Active Kitchen Queue */}
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <h2 className="text-base font-bold text-[#171d16] border-l-4 border-[#ff9800] pl-3">Active Kitchen Queue</h2>

            {filteredQueue.map(order => (
              <div key={order.id} className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xs font-mono text-[#6f7a6b]">{order.id}</span>
                    <h4 className="font-bold text-[#171d16]">{order.name}</h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#6f7a6b]">Queue Pos: <strong className="text-[#171d16]">{order.queuePos}</strong></span>
                    <StatusPill status={order.status} />
                  </div>
                </div>
                <div className="bg-[#f5fbef] rounded-lg p-3 space-y-1.5 mb-4">
                  {order.items.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#3f4a3c]">{item.name}</span>
                        <span className="font-semibold">{item.price}</span>
                      </div>
                      {item.detail && <div className="text-[11px] text-[#6f7a6b] pl-2">{item.detail}</div>}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setSelectedOrder(order)} className="flex-1 border border-[#becab9] text-[#3f4a3c] py-2 rounded-lg text-sm font-semibold hover:bg-[#f0f6ea] transition">Details</button>
                  {order.status === 'Received' ? (
                    <button onClick={() => handleStartPrep(order.id)} className="flex-1 bg-[#171d16] text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition">Start Prep</button>
                  ) : (
                    <button onClick={() => handleMarkReady(order.id)} className="flex-1 bg-[#006e1c] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#005016] transition">Mark Ready</button>
                  )}
                </div>
              </div>
            ))}

            {filteredQueue.length === 0 && (
              <div className="py-12 text-center text-[#6f7a6b] border border-[#becab9] rounded-xl bg-white">No active orders matching the filter.</div>
            )}
          </div>

          {/* Right: Ready + Upcoming */}
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <h2 className="text-base font-bold text-[#171d16] border-l-4 border-[#006e1c] pl-3">Ready / Assigned</h2>
            {readyList.map(order => (
              <div key={order.id} className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xs font-mono text-[#6f7a6b]">{order.id}</span>
                    <h4 className="font-bold text-[#171d16]">{order.name}</h4>
                    <p className="text-xs text-[#6f7a6b]">{order.price}</p>
                  </div>
                  <span className="text-xs font-semibold text-[#006e1c] bg-[#e8f5e9] px-3 py-1 rounded-full">Ready - {order.table}</span>
                </div>
                <div className="bg-[#f5fbef] rounded-lg p-3 space-y-1 mb-4">
                  {order.items.map(item => (
                    <div key={item} className="text-sm text-[#3f4a3c]">• {item}</div>
                  ))}
                </div>
                <button onClick={() => handleCompleteOrder(order.id)} className="w-full border-2 border-[#006e1c] text-[#006e1c] py-2.5 rounded-xl font-semibold text-sm hover:bg-[#e8f5e9] transition">Complete Order</button>
              </div>
            ))}

            {readyList.length === 0 && (
              <div className="py-12 text-center text-[#6f7a6b] border border-[#becab9] rounded-xl bg-white">No orders currently ready.</div>
            )}

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

        {/* Details Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#becab9]">
              <h2 className="text-xl font-bold text-[#171d16] mb-2">Order Details</h2>
              <p className="text-sm text-[#6f7a6b] mb-4">Order ID: {selectedOrder.id} • Customer: {selectedOrder.name}</p>
              <div className="space-y-3 bg-[#f5fbef] p-4 rounded-xl mb-4 border border-[#becab9]">
                {selectedOrder.items.map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-[#eaf0e4] last:border-0 pb-2 last:pb-0">
                    <div>
                      <div className="text-sm font-bold text-[#171d16]">{item.name}</div>
                      {item.detail && <div className="text-xs text-[#6f7a6b] mt-0.5">{item.detail}</div>}
                    </div>
                    <span className="font-bold text-[#006e1c]">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button onClick={() => setSelectedOrder(null)} className="px-4 py-2 bg-[#006e1c] text-white font-semibold rounded-xl text-sm hover:bg-[#005016] transition">Close</button>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </AdminLayout>
  );
};

export default PreOrders;
