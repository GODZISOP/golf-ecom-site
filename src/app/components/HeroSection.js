"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, ArrowDown, Play, Pause, RotateCcw } from "lucide-react";

const HERO_VIDEOS = [
  "/media/hero-video-1.mp4",
  "/media/hero-video-2.mp4"
];

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % HERO_VIDEOS.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [currentVideoIndex]);

  return (
    <section className="relative w-full h-screen min-h-[750px] overflow-hidden flex items-center justify-center">
      {/* Background Video Player */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src={HERO_VIDEOS[currentVideoIndex]}
          autoPlay
          muted={isMuted}
          playsInline
          onEnded={handleVideoEnded}
          poster="/media/golf-hero-1.png"
          className="w-full h-full object-cover object-center scale-105 transition-all duration-700"
        />
        {/* SoCal Golden Hour Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081B12] via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-12 h-full flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E8A246]/20 border border-[#E8A246]/40 px-4 py-1.5 rounded-full text-[#E8A246] text-xs font-semibold tracking-[0.25em] uppercase backdrop-blur-md mb-6 w-fit">
            <RotateCcw className="w-3.5 h-3.5 text-[#E8A246] animate-spin" />
            Life gives you mulligans. Use them.
          </div>

          {/* Large Title */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[88px] font-bold text-[#E8A246] leading-[0.95] tracking-tight uppercase mb-6 drop-shadow-2xl">
            THREE OFF THE TEE <br />
            <span className="text-white font-serif font-extrabold italic">SECOND CHANCES</span> START HERE
          </h1>

          <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-8 drop-shadow">
            Southern California golf lifestyle brand built on second chances, good people, and the belief that golf is about much more than the scorecard.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#shop"
              className="bg-[#E8A246] hover:bg-[#F2B35D] text-[#081B12] font-black text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#E8A246]/30 flex items-center gap-3"
            >
              <span>SHOP APPAREL & HEADWEAR</span>
              <span className="bg-[#081B12] text-[#E8A246] rounded-full w-6 h-6 flex items-center justify-center text-xs">
                →
              </span>
            </a>

            <a
              href="#story"
              className="bg-[#0B2519]/80 hover:bg-[#14422D] text-white border border-white/30 hover:border-[#E8A246] font-semibold text-xs tracking-widest uppercase px-8 py-4 rounded-full backdrop-blur-md transition-all duration-300"
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

          {/* Sound & Pause Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              aria-label="Play/Pause Video"
              className="p-3 bg-black/60 hover:bg-[#14422D] border border-white/20 hover:border-[#E8A246] rounded-full text-white transition-all backdrop-blur-md"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <button
              onClick={toggleMute}
              aria-label="Mute/Unmute Video"
              className="p-3 bg-black/60 hover:bg-[#14422D] border border-white/20 hover:border-[#E8A246] rounded-full text-white transition-all backdrop-blur-md"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#E8A246]" />}
            </button>

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
