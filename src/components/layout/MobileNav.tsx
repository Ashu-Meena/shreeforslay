"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Heart, ShoppingCart, User } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Shop", href: "/shop", icon: ShoppingBag },
    { name: "Wishlist", href: "/wishlist", icon: Heart },
    { name: "Cart", href: "/cart", icon: ShoppingCart },
    { name: "Account", href: "/login", icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2 bg-gradient-to-t from-cream-white to-transparent pointer-events-none">
      <nav className="glassmorphism rounded-3xl p-2 px-4 shadow-[0_8px_32px_0_rgba(255,201,232,0.4)] pointer-events-auto flex justify-between items-center relative overflow-hidden">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 relative ${
                isActive ? "text-white" : "text-foreground/60 hover:text-pastel-purple"
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-pastel-purple rounded-2xl shadow-inner z-0"></div>
              )}
              <div className="relative z-10 flex flex-col items-center">
                <Icon size={isActive ? 22 : 24} className={`mb-0.5 transition-all ${isActive ? "scale-110" : "scale-100"}`} />
                {isActive && <span className="text-[10px] font-bold tracking-wide">{item.name}</span>}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
