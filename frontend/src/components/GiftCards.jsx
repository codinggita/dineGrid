import React from 'react';
import { Gift } from 'lucide-react';

const GiftCards = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-neutral-light)] text-[var(--color-neutral)] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="bg-[var(--color-tertiary)]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Gift className="w-8 h-8 text-[var(--color-tertiary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-headline)] mb-6 tracking-tight">
              Give the Gift of Taste
            </h2>
            <p className="text-lg font-[var(--font-body)] text-gray-600 mb-10 leading-relaxed max-w-xl">
              The perfect gift for the modern epicurean. Treat someone to a seamless dining experience at any of our partner restaurants with a digital DineGrid gift card.
            </p>
            <button className="text-[var(--color-tertiary)] font-[var(--font-label)] text-lg flex items-center justify-center md:justify-start gap-2 hover:gap-3 transition-all">
              Purchase a Gift Card <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

          {/* Right Visual Card */}
          <div className="flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-md aspect-[1.6/1] bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 md:p-8 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border border-gray-800 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-xl md:text-2xl font-[var(--font-headline)] text-[var(--color-primary)] tracking-tight">DineGrid</span>
                <span className="text-white/40 font-mono text-xs md:text-sm tracking-widest">GIFT CARD</span>
              </div>
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <div className="text-white/50 text-xs tracking-widest uppercase">Value</div>
                  <div className="text-white text-2xl md:text-3xl font-[var(--font-headline)]">$250</div>
                </div>
                <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md opacity-80"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GiftCards;
