"use client";

import { useState, useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function AnimatedCounter({ value }) {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const target = match ? parseInt(match[2], 10) : 0;
  const prefix = match ? match[1] : "";
  const suffix = match ? match[3] : "";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  
  // For small numbers like 2, 1, 0 on the right side, starting from 0 means they barely animate or don't animate at all.
  // We set the initial value to 25 for these small numbers so they count DOWN to the target, giving a nice running effect.
  const initialValue = target <= 5 ? 25 : 0;
  const motionValue = useMotionValue(initialValue);
  
  // duration is in milliseconds for useSpring in framer-motion
  const springValue = useSpring(motionValue, { duration: 1500, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(initialValue);

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    } else {
      motionValue.set(initialValue);
    }
  }, [isInView, target, motionValue, initialValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [springValue]);

  if (!match) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}
      {Math.round(displayValue)}
      {suffix}
    </span>
  );
}

export default function StrategicSection() {
  const leftStats = [
    {
      number: "18",
      label: "holes demanding focus",
      description:
        "A championship fairway where every shot is an opportunity to reset, reload, and enjoy the game.",
    },
    {
      number: "100%",
      label: "everyday golfers",
      description:
        "Built for scratch players, weekend scramblers, firefighters, and golfers shooting 105.",
    },
    {
      number: "365",
      label: "days of mulligans",
      description:
        "Permission to reload. Life doesn’t give you a perfect first shot, and neither does golf.",
    },
  ];

  const rightStats = [
    {
      number: "2nd",
      label: "chances on the tee",
      description:
        "Your first swing doesn’t define the hole — and your worst shot doesn’t define your life.",
    },
    {
      number: "#1",
      label: "community mission",
      description:
        "Bringing people together through golf while supporting firefighter & charity causes.",
    },
    {
      number: "0",
      label: "excuses needed",
      description:
        "Take the drop. Reload. Keep swinging forward with great people and cold drinks.",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 overflow-hidden bg-[#081B12] text-white">
      {/* Background Image - golf-hero-2.png */}
      <div className="absolute inset-0 z-0">
        <img
          src="/media/golf-hero-2.png"
          alt="Strategic Environment Course"
          className="w-full h-full object-cover object-center scale-100"
        />
        {/* Dark Vignette Overlay for smooth readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#081B12] via-black/50 to-[#081B12] opacity-85" />

        {/* Minimal Grid Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A246_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white text-center md:text-left tracking-tight mb-10 sm:mb-16 md:mb-20 drop-shadow-2xl uppercase leading-none break-words">
          Strategic <span className="text-[#E8A246] font-serif italic">Environment</span>
        </h2>

        {/* Main Content Layout - 100% Responsive Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 items-center gap-10 sm:gap-12 lg:gap-16">
          {/* Left Column Stats */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 text-center md:text-left z-20">
            {leftStats.map((stat, i) => (
              <div key={i} className="group relative">
                <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#E8A246] group-hover:text-white transition-colors leading-none drop-shadow-lg">
                  <AnimatedCounter value={stat.number} />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-200 tracking-wider uppercase mt-1 mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-gray-300 font-light max-w-xs mx-auto md:mx-0 leading-relaxed drop-shadow">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column - Responsive Focus Ring */}
          <div className="relative flex items-center justify-center py-4 sm:py-6 md:py-8 z-20 pointer-events-none md:-mt-20 lg:-mt-28">
            <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-2 border-[#E8A246]/70 flex items-center justify-center p-2.5 sm:p-3 shadow-[0_0_50px_rgba(232,162,70,0.4)]">
              {/* Inner Transparent Focus Ring */}
              <div className="w-full h-full rounded-full border border-white/50 flex items-center justify-center bg-white/5 backdrop-blur-[1px]" />

              {/* Tactical Crosshair Pointer Lines */}
              <div className="hidden lg:block absolute top-1/2 -left-16 w-16 h-px bg-gradient-to-r from-transparent to-[#E8A246]" />
              <div className="hidden lg:block absolute top-1/2 -right-16 w-16 h-px bg-gradient-to-l from-transparent to-[#E8A246]" />
              <div className="hidden lg:block absolute -top-10 left-1/2 w-px h-10 bg-gradient-to-b from-transparent to-[#E8A246]" />
              <div className="hidden lg:block absolute -bottom-10 left-1/2 w-px h-10 bg-gradient-to-t from-transparent to-[#E8A246]" />
            </div>
          </div>

          {/* Right Column Stats */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 text-center md:text-right z-20">
            {rightStats.map((stat, i) => (
              <div key={i} className="group relative">
                <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#E8A246] group-hover:text-white transition-colors leading-none drop-shadow-lg">
                  <AnimatedCounter value={stat.number} />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-200 tracking-wider uppercase mt-1 mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-gray-300 font-light max-w-xs mx-auto md:ml-auto md:mr-0 leading-relaxed drop-shadow">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
