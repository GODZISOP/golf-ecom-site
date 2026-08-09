"use client";

import { useState } from "react";
import { Star, ShoppingCart, Eye, Filter, ArrowUpDown } from "lucide-react";

const PRODUCTS = [
  {
    id: "driver-v1",
    name: "HOOK Apex Carbon Driver 10.5°",
    category: "clubs",
    type: "Drivers",
    price: 599,
    originalPrice: 699,
    rating: 4.9,
    reviews: 128,
    image: "/media/golf-hero-1.png",
    badge: "BEST SELLER",
    specs: "Carbon Crown • Stiff Flex • 460cc Head",
    description: "Aerodynamic speed chassis engineered for maximum MOI and explosive ball speeds off the tee.",
  },
  {
    id: "iron-set-pro",
    name: "HOOK Precision Forged Iron Set (4-PW)",
    category: "clubs",
    type: "Irons",
    price: 1299,
    originalPrice: 1450,
    rating: 5.0,
    reviews: 84,
    image: "/media/golf-hero-2.png",
    badge: "TOUR PREFERRED",
    specs: "1020 Soft Carbon Steel • Dynamic Gold Stiff",
    description: "Handcrafted muscle-back forged irons delivering unmatched feel and pinpoint shot shaping capability.",
  },
  {
    id: "putter-cnc",
    name: "HOOK Blade CNC Milled Putter",
    category: "clubs",
    type: "Putters",
    price: 349,
    originalPrice: 399,
    rating: 4.8,
    reviews: 96,
    image: "/media/golf-hero-3.png",
    badge: "CNC PRECISION",
    specs: "303 Stainless Steel • SuperStroke Grip",
    description: "Precision face milling pattern provides roll consistency and instant tactile feedback on green surfaces.",
  },
  {
    id: "apparel-polo-black",
    name: "HOOK Tour Tech Performance Polo",
    category: "apparel",
    type: "Shirts",
    price: 95,
    originalPrice: 120,
    rating: 4.9,
    reviews: 210,
    image: "/media/golf-hero-4.png",
    badge: "NEW ARRIVAL",
    specs: "4-Way Stretch • UPF 50+ • Moisture Wicking",
    description: "Ultra-lightweight breathable performance fabric crafted for unrestricted swing mobility.",
  },
  {
    id: "golf-bag-stand",
    name: "HOOK Crown Waterproof Stand Bag",
    category: "accessories",
    type: "Bags",
    price: 289,
    originalPrice: 320,
    rating: 4.9,
    reviews: 64,
    image: "/media/golf-hero-1.png",
    badge: "LIMITED EDITION",
    specs: "14-Way Top • Seam Sealed • Lightweight 4.8 lbs",
    description: "Premium synthetic leather construction with magnetic rangefinder pockets and dual shoulder harness.",
  },
  {
    id: "golf-cap-pro",
    name: "HOOK Signature Pro Tour Visor Cap",
    category: "apparel",
    type: "Headwear",
    price: 45,
    originalPrice: 55,
    rating: 4.7,
    reviews: 142,
    image: "/media/golf-hero-2.png",
    badge: "POPULAR",
    specs: "Laser Perforated • Magnetic Ball Marker",
    description: "Structured low-profile golf cap engineered for heat dissipation on warm afternoon rounds.",
  },
];

export default function ProductCatalog({ onAddToCart, onQuickView }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = PRODUCTS.filter((product) => {
    if (selectedCategory === "all") return true;
    return product.category === selectedCategory;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <section id="clubs" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#D4AF37]/20 pb-8">
        <div>
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
            TOUR-GRADE GEAR
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-white mt-2">
            PRO SHOP CATALOG
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-2">
            Engineered with aerospace materials, precision CNC milling, and tour player inputs.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {["all", "clubs", "apparel", "accessories"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                selectedCategory === cat
                  ? "bg-[#D4AF37] text-[#051A10] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20"
                  : "bg-[#0A2F1D]/50 text-gray-300 border-white/10 hover:border-[#D4AF37]"
              }`}
            >
              {cat === "all" ? "ALL PRODUCTS" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Sorting Bar */}
      <div className="flex items-center justify-between mb-8 text-xs text-gray-400">
        <span>Showing {filteredProducts.length} items</span>
        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#0A2F1D] text-gray-200 border border-white/20 rounded-md px-3 py-1.5 focus:outline-none focus:border-[#D4AF37]"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-[#0A2F1D] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group relative bg-gradient-to-b from-[#0A2F1D]/80 to-[#051A10] border border-white/10 rounded-2xl overflow-hidden hover:border-[#D4AF37]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            {/* Badge */}
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 bg-[#D4AF37] text-[#051A10] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
                {product.badge}
              </span>
            )}

            {/* Product Image Container */}
            <div className="relative aspect-4/3 w-full bg-black/40 overflow-hidden flex items-center justify-center p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <button
                  onClick={() => onQuickView(product)}
                  className="bg-white/90 hover:bg-[#D4AF37] text-black p-3 rounded-full transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0"
                  aria-label="Quick View"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-gray-400 mb-2">
                  <span className="uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {product.type}
                  </span>
                  <div className="flex items-center text-amber-400 gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-bold text-gray-200">{product.rating}</span>
                    <span>({product.reviews})</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-400 mb-4 line-clamp-2">{product.specs}</p>
              </div>

              {/* Price & Add to Cart */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
                <div>
                  <span className="text-2xl font-serif font-extrabold text-[#D4AF37]">
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
                  className="bg-[#124E31] hover:bg-[#D4AF37] text-white hover:text-black font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 border border-[#D4AF37]/30"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>ADD TO CART</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
