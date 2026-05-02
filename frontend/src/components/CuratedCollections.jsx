import React from 'react';
import quickBites from '../assets/quick-bites.png';
import dateNight from '../assets/date-night.png';
import lateNight from '../assets/late-night.png';

const collections = [
  {
    id: 1,
    title: "Quick Bites",
    badge: "Under 30 mins",
    badgeColor: "bg-[var(--color-primary)] text-white",
    image: quickBites
  },
  {
    id: 2,
    title: "Date Night",
    badge: "Romantic",
    badgeColor: "bg-[var(--color-tertiary)] text-white",
    image: dateNight
  },
  {
    id: 3,
    title: "Late Night Legends",
    badge: "Open past 12am",
    badgeColor: "bg-[var(--color-secondary)] text-white",
    image: lateNight
  }
];

const CuratedCollections = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-[var(--color-neutral)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-headline)] mb-4 tracking-tight">Curated Collections</h2>
            <p className="text-lg font-[var(--font-body)] text-gray-600">
              Discover exactly what you're looking for with our expertly curated dining guides.
            </p>
          </div>
          <button className="text-[var(--color-primary)] font-[var(--font-label)] text-lg flex items-center gap-2 hover:gap-3 transition-all shrink-0">
            View all categories <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((item) => (
            <div 
              key={item.id} 
              className="relative h-[320px] sm:h-[380px] md:h-[450px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-colors duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="mb-4">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-[var(--font-label)] ${item.badgeColor} shadow-lg`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-[var(--font-headline)] text-white group-hover:-translate-y-2 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CuratedCollections;
