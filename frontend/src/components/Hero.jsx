import { MapPin, ChefHat, Calendar, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-[var(--color-neutral)] text-white overflow-hidden min-h-[680px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: 'url("/premium-hero-bg.png")' }}
      />

      {/* Dark overlay — solid, no fade to white */}
      <div className="absolute inset-0 bg-black/65 z-10" />

      {/* Green accent glow top-right */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-3xl z-10 pointer-events-none" />
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/4 w-80 h-40 bg-[var(--color-secondary)]/10 rounded-full blur-3xl z-10 pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-28">

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
          <span className="text-sm font-medium text-white/90">47 restaurants live</span>
          <span className="text-white/30 mx-1">|</span>
          <span className="text-sm font-medium text-white/90">1,200+ diners right now</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Skip the Line.{' '}
          <span className="text-[var(--color-primary)] italic">Savor</span>
          <br />
          the Time.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join the future of hospitality. A seamless transition from doorstep to table, powered by precision engineering and real-time intelligence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <Link
            to="/book/date"
            className="group flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 rounded-xl font-bold text-base transition-all w-full sm:w-auto shadow-lg shadow-green-900/40"
          >
            <Calendar className="w-5 h-5" />
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-base transition-all w-full sm:w-auto border border-white/15">
            <ChefHat className="w-5 h-5" />
            How It Works
          </button>
        </div>

        {/* Social proof strip */}
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[var(--color-secondary)] fill-[var(--color-secondary)]" />
              ))}
            </div>
            <span className="text-white/70 text-sm font-medium">4.9/5 from 2,400+ reviews</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="text-white/70 text-sm font-medium flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
            No credit card required
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="text-white/70 text-sm font-medium">Free forever for diners</div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
