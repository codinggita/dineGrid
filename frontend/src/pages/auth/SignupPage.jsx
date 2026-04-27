import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UtensilsCrossed, User, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SignupPage = () => {
  const [role, setRole] = useState('customer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) { setError('Please fill in all fields.'); return; }
    if (password !== confirm) { setError('Passwords do not match.'); return; }
    const userData = signup(name, email, password, role);
    if (userData.role === 'admin') navigate('/admin/dashboard');
    else navigate('/customer');
  };

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="hidden lg:flex w-[45%] bg-[#006e1c] flex-col justify-between p-12 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <UtensilsCrossed className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">DineGrid</span>
        </div>
        <div>
          <p className="text-[13px] text-white/60 font-medium uppercase tracking-widest mb-4">The Spice House • Kalol</p>
          <h1 className="text-5xl font-bold leading-tight mb-6">Join the dining <br /><span className="text-[#4caf50]">revolution.</span></h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-sm">Create your account and get instant access to smarter restaurant management.</p>
        </div>
        <div className="text-white/40 text-sm">© 2026 DineGrid. All rights reserved.</div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-[#f5fbef] p-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-[0px_10px_25px_rgba(0,0,0,0.1)] p-10 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-[#171d16] mb-1">Create account</h2>
          <p className="text-sm text-[#6f7a6b] mb-8">Join DineGrid to get started</p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { key: 'customer', icon: User, label: 'Customer' },
              { key: 'admin',    icon: ShieldCheck, label: 'Admin' },
            ].map(({ key, icon: Icon, label }) => (
              <button key={key} type="button" onClick={() => setRole(key)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${role === key ? 'border-[#006e1c] bg-[#f5fbef]' : 'border-[#becab9] bg-white hover:border-[#006e1c]/40'}`}>
                <Icon className={`w-6 h-6 ${role === key ? 'text-[#006e1c]' : 'text-[#6f7a6b]'}`} />
                <span className={`text-sm font-semibold ${role === key ? 'text-[#006e1c]' : 'text-[#3f4a3c]'}`}>{label}</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">{error}</div>}

            {[
              { label: 'Full Name', val: name, set: setName, type: 'text', ph: 'John Doe' },
              { label: 'Email address', val: email, set: setEmail, type: 'email', ph: 'you@example.com' },
            ].map(f => (
              <div key={f.label}>
                <label className="block text-sm font-semibold text-[#3f4a3c] mb-2">{f.label}</label>
                <input type={f.type} value={f.val} onChange={e => f.set(e.target.value)} placeholder={f.ph}
                  className="w-full px-4 py-3 rounded-lg border border-[#becab9] bg-[#f5fbef] text-sm outline-none focus:border-[#006e1c] transition" />
              </div>
            ))}

            <div>
              <label className="block text-sm font-semibold text-[#3f4a3c] mb-2">Password</label>
              <div className="relative">
                <input type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-[#becab9] bg-[#f5fbef] text-sm outline-none focus:border-[#006e1c] transition pr-10" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6f7a6b]">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#3f4a3c] mb-2">Confirm Password</label>
              <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-[#becab9] bg-[#f5fbef] text-sm outline-none focus:border-[#006e1c] transition" />
            </div>

            <button type="submit" className="w-full bg-[#006e1c] hover:bg-[#005016] text-white py-3 rounded-lg font-semibold text-sm transition-all mt-2">
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-[#6f7a6b] mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-[#006e1c] font-semibold hover:underline">Sign In</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
