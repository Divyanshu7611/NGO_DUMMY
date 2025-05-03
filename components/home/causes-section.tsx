"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const causes = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description: "Providing clean drinking water to communities in need around the world.",
    image: "https://images.pexels.com/photos/2962772/pexels-photo-2962772.jpeg",
    raised: 28500,
    goal: 50000,
    category: "Health"
  },
  {
    id: 2,
    title: "Education for All",
    description: "Supporting education programs for underprivileged children.",
    image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
    raised: 12800,
    goal: 25000,
    category: "Education"
  },
  {
    id: 3,
    title: "Environmental Protection",
    description: "Preserving natural habitats and promoting sustainable practices.",
    image: "https://images.pexels.com/photos/5748316/pexels-photo-5748316.jpeg",
    raised: 18200,
    goal: 30000,
    category: "Environment"
  }
];

export default function CausesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Our Causes</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Current Fundraising Causes</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Support our ongoing projects and help us make a lasting impact in communities worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause) => (
            <div key={cause.id} className="bg-card rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="relative h-52 w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${cause.image})` }}
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {cause.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cause.title}</h3>
                <p className="text-muted-foreground mb-4">{cause.description}</p>
                
                <div className="mb-2">
                  <Progress value={(cause.raised / cause.goal) * 100} className="h-2" />
                </div>
                
                <div className="flex justify-between text-sm mb-4">
                  <span>Raised: ${cause.raised.toLocaleString()}</span>
                  <span>Goal: ${cause.goal.toLocaleString()}</span>
                </div>
                
                <Button asChild className="w-full">
                  <Link href={`/causes/${cause.id}`}>Donate Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="group">
            <Link href="/causes" className="flex items-center">
              View All Causes
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}