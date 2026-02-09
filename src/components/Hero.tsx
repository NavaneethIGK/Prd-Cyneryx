'use client';

interface HeroProps {
  badge?: string;
  title: string;
  description: string;
  primaryBtnText: string;
  secondaryBtnText: string;
  primaryBtnLink?: string;
  secondaryBtnLink?: string;
  image?: string;
}

export default function Hero({
  badge = 'Cyneryx',
  title,
  description,
  primaryBtnText,
  secondaryBtnText,
  primaryBtnLink = '#',
  secondaryBtnLink = '#',
  image = 'https://via.placeholder.com/500x600',
}: HeroProps) {
  return (
    <section className="hero-extended" id="home">
      {/* Floating accent dots */}
      <div className="hero-accent-dot" style={{ zIndex: 1 }}></div>
      <div className="hero-accent-dot" style={{ zIndex: 1 }}></div>
      <div className="hero-accent-dot" style={{ zIndex: 1 }}></div>

      <div className="container">
        <div className="row align-items-center" style={{ minHeight: '550px', position: 'relative', zIndex: 2 }}>
          <div className="col-lg-6 d-flex flex-column justify-content-center" style={{ paddingRight: '1rem' }}>
            <div
              style={{
                display: 'inline-block',
                border: '2px solid rgba(255,255,255,0.5)',
                borderRadius: '50rem',
                padding: '8px 18px',
                marginBottom: '2rem',
                width: 'fit-content',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: 'white',
                animation: 'fadeInDown 0.8s ease-out',
              }}
            >
              {badge}
            </div>
            <h1 style={{ fontSize: '3.2rem', lineHeight: '1.15', marginBottom: '1.5rem', color: 'white', fontWeight: '700' }}>
              {title}
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: '1.75', marginBottom: '2.5rem', opacity: 0.95, color: 'white' }}>
              {description}
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href={primaryBtnLink} className="btn btn-light" style={{ paddingLeft: '40px', paddingRight: '40px', fontSize: '1rem' }}>
                {primaryBtnText}
              </a>
              <a href={secondaryBtnLink} className="btn btn-outline" style={{ paddingLeft: '40px', paddingRight: '40px', fontSize: '1rem' }}>
                {secondaryBtnText}
              </a>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ paddingLeft: '1rem', position: 'relative' }}>
            <div className="hero-image-wrapper">
              <img src={image} alt="Hero Image" className="img-fluid" style={{ 
                maxWidth: '100%', 
                height: 'auto',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                position: 'relative',
                zIndex: 3
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
