
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface ParallaxScrollProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Speed multiplier (1 is normal, higher values increase effect)
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ParallaxScroll = ({ 
  children, 
  className,
  speed = 0.5,
  direction = 'up'
}: ParallaxScrollProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    let startPosition = 0;
    let transformProperty = '';
    
    // Set transform property based on direction
    switch (direction) {
      case 'up':
      case 'down':
        transformProperty = 'translateY';
        break;
      case 'left':
      case 'right':
        transformProperty = 'translateX';
        break;
    }
    
    // Invert direction if needed
    const multiplier = (direction === 'down' || direction === 'right') ? -1 : 1;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementTop = element.getBoundingClientRect().top + scrollPosition;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Only apply effect when element is in viewport
      if (scrollPosition + windowHeight > elementTop && scrollPosition < elementTop + elementHeight) {
        const relativeScroll = (scrollPosition - elementTop + windowHeight) * speed * multiplier * 0.1;
        element.style.transform = `${transformProperty}(${relativeScroll}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);
  
  return (
    <div 
      ref={elementRef} 
      className={cn("transition-transform", className)}
    >
      {children}
    </div>
  );
};

export default ParallaxScroll;
