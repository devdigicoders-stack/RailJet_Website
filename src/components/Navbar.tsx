"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  PhoneCall, 
  ChevronRight, 
  ShieldCheck, 
  FileText 
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/companyData";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Product", href: "/products" },
  { name: "Supplier", href: "/supplier" },
  { name: "Contact US", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar - Japanese High-Tech Minimalist Style */}
      <div className="bg-[#111417] text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-[#EA580C]/20 text-[#FB923C] px-2.5 py-0.5 rounded-full font-semibold border border-[#EA580C]/40">
              <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C]" />
              Made in Japan (日本製) | JIS & IEC Standard
            </span>
            <span className="text-slate-300">
              High-Precision Transit & Electrical Measurement Instruments
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${COMPANY_DETAILS.phone}`} 
              className="hover:text-[#FB923C] transition-colors flex items-center gap-1.5 font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#EA580C]" />
              {COMPANY_DETAILS.phone}
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 flex items-center gap-1">
              <span>🇯🇵</span>
              <span>Tokyo, Japan (東京都千代田区)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Material 3 Sticky App Bar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#24282C]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-2.5" 
            : "bg-[#24282C] border-b border-white/5 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with uploaded logo.png */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative h-10 w-36 sm:h-12 sm:w-44 flex items-center">
              <Image
                src="/images/logo.png"
                alt="RailJet Pvt Ltd Logo"
                fill
                className="object-contain object-left group-hover:scale-105 transition-transform"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links (M3 Pill Style) */}
          <nav className="hidden md:flex items-center p-1.5 bg-[#191C1E] rounded-full border border-white/10 shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#EA580C] text-white shadow-md shadow-orange-900/40"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#EA580C]" />
              Catalogue
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#D94E06] shadow-md shadow-orange-900/30 hover:shadow-lg transition-all active:scale-95"
            >
              Request Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 focus:outline-none border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#191C1E] px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                      isActive
                        ? "bg-[#EA580C] text-white shadow"
                        : "text-slate-200 hover:bg-white/10"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs text-slate-300 px-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
                JIS & ISO 9001 Certified Global Manufacturer
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl font-bold text-white bg-[#EA580C] shadow-md"
              >
                Contact & Inquiry
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
