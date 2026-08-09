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
            ? "bg-[#081B12]/95 backdrop-blur-md border-b border-[#E8A246]/20 py-4 shadow-2xl"
            : "bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Left Navigation Links */}
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

          {/* Centered Brand Logo */}
          <a href="#" className="flex flex-col items-center group">
            <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-black tracking-[0.18em] text-[#E8A246] group-hover:text-white transition-colors uppercase">
              THREE OFF THE TEE
            </span>
            <span className="text-[9px] tracking-[0.3em] text-gray-300 font-sans uppercase font-medium flex items-center gap-1">
              <Flame className="w-3 h-3 text-[#E8A246]" />
              FOUNDED BY L.A. COUNTY FIREFIGHTER JAKE RADEN
            </span>
          </a>

          {/* Right Navigation & Cart */}
          <div className="flex items-center space-x-6">
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
              className="relative flex items-center gap-2 bg-[#0B2519] hover:bg-[#14422D] border border-[#E8A246]/40 px-4 py-2 rounded-full transition-all text-xs font-extrabold tracking-wider text-[#E8A246] hover:border-[#E8A246]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">CART</span>
              <span className="bg-[#E8A246] text-[#081B12] text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-200 hover:text-[#E8A246] transition-colors"
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
