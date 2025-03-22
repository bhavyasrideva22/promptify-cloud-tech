
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CareerHero from '@/components/sections/career/CareerHero';
import CareerBenefits from '@/components/sections/career/CareerBenefits';
import CareerPositions from '@/components/sections/career/CareerPositions';
import CareerValues from '@/components/sections/career/CareerValues';
import MouseTrackingGlow from '@/components/ui/MouseTrackingGlow';
import CareerContact from '@/components/sections/career/CareerContact';

const Career = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MouseTrackingGlow 
      className="min-h-screen bg-brand-light"
      glowSize={300}
      glowColor="rgba(14, 165, 233, 0.1)"
      glowIntensity={0.3}
    >
      <Navbar />
      <main>
        <CareerHero />
        <CareerValues />
        <CareerBenefits />
        <CareerPositions />
        <CareerContact />
      </main>
      <Footer />
    </MouseTrackingGlow>
  );
};

export default Career;
