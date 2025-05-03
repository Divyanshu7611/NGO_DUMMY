"use client";

import React from "react";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

// Simulated upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Annual Charity Gala",
    date: new Date("2025-06-15T18:00:00"),
    location: "Grand Plaza Hotel, New York",
    attendees: 120
  },
  {
    id: 2,
    title: "Community Cleanup Drive",
    date: new Date("2025-05-28T09:00:00"),
    location: "Central Park, Chicago",
    attendees: 45
  },
  {
    id: 3,
    title: "Fundraising Marathon",
    date: new Date("2025-07-10T07:30:00"),
    location: "Riverside Park, Boston",
    attendees: 85
  }
];

export default function UpcomingEventsCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Upcoming Events</CardTitle>
        <Button asChild size="sm" variant="outline">
          <Link href="/admin/events">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex flex-col space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{event.title}</h3>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/admin/events/${event.id}`}>Manage</Link>
                </Button>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {format(event.date, "EEEE, MMMM d, yyyy")}
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                {format(event.date, "h:mm a")}
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                {event.location}
              </div>
              
              <div className="flex items-center justify-between text-sm pt-1">
                <span>{event.attendees} registered attendees</span>
                <span className="text-primary font-medium">
                  {Math.floor((event.date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left
                </span>
              </div>
              
              {event.id !== upcomingEvents[upcomingEvents.length - 1].id && (
                <div className="border-b border-border my-2"></div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}