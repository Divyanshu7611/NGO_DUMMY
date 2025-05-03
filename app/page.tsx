import Link from "next/link";
import { ArrowRight, Heart, Users, Calendar, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/home/hero-slider";
import CausesSection from "@/components/home/causes-section";
import ImpactCounter from "@/components/home/impact-counter";
import UpcomingEvents from "@/components/home/upcoming-events";
import TestimonialsSection from "@/components/home/testimonials-section";
import NewsletterSignup from "@/components/home/newsletter-signup";
import { ThemeProvider } from "@/components/theme-provider";
import DonationsMarquee from "@/components/home/donation-script";
import DonatePage from "@/components/global/donate";
import Navbar from "@/components/global/navbar";
import MissionSection from "@/components/home/section";

export default function Home() {


  const sliderImages = [
    {
      url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      title: "Empowering Communities",
      subtitle: "Making a difference in lives around the world",
    },
    {
      url: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg",
      title: "Building Better Futures",
      subtitle: "Supporting education and skill development",
    },
    {
      url: "https://images.pexels.com/photos/6994992/pexels-photo-6994992.jpeg",
      title: "Environmental Protection",
      subtitle: "Preserving our planet for future generations",
    },
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex min-h-screen flex-col">
        <Navbar/>

        <DonatePage/>
  

        <main className="flex-grow">
          <HeroSlider images={sliderImages} />
          
          <MissionSection/>
          <DonationsMarquee/>
          <CausesSection />
          
          <ImpactCounter />
          
          <UpcomingEvents />
          
          <TestimonialsSection />
          
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Your contribution can change lives. Join us in our mission to create a better world for everyone.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" variant='donate' className="rounded-full">
                  <Link href="/donate">Donate Now</Link>
                </Button>
                <Button asChild size="lg" variant='secondary' className="rounded-full border-white hover:bg-white hover:text-primary">
                  <Link href="/volunteer">Become a Volunteer</Link>
                </Button>
              </div>
            </div>
          </section>
          
          <NewsletterSignup />
        </main>

        <footer className="bg-card text-card-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold">HopeFoundation</span>
                </Link>
                <p className="text-muted-foreground">
                  Working together to create lasting change and build a better future for all.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                  <li><Link href="/causes" className="text-muted-foreground hover:text-primary transition-colors">Our Causes</Link></li>
                  <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
                  <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
                  <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">Get Involved</h4>
                <ul className="space-y-2">
                  <li><Link href="/donate" className="text-muted-foreground hover:text-primary transition-colors">Donate</Link></li>
                  <li><Link href="/volunteer" className="text-muted-foreground hover:text-primary transition-colors">Volunteer</Link></li>
                  <li><Link href="/fundraise" className="text-muted-foreground hover:text-primary transition-colors">Fundraise</Link></li>
                  <li><Link href="/partners" className="text-muted-foreground hover:text-primary transition-colors">Partnership</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
                <address className="not-italic text-muted-foreground">
                  <p>123 Charity Lane</p>
                  <p>Hopeville, CA 90210</p>
                  <p className="mt-2">contact@hopefoundation.org</p>
                  <p>+1 (555) 123-4567</p>
                </address>
              </div>
            </div>
            
            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">© 2025 HopeFoundation. All rights reserved.</p>
              <div className="mt-4 md:mt-0 flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}