"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, ShoppingCart, ArrowUpDown, Search, Flame, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";
import { PRODUCTS } from "../data/products";


export default function FullShopPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.specs.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <main className="min-h-screen bg-[#081B12] text-[#F7F5F0] selection:bg-[#E8A246] selection:text-black">
      {/* Top Navbar */}
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

      {/* Hero Header for Shop */}
      <section className="pt-32 pb-16 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#E8A246]/20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#E8A246] hover:text-white transition-colors mb-6 tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[#E8A246] text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#E8A246]" />
              FULL COLLECTION
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-2 uppercase tracking-wide">
              PRO SHOP CATALOG
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mt-3 font-light leading-relaxed">
              Explore our complete lineup of high-performance headwear, fairway polos, tees, and lifestyle accessories engineered in Southern California.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Control Bar */}
      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="bg-[#0B2519]/80 border border-white/10 p-4 sm:p-6 rounded-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search hats, polos, apparel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#081B12] text-gray-200 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-white/10 focus:border-[#E8A246] focus:outline-none transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {["all", "headwear", "apparel"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? "bg-[#E8A246] text-[#081B12] border-[#E8A246] shadow-md shadow-[#E8A246]/20"
                    : "bg-[#081B12] text-gray-300 border-white/10 hover:border-[#E8A246]"
                }`}
              >
                {cat === "all" ? "ALL ITEMS" : cat}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#E8A246]" />
            <span className="hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#081B12] text-gray-200 text-xs border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:border-[#E8A246]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="mb-6 text-xs text-gray-400 font-medium">
          Showing {filteredProducts.length} results
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#0B2519]/40 border border-white/10 rounded-3xl p-8">
            <p className="text-gray-400 text-sm">No products found matching your search query.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 bg-[#E8A246] text-[#081B12] font-bold text-xs px-6 py-2.5 rounded-full uppercase tracking-wider"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
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

                {/* Product Image Link Container */}
                <Link href={`/product/${product.id}`} className="relative aspect-4/3 w-full bg-black/40 overflow-hidden flex items-center justify-center p-4 block cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full rounded-xl transition-transform duration-500 object-contain p-1 scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#E8A246] text-[#081B12] font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>

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

                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#E8A246] transition-colors mb-2">
                        {product.name}
                      </h3>
                    </Link>
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
                      onClick={() => handleAddToCart(product)}
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
        )}
      </section>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />



      {/* Footer */}
      <Footer />
    </main>
  );
}
