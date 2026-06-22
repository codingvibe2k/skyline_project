/**
 * @file /components/showroom/InteractiveGallery.tsx
 * @description Localized client-side Interactive Image Gallery.
 * It manages:
 * 1. An image slideshow overlay with standard automated sliding ticks (every 5 seconds).
 * 2. Manual control triggers (Next / Prev chevron buttons) with hover display styles.
 * 3. Dynamic slide transitions utilizing raw negative translateX percentage translations.
 * 4. Micro-paging indicator dots allowing localized jump navigation to specific vehicle frames.
 */

"use client";

import { useState, useEffect } from "react";

interface InteractiveGalleryProps {
  images: string[];
  label: string;
  title: string;
}

export default function InteractiveGallery({ images, label, title }: InteractiveGalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="relative bg-surface-container-lowest overflow-hidden">
      <div className="max-w-full">
        <div className="relative h-[600px] md:h-[800px] group overflow-hidden">
          {/* Slide Container */}
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${src}')` }}
              ></div>
            ))}
          </div>

          {/* Overlay Content */}
          <div className="absolute bottom-16 left-margin-desktop z-20">
            <span className="font-label-lg text-[14px] text-primary tracking-widest uppercase mb-2 block">
              {label}
            </span>
            <h2 className="font-display text-[48px] text-on-background">
              {title}
            </h2>
          </div>

          {/* Controls */}
          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-background/20 backdrop-blur-md text-primary hover:bg-primary hover:text-on-primary transition-all opacity-0 group-hover:opacity-100"
            onClick={prevSlide}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-background/20 backdrop-blur-md text-primary hover:bg-primary hover:text-on-primary transition-all opacity-0 group-hover:opacity-100"
            onClick={nextSlide}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          {/* Pagination dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  index === currentSlide ? "bg-primary" : "bg-white/30"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
