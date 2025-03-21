
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
    
    const fadeElements = sectionRef.current?.querySelectorAll('.fade-in-view');
    fadeElements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      fadeElements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-brand-slate to-brand-slate/90 text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center fade-in-view">
          <h2 className="text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a consultation with our AI experts and discover how our solutions can address your specific business challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-brand-slate hover:bg-gray-100 group">
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Case Studies
            </Button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-gray-300 mb-4">
              Join leading organizations already using our AI solutions
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              <img src="https://placehold.co/120x40/1A1F2C/FFFFFF/?text=COMPANY" alt="Company logo" className="h-8" />
              <img src="https://placehold.co/120x40/1A1F2C/FFFFFF/?text=COMPANY" alt="Company logo" className="h-8" />
              <img src="https://placehold.co/120x40/1A1F2C/FFFFFF/?text=COMPANY" alt="Company logo" className="h-8" />
              <img src="https://placehold.co/120x40/1A1F2C/FFFFFF/?text=COMPANY" alt="Company logo" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
