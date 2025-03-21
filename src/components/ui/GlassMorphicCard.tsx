
import React from 'react';
import { cn } from "@/lib/utils";

interface GlassMorphicCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowEffect?: boolean;
  variant?: 'default' | 'subtle' | 'intense';
}

const GlassMorphicCard = ({ 
  children, 
  className, 
  hoverEffect = true,
  glowEffect = false,
  variant = 'default'
}: GlassMorphicCardProps) => {
  // Determine variant-specific classes
  const variantClasses = {
    default: "bg-white/80 backdrop-blur-md border border-white/20",
    subtle: "bg-white/60 backdrop-blur-sm border border-white/10",
    intense: "bg-white/90 backdrop-blur-xl border border-white/30"
  };

  return (
    <div 
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        variantClasses[variant],
        hoverEffect && "hover:shadow-lg hover:translate-y-[-5px]",
        glowEffect && "hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassMorphicCard;
