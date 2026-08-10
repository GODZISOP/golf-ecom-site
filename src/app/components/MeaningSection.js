"use client";

import { RotateCcw, Target, ShieldAlert, Sparkles } from "lucide-react";
import SplitText from "./SplitText";

export default function MeaningSection() {
  return (
    <section id="meaning" className="py-16 sm:py-24 bg-gradient-to-b from-[#081B12] via-[#0B2519]/60 to-[#081B12] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SplitText
            text="THE PHILOSOPHY"
            tag="span"
            className="text-[#E8A246] text-xs font-bold uppercase tracking-[0.3em]"
            delay={30}
            duration={0.8}
          />
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-white mt-3 mb-6 uppercase leading-tight">
            <SplitText
              text="WHAT “THREE OFF THE TEE”"
              tag="span"
              delay={30}
              duration={0.8}
            />
            <br />
            <SplitText
              text="REALLY MEANS"
              tag="span"
              className="text-[#E8A246] font-serif italic font-extrabold"
              delay={30}
              duration={0.8}
            />
          </h2>
          <SplitText
            text="Three Off the Tee is more than a golf joke. It’s permission to reload. Hit another one. Try again."
            tag="p"
            className="text-gray-300 text-sm md:text-base leading-relaxed"
            splitType="words"
            delay={15}
            duration={0.6}
          />
        </div>

        {/* 3 Core Meaning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#0B2519]/80 border border-white/10 p-8 rounded-3xl hover:border-[#E8A246]/60 transition-all backdrop-blur-md relative overflow-hidden group">
            <div className="w-14 h-14 bg-[#E8A246]/20 text-[#E8A246] rounded-2xl flex items-center justify-center mb-6 text-2xl font-serif font-black">
              <SplitText text="01" tag="span" delay={30} duration={0.8} />
            </div>
            <SplitText
              text="PERMISSION TO RELOAD"
              tag="h3"
              className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[#E8A246] transition-colors"
              delay={30}
              duration={0.8}
            />
            <SplitText
              text="Step onto the tee, swing too hard, send one into the trees? Take a breath, drop a ball, and reload. Life doesn’t expect perfection, and neither do we."
              tag="p"
              className="text-xs text-gray-300 leading-relaxed"
              splitType="words"
              delay={15}
              duration={0.6}
            />
          </div>

          <div className="bg-[#0B2519]/80 border border-white/10 p-8 rounded-3xl hover:border-[#E8A246]/60 transition-all backdrop-blur-md relative overflow-hidden group">
            <div className="w-14 h-14 bg-[#E8A246]/20 text-[#E8A246] rounded-2xl flex items-center justify-center mb-6 text-2xl font-serif font-black">
              <SplitText text="02" tag="span" delay={30} duration={0.8} />
            </div>
            <SplitText
              text="SECOND CHANCES"
              tag="h3"
              className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[#E8A246] transition-colors"
              delay={30}
              duration={0.8}
            />
            <SplitText
              text="Your first shot doesn’t have to define the hole — and your worst moment doesn’t have to define your life. Some of the best things happen after plan A fails."
              tag="p"
              className="text-xs text-gray-300 leading-relaxed"
              splitType="words"
              delay={15}
              duration={0.6}
            />
          </div>

          <div className="bg-[#0B2519]/80 border border-white/10 p-8 rounded-3xl hover:border-[#E8A246]/60 transition-all backdrop-blur-md relative overflow-hidden group">
            <div className="w-14 h-14 bg-[#E8A246]/20 text-[#E8A246] rounded-2xl flex items-center justify-center mb-6 text-2xl font-serif font-black">
              <SplitText text="03" tag="span" delay={30} duration={0.8} />
            </div>
            <SplitText
              text="KEEP SWINGING"
              tag="h3"
              className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[#E8A246] transition-colors"
              delay={30}
              duration={0.8}
            />
            <SplitText
              text="Sometimes the second or third attempt is the one that changes everything. Take the drop. Reload. Keep swinging forward with confidence."
              tag="p"
              className="text-xs text-gray-300 leading-relaxed"
              splitType="words"
              delay={15}
              duration={0.6}
            />
          </div>
        </div>

        {/* Highlight Banner Quote */}
        <div className="bg-gradient-to-r from-[#0B2519] via-[#14422D] to-[#0B2519] border border-[#E8A246]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <Sparkles className="w-8 h-8 text-[#E8A246] mx-auto animate-pulse" />
            <SplitText
              text="“LIFE DOESN’T ALWAYS GIVE US A PERFECT FIRST SHOT, AND NEITHER DOES GOLF. TAKE THE DROP. RELOAD. KEEP SWINGING.”"
              className="font-serif text-2xl sm:text-4xl font-extrabold text-white leading-tight"
              delay={30}
              duration={1}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
              tag="h3"
            />
            <p className="text-xs text-[#E8A246] font-semibold tracking-widest uppercase pt-2">
              — THREE OFF THE TEE MOTTO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
