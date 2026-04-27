import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ClipboardList, Utensils, Zap, BarChart2, Moon,
  ArrowRight, CheckCircle2, Users, Clock, TrendingUp, Download
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ── Data ────────────────────────────────────────────────── */
const steps = [
  {
    number: '1',
    icon: <Search className="w-7 h-7" />,
    title: 'Discover',
    desc: 'Browse real-time availability and dynamic wait estimates with AI-driven recommendations across the city\'s finest venues.',
    color: 'var(--color-primary)',
    bg: 'rgba(76,175,80,0.10)',
  },
  {
    number: '2',
    icon: <ClipboardList className="w-7 h-7" />,
    title: 'Queue',
    desc: 'Join the virtual queue from anywhere. Get precise updates while you enjoy your pre-arrival moments.',
    color: 'var(--color-secondary)',
    bg: 'rgba(255,152,0,0.10)',
  },
  {
    number: '3',
    icon: <Utensils className="w-7 h-7" />,
    title: 'Dine',
    desc: 'Walk in as your table is finalized. Pre-ordered drinks await. Start dining the moment you arrive.',
    color: 'var(--color-tertiary)',
    bg: 'rgba(242,111,157,0.10)',
  },
];

const stats = [
  { value: '98.4%', label: 'Waitlist Accuracy',  color: 'var(--color-primary)' },
  { value: '75%',   label: 'Wait Reduction',      color: 'var(--color-secondary)' },
  { value: '1,200+', label: 'Daily Active Diners', color: 'var(--color-tertiary)' },
  { value: '47',    label: 'Restaurants Live',    color: 'var(--color-primary)' },
];

const features = [
  {
    number: '01',
    icon: <BarChart2 className="w-6 h-6" />,
    title: 'Intelligent Capacity',
    desc: 'Dynamic flow mapping that balances walk-ins and reservations automatically.',
    active: false,
  },
  {
    number: '02',
    icon: <Zap className="w-6 h-6" />,
    title: 'Queue Control',
    desc: 'Dine notifications and live order visibility to optimise kitchen output.',
    active: false,
  },
  {
    number: '03',
    icon: <Moon className="w-6 h-6" />,
    title: 'Midnight Mode',
    desc: 'Host deals and priority queuing to keep your venue vibrant during off-peak hours.',
    active: true,
  },
];

const dinerBenefits = [
  'Skip the wait — reserve from anywhere, anytime',
  'Real-time queue position & SMS/push notifications',
  'Earn exclusive DineGrid points on every visit',
  'Pre-order drinks & starters before you arrive',
];

const restoBenefits = [
  'Optimise table turnover during peak rush hours',
  'Manage reservations & walk-ins from one dashboard',
  'Rich guest analytics and preference insights',
  'Reduce no-shows with smart reminder automation',
];

/* ── Component ───────────────────────────────────────────── */
const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)]">
      <Navbar />

      {/* ── Page Hero ── */}
      <section className="relative bg-[var(--color-neutral)] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("/premium-hero-bg.png")' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[var(--color-neutral)]" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-primary)]/20 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-[10px] font-black text-[var(--color-primary)] uppercase tracking-[0.4em] mb-4 bg-[var(--color-primary)]/15 px-4 py-1.5 rounded-full">
            The Guest Flow
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-5">
            How DineGrid Works
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
            From doorstep to table in three seamless steps. Powered by real-time intelligence and precision engineering.
          </p>
          <Link
            to="/book/date"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-green-900/30"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Effortless Arrival ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Effortless Arrival</h2>
            <p className="text-gray-400 text-lg">Three steps between you and the perfect table.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector */}
            <div className="hidden md:block absolute top-10 left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            {steps.map((step, i) => (
              <div
                key={i}
                className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <span className="absolute top-5 right-5 text-3xl font-black opacity-[0.06]" style={{ color: step.color }}>
                  {step.number}
                </span>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: step.bg, color: step.color }}
                >
                  {step.icon}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: step.color }} />
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: step.color }}>
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DineGrid — Stats Bar ── */}
      <section className="bg-[var(--color-neutral)] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div>
              <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Why DineGrid?</p>
              <h2 className="text-2xl font-bold text-white">Superior tech for superior taste.</h2>
            </div>
            <div className="flex flex-wrap gap-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-extrabold mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Restaurant Features ── */}
      <section className="py-24 bg-[var(--color-neutral-light)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="text-[10px] font-black text-[var(--color-secondary)] uppercase tracking-[0.4em]">Restaurant Partners</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral)] leading-tight max-w-sm">
              Empowering the world's finest kitchens.
            </h2>
            <Link
              to="/login"
              className="self-start md:self-auto flex items-center gap-2 bg-[var(--color-neutral)] text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all whitespace-nowrap"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Kitchen photo */}
          <div className="rounded-3xl overflow-hidden mb-8 h-64 md:h-80 relative">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200"
              alt="Restaurant kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 border transition-all ${
                  f.active
                    ? 'bg-[var(--color-neutral)] text-white border-transparent shadow-xl'
                    : 'bg-white border-gray-100 text-gray-700 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    f.active ? 'bg-white/15 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {f.icon}
                  </div>
                  <div>
                    <span className={`text-xs font-black uppercase tracking-widest block mb-1 ${
                      f.active ? 'text-[var(--color-secondary)]' : 'text-gray-300'
                    }`}>{f.number}</span>
                    <h3 className={`font-bold mb-2 ${f.active ? 'text-white' : 'text-gray-800'}`}>{f.title}</h3>
                    <p className={`text-sm leading-relaxed ${f.active ? 'text-white/70' : 'text-gray-500'}`}>{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits: Diners & Restaurants ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Everyone</h2>
            <p className="text-gray-400 text-lg">Whether you're hungry or running the floor.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Diners */}
            <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/15 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[var(--color-primary)]/15 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold">For Diners</h3>
              </div>
              <ul className="space-y-3 mb-8">
                {dinerBenefits.map(b => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link to="/book/date" className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[var(--color-primary-dark)] transition-all">
                Book a Table <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Restaurants */}
            <div className="bg-[var(--color-secondary)]/5 border border-[var(--color-secondary)]/15 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[var(--color-secondary)]/15 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[var(--color-secondary)]" />
                </div>
                <h3 className="text-xl font-bold">For Restaurants</h3>
              </div>
              <ul className="space-y-3 mb-8">
                {restoBenefits.map(b => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-2 bg-[var(--color-secondary)] text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                Partner With Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[var(--color-neutral-light)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to reclaim your time?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Join the elite circle of diners and restaurateurs who have evolved beyond the line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-green-200"
            >
              <Download className="w-5 h-5" /> Download the App
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-600 px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-50 transition-all">
              Browse a Partner
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
