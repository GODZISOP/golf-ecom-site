"use client";

import { Award, Target, Zap, Users, Check } from "lucide-react";

export default function CraftsmanshipSection() {
  return (
    <section id="community" className="py-24 bg-gradient-to-b from-[#06150D] via-[#0A2F1D]/40 to-[#06150D] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
            THE HOOK STANDARDS
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-extrabold text-white mt-3 mb-6">
            ENGINEERED FOR DISTANCE, <br />
            <span className="text-[#D4AF37]">CRAFTED FOR CHAMPIONS</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Every club forged under our emblem undergoes 14 precision tolerance checks and robot-assisted loft & lie calibration to deliver absolute consistency.
          </p>
        </div>

        {/* 3 Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#0A2F1D]/60 border border-white/10 p-8 rounded-2xl hover:border-[#D4AF37]/50 transition-all backdrop-blur-md">
            <div className="w-12 h-12 bg-[#D4AF37]/20 text-[#D4AF37] rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-3">
              Aerodynamic Carbon Crown
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Ultra-thin multi-material construction shifts weight low and back for maximum launch angles and reduced aerodynamic drag coefficient.
            </p>
          </div>

          <div className="bg-[#0A2F1D]/60 border border-white/10 p-8 rounded-2xl hover:border-[#D4AF37]/50 transition-all backdrop-blur-md">
            <div className="w-12 h-12 bg-[#D4AF37]/20 text-[#D4AF37] rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-3">
              1020 Soft Carbon Steel
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Quad-forged from solid billets of carbon steel to eliminate internal micro-voids, providing buttery soft impact feedback.
            </p>
          </div>

          <div className="bg-[#0A2F1D]/60 border border-white/10 p-8 rounded-2xl hover:border-[#D4AF37]/50 transition-all backdrop-blur-md">
            <div className="w-12 h-12 bg-[#D4AF37]/20 text-[#D4AF37] rounded-xl flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-3">
              Tour Player Verified
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Tested under rigorous competitive tournament conditions by top PGA players to meet strict launch monitor standards.
            </p>
          </div>
        </div>

        {/* Community Banner with Video / Image background */}
        <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <video
              src="/media/desert-woman-cap.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-[center_25%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06150D] via-[#06150D]/80 to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              <Users className="w-3.5 h-3.5" />
              JOIN HOOK GOLF CLUB
            </div>

            <h3 className="font-serif text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
              BECOME PART OF OUR LUXURY GOLF COMMUNITY
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Unlock exclusive access to private club fittings, early product drops, member-only tournaments, and VIP hospitality tents worldwide.
            </p>

            <ul className="space-y-3 text-xs font-semibold text-gray-200 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Priority Access to Limited Edition Forged Sets</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Quarterly Member Golf Apparel Box</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>1-on-1 Virtual Fitting Sessions with Master Craftspeople</span>
              </li>
            </ul>

            <a
              href="#fitting"
              className="inline-block bg-[#D4AF37] hover:bg-[#E5C158] text-[#051A10] font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all shadow-lg shadow-[#D4AF37]/30"
            >
              APPLY FOR MEMBERSHIP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
