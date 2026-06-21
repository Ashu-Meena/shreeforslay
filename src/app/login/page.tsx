"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock sending OTP
    if (email) {
      setOtpSent(true);
    }
  };

  return (
    <div className="bg-cream-white min-h-screen pt-12 pb-24 flex items-center justify-center">
      <div className="max-w-md w-full px-4 sm:px-6">
        
        <div className="glassmorphism rounded-[2rem] p-8 sm:p-10 text-center relative overflow-hidden shadow-xl">
          {/* Decorative Floaters */}
          <div className="absolute -top-4 -right-4 text-4xl opacity-40 transform rotate-12">🎀</div>
          <div className="absolute -bottom-4 -left-4 text-4xl opacity-40 transform -rotate-12">🌸</div>

          <Link href="/" className="inline-block mb-8">
            <h1 className="font-sans font-bold text-3xl text-pastel-purple tracking-wide">
              Shree<span className="text-foreground">Accessories</span>
            </h1>
          </Link>

          <h2 className="text-2xl font-bold text-foreground mb-2">Welcome Back 💖</h2>
          <p className="text-foreground/70 font-nunito mb-8">Log in to track your orders and view your wishlist.</p>

          {otpSent ? (
            <div className="space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="bg-success/20 text-success p-4 rounded-2xl flex flex-col items-center justify-center border border-success/30">
                <CheckCircle size={32} className="mb-2" />
                <p className="font-bold">OTP Sent!</p>
                <p className="text-sm">We've sent a magic link to {email}</p>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-bold text-foreground text-left">Enter OTP</label>
                <input
                  type="text"
                  placeholder="• • • • • •"
                  className="w-full px-4 py-4 text-center tracking-[1em] text-xl rounded-2xl border-2 border-gray-200 focus:border-primary-pink focus:ring-4 focus:ring-primary-pink/20 outline-none transition-all"
                />
              </div>

              <button className="w-full py-4 bg-pastel-purple text-white rounded-full font-bold text-lg hover:bg-pastel-purple/90 transition-all shadow-md">
                Verify & Login
              </button>

              <button onClick={() => setOtpSent(false)} className="text-sm font-bold text-foreground/60 hover:text-pastel-purple transition-colors">
                Use a different email
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <button className="w-full py-3.5 px-4 bg-white border border-gray-200 text-foreground rounded-full font-bold hover:bg-gray-50 transition-all flex items-center justify-center space-x-3 shadow-sm">
                <FcGoogle size={24} />
                <span>Continue with Google</span>
              </button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-foreground/40 text-sm font-bold">OR</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <form onSubmit={handleSendOtp} className="space-y-4 text-left">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-foreground pl-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-foreground/40">
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-primary-pink focus:ring-4 focus:ring-primary-pink/20 outline-none transition-all bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-foreground text-white rounded-full font-bold text-lg hover:bg-foreground/90 transition-all shadow-md flex items-center justify-center"
                >
                  Send Magic Link <ArrowRight size={20} className="ml-2" />
                </button>
              </form>
            </div>
          )}

          <p className="mt-8 text-xs text-foreground/50 font-nunito">
            By logging in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
