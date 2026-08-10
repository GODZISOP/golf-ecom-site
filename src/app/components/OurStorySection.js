"use client";

import { Flame, ShieldCheck, HeartHandshake, Compass } from "lucide-react";
import SplitText from "./SplitText";

export default function OurStorySection() {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#081B12] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Left Column Image / Founder Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8A246]/40 shadow-2xl group">
            <img
              src="/media/image copy 2.png"
              alt="LA County Firefighter Jake Raden Founder"
              className="w-full h-[380px] sm:h-[580px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081B12] via-transparent to-transparent" />

            {/* Badge Overlay */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-[#0B2519]/90 border border-[#E8A246]/40 backdrop-blur-md p-4 sm:p-6 rounded-2xl">
              <div className="flex items-center gap-2 sm:gap-3 text-[#E8A246] mb-1">
                <Flame className="w-4 sm:w-5 h-4 sm:h-5 text-[#E8A246] shrink-0" />
                <SplitText
                  text="FOUNDED BY L.A. COUNTY FIREFIGHTER"
                  tag="span"
                  className="text-[10px] sm:text-xs font-bold uppercase tracking-widest"
                  delay={20}
                  duration={0.6}
                />
              </div>
              <SplitText text="JAKE RADEN" tag="h4" className="font-serif text-lg sm:text-xl font-black text-white" delay={30} duration={0.8} />
              <SplitText
                text="“Sometimes life doesn’t go according to plan. You regroup, learn, reload, and take another swing.”"
                tag="p"
                className="text-xs text-gray-300 mt-1"
                splitType="words"
                delay={15}
                duration={0.6}
              />
            </div>
          </div>
        </div>

        {/* Right Column Story Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <SplitText
            text="THE STORY BEHIND THE BRAND"
            tag="span"
            className="text-[#E8A246] text-xs font-bold uppercase tracking-[0.3em]"
            delay={30}
            duration={0.8}
          />
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            <SplitText text="SECOND CHANCES" tag="span" delay={30} duration={0.8} />
            <br />
            <SplitText text="ON & OFF THE TEE" tag="span" className="text-[#E8A246] italic font-serif" delay={30} duration={0.8} />
          </h2>

          <div className="space-y-4 text-gray-300 text-sm leading-relaxed font-light">
            <SplitText
              text="Three Off the Tee started with a simple idea: golf doesn’t have to be perfect to be meaningful."
              tag="p"
              splitType="words"
              delay={15}
              duration={0.6}
            />
            <SplitText
              text="Founded by Los Angeles County firefighter Jake Raden, golf became much more than a hobby through major changes in life. It became a constant — somewhere to clear his head, reconnect with family and friends, meet new people, and appreciate the moment."
              tag="p"
              splitType="words"
              delay={15}
              duration={0.6}
            />
            <SplitText
              text="The phrase “Three Off the Tee” captured the humor of the game, but also represented something Jake had experienced personally: your first shot doesn’t have to define the hole — and your worst moment doesn’t have to define your life."
              tag="p"
              splitType="words"
              delay={15}
              duration={0.6}
            />
            <SplitText
              text="What started as an idea and a few hats has grown into a Southern California community centered around golf, friendship, second chances, charitable events, and bringing people together."
              tag="p"
              splitType="words"
              delay={15}
              duration={0.6}
            />
          </div>

          {/* Core Values Quick Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-bold text-[#E8A246]">
              <ShieldCheck className="w-4 h-4" />
              <span>Real Stories</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#E8A246]">
              <HeartHandshake className="w-4 h-4" />
              <span>Giving Back</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#E8A246]">
              <Compass className="w-4 h-4" />
              <span>Faith & Gratitude</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
