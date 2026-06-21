"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter, ChevronDown, Heart } from "lucide-react";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Bows", "Scrunchies", "Crochet Flowers", "Keychains", "Gifts"];

  const products = [
    { id: 1, name: "Lavender Dream Bow", price: "₹299", category: "Bows", image: "/images/hero-banner.png" },
    { id: 2, name: "Sunset Crochet Sunflower", price: "₹450", category: "Crochet Flowers", image: "/images/hero-banner.png" },
    { id: 3, name: "Pastel Cloud Scrunchie", price: "₹150", category: "Scrunchies", image: "/images/hero-banner.png" },
    { id: 4, name: "Little Bear Keychain", price: "₹250", category: "Keychains", image: "/images/hero-banner.png" },
    { id: 5, name: "Rose Pink Bow", price: "₹299", category: "Bows", image: "/images/hero-banner.png" },
    { id: 6, name: "Silk Satin Scrunchie Set", price: "₹350", category: "Scrunchies", image: "/images/hero-banner.png" },
    { id: 7, name: "Daisy Keychain", price: "₹199", category: "Keychains", image: "/images/hero-banner.png" },
    { id: 8, name: "Handmade Gift Box", price: "₹999", category: "Gifts", image: "/images/hero-banner.png" },
  ];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4 font-sans">
              Shop Our Collection
            </h1>
            <div className="w-16 h-1 bg-soft-purple rounded-full"></div>
          </div>
          
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <button className="flex items-center text-foreground hover:text-soft-purple transition-colors font-bold bg-gray-50 px-4 py-2 rounded-xl">
              <Filter size={18} className="mr-2" /> Filter
            </button>
            <button className="flex items-center text-foreground hover:text-soft-purple transition-colors font-bold bg-gray-50 px-4 py-2 rounded-xl">
              Sort By <ChevronDown size={18} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex overflow-x-auto pb-4 mb-8 space-x-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold transition-all ${
                activeCategory === cat 
                  ? "bg-soft-purple text-white shadow-md" 
                  : "bg-gray-50 text-foreground/70 hover:bg-baby-pink/30 hover:text-soft-purple"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative rounded-2xl overflow-hidden mb-4 bg-gray-50 aspect-[4/5]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <button className="bg-white p-2.5 rounded-full shadow-md text-foreground hover:text-red-500 transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
                {/* Quick Add Button overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                  <button className="w-full bg-soft-purple text-white py-3.5 rounded-xl font-bold shadow-lg hover:bg-soft-purple/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start mt-2">
                <div>
                  <p className="text-sm text-foreground/50 font-nunito mb-1">{product.category}</p>
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-soft-purple transition-colors line-clamp-1">{product.name}</h3>
                  </Link>
                </div>
                <p className="text-soft-purple font-bold text-lg">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
