import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, ArrowRight, Zap, Heart, TrendingDown, Leaf, 
  Search, Filter, ShoppingBag, Bell, Info
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/* ── Data ────────────────────────────────────────────────── */
const deals = [
  {
    id: 1,
    name: 'Black Truffle Tagliatelle',
    restaurant: 'Osteria Centrale',
    originalPrice: '$28.00',
    dealPrice: '$7.60',
    discount: '75% OFF',
    image: '/midnight_pasta_deal_1777288449317.png',
    tags: ['Premium Selection'],
    status: 'Only 2 left',
    time: '42 mins'
  },
  {
    id: 2,
    name: "Omakase Chef's Box",
    restaurant: 'Sushi Jakkan',
    originalPrice: '$45.00',
    dealPrice: '$10.50',
    discount: '75% OFF',
    image: '/midnight_sushi_deal_1777288475108.png',
    tags: ['Best Seller'],
    status: 'Nearly Sold Out',
    time: '15 mins'
  },
  {
    id: 3,
    name: 'Double Truffle Burger',
    restaurant: 'Grill & Barrel',
    originalPrice: '$24.00',
    dealPrice: '$9.00',
    discount: '60% OFF',
    image: '/midnight_burger_deal_1777288491729.png',
    tags: ['Last Call'],
    status: 'Limited Quantity',
    time: '28 mins'
  },
  {
    id: 4,
    name: 'Superfood Harvest Bowl',
    restaurant: 'Green Leaf Kitchen',
    originalPrice: '$18.00',
    dealPrice: '$6.00',
    discount: '65% OFF',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegan'],
    status: 'Only 4 left',
    time: '35 mins'
  }
];

const categories = ['All Items', 'Vegan', 'Under $10', 'Best Hits', 'Nearby'];

const DealsPage = () => {
  const [timeLeft, setTimeLeft] = useState('01:42:08');

  // Simple countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      // In a real app, logic to decrement time goes here
      // For demo, we'll keep it static or very simple
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)]">
      <Navbar />

      {/* ── Midnight Rescue Hero ── */}
      <section className="relative h-[550px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200")' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[var(--color-tertiary)]/20 backdrop-blur-md border border-[var(--color-tertiary)]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-tertiary)] animate-pulse" />
              <span className="text-[10px] font-black text-[var(--color-tertiary)] uppercase tracking-widest">Live: Midnight Rescue Open</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 leading-tight">
              The Midnight <br />
              <span className="text-[var(--color-primary)]">Rescue.</span>
            </h1>
            
            <p className="text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
              Exquisite food shouldn't go to waste. Join the movement to rescue premium surplus meals at 60-80% off.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 min-w-[200px]">
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Time Remaining</p>
                <p className="text-3xl font-mono font-black text-[var(--color-primary)]">{timeLeft}</p>
              </div>
              
              <button className="flex items-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-[var(--color-primary)]/40 group">
                Browse Rescues
                <ShoppingBag className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filters Bar ── */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2">
              {categories.map((cat, i) => (
                <button 
                  key={cat} 
                  className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                    i === 0 
                      ? 'bg-[var(--color-neutral)] text-white shadow-lg' 
                      : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400 shrink-0">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                14 Restaurants Active
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                52 Rescues Available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Available Tonight Grid ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-[var(--color-neutral)] mb-2">Available Tonight</h2>
          <p className="text-gray-400 font-medium">Hand-picked premium selections from top city kitchens, prepared with care and ready for rescue.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div key={deal.id} className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-5 left-5 flex gap-2">
                  <span className="bg-[var(--color-tertiary)] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    {deal.discount}
                  </span>
                  {deal.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur-md text-[var(--color-neutral)] text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-[var(--color-neutral)] leading-tight mb-1">{deal.name}</h3>
                    <p className="text-sm font-bold text-gray-400">{deal.restaurant}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-300 line-through mb-1">{deal.originalPrice}</p>
                    <p className="text-3xl font-black text-[var(--color-primary)]">{deal.dealPrice}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest">
                    <span className="text-[var(--color-tertiary)] flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      {deal.status}
                    </span>
                    <span className="text-gray-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {deal.time}
                    </span>
                  </div>
                  <button className="bg-[var(--color-neutral)] text-white text-xs font-black px-6 py-3 rounded-xl hover:bg-[var(--color-primary)] transition-colors uppercase tracking-widest">
                    Claim Rescue
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Get Notified Card */}
          <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center justify-center relative overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-2xl" />
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl mb-6">
              <Bell className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h3 className="text-2xl font-black text-[var(--color-neutral)] mb-2">Get Notified?</h3>
            <p className="text-sm text-gray-500 mb-8 max-w-[200px]">New rescues are uploaded every night at 10 PM. Don't miss out.</p>
            <button className="text-[var(--color-primary)] font-black text-xs uppercase tracking-[0.2em] border-b-2 border-[var(--color-primary)] pb-1 hover:text-[var(--color-primary-dark)] transition-all">
              Turn on Alerts
            </button>
          </div>
        </div>
      </section>

      {/* ── Rescue. Save. Enjoy. ── */}
      <section className="bg-[var(--color-neutral)] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-4">Rescue. Save. Enjoy.</h2>
          <p className="text-gray-400 text-lg mb-20 max-w-2xl mx-auto">Midnight deals are the ultimate win-win. High-end restaurants clear their kitchens, and you get top-tier food for snack prices.</p>
          
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: <Search />, title: 'Rescue', desc: 'Browse high-quality surplus meals from your favorite local spots between 10 PM and 12 AM.' },
              { icon: <ShoppingBag />, title: 'Save', desc: 'Claim your meal instantly at 60-80% off. Pay securely in-app to reserve your portion.' },
              { icon: <Zap />, title: 'Enjoy', desc: 'Pick up your fresh, premium meal and enjoy a five-star dinner for the price of a coffee.' }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-8 border border-white/10 text-[var(--color-primary)]">
                  {React.cloneElement(step.icon, { className: 'w-10 h-10' })}
                </div>
                <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why do we rescue? ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
                alt="Fresh ingredients" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[var(--color-primary)] text-white p-12 rounded-[2.5rem] shadow-2xl max-w-[280px]">
              <p className="text-6xl font-black mb-2">30%</p>
              <p className="text-xs font-black uppercase tracking-widest leading-loose">Of food is wasted globally. We're here to change that.</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-[var(--color-neutral)] mb-8 leading-tight">Why do we rescue?</h2>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">Every meal rescued is one less plate in the landfill. Food waste is a major contributor to global emissions—but it's also a missed opportunity for a great experience.</p>
            
            <div className="space-y-10 mb-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[var(--color-neutral)] mb-2">Planet Positive</h4>
                  <p className="text-sm text-gray-500">Reducing waste is the single most effective way to lower your carbon footprint.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[var(--color-secondary)]/10 rounded-2xl flex items-center justify-center shrink-0">
                  <TrendingDown className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[var(--color-neutral)] mb-2">Support Local</h4>
                  <p className="text-sm text-gray-500">Help your favorite restaurants maintain zero-waste operations and stay profitable.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-[var(--color-primary)]/20">
              Start Your Rescue
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DealsPage;
