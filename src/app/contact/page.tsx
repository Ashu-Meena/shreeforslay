"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How long does shipping take?", a: "Standard shipping takes 5-7 business days within the country. International shipping can take 10-15 business days depending on the location." },
    { q: "Do you accept custom orders?", a: "Yes, we absolutely love creating custom pieces! Please visit our Custom Orders page to submit your requirements." },
    { q: "What is your return policy?", a: "Since our products are handmade to order, we generally do not accept returns. However, if there is a defect or damage during transit, please contact us within 48 hours of delivery." },
    { q: "Can I place a bulk order for return gifts?", a: "Yes, we cater to bulk orders for birthdays, return gifts, and corporate events. Please use the Bulk Orders form to get a custom quote." },
    { q: "Do you ship internationally?", a: "Yes, we ship globally! Shipping rates are calculated at checkout based on your delivery address." },
  ];

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">
              Get in Touch
            </h1>
            <div className="w-24 h-1 bg-soft-purple rounded-full mb-8"></div>
            <p className="text-lg text-foreground/80 font-nunito mb-10">
              We'd love to hear from you! Whether you have a question about our products, an order, or just want to say hi, feel free to drop us a message.
            </p>

            <div className="space-y-6 font-nunito mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-baby-pink/30 p-3 rounded-full text-soft-purple">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Visit Us</h4>
                  <p className="text-foreground/70">123 Craft Street, Handmade City<br />Country 45678</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-lavender/30 p-3 rounded-full text-soft-purple">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Call Us</h4>
                  <p className="text-foreground/70">+1 (234) 567-8900</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-light-peach/30 p-3 rounded-full text-soft-purple">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Email Us</h4>
                  <p className="text-foreground/70">hello@shreeaccessories.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="flex-1 flex justify-center items-center px-6 py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#25D366]/90 transition-colors shadow-sm">
                <MessageCircle size={20} className="mr-2" /> WhatsApp Us
              </a>
              <a href="#" className="flex-1 flex justify-center items-center px-6 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white rounded-xl font-bold hover:opacity-90 transition-opacity shadow-sm">
                <FaInstagram size={20} className="mr-2" /> Instagram DM
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
            <form className="space-y-4 font-nunito">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">Name</label>
                <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">Email</label>
                <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">Phone</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">Message</label>
                <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-soft-purple text-white rounded-xl font-bold text-lg hover:bg-soft-purple/90 transition-all shadow-md mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-soft-purple mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <button
                  className="w-full px-6 py-5 flex justify-between items-center bg-white focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-lg text-foreground text-left">{faq.q}</span>
                  <span className="text-soft-purple flex-shrink-0 ml-4">
                    {openFaq === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-2 text-foreground/70 font-nunito bg-gray-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
