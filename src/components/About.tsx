'use client';

interface AboutProps {
  badge?: string;
  title: string;
  description: string;
  description2?: string;
  features?: string[];
  image?: string;
  buttonText?: string;
  buttonLink?: string;
  showSocial?: boolean;
}

export default function About({
  badge = 'About Us',
  title,
  description,
  description2,
  features = [],
  image = 'https://via.placeholder.com/500x400?text=About+Image',
  buttonText = 'Read More',
  buttonLink = '#',
  showSocial = true,
}: AboutProps) {
  return (
    <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Image */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img src={image} alt="About" className="img-fluid" style={{ borderRadius: '12px', width: '100%' }} />
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-6" style={{ paddingLeft: '1.5rem' }}>
            <span className="badge-custom" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              {badge}
            </span>

            <h2 style={{ fontSize: '2.1rem', fontWeight: '700', marginBottom: '1.2rem', color: '#1a1a1a', lineHeight: '1.2' }}>
              {title}
            </h2>

            <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1rem' }}>
              {description}
            </p>

            {description2 && (
              <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '2rem', fontSize: '1rem' }}>
                {description2}
              </p>
            )}

            {/* 2x2 Checklist Grid */}
            {features.length > 0 && (
              <div className="row mb-4">
                {features.map((feature, index) => (
                  <div key={index} className="col-md-6 mb-3">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        style={{
                          width: '20px',
                          height: '20px',
                          cursor: 'pointer',
                          accentColor: '#1E88E5',
                        }}
                      />
                      <span style={{ color: '#666', fontSize: '0.95rem', fontWeight: '500' }}>
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Button and Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '2rem' }}>
              <a
                href={buttonLink}
                style={{
                  display: 'inline-block',
                  padding: '12px 32px',
                  backgroundColor: '#0057C8',
                  color: 'white',
                  borderRadius: '50rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#003d8f';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0057C8';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {buttonText}
              </a>

              {showSocial && (
                <div style={{ display: 'flex', gap: '12px' }}>
                  {[
                    { icon: 'facebook-f', href: '#' },
                    { icon: 'twitter', href: '#' },
                    { icon: 'linkedin-in', href: '#' },
                    { icon: 'instagram', href: '#' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '2px solid #0057C8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0057C8',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#0057C8';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#0057C8';
                      }}
                    >
                      <i className={`fab fa-${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
