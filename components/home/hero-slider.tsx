"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Link } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SlideImage {
  url: string;
  title: string;
  subtitle: string;
}

interface HeroSliderProps {
  images: SlideImage[];
  autoPlay?: boolean;
  interval?: number;
}

export default function HeroSlider({ 
  images, 
  autoPlay = true, 
  interval = 5000 
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    
    const slideInterval = setInterval(() => {
      nextSlide();
    }, interval);
    
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoPlay, interval]);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  if (!images.length) return null;

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div 
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              {/* Using a div with background image for better control instead of Next.js Image */}
            </div>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-12">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl animate-fadeIn">
                {image.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-fadeIn animation-delay-300">
                {image.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-500">
         
                <Button variant='donate' size="lg" className="rounded-full" onClick={() => window.location.href = "/donate"}>Donate Now</Button>
         
                <Button size="lg" variant='default' className="rounded-full text-white border-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentIndex ? "bg-white" : "bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}