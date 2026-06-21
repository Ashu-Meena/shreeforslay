import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shree Accessories | Handmade With Love ❤️",
  description: "Unique Crochet Accessories, Scrunchies & Bows Crafted Just For You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable} scroll-smooth h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans selection:bg-primary-pink selection:text-foreground">
        <Navbar />
        <main className="flex-grow pb-24 md:pb-0 relative">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
