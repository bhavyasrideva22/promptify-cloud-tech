
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import AnimatedCard from '../ui/AnimatedCard';
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Advanced Machine Learning",
    description: "Our systems continuously learn and improve from data, becoming more accurate and valuable over time.",
    benefits: [
      "Self-improving algorithms",
      "Pattern recognition",
      "Anomaly detection"
    ]
  },
  {
    title: "Seamless Integration",
    description: "Our solutions integrate effortlessly with your existing systems and workflows for minimum disruption.",
    benefits: [
      "API-first architecture",
      "Legacy system compatibility",
      "No-code connectors"
    ]
  },
  {
    title: "Enterprise-Grade Security",
    description: "Built with security at its core, ensuring your data and AI models are protected at every level.",
    benefits: [
      "End-to-end encryption",
      "Role-based access control",
      "Compliance with regulations"
    ]
  },
  {
    title: "Scalable Infrastructure",
    description: "Our cloud-native architecture scales automatically to match your needs, from startups to enterprises.",
    benefits: [
      "Horizontal scaling",
      "Multi-region deployment",
      "Load balancing"
    ]
  }
];

const Features = () => {
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
      id="features" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-brand-light to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in-view mb-4">
            Why Choose <span className="gradient-text">Our Platform</span>
          </h2>
          <p className="text-xl text-brand-gray fade-in-view">
            We've built our AI solutions with the enterprise in mind, focusing on performance, security, and scalability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <AnimatedCard key={index} index={index}>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">{feature.title}</h3>
                <p className="text-brand-gray">{feature.description}</p>
                <ul className="space-y-2 mt-4">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="mt-24 fade-in-view">
          <div className="neo-card mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium mb-4">Experience the Platform</h3>
              <p className="text-brand-gray">
                See how our AI solutions work in a real-world scenario with our interactive demo.
              </p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-brand-slate/5 flex items-center justify-center">
              <img 
                src="https://placehold.co/800x450/F6F8FA/1A1F2C/?text=Interactive+Demo" 
                alt="Platform Demo" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
