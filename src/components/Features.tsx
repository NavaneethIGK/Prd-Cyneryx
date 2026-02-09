'use client';

import { RunningDots, AnimatedLine } from './AnimatedElements';

interface Feature {
  icon: string;
  text: string;
}

interface Stat {
  number: string;
  label: string;
}

interface FeaturesProps {
  badge?: string;
  title: string;
  description?: string;
  features?: Feature[];
  stats?: Stat[];
  image?: string;
}

export default function Features({
  badge = 'Why Choose Us',
  title,
  description = '',
  features = [],
  stats = [],
  image = 'https://via.placeholder.com/500x600?text=AI+Robot',
}: FeaturesProps) {
  const defaultFeatures: Feature[] = [
    { icon: 'check', text: 'Diam dolor diam ipsum et tempor sit' },
    { icon: 'check', text: 'Diam dolor diam ipsum et tempor sit' },
    { icon: 'check', text: 'Diam dolor diam ipsum et tempor sit' },
  ];

  const defaultStats: Stat[] = [
    { number: '9999', label: 'Happy Clients' },
    { number: '9999', label: 'Project Complete' },
  ];

  const displayFeatures = features.length > 0 ? features : defaultFeatures;
  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        color: 'white',
        padding: '60px 0',
        minHeight: '580px',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Content */}
          <div className="col-lg-6">
            <div
              style={{
                display: 'inline-block',
                border: '2px solid rgba(255,255,255,0.5)',
                borderRadius: '50rem',
                padding: '8px 18px',
                marginBottom: '1.5rem',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: 'white',
              }}
            >
              {badge}
            </div>

            <h2 style={{ fontSize: '2.1rem', fontWeight: '700', marginBottom: '1.2rem', lineHeight: '1.2', color: 'white' }}>
              {title}
            </h2>

            {description && (
              <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem', opacity: 0.95 }}>
                {description}
              </p>
            )}

            {/* Animated line separator */}
            <AnimatedLine />

            {/* Features List */}
            <div style={{ marginBottom: '2.5rem' }}>
              {displayFeatures.map((feature, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      animation: 'pulse 2s ease-in-out infinite',
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <i className="fas fa-check" style={{ color: 'white', fontSize: '1rem' }}></i>
                  </div>
                  <span style={{ fontSize: '1rem', lineHeight: '1.6' }}>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Running dots animation */}
            <RunningDots />

            {/* Stats Grid */}
            <div className="row">
              {displayStats.map((stat, index) => (
                <div key={index} className="col-md-6 mb-3">
                  <div
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      padding: '25px',
                      borderRadius: '10px',
                      textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.2)',
                      animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <input
                        type="checkbox"
                        readOnly
                        checked
                        style={{
                          width: '20px',
                          height: '20px',
                          cursor: 'default',
                          accentColor: 'white',
                        }}
                      />
                      <h4 className="stat-number" style={{ fontSize: '2rem', fontWeight: '700', margin: '0' }}>{stat.number}</h4>
                    </div>
                    <p style={{ fontSize: '0.95rem', margin: '0', opacity: 0.9 }}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ paddingLeft: '2rem' }}>
            <img src={image} alt="Why Choose Us" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
