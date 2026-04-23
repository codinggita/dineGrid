import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F5F5F5] border-b border-neutral-200 sticky top-0 z-50 font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Logo & Brand Name */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
               <img 
                 src="/logo.png" 
                 alt="DineGrid Logo" 
                 className="h-10 w-10 rounded-full border-2 border-[#4CAF50] bg-white p-1.5 shadow-sm transform transition-transform group-hover:rotate-12" 
               />
            </div>
            <span className="text-2xl font-bold text-[#4CAF50] tracking-tight">DineGrid</span>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-[15px] font-semibold text-[#4CAF50] relative py-1">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4CAF50] rounded-full"></span>
            </a>
            <a href="#" className="text-[15px] font-medium text-[#1A1C1C]/60 hover:text-[#1A1C1C] transition-colors">Explore</a>
            <a href="#" className="text-[15px] font-medium text-[#1A1C1C]/60 hover:text-[#1A1C1C] transition-colors">Deals</a>
            <a href="#" className="text-[15px] font-medium text-[#1A1C1C]/60 hover:text-[#1A1C1C] transition-colors">Restaurant Details</a>
            <a href="#" className="text-[15px] font-medium text-[#1A1C1C]/60 hover:text-[#1A1C1C] transition-colors">How It Works</a>
          </div>

          

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-lg text-[#1A1C1C] hover:bg-black/5 transition-colors"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Sidebar/Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] border-t border-neutral-100' : 'max-h-0'}`}>
        <div className="bg-white py-6 px-6 space-y-5 shadow-inner">
          <a href="#" className="block text-lg font-semibold text-[#4CAF50]">Home</a>
          <a href="#" className="block text-lg font-medium text-[#1A1C1C]/60">Explore</a>
          <a href="#" className="block text-lg font-medium text-[#1A1C1C]/60">Deals</a>
          <a href="#" className="block text-lg font-medium text-[#1A1C1C]/60">Restaurant Details</a>
          <a href="#" className="block text-lg font-medium text-[#1A1C1C]/60">How It Works</a>
          <div className="pt-6 border-t border-neutral-50 flex flex-col gap-4">
            <a href="#" className="text-center text-lg font-medium text-[#1A1C1C]/70">Login</a>
            <button className="bg-[#4CAF50] text-white w-full py-4 rounded-2xl text-lg font-bold shadow-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
