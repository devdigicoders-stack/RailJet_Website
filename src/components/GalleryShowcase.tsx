"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight
} from "lucide-react";
import { GALLERY_IMAGES, GalleryImageItem } from "@/data/companyData";

export default function GalleryShowcase({
  limit,
}: {
  limit?: number;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const imagesList = React.useMemo(() => {
    let list = GALLERY_IMAGES;
    if (limit && limit > 0) {
      list = list.slice(0, limit);
    }
    return list;
  }, [limit]);

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
    <div className="space-y-6">
      {/* Grid of Images without any text */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {imagesList.map((item, index) => {
          const globalIdx = GALLERY_IMAGES.findIndex((g) => g.id === item.id);
          return (
            <div
              key={item.id}
              onClick={() => openLightbox(globalIdx >= 0 ? globalIdx : index)}
              className="group relative bg-black rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#EA580C] transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/3] bg-black overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={`RailJet Photo ${item.id}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#EA580C] text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal without text */}
      {activeImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#111417] border border-white/15 rounded-3xl overflow-hidden shadow-2xl text-white flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between p-3.5 border-b border-white/10">
              <span className="text-xs font-mono text-slate-300 bg-white/10 px-3 py-1 rounded-full">
                <span className="text-[#FB923C] font-bold">{activeImageIndex + 1}</span> / {GALLERY_IMAGES.length}
              </span>
              <button
                onClick={closeLightbox}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Image View */}
            <div className="relative h-80 sm:h-[450px] md:h-[550px] bg-black flex items-center justify-center p-4">
              <Image
                src={GALLERY_IMAGES[activeImageIndex].image}
                alt={`Photo ${activeImageIndex + 1}`}
                fill
                className="object-contain p-2"
                priority
              />

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#EA580C] text-white flex items-center justify-center border border-white/20 transition-all backdrop-blur-sm active:scale-95 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#EA580C] text-white flex items-center justify-center border border-white/20 transition-all backdrop-blur-sm active:scale-95 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
