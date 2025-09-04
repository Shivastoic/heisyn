"use client"
import React, { useEffect, useState, memo } from 'react';
import Image from 'next/image';

// --- Type Definitions ---
type IconType = 'phone' | 'sheets' | 'docs' | 'whatsapp' | 'instagram' | 'twitter' | 'email' | 'calendar' | 'slack' | 'discord';

type GlowColor = 'cyan' | 'purple' | 'green' | 'orange';

interface AppIconProps {
  type: IconType;
}

interface AppConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingAppProps {
  config: AppConfig;
  angle: number;
  // ✅ FIX: Add isMobile prop to the interface
  isMobile: boolean; 
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- App Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  phone: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#4CAF50"/>
      </svg>
    ),
    color: '#4CAF50'
  },
  sheets: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="#0F9D58"/>
        <rect x="5" y="5" width="14" height="14" rx="1" fill="none" stroke="#0F9D58" strokeWidth="0.5"/>
      </svg>
    ),
    color: '#0F9D58'
  },
  docs: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" fill="#4285F4"/>
        <path d="M8 15h8v1H8v-1zm0-2h8v1H8v-1zm0-2h5v1H8v-1z" fill="#ffffff"/>
      </svg>
    ),
    color: '#4285F4'
  },
  whatsapp: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" fill="#25D366"/>
      </svg>
    ),
    color: '#25D366'
  },
  instagram: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <defs>
          <radialGradient id="instagram-gradient" cx="0.5" cy="1" r="1">
            <stop offset="0%" stopColor="#fdf497"/>
            <stop offset="5%" stopColor="#fdf497"/>
            <stop offset="45%" stopColor="#fd5949"/>
            <stop offset="60%" stopColor="#d6249f"/>
            <stop offset="90%" stopColor="#285AEB"/>
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="5.5" fill="url(#instagram-gradient)"/>
        <rect x="3" y="3" width="18" height="18" rx="4.5" fill="none" stroke="white" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="white"/>
      </svg>
    ),
    color: '#E4405F'
  },
  twitter: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#ffffff"/>
      </svg>
    ),
    color: '#ffffff'
  },
  email: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <defs>
          <linearGradient id="gmail-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EA4335"/>
            <stop offset="25%" stopColor="#FBBC04"/>
            <stop offset="50%" stopColor="#34A853"/>
            <stop offset="75%" stopColor="#4285F4"/>
            <stop offset="100%" stopColor="#EA4335"/>
          </linearGradient>
        </defs>
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.732-1.636 1.636-1.636.302 0 .587.088.823.237L12 10.183l9.541-6.125a1.636 1.636 0 0 1 .823-.237c.904 0 1.636.732 1.636 1.636z" fill="url(#gmail-gradient)"/>
      </svg>
    ),
    color: '#EA4335'
  },
  calendar: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" fill="#4285F4"/>
      </svg>
    ),
    color: '#4285F4'
  },
  slack: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#E01E5A"/>
      </svg>
    ),
    color: '#E01E5A'
  },
  discord: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z" fill="#5865F2"/>
      </svg>
    ),
    color: '#5865F2'
  }
};

// --- n8n Logo Component ---
const N8nLogo = () => (
  <svg viewBox="0 0 240 240" className="w-full h-full">
    <defs>
      <linearGradient id="n8n-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6D5A" />
        <stop offset="100%" stopColor="#FF4B4B" />
      </linearGradient>
    </defs>
    <rect width="240" height="240" rx="40" fill="url(#n8n-gradient)"/>
    <g fill="white">
      <path d="M60 60h30v50h30V60h30v120h-30v-50H90v50H60V60z"/>
      <circle cx="160" cy="100" r="15"/>
      <circle cx="160" cy="140" r="15"/>
    </g>
  </svg>
);

// --- Memoized Icon Component ---
const AppIcon = memo(({ type }: AppIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
AppIcon.displayName = 'AppIcon';

// --- Configuration for the Orbiting Apps ---
const getAppsConfig = (isMobile: boolean): AppConfig[] => {
  const scaleFactor = isMobile ? 0.7 : 1;
  
  return [
    // Inner Orbit - Communication Apps
    { 
      id: 'phone',
      orbitRadius: 100 * scaleFactor, 
      size: 40 * scaleFactor, 
      speed: 1, 
      iconType: 'phone', 
      phaseShift: 0, 
      glowColor: 'green',
      label: 'Phone Calls'
    },
    { 
      id: 'whatsapp',
      orbitRadius: 100 * scaleFactor, 
      size: 45 * scaleFactor, 
      speed: 1, 
      iconType: 'whatsapp', 
      phaseShift: (2 * Math.PI) / 4, 
      glowColor: 'green',
      label: 'WhatsApp'
    },
    { 
      id: 'email',
      orbitRadius: 100 * scaleFactor, 
      size: 40 * scaleFactor, 
      speed: 1, 
      iconType: 'email', 
      phaseShift: (4 * Math.PI) / 4, 
      glowColor: 'orange',
      label: 'Gmail'
    },
    { 
      id: 'slack',
      orbitRadius: 100 * scaleFactor, 
      size: 42 * scaleFactor, 
      speed: 1, 
      iconType: 'slack', 
      phaseShift: (6 * Math.PI) / 4, 
      glowColor: 'purple',
      label: 'Slack'
    },
    
    // Middle Orbit - Social & Productivity
    { 
      id: 'instagram',
      orbitRadius: 150 * scaleFactor, 
      size: 50 * scaleFactor, 
      speed: -0.7, 
      iconType: 'instagram', 
      phaseShift: 0, 
      glowColor: 'purple',
      label: 'Instagram'
    },
    { 
      id: 'twitter',
      orbitRadius: 150 * scaleFactor, 
      size: 45 * scaleFactor, 
      speed: -0.7, 
      iconType: 'twitter', 
      phaseShift: (2 * Math.PI) / 3, 
      glowColor: 'cyan',
      label: 'Twitter/X'
    },
    { 
      id: 'discord',
      orbitRadius: 150 * scaleFactor, 
      size: 45 * scaleFactor, 
      speed: -0.7, 
      iconType: 'discord', 
      phaseShift: (4 * Math.PI) / 3, 
      glowColor: 'purple',
      label: 'Discord'
    },
    
    // Outer Orbit - Productivity Tools
    { 
      id: 'sheets',
      orbitRadius: 200 * scaleFactor, 
      size: 45 * scaleFactor, 
      speed: 0.5, 
      iconType: 'sheets', 
      phaseShift: 0, 
      glowColor: 'green',
      label: 'Google Sheets'
    },
    { 
      id: 'docs',
      orbitRadius: 200 * scaleFactor, 
      size: 48 * scaleFactor, 
      speed: 0.5, 
      iconType: 'docs', 
      phaseShift: Math.PI, 
      glowColor: 'cyan',
      label: 'Google Docs'
    },
    { 
      id: 'calendar',
      orbitRadius: 200 * scaleFactor, 
      size: 40 * scaleFactor, 
      speed: 0.5, 
      iconType: 'calendar', 
      phaseShift: Math.PI / 2, 
      glowColor: 'orange',
      label: 'Calendar'
    },
  ];
};

// --- Memoized Orbiting App Component ---
const OrbitingApp = memo(({ config, angle, isMobile }: OrbitingAppProps) => { // ✅ FIX: Destructure isMobile here
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined
        }}
      >
        <AppIcon type={iconType} />
        {isHovered && (
          <div className={`absolute ${isMobile ? '-bottom-6 text-xs px-1 py-0.5' : '-bottom-8 text-xs px-2 py-1'} left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm rounded text-white whitespace-nowrap pointer-events-none`}>
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingApp.displayName = 'OrbitingApp';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan: {
      primary: 'rgba(6, 182, 212, 0.4)',
      secondary: 'rgba(6, 182, 212, 0.2)',
      border: 'rgba(6, 182, 212, 0.3)'
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.4)',
      secondary: 'rgba(147, 51, 234, 0.2)',
      border: 'rgba(147, 51, 234, 0.3)'
    },
    green: {
      primary: 'rgba(34, 197, 94, 0.4)',
      secondary: 'rgba(34, 197, 94, 0.2)',
      border: 'rgba(34, 197, 94, 0.3)'
    },
    orange: {
      primary: 'rgba(249, 115, 22, 0.4)',
      secondary: 'rgba(249, 115, 22, 0.2)',
      border: 'rgba(249, 115, 22, 0.3)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 20px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main App Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // ✅ FIX: Start with a state that can be determined after mount
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Check for mobile viewport and set a 'mounted' flag
  useEffect(() => {
    const checkMobile = () => {
      // ✅ FIX: Use a more reliable check for mobile
      setIsMobile(window.innerWidth < 500);
    };

    checkMobile(); // Set initial value
    window.addEventListener('resize', checkMobile);
    setHasMounted(true); // Signal that the component has mounted on the client

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isPaused || !hasMounted) return; // ✅ FIX: Don't run animation until mounted

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, hasMounted]); // ✅ FIX: Add hasMounted to dependency array

  // ✅ FIX: Render null on the server to avoid the initial mismatch
  if (!hasMounted) {
    return null;
  }

  const scaleFactor = isMobile ? 0.7 : 1;
  const containerSize = isMobile ? 380 : 500;
  const centerLogoSize = isMobile ? 56 : 80;

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 100 * scaleFactor, glowColor: 'green', delay: 0 },
    { radius: 150 * scaleFactor, glowColor: 'purple', delay: 1 },
    { radius: 200 * scaleFactor, glowColor: 'cyan', delay: 2 }
  ];

  const appsConfig = getAppsConfig(isMobile);

  return (
    <main className="w-full flex items-center justify-center overflow-hidden">
      <div 
        className={`relative flex items-center justify-center`}
        style={{
          width: `${containerSize}px`,
          height: `${containerSize}px`,
        }}
        
      >
        {/* Central n8n Logo with enhanced glow */}
        <div 
          className={`rounded-full flex items-center justify-center z-10 relative shadow-2xl overflow-hidden`}
          style={{
            width: `${centerLogoSize}px`,
            height: `${centerLogoSize}px`,
          }}
        >
          
          <div 
            className="relative z-10"
            style={{
              width: `${centerLogoSize - (isMobile ? 8 : 16)}px`,
              height: `${centerLogoSize - (isMobile ? 8 : 16)}px`,
            }}
          >
            <Image src="/logos/n8n.png" alt="n8n Logo" width={centerLogoSize - (isMobile ? 8 : 16)} height={centerLogoSize - (isMobile ? 8 : 16)} />
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting app icons */}
        {appsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingApp
              key={config.id}
              config={config}
              angle={angle}
              isMobile={isMobile}
            />
          );
        })}
      </div>
    </main>
  );
}
