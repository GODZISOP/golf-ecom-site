"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu, X, Flame } from "lucide-react";

export default function Navbar({ cartCount = 0, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#081B12]/95 backdrop-blur-md border-b border-[#E8A246]/20 py-3 sm:py-4 shadow-2xl"
            : "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-3 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          {/* Left Navigation Links (Desktop only) */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold tracking-widest uppercase">
            <a href="#story" className="hover:text-[#E8A246] transition-colors">
              OUR STORY
            </a>
            <a href="#shop" className="hover:text-[#E8A246] transition-colors">
              SHOP
            </a>
            <a href="#mission" className="hover:text-[#E8A246] transition-colors">
              THE MISSION
            </a>
            <a href="#events" className="hover:text-[#E8A246] transition-colors">
              GOLF WITH US
            </a>
            <a href="#collaborate" className="hover:text-[#E8A246] transition-colors">
              COLLABORATE
            </a>
          </nav>

          {/* Left / Centered Brand Logo */}
          <a href="#" className="flex flex-col items-start lg:items-center group min-w-0 flex-1 lg:flex-initial">
            <span className="font-serif text-lg xs:text-xl sm:text-2xl lg:text-3xl font-black tracking-wider sm:tracking-[0.18em] text-[#E8A246] group-hover:text-white transition-colors uppercase leading-tight">
              THREE OFF THE TEE
            </span>
            <span className="text-[8.5px] sm:text-[9.5px] tracking-wider sm:tracking-[0.3em] text-gray-300 font-sans uppercase font-medium flex items-center gap-1 leading-none mt-0.5">
              <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#E8A246] shrink-0" />
              <span className="truncate max-w-[170px] xs:max-w-[240px] sm:max-w-none">
                FOUNDED BY L.A. COUNTY FIREFIGHTER JAKE RADEN
              </span>
            </span>
          </a>

          {/* Right Navigation & Cart + Mobile Hamburger */}
          <div className="flex items-center space-x-2.5 sm:space-x-6 shrink-0">
            <button
              aria-label="Search"
              className="hidden sm:flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-[#E8A246] transition-colors uppercase tracking-wider"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline">SEARCH</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 sm:gap-2 bg-[#0B2519] hover:bg-[#14422D] border border-[#E8A246]/40 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all text-xs font-extrabold tracking-wider text-[#E8A246] hover:border-[#E8A246]"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden sm:inline">CART</span>
              <span className="bg-[#E8A246] text-[#081B12] text-[10px] sm:text-[11px] font-black w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Menu Icon (Right Side) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-200 hover:text-[#E8A246] transition-colors p-1"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#081B12]/98 backdrop-blur-xl flex flex-col pt-32 px-8 space-y-6 lg:hidden border-b border-[#E8A246]/20">
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-serif text-[#E8A246] hover:text-white"
          >
            OUR STORY
          </a>
          <a
            href="#shop"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-serif text-[#E8A246] hover:text-white"
          >
            SHOP APPAREL & HEADWEAR
          </a>
          <a
            href="#mission"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-serif text-[#E8A246] hover:text-white"
          >
            THE MISSION & GIVING BACK
          </a>
          <a
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-serif text-[#E8A246] hover:text-white"
          >
            GOLF WITH US (EVENTS)
          </a>
          <a
            href="#collaborate"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-serif text-[#E8A246] hover:text-white"
          >
            COLLABORATE & CONTACT
          </a>
        </div>
      )}
    </>
  );
}
