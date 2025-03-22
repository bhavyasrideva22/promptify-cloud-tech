
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import ParallaxScroll from '@/components/ui/ParallaxScroll';

const CareerHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 px-4 md:px-8 lg:px-12">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ParallaxScroll direction="up" speed={0.3}>
            <div className="space-y-6">
              <div>
                <h4 className="text-brand-blue font-medium mb-4">Careers</h4>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-slate leading-tight">
                  Join our team and <span className="gradient-text">shape the future</span> with AI
                </h1>
              </div>
              <p className="text-lg text-brand-slate/80 md:pr-12">
                We're looking for talented individuals passionate about AI and cloud technologies to help us build 
                innovative solutions that transform how businesses operate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="px-8" asChild>
                  <a href="#positions">View Open Positions</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#culture" className="flex items-center gap-2">Our Culture <ArrowDown size={16} /></a>
                </Button>
              </div>
            </div>
          </ParallaxScroll>
          
          <ParallaxScroll direction="down" speed={0.5}>
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/40 to-transparent"></div>
            </div>
          </ParallaxScroll>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
