"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function Cart() {
  const { items, removeItem, updateQuantity, getCartTotal } = useCartStore();

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? (subtotal > 999 ? 0 : 50) : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-cream-white min-h-screen pt-12 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl font-bold text-foreground mb-4 font-sans">
          Your Cart 🛒
        </h1>
        <div className="w-24 h-1 bg-primary-pink rounded-full mb-10"></div>

        {items.length === 0 ? (
          <div className="glassmorphism rounded-[2rem] p-16 text-center">
            <ShoppingBag size={64} className="mx-auto text-pastel-purple/50 mb-6" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Your cart is empty!</h2>
            <p className="text-foreground/70 font-nunito mb-8">Looks like you haven't added any handmade goodies yet.</p>
            <Link href="/shop" className="inline-block px-8 py-4 bg-pastel-purple text-white rounded-full font-bold hover:bg-pastel-purple/90 transition-all shadow-md hover:-translate-y-1">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="glassmorphism rounded-3xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative group">
                  <div className="w-full sm:w-32 aspect-square relative rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  
                  <div className="flex-grow">
                    <Link href={`/product/${item.id}`} className="hover:text-pastel-purple transition-colors">
                      <h3 className="font-bold text-lg text-foreground mb-1 pr-8">{item.name}</h3>
                    </Link>
                    <p className="text-pastel-purple font-bold text-lg mb-4">₹{item.price}</p>
                    
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center bg-white rounded-full border border-gray-200 shadow-sm">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2.5 text-foreground/70 hover:text-primary-pink transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2.5 text-foreground/70 hover:text-success transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => removeItem(item.id)}
                    className="absolute top-6 right-6 text-foreground/30 hover:text-red-500 transition-colors bg-white/50 p-2 rounded-full backdrop-blur-sm"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glassmorphism rounded-[2rem] p-8 sticky top-28">
                <h3 className="text-2xl font-bold text-foreground mb-6">Order Summary</h3>
                
                <div className="space-y-4 font-nunito mb-6 text-foreground/80">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-foreground">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-bold text-foreground">{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-lg text-foreground">Total</span>
                      <span className="font-bold text-2xl text-pastel-purple">₹{total}</span>
                    </div>
                    <p className="text-xs text-foreground/50 text-right">Includes all taxes</p>
                  </div>
                </div>

                <Link href="/checkout" className="w-full flex items-center justify-center py-4 bg-foreground text-white rounded-full font-bold text-lg hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Proceed to Checkout <ArrowRight size={20} className="ml-2" />
                </Link>

                {/* Trust Badges */}
                <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-2 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary-pink/20 p-3 rounded-full mb-2">
                      <span className="text-xl">💳</span>
                    </div>
                    <span className="text-xs font-bold text-foreground/70">Secure Payment</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-baby-peach/30 p-3 rounded-full mb-2">
                      <span className="text-xl">🚚</span>
                    </div>
                    <span className="text-xs font-bold text-foreground/70">Fast Delivery</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
