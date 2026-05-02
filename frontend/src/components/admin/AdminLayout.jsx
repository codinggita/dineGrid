import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, AlignJustify, LayoutGrid, CalendarDays,
  ShoppingBag, CheckCircle, BookOpen, BarChart2, Users,
  Settings, Bell, Search, UtensilsCrossed, LogOut, ChevronRight, X
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const initials = user?.name ? user.name.slice(0, 2).toUpperCase() : 'AD';

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5fbef]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── Overlay for Mobile ── */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300"
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[240px] shrink-0 flex flex-col bg-[#1a1f19] text-white overflow-y-auto transform transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="px-5 py-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#006e1c] rounded-lg flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-white block">DineGrid</span>
              <p className="text-[10px] text-white/50 leading-tight">The Spice House • Kalol</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ label, icon: Icon, path }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                onClick={() => setSidebarOpen(false)}
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
            onClick={() => setSidebarOpen(false)}
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

      {/* ── Main Content Area ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 shrink-0 bg-white border-b border-[#becab9] flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            {/* Hamburger for mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-[#3f4a3c] rounded-lg hover:bg-[#f0f6ea] transition"
            >
              <AlignJustify className="w-6 h-6" />
            </button>
            <div className="hidden sm:flex items-center gap-3 bg-[#f0f6ea] rounded-full px-4 py-2 w-64 md:w-72">
              <Search className="w-4 h-4 text-[#6f7a6b]" />
              <input
                type="text"
                placeholder="Search guests, tables, orders…"
                className="bg-transparent text-sm text-[#171d16] placeholder:text-[#6f7a6b] outline-none w-full"
              />
            </div>
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
            <div className="w-9 h-9 rounded-full bg-[#006e1c] flex items-center justify-center text-white text-xs font-bold shrink-0">
              {initials}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

