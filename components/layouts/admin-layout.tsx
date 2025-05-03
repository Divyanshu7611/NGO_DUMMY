"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  DollarSign, 
  Users, 
  Calendar, 
  Image,
  Settings,
  FileText,
  Mail,
  BarChart3,
  Menu,
  X,
  Heart,
  LogOut,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: Home },
    { name: "Donations", href: "/admin/donations", icon: DollarSign },
    { name: "Volunteers", href: "/admin/volunteers", icon: Users },
    { name: "Staff", href: "/admin/staff", icon: Users },
    { name: "Events", href: "/admin/events", icon: Calendar },
    { name: "Gallery", href: "/admin/gallery", icon: Image },
    { name: "Certificates", href: "/admin/certificates", icon: FileText },
    { name: "Communications", href: "/admin/communications", icon: Mail },
    { name: "Reports", href: "/admin/reports", icon: BarChart3 },
    { name: "Settings", href: "/admin/settings", icon: Settings }
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-background flex">
        {/* Sidebar for larger screens */}
        <aside className="hidden md:flex md:w-64 lg:w-72 md:flex-col fixed inset-y-0 z-50">
          <div className="flex flex-col flex-grow bg-card border-r pt-5 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 mb-5">
              <Link href="/admin/dashboard" className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">HopeFoundation</span>
              </Link>
            </div>
            
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-3 space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "group flex items-center px-3 py-2 rounded-md text-sm font-medium",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      <item.icon className={cn(
                        "mr-3 h-5 w-5 flex-shrink-0",
                        isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                      )} />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
            
            <div className="p-4">
              <Button asChild variant="outline" className="w-full justify-center">
                <Link href="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  Back to Website
                </Link>
              </Button>
            </div>
          </div>
        </aside>

        {/* Mobile menu */}
        <div className={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-200",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
          <div className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-card p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <Link href="/admin/dashboard" className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">HopeFoundation</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <nav className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm font-medium",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <item.icon className={cn(
                      "mr-3 h-5 w-5 flex-shrink-0",
                      isActive ? "text-primary-foreground" : "text-muted-foreground"
                    )} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            
            <div className="mt-8 pt-6 border-t">
              <Button asChild variant="outline" className="w-full justify-center">
                <Link href="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  Back to Website
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col md:pl-64 lg:pl-72">
          {/* Mobile header */}
          <header className="bg-card border-b sticky top-0 z-40 md:hidden">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
                <Link href="/admin/dashboard" className="flex items-center space-x-2 ml-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-lg font-bold">HopeFoundation</span>
                </Link>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar>
                        <AvatarImage src="/avatar.png" alt="Admin" />
                        <AvatarFallback>AD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>
          
          {/* Desktop header */}
          <header className="bg-card border-b sticky top-0 z-40 hidden md:block">
            <div className="flex h-16 items-center justify-between px-6">
              <h2 className="text-xl font-semibold">Admin Portal</h2>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar>
                        <AvatarImage src="/avatar.png" alt="Admin" />
                        <AvatarFallback>AD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Admin User</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}