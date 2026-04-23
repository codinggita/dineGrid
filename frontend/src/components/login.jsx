import React from 'react';

const Login = () => {
  return (
    <div className="relative min-h-screen w-full font-['Inter'] bg-[#F5F5F5] lg:bg-transparent">

      {/* 📱 MOBILE BACKGROUND: Hero Image with Light Overlay (Hidden on Desktop) */}
      <div className="absolute inset-0 z-0 block lg:hidden">
        <img
          src="/food_hero.png"
          alt="Premium Culinary Dish"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Light Overlay to make text and form readable */}
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      {/* MAIN CONTAINER: Sits above mobile background, applies solid bg on desktop */}
      <div className="relative z-10 flex min-h-screen w-full flex-col lg:flex-row lg:bg-[#F5F5F5]">

        {/* 🟢 LEFT SECTION: Hero Image & Branding (Desktop Only) */}
        <div className="relative hidden w-1/2 flex-col items-center justify-center overflow-hidden bg-black lg:flex">
          {/* Background Food Hero Image */}
          <img
            src="/food_hero.png"
            alt="Premium Culinary Dish"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />

          {/* Elegant Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1C] via-transparent to-transparent"></div>

          {/* Branding Content */}
          <div className="relative z-10 flex flex-col items-center p-12 text-center text-white">
            <img
              src="/logo.png"
              alt="DineGrid Logo"
              className="mb-8 h-40 w-40 rounded-full border-4 border-[#4CAF50] bg-white/10 p-4 shadow-2xl backdrop-blur-sm transition-transform duration-500 hover:scale-105"
            />
            <h1 className="mb-4 text-5xl font-bold tracking-tight">DineGrid</h1>
            <p className="max-w-md text-xl font-medium text-white/90">
              Elevate your dining management with the ultimate culinary queue system.
            </p>
            <div className="mt-8 h-1 w-24 rounded-full bg-[#4CAF50]"></div>
          </div>
        </div>

        {/* 🟠 RIGHT SECTION: Login Form */}
        <div className="flex w-full items-center justify-center p-6 lg:w-1/2 lg:p-12">
          <div className="w-full max-w-md">

            {/* Mobile Header (Hidden on Desktop) */}
            <div className="mb-10 flex flex-col items-center lg:hidden">
              <img src="/logo.png" alt="DineGrid Logo" className="mb-4 h-24 w-24 rounded-full border-2 border-[#4CAF50] bg-white p-2 shadow-lg" />
              <h2 className="text-3xl font-bold text-[#1A1C1C]">DineGrid</h2>
            </div>

            {/* Form Card */}
            <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-10">

              <header className="mb-8">
                <h3 className="mb-2 text-3xl font-bold tracking-tight text-[#1A1C1C]">Welcome Back</h3>
                <p className="text-[#1A1C1C]/60">Enter your details to manage your grid</p>
              </header>

              <form className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1A1C1C]" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-xl border-2 border-transparent bg-[#F5F5F5] px-5 py-3.5 text-[#1A1C1C] outline-none transition-all placeholder:text-neutral-400 focus:border-[#4CAF50] focus:bg-white"
                    placeholder="chef@dinegrid.com"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-[#1A1C1C]" htmlFor="password">
                      Password
                    </label>
                    <a href="#" className="text-sm font-medium text-[#FF9800] transition-colors hover:text-[#388E3C]">
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="w-full rounded-xl border-2 border-transparent bg-[#F5F5F5] px-5 py-3.5 text-[#1A1C1C] outline-none transition-all placeholder:text-neutral-400 focus:border-[#4CAF50] focus:bg-white"
                    placeholder="••••••••••••"
                  />
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-5 w-5 cursor-pointer rounded border-gray-300 text-[#4CAF50] focus:ring-[#4CAF50]"
                  />
                  <label htmlFor="remember" className="cursor-pointer select-none text-sm text-[#1A1C1C]/80">
                    Remember my session
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#4CAF50] py-4 text-center font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#388E3C] hover:shadow-xl active:scale-95"
                >
                  Sign In to DineGrid
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8 flex items-center justify-center">
                <div className="absolute w-full border-t border-gray-200"></div>
                <span className="relative bg-white px-4 text-xs font-bold uppercase tracking-widest text-gray-400">OR</span>
              </div>

              {/* Footer Action */}
              <div className="text-center">
                <p className="text-sm text-[#1A1C1C]/70">
                  New to our community?{' '}
                  <a href="#" className="font-bold text-[#FF9800] hover:underline">
                    Request Access
                  </a>
                </p>
              </div>
            </div>

            {/* Legal / App Version Footer */}
            <div className="mt-8 text-center text-xs font-medium uppercase tracking-widest text-gray-400">
              DineGrid v1.0 • Secure Infrastructure
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
