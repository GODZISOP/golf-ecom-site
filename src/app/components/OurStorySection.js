"use client";

import { Flame, ShieldCheck, HeartHandshake, Compass } from "lucide-react";

export default function OurStorySection() {
  return (
    <section id="story" className="py-24 bg-[#081B12] text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Image / Founder Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8A246]/40 shadow-2xl group">
            <img
              src="/media/image copy 2.png"
              alt="LA County Firefighter Jake Raden Founder"
              className="w-full h-[580px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081B12] via-transparent to-transparent" />

            {/* Badge Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#0B2519]/90 border border-[#E8A246]/40 backdrop-blur-md p-6 rounded-2xl">
              <div className="flex items-center gap-3 text-[#E8A246] mb-1">
                <Flame className="w-5 h-5 text-[#E8A246]" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  FOUNDED BY L.A. COUNTY FIREFIGHTER
                </span>
              </div>
              <h4 className="font-serif text-xl font-black text-white">JAKE RADEN</h4>
              <p className="text-xs text-gray-300 mt-1">
                “Sometimes life doesn’t go according to plan. You regroup, learn, reload, and take another swing.”
              </p>
            </div>
          </div>
        </div>

        {/* Right Column Story Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[#E8A246] text-xs font-bold uppercase tracking-[0.3em]">
            THE STORY BEHIND THE BRAND
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-black text-white leading-tight">
            SECOND CHANCES <br />
            <span className="text-[#E8A246] italic font-serif">ON & OFF THE TEE</span>
          </h2>

          <div className="space-y-4 text-gray-300 text-sm leading-relaxed font-light">
            <p>
              Three Off the Tee started with a simple idea: golf doesn’t have to be perfect to be meaningful.
            </p>
            <p>
              Founded by Los Angeles County firefighter Jake Raden, golf became much more than a hobby through major changes in life. It became a constant — somewhere to clear his head, reconnect with family and friends, meet new people, and appreciate the moment.
            </p>
            <p>
              The phrase <strong className="text-white font-semibold">“Three Off the Tee”</strong> captured the humor of the game, but also represented something Jake had experienced personally: your first shot doesn’t have to define the hole — and your worst moment doesn’t have to define your life.
            </p>
            <p>
              What started as an idea and a few hats has grown into a Southern California community centered around golf, friendship, second chances, charitable events, and bringing people together.
            </p>
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
