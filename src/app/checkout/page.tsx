"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ShieldCheck, CreditCard, Wallet, Smartphone } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function Checkout() {
  const { items, getCartTotal, clearCart } = useCartStore();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? (subtotal > 999 ? 0 : 50) : 0;
  const total = subtotal + shipping;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Mocking Payment Gateway (Razorpay/Cashfree) flow
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <div className="bg-cream-white min-h-screen pt-12 pb-32 flex items-center justify-center px-4">
        <div className="glassmorphism rounded-[2rem] p-12 max-w-lg w-full text-center border border-success/20">
          <CheckCircle className="text-success mx-auto mb-6" size={80} />
          <h1 className="text-3xl font-bold text-foreground mb-4 font-sans">Order Confirmed! 🎉</h1>
          <p className="text-foreground/80 font-nunito mb-8">
            Thank you for shopping with Shree Accessories! Your order #SHREE-{Math.floor(100000 + Math.random() * 900000)} has been placed successfully.
          </p>
          <div className="bg-success/10 rounded-2xl p-4 mb-8 text-left">
            <p className="font-bold text-success mb-1">Payment Successful</p>
            <p className="text-sm text-foreground/70">A confirmation email and WhatsApp message has been sent to you.</p>
          </div>
          <Link href="/shop" className="inline-block px-8 py-4 bg-pastel-purple text-white rounded-full font-bold hover:bg-pastel-purple/90 transition-all shadow-md">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream-white min-h-screen pt-8 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl font-bold text-foreground mb-8 font-sans">
          Secure Checkout 🔒
        </h1>

        <form onSubmit={handlePayment} className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Left Column - Shipping & Billing */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Contact Info */}
            <div className="glassmorphism rounded-3xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-foreground/80">Full Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-foreground/80">Phone (WhatsApp)</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-bold text-foreground/80">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all" />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="glassmorphism rounded-3xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-6">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-bold text-foreground/80">Address Line 1</label>
                  <input type="text" required placeholder="House/Flat No, Street, Landmark" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-foreground/80">City</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-foreground/80">State</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-foreground/80">Pincode</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-bold text-foreground/80">Order Notes (Optional)</label>
                  <textarea rows={2} placeholder="Any specific instructions for delivery or packaging?" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all resize-none"></textarea>
                </div>
              </div>
            </div>

            {/* Payment Options (Mock UI) */}
            <div className="glassmorphism rounded-3xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-6">Payment Method</h2>
              <div className="space-y-4">
                <label className="flex items-center p-4 border-2 border-pastel-purple bg-pastel-purple/5 rounded-2xl cursor-pointer">
                  <input type="radio" name="payment" value="upi" defaultChecked className="w-5 h-5 text-pastel-purple focus:ring-pastel-purple" />
                  <div className="ml-4 flex items-center">
                    <Smartphone className="text-pastel-purple mr-2" />
                    <span className="font-bold text-foreground">UPI (GPay, PhonePe, Paytm)</span>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-100 bg-white rounded-2xl cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                  <input type="radio" name="payment" value="card" className="w-5 h-5 text-pastel-purple focus:ring-pastel-purple" />
                  <div className="ml-4 flex items-center">
                    <CreditCard className="text-gray-600 mr-2" />
                    <span className="font-bold text-foreground">Credit / Debit Card</span>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-100 bg-white rounded-2xl cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                  <input type="radio" name="payment" value="wallet" className="w-5 h-5 text-pastel-purple focus:ring-pastel-purple" />
                  <div className="ml-4 flex items-center">
                    <Wallet className="text-gray-600 mr-2" />
                    <span className="font-bold text-foreground">Wallets / Netbanking</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-2">
            <div className="glassmorphism rounded-[2rem] p-6 md:p-8 sticky top-28 border-t-8 border-t-primary-pink">
              <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 hide-scrollbar">
                {items.length === 0 ? (
                  <p className="text-sm text-foreground/50 italic">Your cart is empty.</p>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                        <span className="absolute -top-2 -right-2 bg-pastel-purple text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center z-10">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-grow flex flex-col justify-center">
                        <h4 className="font-bold text-sm text-foreground line-clamp-1">{item.name}</h4>
                        <p className="text-foreground/60 text-xs">₹{item.price}</p>
                      </div>
                      <div className="flex items-center font-bold text-sm">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="space-y-3 font-nunito mb-6 text-foreground/80 border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-foreground">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-bold text-foreground">{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg text-foreground">Total to Pay</span>
                    <span className="font-bold text-3xl text-pastel-purple">₹{total}</span>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={items.length === 0}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center transition-all ${
                  items.length === 0 
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                    : "bg-success text-white hover:bg-success/90 hover:shadow-xl hover:-translate-y-0.5"
                }`}
              >
                <ShieldCheck size={20} className="mr-2" /> Pay ₹{total} Securely
              </button>
              
              <p className="text-center text-xs text-foreground/50 mt-4 font-nunito">
                Payments are processed securely via Razorpay/Cashfree.
              </p>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
