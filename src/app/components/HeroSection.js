"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowDown, RotateCcw } from "lucide-react";
import SplitText from "./SplitText";

const HERO_VIDEOS = [
  "/media/hero-video-1.mp4",
  "/media/hero-video-2.mp4"
];

export default function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;
    if (!videoContainer) return;

    const videoEl = videoContainer.querySelector("video");
    if (!videoEl) return;

    let localIndex = 0;

    const handleEnded = () => {
      localIndex = (localIndex + 1) % HERO_VIDEOS.length;
      setCurrentVideoIndex(localIndex);
      videoEl.src = HERO_VIDEOS[localIndex];
      videoEl.play().catch(() => {});
    };

    videoEl.addEventListener("ended", handleEnded);

    return () => {
      videoEl.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen sm:min-h-[750px] overflow-hidden flex items-center justify-center">
      {/* Background Video Player - Professional iOS Autoplay Fix via Raw HTML */}
      <div 
        ref={videoContainerRef}
        className="absolute inset-0 w-full h-full"
        dangerouslySetInnerHTML={{
          __html: `
            <video
              src="${HERO_VIDEOS[0]}"
              autoplay
              muted
              playsinline
              webkit-playsinline
              poster="/media/golf-hero-1.png"
              class="w-full h-full object-cover object-center scale-105 transition-all duration-700"
            ></video>
          `
        }}
      />
      {/* SoCal Golden Hour Dark Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#081B12] via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-28 sm:pt-36 md:pt-40 pb-8 sm:pb-12 min-h-screen sm:min-h-[750px] flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-start sm:justify-center max-w-4xl py-4 sm:py-0">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E8A246]/20 border border-[#E8A246]/50 px-4 py-2 rounded-full text-[#E8A246] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md mb-4 sm:mb-6 w-fit mt-1 sm:mt-0 shadow-md">
            <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E8A246] animate-spin shrink-0" />
            <span>LIFE GIVES YOU MULLIGANS. USE THEM.</span>
          </div>

          {/* Large Title */}
          <h1 className="font-serif text-3xl sm:text-6xl md:text-8xl lg:text-[88px] font-bold text-[#E8A246] leading-[1.05] sm:leading-[0.95] tracking-tight uppercase mb-4 sm:mb-6 drop-shadow-2xl">
            <SplitText text="THREE OFF THE TEE" tag="span" delay={30} duration={0.8} />
            <br />
            <SplitText text="SECOND CHANCES" tag="span" className="text-white font-serif font-extrabold italic" delay={30} duration={0.8} />
            <SplitText text=" START HERE" tag="span" delay={30} duration={0.8} />
          </h1>

          <SplitText
            text="Southern California golf lifestyle brand built on second chances, good people, and the belief that golf is about much more than the scorecard."
            tag="p"
            className="text-gray-200 text-xs sm:text-base md:text-xl font-light max-w-2xl leading-relaxed mb-5 sm:mb-8 drop-shadow"
            splitType="words"
            delay={15}
            duration={0.6}
          />

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 mb-4 sm:mb-0">
            <a
              href="#shop"
              className="bg-[#E8A246] hover:bg-[#F2B35D] text-[#081B12] font-black text-xs tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#E8A246]/30 flex items-center justify-center gap-3 text-center"
            >
              <span>SHOP APPAREL & HEADWEAR</span>
              <span className="bg-[#081B12] text-[#E8A246] rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">
                →
              </span>
            </a>

            <a
              href="#story"
              className="bg-[#0B2519]/80 hover:bg-[#14422D] text-white border border-white/30 hover:border-[#E8A246] font-semibold text-xs tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 rounded-full backdrop-blur-md transition-all duration-300 text-center"
            >
              READ OUR STORY
            </a>
          </div>
        </div>

        {/* Bottom Controls Bar */}
        <div className="flex items-end justify-between border-t border-white/10 pt-6">
          {/* Video Indicator */}
          <div className="flex items-center gap-2">
            {HERO_VIDEOS.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentVideoIndex === index
                    ? "w-8 bg-[#E8A246]"
                    : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#meaning"
              aria-label="Scroll Down"
              className="hidden md:flex p-3 bg-black/60 hover:bg-[#14422D] border border-white/20 rounded-full text-white transition-all animate-bounce"
            >
              <ArrowDown className="w-4 h-4 text-[#E8A246]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
