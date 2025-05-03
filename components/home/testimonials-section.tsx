"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Volunteer",
    quote: "Volunteering with HopeFoundation has been one of the most rewarding experiences of my life. The team is dedicated, passionate, and truly making a difference in people's lives.",
    image: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Donor",
    quote: "I've been supporting HopeFoundation for years because of their transparency and the real impact they create. Every dollar donated goes directly to meaningful projects.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Community Partner",
    quote: "Collaborating with HopeFoundation has transformed our local community. Their approach is inclusive, sustainable, and focused on long-term solutions rather than quick fixes.",
    image: "https://images.pexels.com/photos/5615640/pexels-photo-5615640.jpeg"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What People Say</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Hear from our volunteers, donors, and community partners about their experiences.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card p-8 md:p-10 rounded-lg shadow-sm text-center">
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      <Quote className="h-8 w-8 text-primary" />
                    </div>
                    
                    <blockquote className="text-lg md:text-xl mb-6">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-16 h-16 rounded-full bg-cover bg-center mb-3"
                        style={{ backgroundImage: `url(${testimonial.image})` }}
                      />
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-background shadow-md hover:bg-muted text-foreground rounded-full p-2 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-background shadow-md hover:bg-muted text-foreground rounded-full p-2 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === activeIndex ? "bg-primary" : "bg-muted"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}