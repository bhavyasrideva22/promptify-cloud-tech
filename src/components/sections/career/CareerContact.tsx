
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, FileText } from 'lucide-react';
import GlassMorphicCard from '@/components/ui/GlassMorphicCard';

const CareerContact = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-blue-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't see the right role?</h2>
          <p className="text-lg text-brand-slate/80 mb-12">
            We're always looking for talented individuals to join our team. If you don't see a position
            that matches your skills, send us your resume and let us know how you can contribute.
          </p>
          
          <GlassMorphicCard 
            className="p-10 max-w-2xl mx-auto"
            hoverEffect={true}
            glowEffect={true}
          >
            <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
            <p className="text-brand-slate/80 mb-8">
              Send your resume to our talent acquisition team, and we'll reach out if there's a good match.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>careers@nexusai.com</span>
              </Button>
              
              <Button variant="outline" className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>Upload Resume</span>
              </Button>
            </div>
          </GlassMorphicCard>
        </div>
      </div>
    </section>
  );
};

export default CareerContact;
