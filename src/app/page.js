"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StrategicSection from "./components/StrategicSection";
import MeaningSection from "./components/MeaningSection";
import OurStorySection from "./components/OurStorySection";
import ValuesGrid from "./components/ValuesGrid";
import ShopSection from "./components/ShopSection";
import GolfWithUsSection from "./components/GolfWithUsSection";
import CollaborateSection from "./components/CollaborateSection";
import CartDrawer from "./components/CartDrawer";
import ProductQuickView from "./components/ProductQuickView";
import Footer from "./components/Footer";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

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

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <main className="min-h-screen bg-[#081B12] text-[#F7F5F0] selection:bg-[#E8A246] selection:text-black">
      {/* Top Navbar */}
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

      {/* Hero Section */}
      <HeroSection />

      {/* Strategic Environment Section with golf-hero-2.png Background & Focus Ring */}
      <StrategicSection />

      {/* What Three Off the Tee Means */}
      <MeaningSection />

      {/* Our Founder Story - LA County Firefighter Jake Raden */}
      <OurStorySection />

      <ShopSection
        onAddToCart={handleAddToCart}
        onQuickView={(prod) => setQuickViewProduct(prod)}
        />
      {/* What We Stand For - 6 Principles */}
      <ValuesGrid />

      {/* Shop Apparel & Headwear */}

      {/* Golf With Us - Community Outings & Events */}
      <GolfWithUsSection />

      {/* Collaborate & Partner */}
      <CollaborateSection />

      {/* Interactive Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
