import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex items-center justify-center px-4 py-5 overflow-hidden">
      
      {/* Smart Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-red-500/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-red-400/10 rounded-full blur-[60px] pointer-events-none" />

      {/* Glass Card Container */}
      <div className="w-full max-w-md bg-white/40 backdrop-blur-xl border border-red-100 shadow-[0_8px_32px_0_rgba(239,68,68,0.08)] rounded-2xl p-8 relative z-10 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(239,68,68,0.15)]">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-500 text-white shadow-lg shadow-red-500/30 mb-2">
            <Lock size={22} />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-black">
            Login Account
          </h2>
          <p className="text-sm font-medium text-neutral-600">
            Welcome back to <span className="text-red-500 font-semibold tracking-wide">PRIONA</span>
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          
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

          {/* Options (Remember me & Forgot PW) */}
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-neutral-700 font-medium select-none group">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded text-red-500 border-red-200 focus:ring-red-500 accent-red-500 transition-all cursor-pointer" 
              />
              <span className="group-hover:text-black transition-colors">Remember me</span>
            </label>

            <button
              type="button"
              className="font-semibold text-red-500 hover:text-black hover:underline underline-offset-4 transition-colors"
            >
              Forgot password?
            </button>
          </div>

          {/* Primary Login Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-red-500 hover:bg-black text-white py-3 rounded-xl font-semibold shadow-lg shadow-red-500/20 hover:shadow-black/10 flex items-center justify-center gap-2 group transition-all duration-300 active:scale-[0.98]"
          >
            Log In
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Styled Separator */}
          <div className="flex items-center gap-3 py-2">
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
           
            Continue with Google
          </button>
        </form>

        {/* Card Footer */}
        <p className="text-center text-sm text-neutral-600 mt-6 font-medium">
          Don’t have an account?{" "}
          <Link to="/signup">
            <button type="button" className="text-red-500 font-semibold hover:text-black hover:underline underline-offset-4 transition-colors">
              Sign up free
            </button>
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;