import React from 'react';

const PrivateDining = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] overflow-hidden relative min-h-[500px] flex items-center shadow-2xl">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/src/assets/private_dining.png" 
              alt="Private Dining Room" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl p-10 md:p-16 text-white">
            <h2 className="text-4xl md:text-5xl font-[var(--font-headline)] mb-6 tracking-tight">
              Host Your Next Unforgettable Event
            </h2>
            <p className="text-lg font-[var(--font-body)] text-white/80 mb-10 leading-relaxed">
              From intimate celebrations to corporate gatherings, discover and book exclusive private dining spaces at the city's finest establishments. Let our concierge handle the details.
            </p>
            <button className="bg-white text-[var(--color-neutral)] hover:bg-gray-100 px-8 py-4 rounded-xl font-[var(--font-label)] text-lg transition-colors shadow-lg">
              Explore Private Dining
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivateDining;
