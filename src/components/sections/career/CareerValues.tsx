
import React from 'react';
import { Globe, Users, Briefcase, GraduationCap } from "lucide-react";
import GlassMorphicCard from '@/components/ui/GlassMorphicCard';

const values = [
  {
    icon: <Globe className="w-10 h-10 text-brand-blue mb-4" />,
    title: "Global Impact",
    description: "Build solutions that make a difference worldwide, transforming how businesses operate across various industries."
  },
  {
    icon: <Users className="w-10 h-10 text-brand-blue mb-4" />,
    title: "Collaborative Culture",
    description: "Work in diverse teams where every voice matters and innovation thrives through shared knowledge and experiences."
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-brand-blue mb-4" />,
    title: "Continuous Learning",
    description: "Grow your skills with our commitment to ongoing education, training, and exposure to cutting-edge technologies."
  },
  {
    icon: <Briefcase className="w-10 h-10 text-brand-blue mb-4" />,
    title: "Career Growth",
    description: "Chart your own path with clear advancement opportunities and personalized development plans."
  }
];

const CareerValues = () => {
  return (
    <section id="culture" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
          <p className="text-lg text-brand-slate/80">
            At NexusAI, we believe in creating an environment where innovation and personal growth go hand in hand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <GlassMorphicCard 
              key={index} 
              className="p-8 text-center"
              hoverEffect={true}
              glowEffect={true}
              variant="default"
            >
              {value.icon}
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-brand-slate/80">{value.description}</p>
            </GlassMorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerValues;
