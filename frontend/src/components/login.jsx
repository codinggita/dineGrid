import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, ShieldCheck, UtensilsCrossed } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [role, setRole] = useState('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    const userData = login(email, password, role);
    if (userData.role === 'admin') navigate('/admin/dashboard');
    else navigate('/customer');
  };

  return (
    <div className="relative min-h-screen w-full font-['Inter'] bg-[#F5F5F5] lg:bg-transparent">

      {/* 📱 MOBILE BACKGROUND: Hero Image with Light Overlay (Hidden on Desktop) */}
      <div className="absolute inset-0 z-0 block lg:hidden">
        <img
          src="/food_hero.png"
          alt="Premium Culinary Dish"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Light Overlay to make text and form readable */}
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      {/* MAIN CONTAINER: Sits above mobile background, applies solid bg on desktop */}
      <div className="relative z-10 flex min-h-screen w-full flex-col lg:flex-row lg:bg-[#F5F5F5]">

        {/* 🟢 LEFT SECTION: Hero Image & Branding (Desktop Only) */}
        <div className="relative hidden w-1/2 flex-col items-center justify-center overflow-hidden bg-black lg:flex">
          {/* Background Food Hero Image */}
          <img
            src="/food_hero.png"
            alt="Premium Culinary Dish"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />

          {/* Elegant Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1C] via-transparent to-transparent"></div>

          {/* Branding Content */}
          <div className="relative z-10 flex flex-col items-center p-12 text-center text-white">
            <img
              src="/logo.png"
              alt="DineGrid Logo"
              className="mb-8 h-40 w-40 rounded-full border-4 border-[#4CAF50] bg-white/10 p-4 shadow-2xl backdrop-blur-sm transition-transform duration-500 hover:scale-105"
            />
            <h1 className="mb-4 text-5xl font-bold tracking-tight">DineGrid</h1>
            <p className="max-w-md text-xl font-medium text-white/90">
              Elevate your dining management with the ultimate culinary queue system.
            </p>
            <div className="mt-8 h-1 w-24 rounded-full bg-[#4CAF50]"></div>
          </div>
        </div>

        {/* 🟠 RIGHT SECTION: Login Form */}
        <div className="flex w-full items-center justify-center p-6 lg:w-1/2 lg:p-12">
          <div className="w-full max-w-md">

            {/* Mobile Header (Hidden on Desktop) */}
            <div className="mb-10 flex flex-col items-center lg:hidden">
              <img src="/logo.png" alt="DineGrid Logo" className="mb-4 h-24 w-24 rounded-full border-2 border-[#4CAF50] bg-white p-2 shadow-lg" />
              <h2 className="text-3xl font-bold text-[#1A1C1C]">DineGrid</h2>
            </div>

            {/* Form Card */}
            <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-10">

              <header className="mb-8 text-center lg:text-left">
                <h3 className="mb-2 text-3xl font-bold tracking-tight text-[#1A1C1C]">Welcome Back</h3>
                <p className="text-[#1A1C1C]/60">Enter your details to manage your grid</p>
              </header>

              {/* Role Selector */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { key: 'customer', icon: User, label: 'Customer' },
                  { key: 'admin', icon: ShieldCheck, label: 'Admin' },
                ].map(({ key, icon: Icon, label }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setRole(key)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                      role === key
                        ? 'border-[#4CAF50] bg-[#F1F8E9] shadow-sm'
                        : 'border-neutral-100 bg-[#F5F5F5] hover:border-neutral-200'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${role === key ? 'text-[#4CAF50]' : 'text-neutral-400'}`} />
                    <span className={`text-xs font-bold uppercase tracking-wider ${role === key ? 'text-[#1B5E20]' : 'text-neutral-500'}`}>{label}</span>
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-100 text-red-600 text-xs font-bold p-3 rounded-xl">
                    {error}
                  </div>
                )}

                {/* Email Input */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1A1C1C]" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border-2 border-transparent bg-[#F5F5F5] px-5 py-3.5 text-[#1A1C1C] outline-none transition-all placeholder:text-neutral-400 focus:border-[#4CAF50] focus:bg-white"
                    placeholder="chef@dinegrid.com"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-[#1A1C1C]" htmlFor="password">
                      Password
                    </label>
                    <a href="#" className="text-sm font-medium text-[#FF9800] transition-colors hover:text-[#388E3C]">
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border-2 border-transparent bg-[#F5F5F5] px-5 py-3.5 text-[#1A1C1C] outline-none transition-all placeholder:text-neutral-400 focus:border-[#4CAF50] focus:bg-white"
                    placeholder="••••••••••••"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#4CAF50] py-4 text-center font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#388E3C] hover:shadow-xl active:scale-95"
                >
                  Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8 flex items-center justify-center">
                <div className="absolute w-full border-t border-gray-200"></div>
                <span className="relative bg-white px-4 text-xs font-bold uppercase tracking-widest text-gray-400">OR</span>
              </div>

              {/* Footer Action */}
              <div className="text-center">
                <p className="text-sm text-[#1A1C1C]/70">
                  New to our community?{' '}
                  <Link to="/admin-signup" className="font-bold text-[#FF9800] hover:underline">
                    Request Access
                  </Link>
                </p>
              </div>
            </div>

            {/* Legal / App Version Footer */}
            <div className="mt-8 text-center text-xs font-medium uppercase tracking-widest text-gray-400">
              DineGrid v1.0 • Secure Infrastructure
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
