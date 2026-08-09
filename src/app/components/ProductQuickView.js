"use client";

import { useState } from "react";
import { X, Star, ShoppingBag, ShieldCheck, Truck, RefreshCw } from "lucide-react";

export default function ProductQuickView({ product, onClose, onAddToCart }) {
  const [selectedFlex, setSelectedFlex] = useState("Stiff (S)");
  const [selectedLoft, setSelectedLoft] = useState("10.5°");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-[#06150D] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl text-white grid grid-cols-1 md:grid-cols-2">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-[#D4AF37] text-white hover:text-black rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Gallery */}
        <div className="bg-gradient-to-b from-[#0A2F1D] to-black/60 p-8 flex items-center justify-center relative">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-auto max-h-[380px] rounded-xl shadow-2xl ${
              product.image.includes("image copy 5.png")
                ? "object-contain p-2 scale-125"
                : product.image.includes("image copy 7.png")
                ? "object-contain p-4"
                : "object-cover"
            }`}
          />
          {product.badge && (
            <span className="absolute top-6 left-6 bg-[#D4AF37] text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Details Column */}
        <div className="p-8 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold mb-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-gray-400">({product.reviews} customer reviews)</span>
            </div>

            <h2 className="font-serif text-3xl font-bold text-white mb-2">{product.name}</h2>
            <div className="text-2xl font-serif font-extrabold text-[#D4AF37] mb-4">
              ${product.price}
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-3 font-sans font-normal">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-xs text-gray-300 leading-relaxed mb-6">{product.description}</p>

            {/* Options selection */}
            {product.category === "clubs" && (
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Shaft Flex
                  </span>
                  <div className="flex gap-2">
                    {["Regular (R)", "Stiff (S)", "Extra Stiff (X)"].map((flex) => (
                      <button
                        key={flex}
                        onClick={() => setSelectedFlex(flex)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                          selectedFlex === flex
                            ? "bg-[#D4AF37] text-black font-bold border-[#D4AF37]"
                            : "bg-[#0A2F1D] text-gray-300 border-white/20 hover:border-[#D4AF37]"
                        }`}
                      >
                        {flex}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Loft Angle
                  </span>
                  <div className="flex gap-2">
                    {["9.0°", "10.5°", "12.0°"].map((loft) => (
                      <button
                        key={loft}
                        onClick={() => setSelectedLoft(loft)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                          selectedLoft === loft
                            ? "bg-[#D4AF37] text-black font-bold border-[#D4AF37]"
                            : "bg-[#0A2F1D] text-gray-300 border-white/20 hover:border-[#D4AF37]"
                        }`}
                      >
                        {loft}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <button
              onClick={() => {
                onAddToCart(product, selectedQuantity);
                onClose();
              }}
              className="w-full bg-[#D4AF37] hover:bg-[#E5C158] text-[#051A10] font-extrabold py-3.5 rounded-full uppercase tracking-wider text-xs transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>ADD TO BAG • ${(product.price * selectedQuantity).toFixed(2)}</span>
            </button>

            <div className="grid grid-cols-3 gap-2 text-[10px] text-gray-400 pt-2 border-t border-white/5 text-center">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-[#D4AF37]" />
                <span>Express Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>2 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RefreshCw className="w-4 h-4 text-[#D4AF37]" />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
