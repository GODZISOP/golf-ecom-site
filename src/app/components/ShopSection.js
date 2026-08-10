"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, ShoppingCart, Eye, ArrowUpDown, ChevronRight } from "lucide-react";
import SplitText from "./SplitText";

const THREE_OFF_TEE_PRODUCTS = [
  {
    id: "hat-original-gold",
    name: "Three Off the Tee Signature Snapback",
    category: "headwear",
    type: "Hats",
    price: 36,
    originalPrice: 42,
    rating: 5.0,
    reviews: 184,
    image: "/media/image copy.png",
    badge: "BEST SELLER",
    specs: "Structured 6-Panel • Premium Patch • Moisture-Wicking Sweatband",
    description: "The original headwear that started it all. Wear the logo proudly — and represent permission to reload.",
  },
  {
    id: "hat-royal-crest",
    name: "Three Off the Tee Crest Royal Snapback",
    category: "headwear",
    type: "Hats",
    price: 36,
    originalPrice: 42,
    rating: 4.9,
    reviews: 88,
    image: "/media/image copy 7.png",
    badge: "NEW RELEASE",
    specs: "Structured High-Crown • Royal Blue • Embroidered Golf Crest",
    description: "Royal blue high-crown snapback cap featuring the classic 3 Off the Tee crest logo embroidered on the front.",
  },
  {
    id: "polo-socal-breathable",
    name: "Mulligan Performance Tech Polo",
    category: "apparel",
    type: "Polos",
    price: 78,
    originalPrice: 88,
    rating: 4.9,
    reviews: 92,
    image: "/media/image copy 4.png",
    badge: "CALIFORNIA LIFESTYLE",
    specs: "4-Way Stretch • UPF 50+ Sun Protection • Antimicrobial Fabric",
    description: "Ultra-comfortable SoCal fairway polo designed for casual weekend rounds and beers at the 19th hole.",
  },
  {
    id: "tee-reload-firefighter",
    name: "Reload & Swing Again Heavyweight Tee",
    category: "apparel",
    type: "T-Shirts",
    price: 34,
    originalPrice: 40,
    rating: 4.8,
    reviews: 140,
    image: "/media/image copy 6.png",
    badge: "FIREFIGHTER EDITION",
    specs: "100% Combed Ring-Spun Cotton • Vintage Wash • Relaxed Fit",
    description: "Casual everyday lifestyle tee celebrating second chances and reloading off the first tee.",
  },
  {
    id: "hat-visor-golden",
    name: "Second Chance Tour Visor Hat",
    category: "headwear",
    type: "Hats",
    price: 38,
    originalPrice: 44,
    rating: 4.7,
    reviews: 62,
    image: "/media/image copy 3.png",
    badge: "NEW ARRIVAL",
    specs: "High-Crown Design • Metal Buckle Closure • Breathable Mesh",
    description: "Classic high-crown golf visor built for sunny California fairways and relaxed weekend scrambles.",
  },
  {
    id: "la-fire-station-16",
    name: "L.A. County Fire Dept. Station 16 Cap",
    category: "headwear",
    type: "Hats",
    price: 38,
    originalPrice: 45,
    rating: 5.0,
    reviews: 110,
    image: "/media/image copy 5.png",
    badge: "LIMITED RELEASE",
    specs: "Laser Perforated Mesh • High Density Embroidery • Firefighter Edition",
    description: "Special L.A. County Fire Dept. Station 16 edition snapback built for California fairways.",
  },
];

export default function ShopSection({ onAddToCart, onQuickView }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = THREE_OFF_TEE_PRODUCTS.filter((product) => {
    if (selectedCategory === "all") return true;
    return product.category === selectedCategory;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const displayedProducts = filteredProducts.slice(0, 6);

  return (
    <section id="shop" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#E8A246]/20 pb-8">
        <div>
          <SplitText text="CALIFORNIA GOLF APPAREL" tag="span" className="text-[#E8A246] text-xs font-bold uppercase tracking-[0.3em]" delay={30} duration={0.8} />
          <SplitText text="SHOP THE COLLECTION" tag="h2" className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 uppercase" delay={30} duration={0.8} />
          <SplitText text="Headwear, polos, and apparel designed to feel premium, casual, and proud to wear on and off the course." tag="p" className="text-gray-300 text-xs sm:text-sm max-w-xl mt-2 font-light" splitType="words" delay={15} duration={0.6} />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {["all", "headwear", "apparel"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                selectedCategory === cat
                  ? "bg-[#E8A246] text-[#081B12] border-[#E8A246] shadow-lg shadow-[#E8A246]/20"
                  : "bg-[#0B2519]/60 text-gray-300 border-white/10 hover:border-[#E8A246]"
              }`}
            >
              {cat === "all" ? "ALL GEAR" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Sorting Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 text-xs text-gray-400">
        <span>Showing {displayedProducts.length} items</span>
        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-3.5 h-3.5 text-[#E8A246]" />
          <span>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#0B2519] text-gray-200 border border-white/20 rounded-md px-3 py-1.5 focus:outline-none focus:border-[#E8A246]"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="group relative bg-gradient-to-b from-[#0B2519]/80 to-[#081B12] border border-white/10 rounded-3xl overflow-hidden hover:border-[#E8A246]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            {/* Badge */}
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 bg-[#E8A246] text-[#081B12] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
                {product.badge}
              </span>
            )}

            {/* Product Image Container */}
            <div className="relative aspect-4/3 w-full bg-black/40 overflow-hidden flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.name}
                className={`w-full h-full rounded-xl transition-transform duration-500 ${
                  product.image.includes("image copy 5.png")
                    ? "object-contain scale-125 group-hover:scale-130"
                    : product.image.includes("image copy 7.png")
                    ? "object-contain p-1 scale-105 group-hover:scale-110"
                    : "object-cover group-hover:scale-105"
                }`}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <button
                  onClick={() => onQuickView(product)}
                  className="bg-white/90 hover:bg-[#E8A246] text-black p-3 rounded-full transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0"
                  aria-label="Quick View"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-gray-400 mb-2">
                  <span className="uppercase tracking-widest text-[#E8A246] font-bold">
                    {product.type}
                  </span>
                  <div className="flex items-center text-amber-400 gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-bold text-gray-200">{product.rating}</span>
                    <span>({product.reviews})</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#E8A246] transition-colors mb-2">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-300 font-light mb-4 line-clamp-2">{product.specs}</p>
              </div>

              {/* Price & Add to Cart */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
                <div>
                  <span className="text-xl sm:text-2xl font-serif font-black text-[#E8A246]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-500 line-through ml-2">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  className="bg-[#14422D] hover:bg-[#E8A246] text-white hover:text-black font-extrabold text-xs uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 border border-[#E8A246]/30"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>ADD TO CART</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shop More Link to Dedicated /shop Page */}
      <div className="mt-14 text-center">
        <Link
          href="/shop"
          className="inline-flex items-center gap-3 bg-[#E8A246] hover:bg-[#d69035] text-[#081B12] font-black text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-[#E8A246]/25 hover:scale-105 active:scale-95"
        >
          <span>SHOP MORE PRODUCTS</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
