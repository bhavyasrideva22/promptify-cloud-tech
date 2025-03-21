
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}

const AnimatedCard = ({ 
  children, 
  className, 
  delay = 0,
  index = 0
}: AnimatedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef} 
      className={cn(
        "stagger-item",
        className
      )}
      style={{ '--index': index } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
