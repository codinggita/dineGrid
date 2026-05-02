import React from 'react';
import { Mail } from 'lucide-react';

const VIPClub = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-neutral)] text-white border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-[var(--color-primary)] text-sm font-[var(--font-label)] mb-8 tracking-widest uppercase">
          The Chef's Table
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-headline)] mb-4 md:mb-6 tracking-tight">
          Unlock the Unbookable.
        </h2>
        
        <p className="text-base md:text-lg font-[var(--font-body)] text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the inner circle. Get early access to highly anticipated restaurant openings, secret off-menu items, and exclusive reservations before anyone else.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="email" 
              className="block w-full pl-11 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none" 
              placeholder="Enter your email"
              required
            />
          </div>
          <button 
            type="submit" 
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 rounded-xl font-[var(--font-label)] text-lg transition-colors shadow-lg shadow-[var(--color-primary)]/20 whitespace-nowrap"
          >
            Request Access
          </button>
        </form>

      </div>
    </section>
  );
};

export default VIPClub;
