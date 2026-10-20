import React from 'react';

interface GloryLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showTagline?: boolean;
  variant?: 'full' | 'mark' | 'horizontal' | 'poster';
}

export const GloryLogo: React.FC<GloryLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  variant = 'horizontal',
}) => {
  // Dimension scales
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-36 h-36',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-2xl',
    xl: 'text-4xl',
    '2xl': 'text-5xl',
  };

  const techSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[11px] tracking-[0.26em]',
    lg: 'text-xs tracking-[0.3em]',
    xl: 'text-base tracking-[0.35em]',
    '2xl': 'text-xl tracking-[0.38em]',
  };

  // High-fidelity vector recreation of the stylized G emblem with ascending pixel breakout
  const LogoMark = ({ customSize }: { customSize?: string }) => (
    <div className={`relative ${customSize || iconSizes[size]} shrink-0 flex items-center justify-center select-none`}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_4px_16px_rgba(0,140,255,0.45)]"
      >
        <defs>
          {/* Main Blue Gradient from cyan to rich electric cobalt */}
          <linearGradient id="gloryBlueArc" x1="10%" y1="0%" x2="95%" y2="100%">
            <stop offset="0%" stopColor="#00C4FF" />
            <stop offset="45%" stopColor="#0084FF" />
            <stop offset="100%" stopColor="#0052E6" />
          </linearGradient>

          {/* Clean White to Silver 3D Swoop Gradient */}
          <linearGradient id="gloryWhiteArc" x1="0%" y1="100%" x2="100%" y2="20%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="85%" stopColor="#EAF3FF" />
            <stop offset="100%" stopColor="#C9E1FF" />
          </linearGradient>

          {/* Pixel Cube Shading Gradients */}
          <linearGradient id="pixelGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#0080FF" />
          </linearGradient>
          <linearGradient id="pixelGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="pixelGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        {/* 1. The Large Outer Electric Blue Arc of the "G" */}
        <path
          d="M 58 10
             C 86 10, 102 28, 102 54
             C 102 57, 101.4 60, 100.5 63
             L 85 63
             C 85.8 59, 86.2 56, 86.2 53
             C 86.2 38, 73.5 26, 58 26
             C 42 26, 30 38, 30 54
             C 30 70, 42 82, 58 82
             C 71 82, 82 73.5, 84.5 62
             L 100.5 62
             C 97 81, 79.5 98, 58 98
             C 33 98, 14 78, 14 54
             C 14 29, 33 10, 58 10 Z"
          fill="url(#gloryBlueArc)"
        />

        {/* 2. The Dynamic Inner Crisp White Swoosh & Crossbar */}
        <path
          d="M 58 26
             C 71.5 26, 82.5 35.5, 84 48
             L 68 48
             C 67 43.5, 63 39.5, 57 39.5
             C 48 39.5, 42 46, 42 54
             C 42 62.5, 48 69, 57 69
             C 64.5 69, 69.5 64, 70.8 58
             L 57 58
             L 57 48
             L 88 48
             C 88 50.5, 88.2 53, 88.2 55.5
             C 88.2 73, 75 84, 57 84
             C 39 84, 25 71, 25 54
             C 25 39, 39 26, 58 26 Z"
          fill="url(#gloryWhiteArc)"
        />

        {/* 3. The 7 Digital Pixel Cubes (Modular Data / Coding Breakout at Upper Right) */}
        {/* Top-most small cube */}
        <rect x="88" y="7" width="8" height="8" rx="1.5" fill="url(#pixelGrad1)" />
        {/* Upper-right cube */}
        <rect x="100" y="14" width="9" height="9" rx="1.5" fill="url(#pixelGrad2)" />
        {/* Top-mid cube */}
        <rect x="80" y="15" width="8.5" height="8.5" rx="1.5" fill="url(#pixelGrad1)" />
        {/* Central main pixel cube */}
        <rect x="89" y="18" width="10" height="10" rx="1.5" fill="url(#pixelGrad1)" />
        {/* Far-right offset cube */}
        <rect x="102" y="27" width="8" height="8" rx="1.5" fill="url(#pixelGrad3)" />
        {/* Lower cube */}
        <rect x="91" y="31" width="9" height="9" rx="1.5" fill="url(#pixelGrad2)" />
        {/* Deep offset accent cube */}
        <rect x="81" y="26" width="7" height="7" rx="1" fill="url(#pixelGrad3)" />
      </svg>
    </div>
  );

  if (variant === 'mark') {
    return <LogoMark />;
  }

  // The Exact Authentic Poster Card as provided in the uploaded image
  if (variant === 'poster') {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-[#060D20] border border-blue-900/60 p-8 sm:p-10 shadow-2xl flex flex-col items-center text-center select-none ${className}`}>
        {/* Circuit board traces pattern on top-right */}
        <svg
          className="absolute top-0 right-0 w-44 h-44 opacity-25 pointer-events-none text-blue-400"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M 40 10 L 70 10 L 85 25 L 100 25" />
          <path d="M 60 0 L 60 15 L 75 30 L 100 30" />
          <path d="M 50 35 L 70 35 L 80 45 L 100 45" />
          <circle cx="40" cy="10" r="2" fill="currentColor" />
          <circle cx="85" cy="25" r="2" fill="currentColor" />
          <circle cx="50" cy="35" r="2" fill="currentColor" />
        </svg>

        {/* Laptop edge visual cue at bottom-right */}
        <div className="absolute -bottom-10 -right-10 w-40 h-28 bg-gradient-to-tl from-slate-700/30 to-transparent transform -rotate-12 rounded-lg pointer-events-none border-t border-slate-600/30" />

        {/* Ambient radial glow behind emblem */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* The Emblem */}
        <div className="relative mb-4">
          <LogoMark customSize="w-24 h-24 sm:w-28 sm:h-28" />
        </div>

        {/* GLORY */}
        <div className="font-extrabold tracking-tight text-white leading-none text-4xl sm:text-5xl font-sans mt-2 drop-shadow-md">
          GLORY
        </div>

        {/* TECHNOLOGIES */}
        <div className="font-bold tracking-[0.25em] sm:tracking-[0.28em] text-[#0096FF] text-sm sm:text-base mt-2 uppercase font-sans">
          TECHNOLOGIES
        </div>

        {/* Center hairline with cyan luminous dot */}
        <div className="flex items-center justify-center w-56 sm:w-64 my-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-slate-500/60"></div>
          <div className="w-2 h-2 rounded-full bg-[#00D2FF] mx-2.5 shadow-[0_0_10px_#00D2FF]"></div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-slate-500/60"></div>
        </div>

        {/* Tagline: INNOVATE. BUILD. DELIVER. */}
        <div className="text-xs sm:text-sm font-bold tracking-[0.22em] text-white uppercase font-sans">
          INNOVATE. BUILD. DELIVER.
        </div>

        {/* Subtitle: Smart Solutions. Powerful Results. */}
        <div className="text-[11px] sm:text-xs text-slate-300 font-medium tracking-wide mt-2">
          Smart Solutions. Powerful Results.
        </div>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <LogoMark />
        <div className="mt-3">
          <div className="font-extrabold tracking-tight text-white leading-none text-2xl md:text-3xl font-sans">
            GLORY
          </div>
          <div className="font-bold tracking-[0.28em] text-[#0096FF] text-xs md:text-sm mt-1 uppercase">
            TECHNOLOGIES
          </div>
        </div>

        {/* Fine divider with glowing cyan center dot */}
        <div className="flex items-center justify-center w-48 my-2.5">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-blue-500/40"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] mx-2 shadow-[0_0_8px_#00D2FF]"></div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-blue-500/40"></div>
        </div>

        {showTagline && (
          <div className="space-y-0.5">
            <p className="text-[11px] font-bold tracking-[0.25em] text-white uppercase">
              INNOVATE. BUILD. DELIVER.
            </p>
            <p className="text-[10px] text-slate-300 font-medium">
              Smart Solutions. Powerful Results.
            </p>
          </div>
        )}
      </div>
    );
  }

  // Default horizontal lockup for TopBar and navigation
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <div className="flex flex-col leading-none">
        <div className={`font-black tracking-tight text-white ${textSizes[size]} font-sans`}>
          GLORY
        </div>
        <div className={`font-bold ${techSizes[size]} text-[#0096FF] uppercase mt-0.5`}>
          TECHNOLOGIES
        </div>
      </div>
    </div>
  );
};
