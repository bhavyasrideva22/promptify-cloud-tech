
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ParallaxScroll from '@/components/ui/ParallaxScroll';

const CareerBenefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-blue-50/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join Us?</h2>
          <p className="text-lg text-brand-slate/80">
            We offer more than just a job - we provide an opportunity to be part of something meaningful 
            while enjoying benefits that support your professional and personal well-being.
          </p>
        </div>
        
        <Tabs defaultValue="worklife" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="worklife">Work-Life Balance</TabsTrigger>
            <TabsTrigger value="development">Growth & Development</TabsTrigger>
            <TabsTrigger value="perks">Perks & Benefits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="worklife">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ParallaxScroll direction="left" speed={0.3}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Flexible Working</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-brand-blue/10 p-2 rounded-full mr-4 mt-1">
                        <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Remote-First Culture</h4>
                        <p className="text-brand-slate/80">Work from anywhere with our distributed team setup, allowing you to create your ideal workspace.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-brand-blue/10 p-2 rounded-full mr-4 mt-1">
                        <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Flexible Hours</h4>
                        <p className="text-brand-slate/80">Structure your workday around your peak productivity times with our flexible scheduling approach.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-brand-blue/10 p-2 rounded-full mr-4 mt-1">
                        <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Unlimited PTO</h4>
                        <p className="text-brand-slate/80">Take the time you need to recharge with our trust-based time-off policy.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </ParallaxScroll>
              
              <ParallaxScroll direction="right" speed={0.3}>
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Remote work" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </ParallaxScroll>
            </div>
          </TabsContent>
          
          <TabsContent value="development">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ParallaxScroll direction="left" speed={0.3}>
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Professional development" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </ParallaxScroll>
              
              <ParallaxScroll direction="right" speed={0.3}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Grow With Us</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-brand-blue/10 p-2 rounded-full mr-4 mt-1">
                        <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Learning Budget</h4>
                        <p className="text-brand-slate/80">Annual budget for courses, conferences, and educational materials to expand your skills.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-brand-blue/10 p-2 rounded-full mr-4 mt-1">
                        <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Mentorship Program</h4>
                        <p className="text-brand-slate/80">Connect with industry experts and leaders who will guide your career development.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-brand-blue/10 p-2 rounded-full mr-4 mt-1">
                        <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Career Pathing</h4>
                        <p className="text-brand-slate/80">Clear advancement tracks with transparent requirements and regular progression reviews.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </ParallaxScroll>
            </div>
          </TabsContent>
          
          <TabsContent value="perks">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Health & Wellness</h3>
                  <p className="text-brand-slate/80">Comprehensive health insurance, wellness programs, and mental health support.</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 12h-6.5a2 2 0 1 0 0 4h1a2 2 0 1 1 0 4H8"></path>
                      <path d="M12 6v2"></path>
                      <path d="M12 16v2"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Competitive Compensation</h3>
                  <p className="text-brand-slate/80">Above-market salaries with equity options and performance bonuses.</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="M6 8h.01"></path>
                      <path d="M10 8h.01"></path>
                      <path d="M14 8h.01"></path>
                      <path d="M18 8h.01"></path>
                      <path d="M6 12h.01"></path>
                      <path d="M10 12h.01"></path>
                      <path d="M14 12h.01"></path>
                      <path d="M18 12h.01"></path>
                      <path d="M6 16h.01"></path>
                      <path d="M10 16h.01"></path>
                      <path d="M14 16h.01"></path>
                      <path d="M18 16h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Tech Allowance</h3>
                  <p className="text-brand-slate/80">Budget for home office setup and regular tech upgrades to ensure you have the best tools.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CareerBenefits;
