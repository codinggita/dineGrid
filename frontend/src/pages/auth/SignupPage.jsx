import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Signup() {
  const [role, setRole] = useState("customer");
  const [showPw1, setShowPw1] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    
    setError("");
    try {
      const fullName = `${firstName} ${lastName}`;
      const userData = await signup(fullName, email, password, role);
      
      if (userData.role === 'admin') navigate('/admin/dashboard');
      else navigate('/menu');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="flex h-screen bg-[#f0efeb] font-sans overflow-hidden">
      
      {/* LEFT HERO */}
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

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center p-6 overflow-y-auto bg-white md:bg-[#f0efeb]">
        
        <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8">
          
          <h1 className="text-2xl font-extrabold text-gray-900">
            Create Account
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Join the grid and start managing your dining experience
          </p>

          {/* Role Tabs */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => setRole("customer")}
              className={`border rounded-lg p-3 text-xs font-bold uppercase transition ${
                role === "customer"
                  ? "bg-green-50 border-green-500 text-green-600"
                  : "bg-gray-50 border-gray-200 text-gray-400"
              }`}
            >
              Customer
            </button>

            <button
              onClick={() => setRole("admin")}
              className={`border rounded-lg p-3 text-xs font-bold uppercase transition ${
                role === "admin"
                  ? "bg-green-50 border-green-500 text-green-600"
                  : "bg-gray-50 border-gray-200 text-gray-400"
              }`}
            >
              Admin
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 text-xs font-bold p-3 rounded-xl mb-4">
                {error}
              </div>
            )}

            {/* Name Row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  className="w-full mt-1 p-3 rounded-lg border bg-gray-50 focus:border-green-500 focus:bg-white outline-none text-sm"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  className="w-full mt-1 p-3 rounded-lg border bg-gray-50 focus:border-green-500 focus:bg-white outline-none text-sm"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full mt-1 p-3 rounded-lg border bg-gray-50 focus:border-green-500 focus:bg-white outline-none text-sm"
                placeholder="chef@dinegrid.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full mt-1 p-3 rounded-lg border bg-gray-50 focus:border-green-500 focus:bg-white outline-none text-sm"
                placeholder="+1 (555) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type={showPw1 ? "text" : "password"}
                className="w-full mt-1 p-3 pr-10 rounded-lg border bg-gray-50 focus:border-green-500 focus:bg-white outline-none text-sm"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPw1(!showPw1)}
                className={`absolute right-3 top-10 ${
                  showPw1 ? "text-green-500" : "text-gray-400"
                }`}
              >
                {showPw1 ? "🙈" : "👁"}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="mb-4 relative">
              <label className="text-sm font-semibold text-gray-700">
                Confirm Password
              </label>
              <input
                type={showPw2 ? "text" : "password"}
                className="w-full mt-1 p-3 pr-10 rounded-lg border bg-gray-50 focus:border-green-500 focus:bg-white outline-none text-sm"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPw2(!showPw2)}
                className={`absolute right-3 top-10 ${
                  showPw2 ? "text-green-500" : "text-gray-400"
                }`}
              >
                {showPw2 ? "🙈" : "👁"}
              </button>
            </div>

            {/* Terms */}
            <div className="flex gap-2 mb-5">
              <input type="checkbox" className="mt-1 accent-green-500" required />
              <p className="text-xs text-gray-500">
                I agree to the{" "}
                <span className="text-orange-400 font-semibold cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-orange-400 font-semibold cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* Button */}
            <button 
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold transition active:scale-95"
            >
              Sign up as {role === "customer" ? "Customer" : "Admin"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5 text-gray-300 text-xs font-semibold">
            <div className="flex-1 h-px bg-gray-200"></div>
            OR
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Sign In */}
          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-400 font-bold hover:underline">
              Sign In instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}