import React from 'react';
import { Clock, Star } from 'lucide-react';

const ModernEpicurean = () => {
  return (
    <section className="py-24 bg-[var(--color-neutral-light)] text-[var(--color-neutral)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-[var(--font-headline)] mb-6 tracking-tight">
              Designed for the <span className="text-[var(--color-neutral)] opacity-70">Modern</span> Epicurean
            </h2>
            <p className="text-lg font-[var(--font-body)] text-gray-600 mb-10 leading-relaxed">
              DineGrid elevates your culinary journey. Discover highly rated restaurants, view live floor plans, and secure your table with an experience tailored to the modern diner.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-[var(--color-primary)]/10 p-3 rounded-full h-fit">
                  <Clock className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="text-xl font-[var(--font-headline)] mb-2">Live Availability</h4>
                  <p className="text-gray-600 font-[var(--font-body)]">View real-time wait times and table availability before you even leave your house.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-[var(--color-secondary)]/10 p-3 rounded-full h-fit">
                  <Star className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <div>
                  <h4 className="text-xl font-[var(--font-headline)] mb-2">Exclusive Rewards</h4>
                  <p className="text-gray-600 font-[var(--font-body)]">Earn points on every reservation, redeemable for priority seating and chef's specials.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Collage */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Top Left - Burger */}
              <div className="rounded-3xl overflow-hidden h-48 bg-gray-200">
                <img 
                  src="/src/assets/epic_burger.png" 
                  alt="Premium Burger" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Top Right - Woodfire Pizza */}
              <div className="rounded-3xl overflow-hidden h-48 bg-orange-100">
                <img 
                  src="/src/assets/epic_pizza.png" 
                  alt="Woodfire Pizza" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Left - Chef */}
              <div className="rounded-3xl overflow-hidden h-48 bg-orange-100 flex items-center justify-center">
                <img 
                  src="/src/assets/epic_chef.png" 
                  alt="Expert Chef" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Right - Cocktail */}
              <div className="rounded-3xl overflow-hidden h-48 bg-gray-900">
                <img 
                  src="/src/assets/epic_cocktail.png" 
                  alt="Signature Cocktail" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModernEpicurean;
