"use client";

import { useState } from "react";
import { Send, Flame, RotateCcw, HeartHandshake, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#05130D] text-gray-400 border-t border-[#E8A246]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Value Props Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-16 border-b border-white/10 text-center">
          <div className="flex flex-col items-center gap-2">
            <RotateCcw className="w-6 h-6 text-[#E8A246]" />
            <h4 className="font-serif text-sm font-bold text-white">PERMISSION TO RELOAD</h4>
            <p className="text-[11px] text-gray-400">Second chances on and off the tee</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Flame className="w-6 h-6 text-[#E8A246]" />
            <h4 className="font-serif text-sm font-bold text-white">FIREFIGHTER FOUNDED</h4>
            <p className="text-[11px] text-gray-400">Created by LA County firefighter Jake Raden</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HeartHandshake className="w-6 h-6 text-[#E8A246]" />
            <h4 className="font-serif text-sm font-bold text-white">GIVING BACK</h4>
            <p className="text-[11px] text-gray-400">Supporting meaningful causes & first responders</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#E8A246]" />
            <h4 className="font-serif text-sm font-bold text-white">100% SATISFACTION</h4>
            <p className="text-[11px] text-gray-400">Premium apparel built for everyday golfers</p>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16 border-b border-white/10">
          {/* Brand Bio */}
          <div className="space-y-4">
            <a href="#" className="flex flex-col group">
              <span className="font-serif text-2xl font-black tracking-[0.18em] text-[#E8A246] uppercase">
                THREE OFF THE TEE
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gray-300 font-sans uppercase font-medium">
                SOUTHERN CALIFORNIA GOLF LIFESTYLE
              </span>
            </a>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              Southern California golf lifestyle brand built around second chances, good people, and the belief that golf is about much more than the scorecard.
            </p>
            <p className="text-xs text-[#E8A246] font-semibold italic">
              “Life gives you mulligans. Use them.”
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#story" className="hover:text-[#E8A246] transition-colors">
                  Our Story & Jake's Journey
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-[#E8A246] transition-colors">
                  Shop Hats & Headwear
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-[#E8A246] transition-colors">
                  Performance Polos & Tees
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-[#E8A246] transition-colors">
                  The Mission & 6 Principles
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#E8A246] transition-colors">
                  Golf With Us Events
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Firefighters */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              COMMUNITY & CAUSES
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#events" className="hover:text-[#E8A246] transition-colors">
                  Firefighter Charity Tournaments
                </a>
              </li>
              <li>
                <a href="#collaborate" className="hover:text-[#E8A246] transition-colors">
                  Collaborate with Course / Creators
                </a>
              </li>
              <li>
                <a href="#collaborate" className="hover:text-[#E8A246] transition-colors">
                  First Responder Discounts
                </a>
              </li>
              <li>
                <a href="#meaning" className="hover:text-[#E8A246] transition-colors">
                  The Mulligan Philosophy
                </a>
              </li>
            </ul>
          </div>

          {/* VIP Newsletter */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              RELOAD CLUB NEWSLETTER
            </h4>
            <p className="text-xs text-gray-300 mb-4 font-light">
              Subscribe for early hat releases, community tournament invites, and stories from everyday golfers.
            </p>
            {subscribed ? (
              <div className="bg-[#0B2519] border border-[#E8A246] text-[#E8A246] p-3 rounded-lg text-xs font-semibold text-center">
                ✓ Welcome to Three Off the Tee!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#081B12] border border-white/20 rounded-lg px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E8A246]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 bg-[#E8A246] hover:bg-[#F2B35D] text-[#081B12] px-3 rounded-md transition-colors flex items-center justify-center font-bold"
                    aria-label="Submit Email"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 THREE OFF THE TEE LLC. All rights reserved. Founded by LA County Firefighter Jake Raden.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#E8A246] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#E8A246] transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-[#E8A246] transition-colors">
              Instagram / YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
