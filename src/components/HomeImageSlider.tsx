"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  ZoomIn,
  Award
} from "lucide-react";
import { GALLERY_IMAGES, GalleryImageItem } from "@/data/companyData";

export default function HomeImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = GALLERY_IMAGES.length;

  useEffect(() => {
    if (isPlaying && !isHovered) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % total);
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const activeItem = GALLERY_IMAGES[currentIndex];

  return (
    <div className="relative w-full">
      {/* Container with premium border & shadow */}
      <div 
        className="relative bg-gradient-to-b from-[#1E2328] via-[#191C1E] to-[#111417] rounded-3xl p-4 sm:p-8 border border-white/15 shadow-2xl overflow-hidden text-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#EA580C]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Control Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA580C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EA580C]"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-orange-200 font-['Outfit']">
              Live Showcase | Tokyo Precision Testing Instrumentation
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-300 bg-white/10 px-3 py-1 rounded-full">
              <span className="text-[#FB923C] font-bold">{currentIndex + 1}</span> / {total}
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Main Slider Content Area */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
          {/* Left: Image Display Frame */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl bg-black/80 border border-white/15 overflow-hidden shadow-2xl flex items-center justify-center p-3 group">
              <Image
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.title}
                fill
                priority
                className="object-contain p-2 transition-all duration-700 ease-out transform group-hover:scale-105"
              />

              {/* Category pill on image */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-xs font-bold text-orange-200 px-3 py-1 rounded-full border border-white/15 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                {activeItem.category}
              </div>

              {/* Navigation Arrows on image overlay */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#EA580C] text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all opacity-80 hover:opacity-100 hover:scale-110 active:scale-95"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#EA580C] text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all opacity-80 hover:opacity-100 hover:scale-110 active:scale-95"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right: Detailed Info Card */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/40 text-xs font-bold text-[#FB923C] w-fit">
              <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
              JIS C 1302 & IEC 61010-1 Compliant
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] leading-snug">
              {activeItem.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {activeItem.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#D94E06] shadow-lg shadow-orange-950/40 transition-all active:scale-95"
              >
                Explore Product Catalog
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products#gallery"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all"
              >
                View All {total} Photos
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Strip for Fast Navigation */}
        <div className="relative z-10 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-orange-500/50">
            {GALLERY_IMAGES.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative shrink-0 w-16 h-12 rounded-xl overflow-hidden border-2 transition-all bg-black ${
                  currentIndex === idx
                    ? "border-[#EA580C] scale-105 shadow-md shadow-orange-900/50"
                    : "border-white/15 opacity-50 hover:opacity-100 hover:border-white/40"
                }`}
              >
                <Image
                  src={img.image}
                  alt={img.title}
                  fill
                  className="object-contain p-1"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
