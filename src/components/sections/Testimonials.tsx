
import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import GlassMorphicCard from '../ui/GlassMorphicCard';
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The AI analytics platform developed by NexusAI has transformed how we approach decision-making. We've seen a 35% increase in operational efficiency since implementation.",
    name: "Sarah Johnson",
    title: "CTO, Global Enterprises",
    avatar: "https://placehold.co/100/1A1F2C/FFFFFF/?text=SJ"
  },
  {
    quote: "Their intelligent automation solution has allowed us to redirect 5,000+ human hours per month to more strategic initiatives. The ROI has been remarkable.",
    name: "Michael Chen",
    title: "Director of Innovation, TechForward",
    avatar: "https://placehold.co/100/1A1F2C/FFFFFF/?text=MC"
  },
  {
    quote: "We've been impressed by not just the technology, but the level of expertise and support. NexusAI doesn't just provide AI – they provide business transformation.",
    name: "Elena Rodriguez",
    title: "VP of Operations, FutureCorp",
    avatar: "https://placehold.co/100/1A1F2C/FFFFFF/?text=ER"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
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
  
  // Auto-rotate testimonials
  useEffect(() => {
    timeoutRef.current = setTimeout(nextTestimonial, 6000);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex]);
  
  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="section-padding"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in-view mb-4">
            <span className="gradient-text">Client Success Stories</span>
          </h2>
          <p className="text-xl text-brand-gray fade-in-view">
            Discover how our AI solutions are driving measurable results for enterprises worldwide.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto fade-in-view">
          <GlassMorphicCard className="relative">
            <Quote className="h-16 w-16 text-brand-blue/20 absolute top-6 left-6" />
            
            <div className="pt-16 pb-8 px-8">
              <div className="relative h-40">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "absolute transition-all duration-500 w-full",
                      index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    )}
                  >
                    <p className="text-xl italic text-brand-slate">
                      "{testimonial.quote}"
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-brand-slate rounded-full h-12 w-12 overflow-hidden mr-4">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-brand-gray">{testimonials[activeIndex].title}</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-slate/5 px-8 py-4 rounded-b-2xl">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "h-2 rounded-full transition-all",
                        index === activeIndex 
                          ? "w-8 bg-brand-blue" 
                          : "w-2 bg-brand-blue/30"
                      )}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-brand-gray">
                  {activeIndex + 1} of {testimonials.length}
                </p>
              </div>
            </div>
          </GlassMorphicCard>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
