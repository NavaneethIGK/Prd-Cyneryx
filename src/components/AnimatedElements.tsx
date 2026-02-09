'use client';

/**
 * AnimatedElements Component
 * Provides various animated visual elements for scroll effects
 */

export const RunningDots = () => (
  <div className="running-dots">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
);

export const AnimatedLine = () => (
  <div className="animated-line"></div>
);

export const PulsingDot = ({ inline = false }: { inline?: boolean }) => {
  if (inline) {
    return <span className="pulsing-dot"></span>;
  }
  return <div style={{ textAlign: 'center', margin: '1rem 0' }}><span className="pulsing-dot"></span></div>;
};

export const SectionDivider = () => (
  <div className="section-divider"></div>
);

export const ProgressBar = ({ width = 75 }: { width?: number }) => (
  <div className="progress-bar-animated" style={{ 
    backgroundImage: 'linear-gradient(90deg, #1E88E5, #1565C0)',
    '--progress-width': `${width}%`
  } as React.CSSProperties}>
    <div style={{
      position: 'absolute',
      height: '100%',
      background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
      width: `${width}%`,
      animation: 'lineMove 2s ease-in-out infinite'
    }}></div>
  </div>
);

export const FeatureTimeline = ({ children }: { children: React.ReactNode }) => (
  <div className="feature-timeline">
    {children}
  </div>
);

export const CounterStat = ({ number, label }: { number: string | number; label: string }) => (
  <div style={{ textAlign: 'center', padding: '1rem' }}>
    <div className="stat-number">{number}</div>
    <p style={{ color: '#666', marginTop: '0.5rem', fontSize: '0.95rem' }}>{label}</p>
  </div>
);

/**
 * ScrollTriggerAnimation Component
 * Adds animations when elements scroll into view
 */
export const ScrollTrigger = ({ children, animation = 'fadeInUp' }: { 
  children: React.ReactNode; 
  animation?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'bounceIn';
}) => (
  <div style={{
    animation: `${animation} 0.6s ease-out forwards`,
    opacity: 0,
  }}>
    {children}
  </div>
);
