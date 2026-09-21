"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FileSpreadsheet, 
  Search, 
  Filter, 
  ShieldCheck, 
  CheckCircle2, 
  Download, 
  ExternalLink, 
  X, 
  Send, 
  PhoneCall, 
  Sparkles, 
  FileText,
  Activity,
  Zap
} from "lucide-react";
import confetti from "canvas-confetti";
import { PRODUCTS_LIST, ProductItem } from "@/data/companyData";
import GalleryShowcase from "@/components/GalleryShowcase";

const CATEGORIES = [
  "All Categories",
  "Earth Clamp Testers",
  "Soil Resistivity Testers",
] as const;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [unavailableModelNotice, setUnavailableModelNotice] = useState<string | null>(null);

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS_LIST.filter((item) => {
      const matchCategory =
        selectedCategory === "All Categories" || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleDownloadR1Doc = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    setDownloadSuccess(true);
    setUnavailableModelNotice(null);
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  const handleUnavailableCatalogClick = (product: ProductItem) => {
    setUnavailableModelNotice(product.model);
    setDownloadSuccess(false);
    setTimeout(() => {
      setUnavailableModelNotice((current) => (current === product.model ? null : current));
    }, 6000);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
    });
    setQuoteSuccess(true);
    setTimeout(() => {
      setQuoteSuccess(false);
      setActiveModalProduct(null);
    }, 2500);
  };

  return (
    <div className="space-y-16 pb-24">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#191C1E] via-[#24282C] to-[#111417] text-white py-16 sm:py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#33373B] border border-[#EA580C]/30 text-xs sm:text-sm font-semibold text-[#FB923C]">
            <FileSpreadsheet className="w-4 h-4 text-[#EA580C]" />
            Official Testing & Measurement Instruments Catalogue
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-['Outfit']">
            Railway Earth & Electrical Testing Instruments
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto font-normal leading-relaxed">
            Engineered for high-voltage power substations, railway traction lines, signaling relays, and soil resistivity surveys. Fully compliant with IEC 61010-1 & RDSO specifications.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/docs/RALIJET%20CLAMP%20EARTH%20RESISTANCE%20MENU.pdf"
              download="RailJet_R1_Plus_Earth_Clamp_Catalogue.pdf"
              onClick={handleDownloadR1Doc}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-[#EA580C] hover:bg-[#D94E06] shadow-lg shadow-orange-950/40 transition-all active:scale-95 text-xs sm:text-sm"
            >
              <Download className="w-4 h-4" />
              Download Model R1+ Catalogue PDF
            </a>
          </div>

          {downloadSuccess && (
            <div className="mt-3 inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400 text-emerald-200 px-4 py-2 rounded-full text-xs font-semibold animate-bounce">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              Model R1+ Catalogue PDF downloaded successfully!
            </div>
          )}

          {unavailableModelNotice && (
            <div className="mt-3 inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400 text-amber-200 px-5 py-2.5 rounded-full text-xs font-semibold animate-in fade-in">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              Catalogue for {unavailableModelNotice} is currently under preparation & unavailable for direct download. Please contact sales for datasheet.
              <button
                onClick={() => setUnavailableModelNotice(null)}
                className="ml-2 text-amber-300 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 2. Filter & Search Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-grow max-w-lg">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by model (e.g. RR, RR+, R1, R1+, R2, R3, R3+)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Total Count */}
            <div className="text-xs font-bold text-slate-500 flex items-center gap-1.5 self-center">
              <Filter className="w-4 h-4 text-[#EA580C]" />
              Showing {filteredProducts.length} of {PRODUCTS_LIST.length} Official Products
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#EA580C] text-white shadow-md shadow-orange-900/30"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Product Cards Grid (All 6 Products) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              {/* Image Preview Box */}
              <div className="relative h-64 bg-slate-950 flex items-center justify-center p-4 overflow-hidden border-b border-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-[#191C1E]/80 backdrop-blur-sm text-[#FB923C] text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                  {product.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  {product.model}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#EA580C] bg-orange-50 px-2 py-0.5 rounded border border-orange-100">
                      Model: {product.code}
                    </span>
                    <span className="text-slate-500 font-mono text-[11px] truncate max-w-[140px]" title={product.sourceDoc}>
                      {product.sourceDoc.split("(")[0]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#EA580C] transition-colors leading-snug font-['Outfit']">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Key Highlights Chips */}
                <div className="space-y-2 pt-2">
                  <div className="grid grid-cols-2 gap-1.5">
                    {product.keyHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 border border-slate-100 p-2 rounded-xl text-[11px] font-semibold text-slate-800 flex items-center gap-1.5"
                      >
                        <Zap className="w-3 h-3 text-[#EA580C] shrink-0" />
                        <span className="truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setActiveModalProduct(product)}
                  className="flex-1 py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-[#24282C] hover:bg-[#EA580C] shadow transition-all flex items-center justify-center gap-1.5"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Technical Specs</span>
                </button>
                {product.isCatalogAvailable ? (
                  <a
                    href={product.pdfUrl}
                    download="RailJet_R1_Plus_Earth_Clamp_Catalogue.pdf"
                    onClick={handleDownloadR1Doc}
                    className="p-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#EA580C] border border-orange-200 transition-colors"
                    title="Download Model R1+ Official Catalogue PDF"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleUnavailableCatalogClick(product)}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-amber-50 text-slate-400 hover:text-amber-600 border border-slate-200 transition-colors group/btn relative"
                    title="Official Catalogue Currently Unavailable (Click for info)"
                  >
                    <Download className="w-4 h-4 opacity-50" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TECHNICAL SPECIFICATION & RFQ MODAL */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 bg-[#24282C] text-white flex items-start justify-between rounded-t-3xl border-b-2 border-[#EA580C]">
              <div className="space-y-1 pr-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FB923C]">
                  {activeModalProduct.category} | {activeModalProduct.model}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] leading-snug">
                  {activeModalProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Product Photo & Highlights Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center bg-slate-950 p-4 rounded-2xl text-white">
                <div className="relative h-40 w-full sm:col-span-1">
                  <Image
                    src={activeModalProduct.image}
                    alt={activeModalProduct.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="sm:col-span-2 space-y-2 text-xs">
                  <div className="text-[11px] uppercase tracking-wider text-[#FB923C] font-bold">
                    Source Document: {activeModalProduct.sourceDoc}
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {activeModalProduct.description}
                  </p>
                  <div className="pt-2">
                    {activeModalProduct.isCatalogAvailable ? (
                      <a
                        href={activeModalProduct.pdfUrl}
                        download="RailJet_R1_Plus_Earth_Clamp_Catalogue.pdf"
                        onClick={handleDownloadR1Doc}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EA580C] hover:bg-[#D94E06] text-white font-bold text-xs shadow transition-all"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download Model R1+ Official Catalogue PDF
                      </a>
                    ) : (
                      <div className="space-y-1.5">
                        <button
                          type="button"
                          onClick={() => handleUnavailableCatalogClick(activeModalProduct)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 font-semibold text-xs border border-amber-400/30 transition-all"
                        >
                          <Download className="w-3.5 h-3.5 opacity-50" />
                          Official Catalogue Unavailable for Direct Download
                        </button>
                        <p className="text-[11px] text-slate-400">
                          *Full technical datasheet for {activeModalProduct.model} is available upon request via inquiry.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Complete Specifications Parameters Table */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Technical Specifications & Measurement Ranges
                </h4>
                <div className="bg-slate-50 rounded-2xl border border-slate-200 divide-y divide-slate-200 text-xs">
                  {activeModalProduct.specs.resistanceRange && (
                    <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span className="text-slate-600 font-semibold">Ground Resistance Range:</span>
                      <span className="text-slate-900 font-bold">{activeModalProduct.specs.resistanceRange}</span>
                    </div>
                  )}
                  {activeModalProduct.specs.currentRange && (
                    <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span className="text-slate-600 font-semibold">AC / Leakage Current Range:</span>
                      <span className="text-slate-900 font-bold">{activeModalProduct.specs.currentRange}</span>
                    </div>
                  )}
                  {activeModalProduct.specs.voltageRange && (
                    <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span className="text-slate-600 font-semibold">Voltage Range:</span>
                      <span className="text-slate-900 font-bold">{activeModalProduct.specs.voltageRange}</span>
                    </div>
                  )}
                  {activeModalProduct.specs.phaseRange && (
                    <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span className="text-slate-600 font-semibold">Phase Sequence Range:</span>
                      <span className="text-slate-900 font-bold">{activeModalProduct.specs.phaseRange}</span>
                    </div>
                  )}
                  {activeModalProduct.specs.powerRange && (
                    <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span className="text-slate-600 font-semibold">Power Parameters:</span>
                      <span className="text-slate-900 font-bold">{activeModalProduct.specs.powerRange}</span>
                    </div>
                  )}
                  {activeModalProduct.specs.frequencyRange && (
                    <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span className="text-slate-600 font-semibold">Frequency Bandwidth:</span>
                      <span className="text-slate-900 font-bold">{activeModalProduct.specs.frequencyRange}</span>
                    </div>
                  )}
                  {activeModalProduct.specs.jawSize && (
                    <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span className="text-slate-600 font-semibold">Clamp Jaw Dimension:</span>
                      <span className="text-slate-900 font-bold">{activeModalProduct.specs.jawSize}</span>
                    </div>
                  )}
                  {activeModalProduct.specs.display && (
                    <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span className="text-slate-600 font-semibold">Display Screen:</span>
                      <span className="text-slate-900 font-bold">{activeModalProduct.specs.display}</span>
                    </div>
                  )}
                  {activeModalProduct.specs.dataStorage && (
                    <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span className="text-slate-600 font-semibold">Data Storage Capacity:</span>
                      <span className="text-slate-900 font-bold">{activeModalProduct.specs.dataStorage}</span>
                    </div>
                  )}
                  {activeModalProduct.specs.safetyStandard && (
                    <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span className="text-slate-600 font-semibold">Safety & Compliance:</span>
                      <span className="text-emerald-700 font-bold">{activeModalProduct.specs.safetyStandard}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Instrument Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RFQ Form */}
              <div className="bg-orange-50/70 p-5 rounded-2xl border border-orange-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#EA580C]" />
                    Request Price Quotation for {activeModalProduct.model}
                  </h4>
                  <span className="text-[11px] text-slate-500 font-medium">Direct Testing Desk</span>
                </div>

                {quoteSuccess ? (
                  <div className="bg-[#EA580C] text-white p-4 rounded-xl text-center font-bold text-sm">
                    Quotation request received! Our sales engineer will get back to you with calibration certificate options.
                  </div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Name / Railway Division *"
                        className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#EA580C] focus:outline-none"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Official Email *"
                        className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#EA580C] focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="tel"
                        required
                        placeholder="Phone / Mobile Number *"
                        className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#EA580C] focus:outline-none"
                      />
                      <input
                        type="number"
                        min="1"
                        placeholder="Required Units / Quantity"
                        className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#EA580C] focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#EA580C] hover:bg-[#D94E06] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit RFQ for {activeModalProduct.model}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. PHOTO GALLERY */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <GalleryShowcase />
      </section>

      {/* 6. Bottom Help Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#191C1E] text-white rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl font-bold font-['Outfit']">Need Bulk Testing Equipment or Calibration?</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              We provide testing kits with calibration test reports for all major transit & railway divisions.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-[#EA580C] hover:bg-[#D94E06] text-sm whitespace-nowrap shadow-md"
          >
            <PhoneCall className="w-4 h-4" />
            Contact Instrumentation Desk
          </Link>
        </div>
      </section>
    </div>
  );
}
