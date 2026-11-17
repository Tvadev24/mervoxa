
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightText?: boolean;
}

export default function Logo({
  className = '',
  variant = 'full',
  size = 'md',
  lightText = false,
}: LogoProps) {
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision SVG Mark matching the logo provided by user */}
      <div className="relative flex-shrink-0">
        <svg
          viewBox="0 0 100 80"
          className={`${heightClasses[size]} w-auto`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Stylized M Contour in Deep Charcoal / Titanium Onyx */}
          <path
            d="M 8 62 C 6 48 10 32 19 22 C 26 14 34 16 41 26 C 45 32 48 38 52 38 C 56 38 59 32 63 26 C 70 16 78 14 85 22 C 94 32 98 48 96 62 C 94 66 90 68 86 64 C 82 58 83 44 76 34 C 71 28 66 30 63 36 C 58 46 54 54 48 54 C 42 54 38 46 33 36 C 30 30 25 28 20 34 C 13 44 14 58 10 64 C 8 66 7 64 8 62 Z"
            fill={lightText ? '#334155' : '#1e293b'}
            stroke={lightText ? '#475569' : '#0f172a'}
            strokeWidth="1.2"
          />
          {/* Inner Rising Emerald Arrow Contour */}
          <path
            d="M 16 63 C 24 48 31 38 38 48 C 44 56 50 64 62 64 C 70 64 78 56 82 44 L 78 43 L 89 36 L 92 49 L 87 48 C 82 60 72 70 61 70 C 47 70 39 60 33 52 C 28 46 23 52 18 64 C 17 66 15 65 16 63 Z"
            fill="#16a34a"
          />
          {/* Forward Arrow head */}
          <polygon
            points="82,34 94,40 85,50"
            fill="#16a34a"
          />
        </svg>
      </div>

      {variant !== 'mark' && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline tracking-tight font-extrabold font-heading text-xl sm:text-2xl leading-none">
            <span className="text-[#16a34a]">MER</span>
            <span className={lightText ? 'text-white' : 'text-[#0f172a]'}>VOXA</span>
          </div>
          <span
            className={`text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-bold mt-1 ${
              lightText ? 'text-emerald-400' : 'text-slate-600'
            }`}
          >
            Ventures Private Limited
          </span>
        </div>
      )}
    </div>
  );
}
