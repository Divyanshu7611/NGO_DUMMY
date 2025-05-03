// 'use client'
// import React,{useState,useEffect} from 'react'
// import Link from 'next/link'
// import { Button } from '../ui/button'
// import { Heart } from 'lucide-react'

// function Navbar() {
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//       const handleScroll = () => {
//         setIsScrolled(window.scrollY > 50);
//       };
      
//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
//   return (
//     <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md dark:bg-gray-900' : 'bg-transparent'}`}>
//     <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//       <Link href="/" className="flex items-center space-x-2">
//         <Heart className="h-6 w-6 text-primary" />
//         <span className="text-xl font-bold">HopeFoundation</span>
//       </Link>
      
//       <nav className="hidden md:flex items-center space-x-8">
//         <Link href="/" className="font-medium hover:text-primary transition-colors">Home</Link>
//         <Link href="/about" className="font-medium hover:text-primary transition-colors">About</Link>
//         <Link href="/causes" className="font-medium hover:text-primary transition-colors">Causes</Link>
//         <Link href="/events" className="font-medium hover:text-primary transition-colors">Events</Link>
//         <Link href="/volunteer" className="font-medium hover:text-primary transition-colors">Volunteer</Link>
//         <Link href="/contact" className="font-medium hover:text-primary transition-colors">Contact</Link>
//       </nav>
      
//       <div className="flex items-center space-x-4">
//         <Button asChild variant="donate" className="rounded-full">
//           <Link href="/donate">Donate Now</Link>
//         </Button>
//         <Button asChild variant="outline" className="hidden md:inline-flex rounded-full">
//           <Link href="/volunteer">Become a Volunteer</Link>
//         </Button>
//       </div>
//     </div>
//   </header>

//   )
// }

// export default Navbar


'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Heart, Menu, X } from 'lucide-react'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md dark:bg-gray-900' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">HopeFoundation</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="font-medium hover:text-primary transition-colors">About</Link>
          <Link href="/causes" className="font-medium hover:text-primary transition-colors">Causes</Link>
          <Link href="/events" className="font-medium hover:text-primary transition-colors">Events</Link>
          <Link href="/volunteer" className="font-medium hover:text-primary transition-colors">Volunteer</Link>
          <Link href="/contact" className="font-medium hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Right-side buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="donate" className="rounded-full">
            <Link href="/donate">Donate Now</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/volunteer">Become a Volunteer</Link>
          </Button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 shadow-md">
          <nav className="flex flex-col space-y-3">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-medium">Home</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="font-medium">About</Link>
            <Link href="/causes" onClick={() => setIsMobileMenuOpen(false)} className="font-medium">Causes</Link>
            <Link href="/events" onClick={() => setIsMobileMenuOpen(false)} className="font-medium">Events</Link>
            <Link href="/volunteer" onClick={() => setIsMobileMenuOpen(false)} className="font-medium">Volunteer</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="font-medium">Contact</Link>

            <Button asChild variant="donate" className="w-full mt-4 rounded-full">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button asChild variant="outline" className="w-full rounded-full">
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
