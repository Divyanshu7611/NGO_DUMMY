"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

const events = [
  {
    id: 1,
    title: "Annual Charity Gala",
    description: "Join us for an evening of inspiration and generosity to support our global initiatives.",
    date: new Date("2025-06-15T18:00:00"),
    location: "Grand Plaza Hotel, New York",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
  },
  {
    id: 2,
    title: "Community Cleanup Drive",
    description: "Help us clean local parks and streets to create a healthier environment for everyone.",
    date: new Date("2025-05-28T09:00:00"),
    location: "Central Park, Chicago",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
  },
  {
    id: 3,
    title: "Fundraising Marathon",
    description: "Run for a cause in our annual marathon to raise funds for clean water projects.",
    date: new Date("2025-07-10T07:30:00"),
    location: "Riverside Park, Boston",
    image: "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg"
  }
];

export default function UpcomingEvents() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Upcoming Events</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Join Our Mission</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Participate in our upcoming events and help us create meaningful change in communities worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-card rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md flex flex-col">
              <div className="relative h-48 w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {format(event.date, "MMM d, yyyy")}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{format(event.date, "h:mm a")}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <Button asChild className="w-full">
                  <Link href={`/events/${event.id}`}>Register Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="group">
            <Link href="/events" className="flex items-center">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}