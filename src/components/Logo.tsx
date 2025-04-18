
import React from 'react';
import { Mic } from 'lucide-react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="h-8 w-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-md">
          <Mic className="h-4 w-4 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full animate-pulse-slow"></div>
      </div>
      <span className="font-bold text-2xl">Vocacity</span>
    </div>
  );
};

export default Logo;
