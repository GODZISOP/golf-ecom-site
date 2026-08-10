"use client";

import { RotateCcw, Users, HeartHandshake, Gift, Compass, Smile } from "lucide-react";
import SplitText from "./SplitText";

export default function ValuesGrid() {
  const values = [
    {
      icon: RotateCcw,
      title: "SECOND CHANCES",
      description:
        "Your first shot doesn’t have to define the hole — and your worst moment doesn’t have to define your life.",
    },
    {
      icon: Users,
      title: "COMMUNITY",
      description:
        "Golf has an incredible ability to put people together who otherwise may never have met.",
    },
    {
      icon: HeartHandshake,
      title: "FAMILY & FRIENDSHIP",
      description:
        "Some of the best conversations happen riding in a golf cart or walking down a fairway.",
    },
    {
      icon: Gift,
      title: "GIVING BACK",
      description:
        "Using our platform to create opportunities to help other people, support meaningful causes, and use golf for something bigger.",
    },
    {
      icon: Compass,
      title: "FAITH & GRATITUDE",
      description:
        "Recognizing the opportunities we’ve been given and using them to positively impact other people.",
    },
    {
      icon: Smile,
      title: "HAVING FUN",
      description:
        "Golf is already hard enough. We’re here to laugh at terrible shots, celebrate great ones, and enjoy the game.",
    },
  ];

  return (
    <section id="mission" className="py-16 sm:py-24 bg-gradient-to-b from-[#081B12] via-[#0B2519]/70 to-[#081B12] text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SplitText text="THE FOUNDATION" tag="span" className="text-[#E8A246] text-xs font-bold uppercase tracking-[0.3em]" delay={30} duration={0.8} />
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-white mt-3 mb-6 uppercase leading-tight">
            <SplitText text="WHAT WE " tag="span" delay={30} duration={0.8} />
            <SplitText text="STAND FOR" tag="span" className="text-[#E8A246] font-serif italic" delay={30} duration={0.8} />
          </h2>
          <SplitText text="Three Off the Tee exists to bring people together through golf while using our platform to do good along the way." tag="p" className="text-gray-300 text-sm md:text-base leading-relaxed font-light" splitType="words" delay={15} duration={0.6} />
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-[#0B2519]/60 border border-white/10 p-8 rounded-3xl hover:border-[#E8A246]/60 transition-all backdrop-blur-md group hover:-translate-y-1 shadow-xl"
              >
                <div className="w-12 h-12 bg-[#E8A246]/20 text-[#E8A246] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <SplitText
                  text={v.title}
                  tag="h3"
                  className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#E8A246] transition-colors"
                  delay={30}
                  duration={0.8}
                />
                <SplitText
                  text={v.description}
                  tag="p"
                  className="text-xs text-gray-300 font-light leading-relaxed"
                  splitType="words"
                  delay={15}
                  duration={0.6}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
