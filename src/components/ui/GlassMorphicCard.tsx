
import React from 'react';
import { cn } from "@/lib/utils";

interface GlassMorphicCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassMorphicCard = ({ 
  children, 
  className, 
  hoverEffect = true 
}: GlassMorphicCardProps) => {
  return (
    <div 
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        hoverEffect && "hover:shadow-lg hover:translate-y-[-5px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassMorphicCard;
