import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ArrowUpDown, ShoppingBag, ChefHat, Package } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatCard from '../../components/ui/StatCard';
import StatusPill from '../../components/ui/StatusPill';
import api from '../../utils/api';

const PreOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [adminPopup, setAdminPopup] = useState('');
  const [customerPopup, setCustomerPopup] = useState('');
  const latestOrderRef = useRef(null);

  const loadOrders = async () => {
    try {
      const response = await api.get('/orders');
      const nextOrders = response?.data?.data || [];
      setOrders(nextOrders);

      const newestId = nextOrders[0]?._id;
      if (newestId && latestOrderRef.current && newestId !== latestOrderRef.current) {
        setAdminPopup('New order arrived. Please accept.');
        setTimeout(() => setAdminPopup(''), 2600);
      }
      latestOrderRef.current = newestId || null;
    } catch (_error) {
      setAdminPopup('Unable to fetch latest orders.');
      setTimeout(() => setAdminPopup(''), 2200);
    }
  };

  useEffect(() => {
    loadOrders();
    const timer = setInterval(loadOrders, 4000);
    return () => clearInterval(timer);
  }, []);

  const acceptOrder = async (orderId) => {
    try {
      await api.patch(`/orders/${orderId}/accept`);
      setCustomerPopup('Order accepted successfully.');
      setTimeout(() => setCustomerPopup(''), 2500);
      await loadOrders();
    } catch (_error) {
      setAdminPopup('Failed to accept order.');
      setTimeout(() => setAdminPopup(''), 2200);
    }
  };

  const handleCompleteOrder = async (orderId) => {
    setOrders((prev) => prev.filter((order) => order._id !== orderId));
  };

  const handleFilterToggle = () => {
    const filters = ['All', 'Pending'];
    const nextIdx = (filters.indexOf(filter) + 1) % filters.length;
    setFilter(filters[nextIdx]);
  };

  const queue = orders.filter((order) => order.status === 'pending');
  const accepted = orders.filter((order) => order.status === 'accepted');
  const filteredQueue = queue.filter((o) => filter === 'All' || o.status === 'pending');

  return (
    <AdminLayout>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#171d16]">Pre-Orders Dashboard</h1>
            <p className="text-sm text-[#6f7a6b] mt-0.5">Track and manage kitchen pre-order queue</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={handleFilterToggle} className="flex items-center gap-2 border border-[#becab9] bg-white text-[#3f4a3c] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#f0f6ea] transition"><Filter className="w-4 h-4" /> Filter: {filter}</button>
            <button className="flex items-center gap-2 border border-[#becab9] bg-white text-[#3f4a3c] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#f0f6ea] transition"><ArrowUpDown className="w-4 h-4" /> Auto Refresh</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <StatCard label="Total Pre-Orders" value={orders.length} color="text-[#e65100]" icon={<ShoppingBag className="w-5 h-5 text-[#ff9800]"/>} />
          <StatCard label="Pending Acceptance" value={queue.length} color="text-[#006e1c]" icon={<ChefHat className="w-5 h-5 text-[#006e1c]"/>} />
          <StatCard label="Accepted Orders" value={accepted.length} color="text-[#c2185b]" icon={<Package className="w-5 h-5 text-[#f26f9d]"/>} />
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Active Kitchen Queue */}
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <h2 className="text-base font-bold text-[#171d16] border-l-4 border-[#ff9800] pl-3">Active Kitchen Queue</h2>

            {filteredQueue.map((order, idx) => (
              <div key={order._id} className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xs font-mono text-[#6f7a6b]">#{order._id.slice(-6).toUpperCase()}</span>
                    <h4 className="font-bold text-[#171d16]">{order.customerName}</h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#6f7a6b]">Queue Pos: <strong className="text-[#171d16]">{idx + 1}</strong></span>
                    <StatusPill status="Received" />
                  </div>
                </div>
                <div className="bg-[#f5fbef] rounded-lg p-3 space-y-1.5 mb-4">
                  {order.items.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#3f4a3c]">{item.quantity}x {item.name}</span>
                        <span className="font-semibold">₹{item.unitPrice * item.quantity}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setSelectedOrder(order)} className="flex-1 border border-[#becab9] text-[#3f4a3c] py-2 rounded-lg text-sm font-semibold hover:bg-[#f0f6ea] transition">Details</button>
                  <button onClick={() => acceptOrder(order._id)} className="flex-1 bg-[#171d16] text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition">Accept Order</button>
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
            {accepted.map(order => (
              <div key={order._id} className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xs font-mono text-[#6f7a6b]">#{order._id.slice(-6).toUpperCase()}</span>
                    <h4 className="font-bold text-[#171d16]">{order.customerName}</h4>
                    <p className="text-xs text-[#6f7a6b]">₹{order.totalAmount}</p>
                  </div>
                  <span className="text-xs font-semibold text-[#006e1c] bg-[#e8f5e9] px-3 py-1 rounded-full">Ready</span>
                </div>
                <div className="bg-[#f5fbef] rounded-lg p-3 space-y-1 mb-4">
                  {order.items.map(item => (
                    <div key={item.name} className="text-sm text-[#3f4a3c]">• {item.quantity}x {item.name}</div>
                  ))}
                </div>
                <button onClick={() => handleCompleteOrder(order._id)} className="w-full border-2 border-[#006e1c] text-[#006e1c] py-2.5 rounded-xl font-semibold text-sm hover:bg-[#e8f5e9] transition">Complete Order</button>
              </div>
            ))}

            {accepted.length === 0 && (
              <div className="py-12 text-center text-[#6f7a6b] border border-[#becab9] rounded-xl bg-white">No orders currently ready.</div>
            )}

            <div className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm">
              <h3 className="font-bold text-[#171d16] mb-3">Upcoming in Queue</h3>
              {queue.slice(0, 3).map((u) => (
                <div key={u._id} className="flex items-center justify-between py-2.5 border-b border-[#eaf0e4] last:border-0">
                  <span className="text-sm font-semibold text-[#171d16]">{u.customerName}</span>
                  <span className="text-xs text-[#6f7a6b]">{u.items.length} items</span>
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
              <p className="text-sm text-[#6f7a6b] mb-4">Order ID: #{selectedOrder._id.slice(-6).toUpperCase()} • Customer: {selectedOrder.customerName}</p>
              <div className="space-y-3 bg-[#f5fbef] p-4 rounded-xl mb-4 border border-[#becab9]">
                {selectedOrder.items.map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-[#eaf0e4] last:border-0 pb-2 last:pb-0">
                    <div>
                      <div className="text-sm font-bold text-[#171d16]">{item.quantity}x {item.name}</div>
                    </div>
                    <span className="font-bold text-[#006e1c]">₹{item.unitPrice * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button onClick={() => setSelectedOrder(null)} className="px-4 py-2 bg-[#006e1c] text-white font-semibold rounded-xl text-sm hover:bg-[#005016] transition">Close</button>
              </div>
            </motion.div>
          </div>
        )}
        {adminPopup && (
          <div className="fixed top-20 right-6 z-[70] bg-[#171d16] text-white px-4 py-2.5 rounded-lg shadow-xl">
            {adminPopup}
          </div>
        )}
        {customerPopup && (
          <div className="fixed top-36 right-6 z-[70] bg-[#006e1c] text-white px-4 py-2.5 rounded-lg shadow-xl">
            {customerPopup}
          </div>
        )}
      </motion.div>
    </AdminLayout>
  );
};

export default PreOrders;
