
import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface MouseTrackingGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowIntensity?: number;
  glowSize?: number;
  disabled?: boolean;
}

const MouseTrackingGlow = ({
  children,
  className,
  glowColor = "rgba(14, 165, 233, 0.2)",
  glowIntensity = 0.5,
  glowSize = 200,
  disabled = false
}: MouseTrackingGlowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (disabled) return;
    
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [disabled]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      {children}
      {!disabled && isHovering && (
        <div 
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: `${position.x - glowSize/2}px`,
            top: `${position.y - glowSize/2}px`,
            width: `${glowSize}px`,
            height: `${glowSize}px`,
            background: `radial-gradient(circle, ${glowColor} 0%, rgba(255,255,255,0) 70%)`,
            opacity: glowIntensity,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            mixBlendMode: 'soft-light'
          }}
        />
      )}
    </div>
  );
};

export default MouseTrackingGlow;
