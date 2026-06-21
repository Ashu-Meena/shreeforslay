"use client";

import Link from "next/link";
import { ShoppingCart, Heart, Search, User } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Custom Orders", href: "/custom-orders" },
    { name: "Bulk Orders", href: "/bulk-orders" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="bg-cream-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-start">
            <Link href="/" className="font-sans font-bold text-lg md:text-2xl text-pastel-purple tracking-wide flex items-center gap-1 md:gap-2">
              <span className="text-xl md:text-2xl">🎀</span> Shree<span className="text-foreground">Accessories</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-8 items-center flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-pastel-purple font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Icons (Hidden on small mobile where Bottom Nav takes over) */}
          <div className="hidden sm:flex items-center space-x-6 flex-shrink-0">
            <button className="text-foreground hover:text-pastel-purple transition-colors">
              <Search size={22} />
            </button>
            <Link href="/wishlist" className="text-foreground hover:text-pastel-purple transition-colors">
              <Heart size={22} />
            </Link>
            <Link href="/cart" className="text-foreground hover:text-pastel-purple transition-colors relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-primary-pink text-foreground text-xs font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </Link>
            <Link href="/login" className="text-foreground hover:text-pastel-purple transition-colors">
              <User size={22} />
            </Link>
          </div>
          
          {/* Mobile Search Icon only */}
          <div className="flex sm:hidden items-center space-x-4">
             <button className="text-foreground hover:text-pastel-purple transition-colors">
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
