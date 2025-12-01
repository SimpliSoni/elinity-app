import React from 'react';
import { CardProps } from '../types';

const GlassCard: React.FC<CardProps> = ({ className = "", children, variant = "default" }) => {
  const baseStyles = "glass-panel rounded-[24px] relative overflow-hidden transition-all duration-300";
  const hoverStyles = variant === 'default' ? "glass-card-hover" : "";
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {/* Optional top-left glow for specific cards */}
      {variant === 'glow' && (
         <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#BB3DF6]/20 rounded-full blur-3xl pointer-events-none mix-blend-screen" />
      )}
      
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* Subtle border gradient overlay */}
      <div className="absolute inset-0 rounded-[24px] border border-white/5 pointer-events-none" />
      
      {/* Inner sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-white/[0.02] pointer-events-none" />
    </div>
  );
};

export default GlassCard;