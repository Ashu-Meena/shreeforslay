"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Truck, Shield, Heart, Share2, Minus, Plus } from "lucide-react";

// In a real app, this would be fetched from an API/Database using the ID parameter
export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = {
    name: "Lavender Dream Bow",
    price: "₹299",
    description: "Our signature Lavender Dream Bow is beautifully handcrafted using premium satin ribbon. The soft lavender shade adds a touch of elegance to any outfit. Perfect for everyday wear or special occasions.",
    category: "Bows",
    material: "Premium Satin",
    dimensions: "10cm x 8cm",
    care: "Hand wash gently with mild detergent. Do not machine wash.",
    images: [
      "/images/hero-banner.png",
      "/images/founder.png",
      "/images/hero-banner.png",
    ]
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="bg-white min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                    activeImage === idx ? "border-soft-purple shadow-md" : "border-transparent hover:border-baby-pink"
                  }`}
                >
                  <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <p className="text-soft-purple font-bold font-nunito tracking-wider uppercase text-sm">{product.category}</p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-sans">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-2xl font-bold text-foreground">{product.price}</span>
              <div className="flex items-center bg-baby-pink/30 px-3 py-1 rounded-full">
                <Star className="text-yellow-400 w-4 h-4 mr-1" fill="currentColor" />
                <span className="text-sm font-bold text-foreground">4.9 (120 reviews)</span>
              </div>
            </div>

            <p className="text-foreground/80 font-nunito text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Quantity and Actions */}
            <div className="border-t border-b border-gray-100 py-8 mb-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-foreground">Quantity</span>
                <div className="flex items-center bg-gray-50 rounded-full border border-gray-200">
                  <button onClick={decreaseQuantity} className="p-3 text-foreground/70 hover:text-soft-purple transition-colors">
                    <Minus size={18} />
                  </button>
                  <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                  <button onClick={increaseQuantity} className="p-3 text-foreground/70 hover:text-soft-purple transition-colors">
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-soft-purple text-white py-4 rounded-full font-bold text-lg hover:bg-soft-purple/90 transition-all shadow-md transform hover:-translate-y-1">
                  Add to Cart
                </button>
                <button className="p-4 rounded-full border border-gray-200 text-foreground hover:border-soft-purple hover:text-soft-purple transition-all bg-gray-50">
                  <Heart size={24} />
                </button>
                <button className="p-4 rounded-full border border-gray-200 text-foreground hover:border-soft-purple hover:text-soft-purple transition-all bg-gray-50">
                  <Share2 size={24} />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4 font-nunito">
              <div className="grid grid-cols-3 py-2 border-b border-gray-50">
                <span className="text-foreground/60 font-bold">Material</span>
                <span className="col-span-2 text-foreground font-medium">{product.material}</span>
              </div>
              <div className="grid grid-cols-3 py-2 border-b border-gray-50">
                <span className="text-foreground/60 font-bold">Dimensions</span>
                <span className="col-span-2 text-foreground font-medium">{product.dimensions}</span>
              </div>
              <div className="grid grid-cols-3 py-2">
                <span className="text-foreground/60 font-bold">Care Info</span>
                <span className="col-span-2 text-foreground font-medium">{product.care}</span>
              </div>
            </div>

            {/* Guarantees */}
            <div className="mt-8 bg-light-peach/20 rounded-2xl p-6 grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Truck className="text-soft-purple" size={24} />
                <span className="font-bold text-sm text-foreground">Fast Shipping</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="text-soft-purple" size={24} />
                <span className="font-bold text-sm text-foreground">Quality Check</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
