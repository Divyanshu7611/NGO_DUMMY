"use client";

import React, { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Heart, ChevronRight, CreditCard, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeProvider } from "@/components/theme-provider";

const donationSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  cause: z.string().min(1, "Please select a cause"),
  message: z.string().optional(),
  paymentMethod: z.enum(["creditCard", "paypal", "bankTransfer"]),
});

type DonationFormValues = z.infer<typeof donationSchema>;

const predefinedAmounts = ["10", "25", "50", "100", "250", "500"];

const causes = [
  { id: "water", name: "Clean Water Initiative" },
  { id: "education", name: "Education for All" },
  { id: "environment", name: "Environmental Protection" },
  { id: "health", name: "Healthcare Access" },
  { id: "emergency", name: "Emergency Relief" },
  { id: "general", name: "General Fund" },
];

export default function DonatePage() {
  const { toast } = useToast();
  const [customAmount, setCustomAmount] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("50");
  const [isRecurring, setIsRecurring] = useState(false);
  
  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: "50",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cause: "",
      message: "",
      paymentMethod: "creditCard",
    },
  });
  
  const onSubmit = (data: DonationFormValues) => {
    // Simulate payment processing
    toast({
      title: "Processing donation...",
    });
    
    setTimeout(() => {
      toast({
        title: "Thank you for your donation!",
        description: `Your ${isRecurring ? 'monthly' : 'one-time'} donation of $${data.amount} has been processed successfully.`,
      });
      
      // Reset form
      form.reset();
      setCustomAmount(false);
      setSelectedAmount("50");
      setIsRecurring(false);
    }, 2000);
  };
  
  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount(false);
    form.setValue("amount", amount);
  };
  
  const handleCustomAmount = () => {
    setCustomAmount(true);
    setSelectedAmount("");
    form.setValue("amount", "");
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-muted">
        <header className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Make a Donation</h1>
            <p className="max-w-2xl mx-auto text-primary-foreground/90">
              Your generosity helps us create lasting change in communities worldwide. Every donation makes a difference.
            </p>
          </div>
        </header>
        
        <div className="container mx-auto px-4 py-12">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Homepage
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Donation Details</CardTitle>
                  <CardDescription>
                    Fill in the details below to complete your donation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Donation Amount</h3>
                          
                          <div className="mb-4">
                            <div className="flex gap-2 mb-2">
                              <Button
                                type="button"
                                variant={isRecurring ? "default" : "outline"}
                                onClick={() => setIsRecurring(false)}
                                className="flex-1"
                              >
                                One-time
                              </Button>
                              <Button
                                type="button"
                                variant={isRecurring ? "outline" : "default"}
                                onClick={() => setIsRecurring(true)}
                                className="flex-1"
                              >
                                Monthly
                              </Button>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
                            {predefinedAmounts.map((amount) => (
                              <Button
                                key={amount}
                                type="button"
                                variant={selectedAmount === amount && !customAmount ? "default" : "outline"}
                                onClick={() => handleAmountSelect(amount)}
                              >
                                ${amount}
                              </Button>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-2 mb-4">
                            <Button
                              type="button"
                              variant={customAmount ? "default" : "outline"}
                              onClick={handleCustomAmount}
                            >
                              Custom Amount
                            </Button>
                            
                            {customAmount && (
                              <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                  <FormItem className="flex-1">
                                    <FormControl>
                                      <div className="relative">
                                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                                        <Input
                                          {...field}
                                          placeholder="Enter amount"
                                          className="pl-8"
                                          type="number"
                                          min="1"
                                          step="1"
                                        />
                                      </div>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            )}
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="cause"
                            render={({ field }) => (
                              <FormItem className="mb-6">
                                <FormLabel>Select a Cause</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Choose a cause for your donation" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {causes.map((cause) => (
                                      <SelectItem key={cause.id} value={cause.id}>
                                        {cause.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message (Optional)</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Share why you're donating or any special instructions"
                                    className="resize-none"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="border-t pt-6">
                          <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>First Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Last Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Smith" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="john.smith@example.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone (Optional)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="(123) 456-7890" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        
                        <div className="border-t pt-6">
                          <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                          
                          <FormField
                            control={form.control}
                            name="paymentMethod"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <div className="flex items-center space-x-3 space-y-0">
                                      <RadioGroupItem value="creditCard" id="creditCard" />
                                      <FormLabel htmlFor="creditCard" className="flex items-center">
                                        <CreditCard className="h-5 w-5 mr-2" />
                                        Credit / Debit Card
                                      </FormLabel>
                                    </div>
                                    <div className="flex items-center space-x-3 space-y-0">
                                      <RadioGroupItem value="paypal" id="paypal" />
                                      <FormLabel htmlFor="paypal">PayPal</FormLabel>
                                    </div>
                                    <div className="flex items-center space-x-3 space-y-0">
                                      <RadioGroupItem value="bankTransfer" id="bankTransfer" />
                                      <FormLabel htmlFor="bankTransfer">Bank Transfer</FormLabel>
                                    </div>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          {form.watch("paymentMethod") === "creditCard" && (
                            <div className="mt-4 p-4 border rounded-md">
                              <div className="space-y-4">
                                <div>
                                  <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
                                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <FormLabel htmlFor="expiryDate">Expiry Date</FormLabel>
                                    <Input id="expiryDate" placeholder="MM/YY" />
                                  </div>
                                  <div>
                                    <FormLabel htmlFor="cvc">CVC</FormLabel>
                                    <Input id="cvc" placeholder="123" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Complete Donation
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="border-0 shadow-md sticky top-8">
                <CardHeader>
                  <CardTitle>Donation Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-medium">${customAmount ? form.watch("amount") || "0" : selectedAmount}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{isRecurring ? "Monthly" : "One-time"}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cause:</span>
                    <span className="font-medium">
                      {form.watch("cause") ? causes.find(c => c.id === form.watch("cause"))?.name : "General Fund"}
                    </span>
                  </div>
                  
                  <div className="border-t my-4"></div>
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>${customAmount ? form.watch("amount") || "0" : selectedAmount}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Your donation helps us make a real difference in communities worldwide. Thank you for your support!
                  </p>
                  
                  <div className="flex items-center justify-center w-full space-x-2 text-sm">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>Secure donation</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}