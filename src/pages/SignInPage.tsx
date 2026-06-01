import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="relative flex items-center justify-center px-4 py-5 bg-white overflow-hidden">
      
      {/* Smart Background Glow Effect */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-red-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[280px] h-[280px] bg-red-400/20 rounded-full blur-[70px] pointer-events-none" />

      {/* Glass Card Container */}
      <div className="w-full max-w-md bg-white/40 backdrop-blur-xl border border-red-100 shadow-[0_8px_32px_0_rgba(239,68,68,0.08)] rounded-2xl p-8 relative z-10 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(239,68,68,0.15)]">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-500 text-white shadow-lg shadow-red-500/30 mb-2">
            <Sparkles size={22} />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-black">
            Create Account
          </h2>
          <p className="text-sm font-medium text-neutral-600">
            Sign up to get started with <span className="text-red-500 font-semibold tracking-wide">PRIONA</span>
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Name Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700 tracking-wider uppercase pl-1">
              Full Name
            </label>
            <div className="relative group">
              <User
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-red-500 transition-colors"
              />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full pl-11 pr-4 py-2.5 bg-white/80 border border-red-200 rounded-xl text-sm text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 shadow-sm transition-all duration-200"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700 tracking-wider uppercase pl-1">
              Email Address
            </label>
            <div className="relative group">
              <Mail
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-red-500 transition-colors"
              />
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full pl-11 pr-4 py-2.5 bg-white/80 border border-red-200 rounded-xl text-sm text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 shadow-sm transition-all duration-200"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700 tracking-wider uppercase pl-1">
              Password
            </label>
            <div className="relative group">
              <Lock
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-red-500 transition-colors"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-11 pr-11 py-2.5 bg-white/80 border border-red-200 rounded-xl text-sm text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 shadow-sm transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black transition-colors focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700 tracking-wider uppercase pl-1">
              Confirm Password
            </label>
            <div className="relative group">
              <Lock
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-red-500 transition-colors"
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-11 pr-11 py-2.5 bg-white/80 border border-red-200 rounded-xl text-sm text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 shadow-sm transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black transition-colors focus:outline-none"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-neutral-700 font-medium select-none group">
              <input 
                type="checkbox" 
                className="mt-0.5 w-4 h-4 rounded text-red-500 border-red-200 focus:ring-red-500 accent-red-500 transition-all cursor-pointer" 
              />
              <span className="group-hover:text-black transition-colors leading-normal">
                I agree to the <span className="text-red-500 font-semibold hover:underline underline-offset-2">Terms & Conditions</span> and <span className="text-red-500 font-semibold hover:underline underline-offset-2">Privacy Policy</span>
              </span>
            </label>
          </div>

          {/* Primary Sign Up Button */}
          <button
            type="submit"
            className="w-full mt-3 bg-red-500 hover:bg-black text-white py-3 rounded-xl font-semibold shadow-lg shadow-red-500/20 hover:shadow-black/10 flex items-center justify-center gap-2 group transition-all duration-300 active:scale-[0.98]"
          >
            Get Started
          </button>

          {/* Styled Separator */}
          <div className="flex items-center gap-3 py-1">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-red-200" />
            <span className="text-xs font-bold text-neutral-400 tracking-widest">OR</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-red-200" />
          </div>

          {/* Premium Google Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2.5 border border-red-200 bg-white/60 hover:bg-red-500 text-sm text-black hover:text-white font-medium py-2.5 rounded-xl transition-all duration-300 active:scale-[0.98] group"
          >
          <FaGoogle />
            Sign up with Google
          </button>
        </form>

        {/* Card Footer */}
        <p className="text-center text-sm text-neutral-600 mt-6 font-medium">
          Already have an account?{" "}
          <Link to="/login">
            <button type="button" className="text-red-500 font-semibold hover:text-black hover:underline underline-offset-4 transition-colors">
              Login
            </button>
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignInPage;