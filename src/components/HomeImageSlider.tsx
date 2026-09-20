"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play
} from "lucide-react";
import { GALLERY_IMAGES } from "@/data/companyData";

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
      }, 3500);
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
      {/* Main slider box */}
      <div 
        className="relative bg-[#111417] rounded-3xl p-3 sm:p-6 border border-white/15 shadow-2xl overflow-hidden text-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top bar with count & play/pause */}
        <div className="flex items-center justify-between px-2 pb-3">
          <span className="text-xs font-mono text-slate-300 bg-white/10 px-3 py-1 rounded-full">
            <span className="text-[#FB923C] font-bold">{currentIndex + 1}</span> / {total}
          </span>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Big Image Viewer */}
        <div className="relative aspect-[16/9] w-full rounded-2xl bg-black/90 border border-white/10 overflow-hidden shadow-inner flex items-center justify-center p-2 group">
          <Image
            key={activeItem.id}
            src={activeItem.image}
            alt={`RailJet Gallery Photo ${currentIndex + 1}`}
            fill
            priority
            className="object-contain p-2 transition-all duration-500 ease-out"
          />

          {/* Prev/Next buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#EA580C] text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-lg"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#EA580C] text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-lg"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="pt-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-orange-500/40">
            {GALLERY_IMAGES.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative shrink-0 w-16 h-12 rounded-xl overflow-hidden border-2 transition-all bg-black ${
                  currentIndex === idx
                    ? "border-[#EA580C] scale-105 shadow-md shadow-orange-900/50"
                    : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/40"
                }`}
              >
                <Image
                  src={img.image}
                  alt={`Thumbnail ${idx + 1}`}
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
