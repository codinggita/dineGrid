import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UtensilsCrossed, CalendarDays, Package, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const cards = [
  { icon: UtensilsCrossed, label: 'Browse Menu',      desc: 'Explore today\'s special dishes and our full menu.', color: '#006e1c', bg: '#e8f5e9' },
  { icon: CalendarDays,    label: 'My Reservations',  desc: 'View and manage your upcoming table bookings.',      color: '#8b5000', bg: '#fff3e0' },
  { icon: Package,         label: 'Track Order',       desc: 'Check the live status of your pre-ordered meals.',   color: '#a63360', bg: '#fce4ec' },
];

const CustomerHome = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#f5fbef]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <header className="bg-white border-b border-[#becab9] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#006e1c] rounded-xl flex items-center justify-center">
            <UtensilsCrossed className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-lg font-bold text-[#171d16]">DineGrid</span>
            <p className="text-[11px] text-[#6f7a6b]">The Spice House • Kalol</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 border border-[#becab9] text-[#3f4a3c] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#f0f6ea] transition"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </header>

      {/* Body */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-4xl font-bold text-[#171d16] mb-2">
            Welcome back, <span className="text-[#006e1c] capitalize">{user?.name || 'Guest'}</span>! 👋
          </h1>
          <p className="text-[#6f7a6b] mb-12 text-lg">What would you like to do today?</p>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map(({ icon: Icon, label, desc, color, bg }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0px 12px 24px rgba(0,0,0,0.1)' }}
                className="bg-white rounded-2xl p-8 cursor-pointer border border-[#eaf0e4] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] flex flex-col items-center text-center transition-all"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: bg }}>
                  <Icon className="w-8 h-8" style={{ color }} />
                </div>
                <h3 className="text-lg font-bold text-[#171d16] mb-2">{label}</h3>
                <p className="text-sm text-[#6f7a6b] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CustomerHome;
