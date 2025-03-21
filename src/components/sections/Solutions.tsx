
import React, { useEffect, useRef } from 'react';
import GlassMorphicCard from '../ui/GlassMorphicCard';
import AnimatedCard from '../ui/AnimatedCard';
import { ArrowRight, BarChart3, Database, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: <BarChart3 className="h-8 w-8 text-brand-blue" />,
    title: "AI Analytics",
    description: "Transform your data into actionable insights with advanced AI analytics that reveal patterns, trends, and opportunities.",
    link: "#"
  },
  {
    icon: <Zap className="h-8 w-8 text-brand-blue" />,
    title: "Intelligent Automation",
    description: "Streamline operations with AI-powered automation that handles complex tasks, reduces errors, and increases productivity.",
    link: "#"
  },
  {
    icon: <Database className="h-8 w-8 text-brand-blue" />,
    title: "Predictive Insights",
    description: "Anticipate market changes, customer needs, and operational requirements with AI-driven predictive models.",
    link: "#"
  }
];

const Solutions = () => {
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
    <section id="solutions" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in-view mb-4">
            <span className="gradient-text">Enterprise Solutions</span>
          </h2>
          <p className="text-xl text-brand-gray fade-in-view">
            Our AI solutions are designed to solve your most complex business challenges and drive measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <AnimatedCard key={index} index={index} className="h-full">
              <GlassMorphicCard className="h-full flex flex-col">
                <div className="mb-6">{solution.icon}</div>
                <h3 className="text-xl font-medium mb-3">{solution.title}</h3>
                <p className="text-brand-gray mb-6 flex-grow">{solution.description}</p>
                <a 
                  href={solution.link} 
                  className="inline-flex items-center text-brand-blue hover:underline transition-all group"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </GlassMorphicCard>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="mt-20 fade-in-view">
          <GlassMorphicCard className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-medium">Custom AI Development</h3>
                <p className="text-brand-gray">
                  Need a tailored AI solution for your specific business challenge? Our team of AI specialists can build custom, scalable solutions designed for your unique requirements.
                </p>
                <Button>
                  Explore Custom Solutions
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://placehold.co/600x400/F6F8FA/1A1F2C/?text=Custom+AI+Development" 
                  alt="Custom AI Development" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </GlassMorphicCard>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
