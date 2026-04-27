import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, AlignJustify, LayoutGrid, CalendarDays,
  ShoppingBag, CheckCircle, BookOpen, BarChart2, Users,
  Settings, Bell, Search, UtensilsCrossed, LogOut, ChevronRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const navItems = [
  { label: 'Dashboard',          icon: LayoutDashboard, path: '/admin/dashboard' },
  { label: 'Live Queue',         icon: AlignJustify,    path: '/admin/live-queue' },
  { label: 'Tables & Floor Plan',icon: LayoutGrid,      path: '/admin/tables' },
  { label: 'Reservations',       icon: CalendarDays,    path: '/admin/reservations' },
  { label: 'Pre-Orders',         icon: ShoppingBag,     path: '/admin/pre-orders' },
  { label: 'Approvals',          icon: CheckCircle,     path: '/admin/approvals' },
  { label: 'Menu Management',    icon: BookOpen,        path: '/admin/menu-management' },
  { label: 'Reports & Analytics',icon: BarChart2,       path: '/admin/reports' },
  { label: 'Staff',              icon: Users,           path: '/admin/staff' },
];

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [notifOpen, setNotifOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin-login');
  };

  const initials = user?.name ? user.name.slice(0, 2).toUpperCase() : 'AD';

  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── Sidebar ── */}
      <aside className="w-[240px] shrink-0 flex flex-col bg-[#1a1f19] text-white overflow-y-auto">
        {/* Logo */}
        <div className="px-5 py-6 border-b border-white/10">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 bg-[#006e1c] rounded-lg flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">DineGrid</span>
          </div>
          <p className="text-[11px] text-white/50 pl-12 leading-tight">The Spice House • Kalol</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ label, icon: Icon, path }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? 'bg-[#006e1c] text-white shadow-sm'
                    : 'text-white/65 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="leading-none">{label}</span>
                {active && <ChevronRight className="w-3 h-3 ml-auto opacity-60" />}
              </Link>
            );
          })}
        </nav>

        {/* Settings + Logout */}
        <div className="px-3 pb-4 space-y-1 border-t border-white/10 pt-3">
          <Link
            to="/admin/settings"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              location.pathname === '/admin/settings'
                ? 'bg-[#006e1c] text-white'
                : 'text-white/65 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            Settings
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/65 hover:bg-white/10 hover:text-white transition-all"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 shrink-0 bg-white border-b border-[#becab9] flex items-center justify-between px-6">
          <div className="flex items-center gap-3 bg-[#f0f6ea] rounded-full px-4 py-2 w-72">
            <Search className="w-4 h-4 text-[#6f7a6b]" />
            <input
              type="text"
              placeholder="Search guests, tables, orders…"
              className="bg-transparent text-sm text-[#171d16] placeholder:text-[#6f7a6b] outline-none w-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="w-9 h-9 rounded-full bg-[#f0f6ea] flex items-center justify-center hover:bg-[#eaf0e4] transition"
              >
                <Bell className="w-4 h-4 text-[#3f4a3c]" />
              </button>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
            </div>
            <div className="w-9 h-9 rounded-full bg-[#006e1c] flex items-center justify-center text-white text-xs font-bold">
              {initials}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-[#f5fbef] p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
