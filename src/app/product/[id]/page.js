"use client";

import { useState, use } from "react";
import Link from "next/link";
import {
  Star,
  ShoppingCart,
  ArrowLeft,
  Check,
  RotateCcw,
  Flame,
  ShieldCheck,
  Truck,
  Sparkles,
  ChevronRight
} from "lucide-react";
import Navbar from "../../components/Navbar";
import CartDrawer from "../../components/CartDrawer";
import Footer from "../../components/Footer";
import { getProductById, PRODUCTS } from "../../data/products";

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const productId = resolvedParams?.id;
  const product = getProductById(productId);

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (itemToAdd = product, qty = quantity) => {
    if (!itemToAdd) return;
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === itemToAdd.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prevItems, { ...itemToAdd, quantity: qty }];
    });
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
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

  if (!product) {
    return (
      <main className="min-h-screen bg-[#081B12] text-[#F7F5F0] flex flex-col justify-between selection:bg-[#E8A246] selection:text-black">
        <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
        <div className="py-40 text-center px-4 max-w-xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-4">
            PRODUCT NOT FOUND
          </h1>
          <p className="text-gray-400 text-sm mb-8">
            The product you are looking for might have been moved or removed from our catalog.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#E8A246] text-[#081B12] font-black text-xs px-6 py-3 rounded-full uppercase tracking-wider hover:bg-[#d69035] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO PRO SHOP</span>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <main className="min-h-screen bg-[#081B12] text-[#F7F5F0] selection:bg-[#E8A246] selection:text-black">
      {/* Top Navigation */}
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

      {/* Main Product Container */}
      <div className="pt-28 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 overflow-x-auto py-2">
          <Link href="/" className="hover:text-[#E8A246] transition-colors">
            HOME
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
          <Link href="/shop" className="hover:text-[#E8A246] transition-colors">
            PRO SHOP
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
          <span className="text-[#E8A246] font-semibold truncate">
            {product.name}
          </span>
        </nav>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Product Image Gallery View */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative bg-gradient-to-b from-[#0B2519] to-[#06150D] border border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl group flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
              {/* Badge */}
              {product.badge && (
                <span className="absolute top-6 left-6 z-10 bg-[#E8A246] text-[#081B12] text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                  {product.badge}
                </span>
              )}

              {/* Glowing Ambient Background Effect */}
              <div className="absolute inset-0 bg-[#E8A246]/5 blur-3xl rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-700 pointer-events-none" />

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain p-2 group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl relative z-10"
              />
            </div>

            {/* Trust Cards Grid under image */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#0B2519]/60 border border-white/10 p-3.5 rounded-2xl">
                <Flame className="w-5 h-5 text-[#E8A246] mx-auto mb-1" />
                <span className="text-[10px] sm:text-xs font-bold text-gray-200 block uppercase">
                  Firefighter Grade
                </span>
              </div>
              <div className="bg-[#0B2519]/60 border border-white/10 p-3.5 rounded-2xl">
                <RotateCcw className="w-5 h-5 text-[#E8A246] mx-auto mb-1" />
                <span className="text-[10px] sm:text-xs font-bold text-gray-200 block uppercase">
                  Permission to Reload
                </span>
              </div>
              <div className="bg-[#0B2519]/60 border border-white/10 p-3.5 rounded-2xl">
                <ShieldCheck className="w-5 h-5 text-[#E8A246] mx-auto mb-1" />
                <span className="text-[10px] sm:text-xs font-bold text-gray-200 block uppercase">
                  100% Quality Guarantee
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Information & Purchase Controls */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              {/* Category & Ratings */}
              <div className="flex items-center justify-between gap-4 text-xs mb-3">
                <span className="text-[#E8A246] font-black uppercase tracking-[0.25em]">
                  {product.type} • THREE OFF THE TEE
                </span>
                <div className="flex items-center text-amber-400 gap-1.5 bg-[#0B2519] border border-white/10 px-3 py-1 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="font-bold text-white">{product.rating}</span>
                  <span className="text-gray-400 text-[11px]">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase">
                {product.name}
              </h1>

              {/* Price & Savings Tag */}
              <div className="flex items-center gap-4 mt-4">
                <span className="text-3xl sm:text-4xl font-serif font-black text-[#E8A246]">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2.5 py-1 rounded-full border border-red-500/30">
                      SAVE ${product.originalPrice - product.price}
                    </span>
                  </>
                )}
              </div>

              {/* Specs Badge Pill */}
              <div className="mt-4 inline-block bg-[#0B2519] text-[#E8A246] border border-[#E8A246]/30 px-4 py-2 rounded-xl text-xs font-semibold">
                {product.specs}
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                OVERVIEW
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features Bullet Points */}
            {product.features && (
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  KEY HIGHLIGHTS
                </h3>
                <ul className="space-y-2.5">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-200">
                      <div className="w-5 h-5 rounded-full bg-[#E8A246]/20 text-[#E8A246] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Purchase Controls */}
            <div className="border-t border-white/10 pt-6 space-y-4">
              <div className="flex items-center gap-4">
                {/* Quantity Control */}
                <div className="flex items-center bg-[#0B2519] border border-white/20 rounded-2xl p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-xl hover:bg-white/10 text-white font-bold transition-colors flex items-center justify-center text-lg"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-serif text-lg font-bold text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-xl hover:bg-white/10 text-white font-bold transition-colors flex items-center justify-center text-lg"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product, quantity)}
                  className="flex-1 bg-[#E8A246] hover:bg-[#d69035] text-[#081B12] font-black text-sm uppercase tracking-widest py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-[#E8A246]/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>ADD TO CART • ${(product.price * quantity).toFixed(2)}</span>
                </button>
              </div>

              {/* Toast Notification */}
              {addedToast && (
                <div className="bg-[#14422D] border border-[#E8A246] text-[#E8A246] p-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 animate-bounce">
                  <Check className="w-4 h-4" />
                  <span>Added {quantity} item(s) to your cart!</span>
                </div>
              )}
            </div>

            {/* Delivery & Security Badges */}
            <div className="border-t border-white/10 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#E8A246] shrink-0" />
                <span>Fast 2-4 day California shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#E8A246] shrink-0" />
                <span>Secure Checkout & Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="mt-28 border-t border-white/10 pt-16">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-[#E8A246] text-xs font-bold uppercase tracking-[0.3em]">
                  COMPLETE THE LOOK
                </span>
                <h2 className="font-serif text-3xl font-black text-white mt-1 uppercase">
                  MORE HEADWEAR
                </h2>
              </div>
              <Link
                href="/shop"
                className="text-xs font-bold text-[#E8A246] hover:underline uppercase tracking-wider flex items-center gap-1"
              >
                <span>View All</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relProd) => (
                <Link
                  key={relProd.id}
                  href={`/product/${relProd.id}`}
                  className="group bg-gradient-to-b from-[#0B2519]/80 to-[#081B12] border border-white/10 rounded-3xl overflow-hidden hover:border-[#E8A246]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div className="relative aspect-4/3 w-full bg-black/40 overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={relProd.image}
                      alt={relProd.name}
                      className="w-full h-full object-contain p-1 scale-105 group-hover:scale-110 transition-transform duration-500"
                    />
                    {relProd.badge && (
                      <span className="absolute top-4 left-4 bg-[#E8A246] text-[#081B12] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                        {relProd.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#E8A246] transition-colors mb-2">
                      {relProd.name}
                    </h3>
                    <div className="text-xl font-serif font-black text-[#E8A246]">
                      ${relProd.price}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

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
