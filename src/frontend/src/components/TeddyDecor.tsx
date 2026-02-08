import React from 'react';

interface TeddyDecorProps {
  count?: number;
  className?: string;
}

export function TeddyDecor({ count = 12, className = '' }: TeddyDecorProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 40 + 40; // 40-80px
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const rotation = Math.random() * 360;
        const animationDelay = Math.random() * 3;
        const animationDuration = Math.random() * 2 + 3;
        
        return (
          <img
            key={i}
            src="/assets/generated/teddy-sticker.dim_256x256.png"
            alt=""
            className="absolute animate-float opacity-30"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              transform: `rotate(${rotation}deg)`,
              animationDelay: `${animationDelay}s`,
              animationDuration: `${animationDuration}s`
            }}
          />
        );
      })}
    </div>
  );
}
