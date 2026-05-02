import React from 'react';
import { Flame } from 'lucide-react';

const MenuItem = ({ item, onAddItem }) => {
  return (
    <div className="group relative flex flex-col sm:flex-row gap-6 p-6 rounded-3xl border border-gray-50 hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden">
      <div className="w-full sm:w-48 h-48 rounded-2xl overflow-hidden shrink-0 shadow-md">
        <img 
          src={item.img} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="flex flex-col justify-center flex-1">
        {item.tag && (
          <span className="inline-flex items-center gap-1 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest mb-2 bg-[var(--color-primary)]/5 px-2 py-0.5 rounded-full w-fit">
            <Flame className="w-3 h-3" /> {item.tag}
          </span>
        )}
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-2xl font-bold text-[var(--color-neutral)]">{item.name}</h4>
          <span className="text-xl font-bold text-[var(--color-primary)]">{item.price}</span>
        </div>
        <p className="text-gray-500 leading-relaxed text-sm">
          {item.desc}
        </p>
        <div className="mt-4">
          <button
            onClick={() => onAddItem?.(item)}
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Add Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
