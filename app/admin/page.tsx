"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Heart, Shield, LogIn } from "lucide-react";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tab, setTab] = useState("login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      if (email === "admin@example.com" && password === "password") {
        toast({
          title: "Success",
          description: "You have successfully logged in.",
        });
        router.push("/admin/dashboard");
      } else {
        setIsLoading(false);
        toast({
          title: "Authentication failed",
          description: "Invalid email or password.",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate password reset
    setTimeout(() => {
      toast({
        title: "Reset email sent",
        description: "Please check your email for password reset instructions.",
      });
      setIsLoading(false);
      setTab("login");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-muted">
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-foreground opacity-10 z-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg')] bg-cover bg-center" />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center p-12 text-white">
          <div className="flex items-center space-x-2 mb-6">
            <Heart className="h-12 w-12" />
            <span className="text-3xl font-bold">HopeFoundation</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Admin Portal</h1>
          <p className="text-xl max-w-md text-center text-white/90">
            Manage your organization&apos;s website, donations, and volunteers with our comprehensive admin dashboard.
          </p>
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg max-w-md">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Admin Features
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">• Manage content and sliders</li>
              <li className="flex items-center">• Track donations and generate reports</li>
              <li className="flex items-center">• Manage volunteers and staff</li>
              <li className="flex items-center">• Configure payment methods</li>
              <li className="flex items-center">• Process donation certificates</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center justify-center space-x-2 mb-8">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">HopeFoundation</span>
          </div>
          
          <Card className="shadow-lg border-0">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Admin Portal</CardTitle>
              <CardDescription>
                Log in to access the admin dashboard
              </CardDescription>
            </CardHeader>
            
            <Tabs value={tab} onValueChange={setTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="forgot">Forgot Password</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="admin@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <button
                          type="button"
                          className="text-sm text-primary hover:underline"
                          onClick={() => setTab("forgot")}
                        >
                          Forgot password?
                        </button>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Signing in..."
                      ) : (
                        <>
                          <LogIn className="mr-2 h-4 w-4" />
                          Sign In
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </TabsContent>
              
              <TabsContent value="forgot">
                <form onSubmit={handleForgotPassword}>
                  <CardContent className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="reset-email">Email</Label>
                      <Input
                        id="reset-email"
                        type="email"
                        placeholder="admin@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex flex-col space-y-2">
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Reset Password"}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setTab("login")}
                    >
                      Back to login
                    </Button>
                  </CardFooter>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
          
          <div className="text-center mt-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}