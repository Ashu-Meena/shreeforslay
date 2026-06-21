"use client";

import { useState } from "react";
import { Gift, PartyPopper, Briefcase, GraduationCap, CheckCircle } from "lucide-react";

export default function BulkOrders() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">
            Bulk & Wholesale Orders
          </h1>
          <div className="w-24 h-1 bg-soft-purple mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-foreground/80 font-nunito">
            Planning a special event? Our handmade accessories make perfect, memorable gifts for any occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-light-peach/20 p-6 rounded-2xl text-center border border-light-peach/40">
            <Gift className="text-soft-purple mx-auto mb-4" size={40} />
            <h3 className="font-bold text-xl mb-2">Return Gifts</h3>
            <p className="text-foreground/70 font-nunito text-sm">Perfect for baby showers and family gatherings.</p>
          </div>
          <div className="bg-lavender/20 p-6 rounded-2xl text-center border border-lavender/40">
            <PartyPopper className="text-soft-purple mx-auto mb-4" size={40} />
            <h3 className="font-bold text-xl mb-2">Birthday Parties</h3>
            <p className="text-foreground/70 font-nunito text-sm">Cute matching accessories for all the kids.</p>
          </div>
          <div className="bg-baby-pink/20 p-6 rounded-2xl text-center border border-baby-pink/40">
            <Briefcase className="text-soft-purple mx-auto mb-4" size={40} />
            <h3 className="font-bold text-xl mb-2">Corporate Events</h3>
            <p className="text-foreground/70 font-nunito text-sm">Unique handmade gifts for employees and clients.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl text-center border border-blue-100">
            <GraduationCap className="text-soft-purple mx-auto mb-4" size={40} />
            <h3 className="font-bold text-xl mb-2">School Events</h3>
            <p className="text-foreground/70 font-nunito text-sm">Custom colors for school festivals and farewells.</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-baby-pink/20 rounded-3xl p-12 text-center border border-baby-pink/50">
              <CheckCircle className="text-soft-purple mx-auto mb-6" size={64} />
              <h2 className="text-3xl font-bold text-foreground mb-4">Quote Request Received!</h2>
              <p className="text-lg text-foreground/80 font-nunito">
                Thank you for considering Shree Accessories for your event. We will review your requirements and send a customized quote shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 px-8 py-3 bg-soft-purple text-white rounded-full font-bold hover:bg-soft-purple/90 transition-colors shadow-md"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Get a Bulk Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6 font-nunito">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-foreground">Full Name / Company</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-foreground">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-foreground">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="eventDate" className="block text-sm font-bold text-foreground">Event Date</label>
                    <input
                      type="date"
                      id="eventDate"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="products" className="block text-sm font-bold text-foreground">Products Interested In</label>
                  <input
                    type="text"
                    id="products"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all"
                    placeholder="e.g. 50 Scrunchies, 20 Bows"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="details" className="block text-sm font-bold text-foreground">Additional Details</label>
                  <textarea
                    id="details"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all resize-none"
                    placeholder="Tell us about theme colors, packaging requirements, or any specific requests..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-soft-purple text-white rounded-xl font-bold text-lg hover:bg-soft-purple/90 transition-all shadow-md mt-4"
                >
                  Get Bulk Quote
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
