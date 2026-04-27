import React from 'react';
import { Search, ClipboardList, Utensils } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Search className="w-7 h-7" />,
    title: 'Discover',
    desc: 'Browse real-time availability and dynamic wait estimates with AI-driven recommendations.',
    color: 'var(--color-primary)',
    bg: 'rgba(76,175,80,0.08)',
  },
  {
    number: '02',
    icon: <ClipboardList className="w-7 h-7" />,
    title: 'Queue',
    desc: 'Join the virtual queue from anywhere. Get precise updates while you enjoy your pre-arrival moments.',
    color: 'var(--color-secondary)',
    bg: 'rgba(255,152,0,0.08)',
  },
  {
    number: '03',
    icon: <Utensils className="w-7 h-7" />,
    title: 'Dine',
    desc: 'Walk in as your table is finalized. Pre-ordered drinks await. Start dining the moment you arrive.',
    color: 'var(--color-tertiary)',
    bg: 'rgba(242,111,157,0.08)',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white text-[var(--color-neutral)] relative overflow-hidden">
      {/* Soft green blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-[10px] font-black text-[var(--color-primary)] uppercase tracking-[0.4em] mb-4 bg-[var(--color-primary)]/8 px-4 py-1.5 rounded-full">
            The Guest Flow
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">Effortless Arrival</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            DineGrid removes the friction from dining out. From discovery to dessert, we've optimised every step.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Step number badge */}
              <span
                className="absolute top-5 right-5 text-xs font-black opacity-25 tracking-widest"
                style={{ color: step.color }}
              >
                {step.number}
              </span>

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
                style={{ background: step.bg, color: step.color }}
              >
                {step.icon}
              </div>

              {/* Colored step indicator */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: step.color }} />
                <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: step.color }}>
                  Step {i + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
