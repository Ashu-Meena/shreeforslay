import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-lavender/30 pt-16 pb-8 border-t border-lavender/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-bold text-2xl text-soft-purple font-sans tracking-wide">
              Shree<span className="text-foreground">Accessories</span>
            </h3>
            <p className="text-foreground/80 font-nunito">
              Handmade with love. Unique crochet accessories, scrunchies, and bows crafted just for you.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-foreground hover:text-soft-purple transition-colors bg-white p-2 rounded-full shadow-sm">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-foreground hover:text-soft-purple transition-colors bg-white p-2 rounded-full shadow-sm">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-foreground hover:text-soft-purple transition-colors bg-white p-2 rounded-full shadow-sm">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 font-nunito">
              <li><Link href="/shop" className="text-foreground/80 hover:text-soft-purple transition-colors">Shop All</Link></li>
              <li><Link href="/custom-orders" className="text-foreground/80 hover:text-soft-purple transition-colors">Custom Orders</Link></li>
              <li><Link href="/bulk-orders" className="text-foreground/80 hover:text-soft-purple transition-colors">Bulk Orders</Link></li>
              <li><Link href="/about" className="text-foreground/80 hover:text-soft-purple transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="text-foreground/80 hover:text-soft-purple transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-foreground">Customer Care</h4>
            <ul className="space-y-2 font-nunito">
              <li><Link href="/faq" className="text-foreground/80 hover:text-soft-purple transition-colors">FAQs</Link></li>
              <li><Link href="/shipping" className="text-foreground/80 hover:text-soft-purple transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="text-foreground/80 hover:text-soft-purple transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/terms" className="text-foreground/80 hover:text-soft-purple transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-foreground/80 hover:text-soft-purple transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-foreground">Get In Touch</h4>
            <ul className="space-y-4 font-nunito">
              <li className="flex items-start space-x-3 text-foreground/80">
                <MapPin size={20} className="text-soft-purple shrink-0 mt-0.5" />
                <span>123 Craft Street, Handmade City, Country 45678</span>
              </li>
              <li className="flex items-center space-x-3 text-foreground/80">
                <Phone size={20} className="text-soft-purple shrink-0" />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center space-x-3 text-foreground/80">
                <Mail size={20} className="text-soft-purple shrink-0" />
                <span>hello@shreeaccessories.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-lavender/50 text-center text-foreground/60 font-nunito">
          <p>&copy; {new Date().getFullYear()} Shree Accessories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
