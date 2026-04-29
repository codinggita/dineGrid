import React from 'react';
import { ShieldCheck, Zap, Heart, CheckCircle2, TrendingUp, Users } from 'lucide-react';

const SmarterWay = () => {
  return (
    <section className="py-24 bg-[var(--color-neutral-light)] text-[var(--color-neutral)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[var(--font-headline)] mb-4 tracking-tight">A Smarter Way to Dine</h2>
          <p className="text-lg font-[var(--font-body)] text-gray-600 max-w-2xl mx-auto">
            Whether you're looking for the perfect seat or running the floor, DineGrid refines every moment of the restaurant experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Card 1: For the Hungry Diner */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="/src/assets/hungry-diner.png" 
                alt="Hungry Diner" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-10 flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[var(--color-primary)]/10 p-3 rounded-2xl">
                  <Heart className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-3xl font-[var(--font-headline)]">For the Hungry Diner</h3>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span className="font-[var(--font-body)] text-gray-700 text-lg">Skip the line and secure your spot from anywhere.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span className="font-[var(--font-body)] text-gray-700 text-lg">Live updates and queue tracking right on your phone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span className="font-[var(--font-body)] text-gray-700 text-lg">Earn exclusive rewards every time you dine out.</span>
                </li>
              </ul>
              <button className="text-[var(--color-primary)] font-[var(--font-label)] text-lg flex items-center gap-2 hover:gap-3 transition-all">
                Explore the Diner App <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Card 2: For the Restaurateur */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="/src/assets/restaurateur.png" 
                alt="Restaurateur" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-10 flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[var(--color-secondary)]/10 p-3 rounded-2xl">
                  <TrendingUp className="w-8 h-8 text-[var(--color-secondary)]" />
                </div>
                <h3 className="text-3xl font-[var(--font-headline)]">For the Restaurateur</h3>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <span className="font-[var(--font-body)] text-gray-700 text-lg">Optimize table turnover during peak rush hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <span className="font-[var(--font-body)] text-gray-700 text-lg">Manage reservations and walk-ins from one dashboard.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <span className="font-[var(--font-body)] text-gray-700 text-lg">Understand guest preferences with rich analytics.</span>
                </li>
              </ul>
              <button className="text-[var(--color-secondary)] font-[var(--font-label)] text-lg flex items-center gap-2 hover:gap-3 transition-all">
                Join our Platform <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmarterWay;
