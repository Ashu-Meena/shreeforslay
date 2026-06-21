"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Star, Truck, ShieldCheck, HeartHandshake, Gift, Package, Quote } from "lucide-react";

export default function Home() {
  const highlights = [
    { name: "Bows 🎀", image: "/images/hero-banner.png" },
    { name: "Crochet 🧶", image: "/images/hero-banner.png" },
    { name: "Reviews 💖", image: "/images/hero-banner.png" },
    { name: "Dispatch 📦", image: "/images/hero-banner.png" },
    { name: "Gifts 🎁", image: "/images/hero-banner.png" },
  ];

  const categories = [
    { name: "Handmade Bows", desc: "Cute and stylish bows.", image: "/images/hero-banner.png", color: "bg-primary-pink" },
    { name: "Crochet Flowers", desc: "Handcrafted crochet flowers.", image: "/images/hero-banner.png", color: "bg-pastel-purple" },
    { name: "Scrunchies", desc: "Soft premium scrunchies.", image: "/images/hero-banner.png", color: "bg-baby-peach" },
    { name: "Keychains", desc: "Personalized keychains.", image: "/images/hero-banner.png", color: "bg-soft-lavender" },
    { name: "Gift Sets", desc: "Ready-to-gift collections.", image: "/images/hero-banner.png", color: "bg-primary-pink" },
  ];

  const bestSellers = [
    { id: 1, name: "Lavender Dream Bow", price: "₹299", image: "/images/hero-banner.png" },
    { id: 2, name: "Sunset Crochet Sunflower", price: "₹450", image: "/images/hero-banner.png" },
    { id: 3, name: "Pastel Cloud Scrunchie", price: "₹150", image: "/images/hero-banner.png" },
    { id: 4, name: "Little Bear Keychain", price: "₹250", image: "/images/hero-banner.png" },
  ];

  const masonryItems = [
    { id: 1, image: "/images/hero-banner.png", height: "h-40 md:h-64" },
    { id: 2, image: "/images/hero-banner.png", height: "h-56 md:h-96" },
    { id: 3, image: "/images/hero-banner.png", height: "h-48 md:h-72" },
    { id: 4, image: "/images/hero-banner.png", height: "h-40 md:h-64" },
    { id: 5, image: "/images/hero-banner.png", height: "h-52 md:h-80" },
    { id: 6, image: "/images/hero-banner.png", height: "h-60 md:h-96" },
  ];

  // Floating animation variants
  const floatingAnimation = {
    y: ["-10px", "10px"],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      
      {/* Background Floaters */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden sm:block">
        <motion.div animate={floatingAnimation} className="absolute top-20 left-10 text-4xl opacity-50">🌸</motion.div>
        <motion.div animate={floatingAnimation} transition={{ delay: 1 }} className="absolute top-40 right-20 text-4xl opacity-50">🎀</motion.div>
        <motion.div animate={floatingAnimation} transition={{ delay: 2 }} className="absolute bottom-40 left-1/4 text-4xl opacity-50">💖</motion.div>
        <motion.div animate={floatingAnimation} transition={{ delay: 1.5 }} className="absolute top-1/3 right-1/4 text-4xl opacity-50">🧶</motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] flex flex-col justify-center items-center z-10 px-4 mt-[-64px] pt-24 md:pt-16 overflow-hidden">
        {/* Soft Pastel Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-pink/20 via-soft-lavender/20 to-cream-white z-[-1]"></div>
        
        {/* Decorative Blurred Blobs */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary-pink/30 rounded-full blur-[80px] z-[-1]"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-pastel-purple/20 rounded-full blur-[80px] z-[-1]"></div>

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="inline-block glassmorphism px-4 py-1.5 rounded-full mb-2">
              <span className="text-xs md:text-sm font-bold text-pastel-purple">✨ Handcrafted with love ✨</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans text-foreground leading-[1.1] drop-shadow-sm">
              Handmade Accessories <br className="hidden md:block" /> Made With <span className="text-primary-pink relative whitespace-nowrap">
                Love 💖
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-pink opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>
            
            <p className="text-base md:text-xl text-foreground/80 font-nunito max-w-2xl mx-auto leading-relaxed">
              Unique Crochet Flowers, Scrunchies, Bows & Handmade Gifts Crafted Just For You. Add a touch of magic to your everyday style.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 w-full sm:w-auto px-4 sm:px-0">
              <Link href="/shop" className="flex items-center justify-center px-8 py-4 bg-pastel-purple text-white rounded-full font-bold text-base md:text-lg hover:bg-pastel-purple/90 transition-all shadow-[0_8px_20px_rgba(200,162,255,0.4)] hover:-translate-y-1 w-full sm:w-auto">
                🛍 Shop Collection
              </Link>
              <Link href="/bulk-orders" className="flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur text-pastel-purple border-2 border-pastel-purple/30 rounded-full font-bold text-base md:text-lg hover:bg-pastel-purple/10 hover:border-pastel-purple transition-all shadow-sm w-full sm:w-auto">
                📦 Bulk Orders
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 md:gap-x-6 md:gap-y-3 pt-6 md:pt-8 text-xs md:text-sm font-bold text-foreground/70 w-full">
              <span className="flex items-center bg-white/60 px-4 py-2 rounded-full w-full sm:w-auto justify-center"><Star size={14} className="text-yellow-400 mr-2" /> 300+ Happy Customers</span>
              <span className="flex items-center bg-white/60 px-4 py-2 rounded-full w-full sm:w-auto justify-center"><Truck size={14} className="text-success mr-2" /> Global Shipping</span>
              <span className="flex items-center bg-white/60 px-4 py-2 rounded-full w-full sm:w-auto justify-center"><Heart size={14} className="text-primary-pink mr-2" /> Handmade Products</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Product Image - Hidden on mobile, visible on desktop */}
        <motion.div 
          animate={floatingAnimation}
          className="hidden lg:block absolute left-10 top-1/3 -translate-y-1/2 z-0"
        >
          <div className="relative w-64 h-64 rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(255,201,232,0.4)] border-4 border-white transform -rotate-6">
            <Image src="/images/hero-banner.png" alt="Crochet Bows" fill className="object-cover" />
          </div>
        </motion.div>
      </section>

      {/* Instagram Style Story Highlights */}
      <section className="py-4 md:py-8 z-10 overflow-x-auto hide-scrollbar px-2">
        <div className="max-w-7xl mx-auto flex space-x-4 md:space-x-6 pb-2 w-max md:w-auto md:justify-center px-2">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-1 md:space-y-2 cursor-pointer group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-[2px] md:p-[3px] bg-gradient-to-tr from-primary-pink via-pastel-purple to-baby-peach group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-full p-1">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                </div>
              </div>
              <span className="text-[10px] md:text-xs font-bold text-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories (Horizontal Scroll Cards) */}
      <section className="py-8 md:py-16 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 ml-1">Shop by Category 🎀</h2>
          <div className="flex overflow-x-auto space-x-4 md:space-x-6 pb-6 hide-scrollbar px-1">
            {categories.map((category, idx) => (
              <Link href="/shop" key={idx} className="flex-none w-48 md:w-64 group">
                <div className={`rounded-[2rem] md:rounded-3xl p-4 md:p-6 h-36 md:h-48 flex flex-col justify-end relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 shadow-sm border border-white/50 ${category.color}/40`}>
                  <Image src={category.image} alt={category.name} fill className="object-cover opacity-60 mix-blend-overlay group-hover:opacity-80 transition-opacity" />
                  <div className="relative z-10 glassmorphism p-3 md:p-4 rounded-xl md:rounded-2xl w-full">
                    <h3 className="font-bold text-sm md:text-lg text-foreground">{category.name}</h3>
                    <p className="text-[10px] md:text-xs text-foreground/80 font-nunito">{category.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-10 md:py-16 bg-white/50 backdrop-blur-md z-10 border-t border-b border-primary-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Best Sellers 💖</h2>
            <Link href="/shop" className="hidden md:block font-bold text-pastel-purple hover:underline text-sm md:text-base">View All</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            {bestSellers.map((product) => (
              <div key={product.id} className="group relative bg-white rounded-2xl md:rounded-3xl p-2.5 md:p-3 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden mb-2 md:mb-3">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 right-2">
                    <button className="bg-white/80 backdrop-blur p-1.5 md:p-2 rounded-full shadow-sm hover:text-primary-pink transition-colors">
                      <Heart size={16} className="md:w-[18px] md:h-[18px]" />
                    </button>
                  </div>
                </div>
                <div className="px-1">
                  <h3 className="font-bold text-[11px] md:text-base text-foreground line-clamp-1">{product.name}</h3>
                  <p className="text-pastel-purple font-bold text-[11px] md:text-base mt-0.5 md:mt-1">{product.price}</p>
                </div>
                <button className="w-full mt-2 md:mt-3 bg-primary-pink/20 text-foreground font-bold py-2 md:py-2.5 rounded-lg md:rounded-xl hover:bg-primary-pink transition-colors text-[10px] md:text-sm">
                  🛒 Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link href="/shop" className="inline-block font-bold text-sm text-pastel-purple bg-pastel-purple/10 px-6 py-2 rounded-full">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Choose Us ✨</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {[
              { icon: HeartHandshake, text: "100% Handmade", color: "text-primary-pink" },
              { icon: Heart, text: "Made With Love", color: "text-pastel-purple" },
              { icon: Truck, text: "Worldwide Shipping", color: "text-success" },
              { icon: ShieldCheck, text: "Quality Assured", color: "text-blue-400" },
              { icon: Gift, text: "Gift Packaging", color: "text-baby-peach" },
              { icon: Package, text: "Bulk Orders", color: "text-gray-600" },
            ].map((item, i) => (
              <div key={i} className="glassmorphism rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                <item.icon className={`${item.color} mb-2 md:mb-3 group-hover:scale-110 transition-transform w-7 h-7 md:w-9 md:h-9`} />
                <span className="font-bold text-[10px] md:text-sm leading-tight text-foreground/80">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase (Pinterest Masonry) */}
      <section className="py-10 md:py-16 bg-cream-white z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Handmade Inspiration 🌸</h2>
          <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {masonryItems.map((item) => (
              <div key={item.id} className={`relative w-full ${item.height} rounded-2xl md:rounded-3xl overflow-hidden group break-inside-avoid shadow-sm hover:shadow-xl transition-all`}>
                <Image src={item.image} alt={`Showcase ${item.id}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link href="/shop" className="glassmorphism px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-[10px] md:text-base text-foreground">View 🛍</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 md:py-20 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Customer Love 💖</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glassmorphism rounded-2xl md:rounded-3xl p-5 md:p-8 relative">
                <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden relative border-2 border-primary-pink">
                    <Image src="/images/founder.png" alt="Customer" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs md:text-sm">Priya Sharma</h4>
                    <div className="flex text-yellow-400 mt-0.5">
                      {[...Array(5)].map((_, j) => <Star key={j} size={10} className="md:w-3 md:h-3" fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <Quote className="absolute top-4 right-4 md:top-6 md:right-6 text-pastel-purple/20 w-8 h-8 md:w-10 md:h-10" />
                <p className="text-foreground/80 font-nunito text-xs md:text-sm italic leading-relaxed">
                  "The quality is amazing. The crochet flowers are even prettier in real life. I highly recommend Shree Accessories!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
