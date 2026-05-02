import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-neutral)] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl font-[var(--font-headline)] text-[var(--color-primary)] mb-4">DineGrid</h2>
          <p className="text-gray-400 font-[var(--font-body)] text-base md:text-lg">
            The ultimate guide to elevated dining. Find tables, join queues, and track the city's finest restaurants in real-time.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-gray-800 pt-8 md:pt-12 pb-8 md:pb-12">
          <div>
            <h4 className="font-[var(--font-headline)] mb-4 text-white">Discover</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors font-[var(--font-body)]">Browse Restaurants</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors font-[var(--font-body)]">Curated Lists</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors font-[var(--font-body)]">Live Queues</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-[var(--font-headline)] mb-4 text-white">For Business</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors font-[var(--font-body)]">Partner With Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors font-[var(--font-body)]">Host Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors font-[var(--font-body)]">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-[var(--font-headline)] mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-[var(--font-body)]">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-[var(--font-body)]">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-[var(--font-body)]">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-[var(--font-headline)] mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-[var(--font-body)]">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-[var(--font-body)]">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-[var(--font-body)]">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 text-center flex flex-col items-center justify-center">
          <p className="text-gray-500 font-[var(--font-body)] text-sm">
            © {new Date().getFullYear()} DineGrid Technologies Inc. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
