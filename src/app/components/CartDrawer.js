"use client";

import { useState } from "react";
import { X, Trash2, Plus, Minus, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [checkoutStep, setCheckoutStep] = useState("cart"); // 'cart' | 'checkout' | 'success'

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal > 200 || subtotal === 0 ? 0 : 25;
  const total = Math.max(0, subtotal - discount + shippingFee);

  const applyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === "HOOK10" || promoCode.toUpperCase() === "GOLF10") {
      setDiscount(subtotal * 0.1);
    } else if (promoCode.toUpperCase() === "VIP20") {
      setDiscount(subtotal * 0.2);
    } else {
      alert("Invalid promo code. Try HOOK10 or VIP20!");
    }
  };

  const triggerCheckout = (e) => {
    e.preventDefault();
    setCheckoutStep("success");
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm transition-opacity">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen w-full sm:max-w-md bg-[#06150D] border-l border-[#D4AF37]/30 text-white flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-[#D4AF37]">YOUR SHOPPING BAG</h2>
            <button
              onClick={() => {
                setCheckoutStep("cart");
                onClose();
              }}
              className="p-2 text-gray-400 hover:text-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {checkoutStep === "cart" && (
              <>
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 bg-[#0A2F1D] text-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-2xl font-serif">
                      ⛳
                    </div>
                    <p className="text-gray-300 font-serif text-lg">Your cart is empty.</p>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto">
                      Explore our driver collections, forged irons, and tour apparel to elevate your game.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 bg-[#0A2F1D]/50 border border-white/10 rounded-xl items-center"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg bg-black/40"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm font-bold text-white truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-[#D4AF37] font-semibold">${item.price}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center bg-black/50 border border-white/20 rounded-md">
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:text-[#D4AF37]"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-xs font-bold">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:text-[#D4AF37]"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {checkoutStep === "checkout" && (
              <form onSubmit={triggerCheckout} className="space-y-4 text-xs">
                <h3 className="font-serif text-lg font-bold text-[#D4AF37] mb-2">SHIPPING DETAILS</h3>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-[#0A2F1D] border border-white/20 rounded-lg p-3 text-white focus:border-[#D4AF37] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-[#0A2F1D] border border-white/20 rounded-lg p-3 text-white focus:border-[#D4AF37] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Shipping Address"
                  required
                  className="w-full bg-[#0A2F1D] border border-white/20 rounded-lg p-3 text-white focus:border-[#D4AF37] focus:outline-none"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    className="bg-[#0A2F1D] border border-white/20 rounded-lg p-3 text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    required
                    className="bg-[#0A2F1D] border border-white/20 rounded-lg p-3 text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <h3 className="font-serif text-lg font-bold text-[#D4AF37] pt-4 mb-2">PAYMENT METHOD</h3>
                <div className="p-4 bg-[#0A2F1D] border border-[#D4AF37]/40 rounded-lg flex items-center justify-between">
                  <span className="font-semibold text-white">Credit Card / Express Checkout</span>
                  <span className="text-[#D4AF37] text-xs font-bold">Encrypted 256-Bit</span>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-[#D4AF37] hover:bg-[#E5C158] text-[#051A10] font-extrabold py-3.5 rounded-full uppercase tracking-wider text-sm transition-all shadow-lg shadow-[#D4AF37]/20"
                >
                  CONFIRM ORDER (${total.toFixed(2)})
                </button>
              </form>
            )}

            {checkoutStep === "success" && (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto animate-bounce" />
                <h3 className="font-serif text-2xl font-bold text-white">ORDER CONFIRMED!</h3>
                <p className="text-xs text-gray-300">
                  Thank you for shopping with HOOK GOLF CLUB. Your custom fitting order details have been sent to your email.
                </p>
                <button
                  onClick={() => {
                    onClearCart();
                    setCheckoutStep("cart");
                    onClose();
                  }}
                  className="bg-[#D4AF37] text-[#051A10] font-bold text-xs px-6 py-3 rounded-full uppercase tracking-wider"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            )}
          </div>

          {/* Footer Summary */}
          {cartItems.length > 0 && checkoutStep === "cart" && (
            <div className="p-6 border-t border-white/10 bg-[#051A10] space-y-4">
              {/* Promo Code Form */}
              <form onSubmit={applyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. HOOK10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-[#0A2F1D] border border-white/20 rounded-lg px-3 py-2 text-xs uppercase text-white focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="bg-[#124E31] hover:bg-[#D4AF37] text-white hover:text-black font-bold text-xs px-4 py-2 rounded-lg transition-colors"
                >
                  APPLY
                </button>
              </form>

              <div className="space-y-1.5 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#D4AF37]">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shippingFee === 0 ? "FREE" : `$${shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-[#D4AF37] pt-2 border-t border-white/10">
                  <span>TOTAL</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => setCheckoutStep("checkout")}
                className="w-full bg-[#D4AF37] hover:bg-[#E5C158] text-[#051A10] font-extrabold py-3.5 rounded-full uppercase tracking-wider text-xs transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
