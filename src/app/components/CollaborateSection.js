"use client";

import { useState } from "react";
import { Handshake, Send, Flame, Building2, Heart } from "lucide-react";

export default function CollaborateSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="collaborate" className="py-16 sm:py-24 bg-gradient-to-b from-[#081B12] via-[#0B2519]/80 to-[#081B12] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[#E8A246] text-xs font-bold uppercase tracking-[0.3em]">
            WORK WITH US
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            PARTNER & COLLABORATE <br />
            <span className="text-[#E8A246] italic font-serif">FOR SOMETHING BIGGER</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
            We love working with golf courses, creators, firefighters, local businesses, charities, and tournament organizers interested in using golf for good.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#E8A246]/20 text-[#E8A246] rounded-xl flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-white">GOLF COURSES & RESORTS</h4>
                <p className="text-xs text-gray-300 font-light">
                  Host community scrambles, co-branded apparel drops, and charity tournaments.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#E8A246]/20 text-[#E8A246] rounded-xl flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-white">FIRST RESPONDERS & FIREFIGHTERS</h4>
                <p className="text-xs text-gray-300 font-light">
                  Special collaborations and fundraising tournaments supporting families in need.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#E8A246]/20 text-[#E8A246] rounded-xl flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-white">CHARITIES & CREATORS</h4>
                <p className="text-xs text-gray-300 font-light">
                  Media partnerships, YouTube collaborations, and non-profit benefit events.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Form */}
        <div className="lg:col-span-6">
          <div className="bg-[#0B2519] border border-white/10 p-8 sm:p-10 rounded-3xl backdrop-blur-md shadow-2xl">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">LET'S CONNECT</h3>
            <p className="text-xs text-gray-300 mb-6 font-light">
              Send us a message and tell us about your course, brand, or project.
            </p>

            {submitted ? (
              <div className="text-center py-10 space-y-3 text-[#E8A246]">
                <Handshake className="w-12 h-12 mx-auto animate-bounce" />
                <h4 className="font-serif text-xl font-bold text-white">MESSAGE RECEIVED!</h4>
                <p className="text-xs text-gray-300">
                  Thank you for reaching out to Three Off the Tee. Jake & the team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="bg-[#081B12] border border-white/20 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#E8A246]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="bg-[#081B12] border border-white/20 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#E8A246]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Organization / Course / Handle (Optional)"
                  className="w-full bg-[#081B12] border border-white/20 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#E8A246]"
                />
                <textarea
                  rows="4"
                  required
                  placeholder="How can we work together?"
                  className="w-full bg-[#081B12] border border-white/20 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#E8A246]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#E8A246] hover:bg-[#F2B35D] text-[#081B12] font-black py-4 rounded-xl uppercase tracking-widest text-xs transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
