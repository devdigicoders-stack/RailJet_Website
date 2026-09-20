"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Camera, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  CheckCircle2,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { GALLERY_IMAGES, GalleryImageItem } from "@/data/companyData";

const GALLERY_CATEGORIES = [
  "All",
  "Instruments",
  "Testing & Calibration",
  "Production & QA",
  "Packaging & Field Kits",
] as const;

export default function GalleryShowcase({
  title = "Product & Testing Photo Gallery",
  subtitle = "Real field photos, lab testing, precision manufacturing, and instrument packaging from RailJet Tokyo & Rudra Rail Services.",
  limit,
  showFilters = true,
}: {
  title?: string;
  subtitle?: string;
  limit?: number;
  showFilters?: boolean;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredImages = React.useMemo(() => {
    let list = GALLERY_IMAGES;
    if (selectedCategory !== "All") {
      list = list.filter((item) => item.category === selectedCategory);
    }
    if (limit && limit > 0) {
      list = list.slice(0, limit);
    }
    return list;
  }, [selectedCategory, limit]);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        (activeImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      );
    }
  };

  return (
    <div className="space-y-8">
      {/* Title & Subtitle Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Official Photo Gallery ({GALLERY_IMAGES.length} Photos)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
            {title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Category Filters */}
        {showFilters && (
          <div className="flex flex-wrap gap-1.5 self-start md:self-auto bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#EA580C] text-white shadow-sm"
                    : "text-slate-700 hover:text-slate-900 hover:bg-white/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredImages.map((item, index) => {
          const globalIdx = GALLERY_IMAGES.findIndex((g) => g.id === item.id);
          return (
            <div
              key={item.id}
              onClick={() => openLightbox(globalIdx >= 0 ? globalIdx : index)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#EA580C]/50 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category Badge overlay */}
                <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-[10px] text-orange-200 font-bold px-2 py-0.5 rounded-full border border-white/10">
                  {item.category}
                </div>

                {/* Zoom overlay icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#EA580C] text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-3.5 space-y-1 flex-1 flex flex-col justify-between bg-white">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#EA580C] transition-colors line-clamp-1 font-['Outfit']">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-tight">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#191C1E] border border-white/15 rounded-3xl overflow-hidden shadow-2xl text-white flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="bg-[#EA580C] text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                  {GALLERY_IMAGES[activeImageIndex].category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Photo {activeImageIndex + 1} of {GALLERY_IMAGES.length}
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Image View */}
            <div className="relative h-72 sm:h-96 md:h-[480px] bg-black flex items-center justify-center p-4">
              <Image
                src={GALLERY_IMAGES[activeImageIndex].image}
                alt={GALLERY_IMAGES[activeImageIndex].title}
                fill
                className="object-contain"
                priority
              />

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#EA580C] text-white flex items-center justify-center border border-white/20 transition-all backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#EA580C] text-white flex items-center justify-center border border-white/20 transition-all backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Footer description bar */}
            <div className="p-4 sm:p-6 bg-[#24282C] border-t border-white/10 space-y-1.5">
              <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
                {GALLERY_IMAGES[activeImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {GALLERY_IMAGES[activeImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
