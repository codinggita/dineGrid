import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Home, Compass, Tag, UtensilsCrossed, HelpCircle, LogIn, LogOut, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, role, logout } = useAuth();
  const navigate = useNavigate();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  // Only show these for logged-in customers
  const customerLinks = [
    { name: 'Menu',         icon: <UtensilsCrossed size={20} />, path: '/menu' },
    { name: 'Book Table',   icon: <Compass size={20} />,         path: '/book/date' },
    { name: 'How It Works', icon: <HelpCircle size={20} />,      path: '/how-it-works' },
  ];

  const isCustomer = user && role === 'customer';

  return (
    <nav className="bg-[var(--color-neutral-light)] border-b border-neutral-200 sticky top-0 z-50 font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Left: Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer shrink-0">
            <img src="/logo.png" alt="DineGrid Logo" className="h-8 w-8 object-contain" />
            <span className="text-xl lg:text-2xl font-[var(--font-headline)] text-[var(--color-primary)] tracking-tight">DineGrid</span>
          </Link>

          {/* Center: Desktop Links (Visible only after Customer Login) */}
          <div className="hidden lg:flex items-center space-x-8">
            {isCustomer && customerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-base xl:text-lg font-[var(--font-label)] text-[#4A5568] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Auth & Mobile Menu */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden lg:flex items-center space-x-4">
              {!user ? (
                <>
                  <Link to="/login" className="text-base xl:text-lg font-[var(--font-label)] text-[#4A5568] hover:text-[var(--color-neutral)] transition-colors">Login</Link>
                  <Link to="/admin-signup" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-2.5 rounded-lg text-base xl:text-lg font-[var(--font-label)] shadow-sm transition-colors text-center">
                    Sign Up
                  </Link>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 rounded-full">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-xs font-bold">
                      {user.name?.[0].toUpperCase()}
                    </div>
                    <span className="text-sm font-semibold text-neutral-700">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-neutral-500 hover:text-red-600 transition-colors"
                  >
                    <LogOut size={20} />
                    <span className="text-sm font-semibold">Logout</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-[var(--color-neutral)] hover:bg-black/5 transition-colors relative z-[100]"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-7 w-7 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-7 w-7" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] lg:hidden bg-[var(--color-neutral)]/95 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex justify-between items-center h-20 px-4 sm:px-6 border-b border-white/5">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
                <span className="text-xl font-[var(--font-headline)] text-[var(--color-primary)]">DineGrid</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto py-10 px-6 space-y-2">
              {isCustomer && customerLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-2xl text-white/70 hover:text-white hover:bg-white/5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                      {link.icon}
                    </div>
                    <span className="text-xl font-[var(--font-label)]">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 border-t border-white/5 space-y-4 bg-white/5"
            >
              {!user ? (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-white/80 font-[var(--font-label)] text-lg hover:text-white hover:bg-white/5 transition-all"
                  >
                    <LogIn size={20} /> Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-[var(--font-label)] text-xl shadow-2xl shadow-[var(--color-primary)]/40 transition-all flex items-center justify-center"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-lg font-bold">
                      {user.name?.[0].toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-bold">{user.name}</span>
                      <span className="text-white/50 text-sm">{user.email}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-red-500/10 text-red-500 font-bold hover:bg-red-500/20 transition-all"
                  >
                    <LogOut size={20} /> Logout
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
