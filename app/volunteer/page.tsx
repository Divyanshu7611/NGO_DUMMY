"use client";

import React from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Users, Clock, ArrowLeft, Smile, ChevronRight } from "lucide-react";
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
  FormDescription,
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
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";

const volunteerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  skills: z.string().array().nonempty("Please select at least one skill"),
  availability: z.string().min(1, "Please select your availability"),
  interests: z.string().min(1, "Please select your interests"),
  experience: z.string().optional(),
  references: z.string().optional(),
  emergencyContactName: z.string().min(1, "Emergency contact name is required"),
  emergencyContactPhone: z.string().min(10, "Emergency contact phone is required"),
  emergencyContactRelationship: z.string().min(1, "Relationship is required"),
  isOver18: z.boolean().refine(val => val === true, {
    message: "You must be 18 years or older to volunteer",
  }),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type VolunteerFormValues = z.infer<typeof volunteerSchema>;

const availabilityOptions = [
  { id: "weekdays", label: "Weekdays" },
  { id: "weekends", label: "Weekends" },
  { id: "evenings", label: "Evenings" },
  { id: "mornings", label: "Mornings" },
  { id: "flexible", label: "Flexible" },
];

const interestOptions = [
  { id: "education", label: "Education Programs" },
  { id: "environment", label: "Environmental Projects" },
  { id: "healthcare", label: "Healthcare Initiatives" },
  { id: "fundraising", label: "Fundraising" },
  { id: "events", label: "Event Planning" },
  { id: "admin", label: "Administrative Support" },
  { id: "social", label: "Social Media / Marketing" },
  { id: "other", label: "Other" },
];

const skillsOptions = [
  { id: "communication", label: "Communication" },
  { id: "organization", label: "Organization" },
  { id: "leadership", label: "Leadership" },
  { id: "teaching", label: "Teaching" },
  { id: "technical", label: "Technical / IT" },
  { id: "healthcare", label: "Healthcare" },
  { id: "languages", label: "Foreign Languages" },
  { id: "creative", label: "Creative Arts" },
  { id: "writing", label: "Writing" },
  { id: "marketing", label: "Marketing" },
];

export default function VolunteerPage() {
  const { toast } = useToast();
  
  const form = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      skills: [],
      availability: "",
      interests: "",
      experience: "",
      references: "",
      emergencyContactName: "",
      emergencyContactPhone: "",
      emergencyContactRelationship: "",
      isOver18: false,
      agreeToTerms: false,
    },
  });
  
  const onSubmit = (data: VolunteerFormValues) => {
    // Simulate form submission
    toast({
      title: "Processing your application...",
    });
    
    setTimeout(() => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest in volunteering with us. We'll be in touch soon.",
      });
      
      // Reset form
      form.reset();
    }, 2000);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-muted">
        <header className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Become a Volunteer</h1>
            <p className="max-w-2xl mx-auto text-primary-foreground/90">
              Join our community of dedicated volunteers and help us make a positive impact in communities worldwide.
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
                  <CardTitle>Volunteer Application</CardTitle>
                  <CardDescription>
                    Please fill out the form below to apply as a volunteer. All fields marked with * are required.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name *</FormLabel>
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
                                <FormLabel>Last Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Smith" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email *</FormLabel>
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
                                <FormLabel>Phone *</FormLabel>
                                <FormControl>
                                  <Input placeholder="(123) 456-7890" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem className="mb-4">
                              <FormLabel>Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="123 Main St" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City *</FormLabel>
                                <FormControl>
                                  <Input placeholder="New York" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>State *</FormLabel>
                                <FormControl>
                                  <Input placeholder="NY" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="zipCode"
                            render={({ field }) => (
                              <FormItem className="sm:col-span-2">
                                <FormLabel>ZIP Code *</FormLabel>
                                <FormControl>
                                  <Input placeholder="10001" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Volunteer Information</h3>
                        
                        <FormField
                          control={form.control}
                          name="skills"
                          render={() => (
                            <FormItem>
                              <div className="mb-4">
                                <FormLabel>Skills & Talents *</FormLabel>
                                <FormDescription>
                                  Select all that apply
                                </FormDescription>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {skillsOptions.map((skill) => (
                                  <FormField
                                    key={skill.id}
                                    control={form.control}
                                    name="skills"
                                    render={({ field }) => {
                                      return (
                                        <FormItem
                                          key={skill.id}
                                          className="flex flex-row items-start space-x-3 space-y-0"
                                        >
                                          <FormControl>
                                            <Checkbox
                                              checked={field.value?.includes(skill.id)}
                                              onCheckedChange={(checked) => {
                                                return checked
                                                  ? field.onChange([...field.value, skill.id])
                                                  : field.onChange(
                                                      field.value?.filter(
                                                        (value) => value !== skill.id
                                                      )
                                                    );
                                              }}
                                            />
                                          </FormControl>
                                          <FormLabel className="font-normal">
                                            {skill.label}
                                          </FormLabel>
                                        </FormItem>
                                      );
                                    }}
                                  />
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-6">
                          <FormField
                            control={form.control}
                            name="availability"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Availability *</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select your availability" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {availabilityOptions.map((option) => (
                                      <SelectItem key={option.id} value={option.id}>
                                        {option.label}
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
                            name="interests"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Areas of Interest *</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select your interests" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {interestOptions.map((option) => (
                                      <SelectItem key={option.id} value={option.id}>
                                        {option.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem className="mb-6">
                              <FormLabel>Previous Volunteer Experience</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your previous volunteer experience"
                                  className="min-h-[100px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="references"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>References</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Please provide names and contact information for references"
                                  className="min-h-[100px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Emergency Contact</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          <FormField
                            control={form.control}
                            name="emergencyContactName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name *</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="emergencyContactPhone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone *</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="emergencyContactRelationship"
                          render={({ field }) => (
                            <FormItem className="mb-6">
                              <FormLabel>Relationship *</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Spouse, Parent, Friend" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="isOver18"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  I confirm that I am 18 years or older *
                                </FormLabel>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="agreeToTerms"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  I agree to the volunteer terms and conditions *
                                </FormLabel>
                                <FormDescription>
                                  By checking this box, you agree to our <Link href="/terms" className="text-primary hover:underline">terms of service</Link> and <Link href="/privacy" className="text-primary hover:underline">privacy policy</Link>.
                                </FormDescription>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Submit Application
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="border-0 shadow-md sticky top-8">
                <CardHeader>
                  <CardTitle>Why Volunteer With Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Smile className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Make a Difference</h4>
                      <p className="text-sm text-muted-foreground">
                        Help create positive change in communities worldwide.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Build Connections</h4>
                      <p className="text-sm text-muted-foreground">
                        Meet like-minded individuals and expand your network.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Flexible Commitment</h4>
                      <p className="text-sm text-muted-foreground">
                        Volunteer on your schedule with opportunities that fit your availability.
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium mb-2">Volunteer Opportunities</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <ChevronRight className="h-4 w-4 mr-1 text-primary" />
                        Community outreach and support
                      </li>
                      <li className="flex items-center text-sm">
                        <ChevronRight className="h-4 w-4 mr-1 text-primary" />
                        Event planning and coordination
                      </li>
                      <li className="flex items-center text-sm">
                        <ChevronRight className="h-4 w-4 mr-1 text-primary" />
                        Fundraising and donor relations
                      </li>
                      <li className="flex items-center text-sm">
                        <ChevronRight className="h-4 w-4 mr-1 text-primary" />
                        Administrative and operational support
                      </li>
                      <li className="flex items-center text-sm">
                        <ChevronRight className="h-4 w-4 mr-1 text-primary" />
                        Marketing and social media management
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Questions about volunteering? Contact us at <a href="mailto:volunteer@hopefoundation.org" className="text-primary hover:underline">volunteer@hopefoundation.org</a>
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}