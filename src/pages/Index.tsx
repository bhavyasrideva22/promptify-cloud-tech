
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Solutions from '@/components/sections/Solutions';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import MouseTrackingGlow from '@/components/ui/MouseTrackingGlow';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add smooth cursor animations
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (cursor.parentNode) {
        document.body.removeChild(cursor);
      }
    };
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
        <Hero />
        <Solutions />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </MouseTrackingGlow>
  );
};

export default Index;
