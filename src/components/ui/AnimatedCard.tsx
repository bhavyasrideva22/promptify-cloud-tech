
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
  tiltEffect?: boolean;
  animateOnHover?: boolean;
}

const AnimatedCard = ({ 
  children, 
  className, 
  delay = 0,
  index = 0,
  tiltEffect = false,
  animateOnHover = false
}: AnimatedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  
  // Scroll animation effect
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
  
  // Tilt effect handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect || !cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 10;
    const tiltY = -(x - centerX) / 10;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease'
    });
  };
  
  const handleMouseLeave = () => {
    if (!tiltEffect) return;
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease'
    });
  };
  
  return (
    <div 
      ref={cardRef} 
      className={cn(
        "stagger-item",
        animateOnHover && "hover:scale-105 transition-transform duration-300",
        className
      )}
      style={{ 
        '--index': index,
        ...tiltStyle
      } as React.CSSProperties}
      onMouseMove={tiltEffect ? handleMouseMove : undefined}
      onMouseLeave={tiltEffect ? handleMouseLeave : undefined}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
