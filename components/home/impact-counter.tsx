"use client";

import React, { useState, useEffect, useRef } from "react";
import { Heart, Users, Globe, Home } from "lucide-react";

interface CounterProps {
  end: number;
  duration: number;
  label: string;
  icon: React.ReactNode;
  prefix?: string;
  suffix?: string;
}

function Counter({ end, duration, label, icon, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="flex flex-col items-center">
      <div className="mb-4 bg-primary/10 p-4 rounded-full text-primary">
        {icon}
      </div>
      <div className="text-4xl font-bold mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}

export default function ImpactCounter() {
  const stats = [
    { end: 5280, duration: 2000, label: "Donations Received", icon: <Heart className="h-8 w-8" /> },
    { end: 18, duration: 2000, label: "Countries Reached", icon: <Globe className="h-8 w-8" />, suffix: "+" },
    { end: 1520, duration: 2000, label: "Volunteers Worldwide", icon: <Users className="h-8 w-8" /> },
    { end: 125, duration: 2000, label: "Completed Projects", icon: <Home className="h-8 w-8" /> },
  ];

  return (
    <section className="py-20 bg-muted relative">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg)` }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Making A Difference</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Together with our donors and volunteers, we&apos;ve achieved remarkable impact across communities worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <Counter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}