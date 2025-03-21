
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = heroRef.current?.querySelectorAll('.fade-in-view');
    childElements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      childElements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full filter blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block fade-in-view">
              <span className="bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium">
                Pioneering AI Solutions
              </span>
            </div>
            
            <h1 className="fade-in-view" style={{ transitionDelay: '100ms' }}>
              <span className="block">Transform Your Enterprise </span>
              <span className="gradient-text">With Intelligent AI</span>
            </h1>
            
            <p className="text-xl text-brand-gray fade-in-view" style={{ transitionDelay: '200ms' }}>
              We develop cutting-edge AI solutions that streamline operations, enhance decision-making, and drive innovation across your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 fade-in-view" style={{ transitionDelay: '300ms' }}>
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </div>
            
            <div className="pt-4 fade-in-view" style={{ transitionDelay: '400ms' }}>
              <p className="text-sm text-brand-gray">
                Trusted by leading companies worldwide
              </p>
              <div className="flex flex-wrap gap-8 items-center mt-4">
                <img src="https://placehold.co/100x30/F6F8FA/8E9196/?text=COMPANY" alt="Company logo" className="h-8 opacity-50" />
                <img src="https://placehold.co/100x30/F6F8FA/8E9196/?text=COMPANY" alt="Company logo" className="h-8 opacity-50" />
                <img src="https://placehold.co/100x30/F6F8FA/8E9196/?text=COMPANY" alt="Company logo" className="h-8 opacity-50" />
                <img src="https://placehold.co/100x30/F6F8FA/8E9196/?text=COMPANY" alt="Company logo" className="h-8 opacity-50" />
              </div>
            </div>
          </div>
          
          <div className="relative fade-in-view" style={{ transitionDelay: '500ms' }}>
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/F6F8FA/1A1F2C/?text=AI+Dashboard" 
                  alt="AI Dashboard Visualization" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-blue-600/20 rounded-2xl blur-3xl -z-10 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
