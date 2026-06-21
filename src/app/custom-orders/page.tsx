"use client";

import { useState } from "react";
import { Upload, CheckCircle } from "lucide-react";

export default function CustomOrders() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">
            Need Something Custom?
          </h1>
          <div className="w-24 h-1 bg-soft-purple mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-foreground/80 font-nunito">
            Have a specific design in mind? We'd love to bring it to life! Upload an inspiration picture and tell us exactly what you need.
          </p>
        </div>

        {submitted ? (
          <div className="bg-baby-pink/20 rounded-3xl p-12 text-center border border-baby-pink/50">
            <CheckCircle className="text-soft-purple mx-auto mb-6" size={64} />
            <h2 className="text-3xl font-bold text-foreground mb-4">Request Sent!</h2>
            <p className="text-lg text-foreground/80 font-nunito">
              Thank you for your custom order request. We'll review your requirements and get back to you with a quote within 24-48 hours.
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
            <form onSubmit={handleSubmit} className="space-y-6 font-nunito">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-bold text-foreground">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-foreground">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-bold text-foreground">Phone Number (WhatsApp)</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="quantity" className="block text-sm font-bold text-foreground">Quantity Needed</label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    defaultValue="1"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-foreground">Inspiration Image (Optional)</label>
                <div className="mt-2 flex justify-center rounded-xl border-2 border-dashed border-gray-300 px-6 py-10 hover:bg-gray-50 hover:border-soft-purple transition-all cursor-pointer">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-foreground/60 justify-center">
                      <span className="relative rounded-md bg-transparent font-semibold text-soft-purple focus-within:outline-none hover:text-soft-purple/80">
                        Upload a file
                      </span>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-500">PNG, JPG, GIF up to 5MB</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="requirements" className="block text-sm font-bold text-foreground">Detailed Requirements</label>
                <textarea
                  id="requirements"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-soft-purple focus:ring-2 focus:ring-soft-purple/20 outline-none transition-all resize-none"
                  placeholder="Please describe the colors, materials, size, and any other specific details..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-soft-purple text-white rounded-xl font-bold text-lg hover:bg-soft-purple/90 transition-all shadow-md mt-4"
              >
                Request Custom Order
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
