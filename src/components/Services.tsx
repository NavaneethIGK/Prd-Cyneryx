'use client';

import ServiceCard from './ServiceCard';

interface Service {
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

interface ServicesProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  services?: Service[];
  buttonText?: string;
  buttonLink?: string;
}

export default function Services({
  badge = 'Our Services',
  title,
  subtitle,
  description,
  services = [],
  buttonText = 'Read More',
  buttonLink = '#',
}: ServicesProps) {
  const defaultServices: Service[] = [
    {
      icon: 'robot',
      title: 'Robotic Automation',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
      linkText: 'Read More',
      linkHref: '#',
    },
    {
      icon: 'power-off',
      title: 'Machine learning',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
      linkText: 'Read More',
      linkHref: '#',
    },
    {
      icon: 'graduation-cap',
      title: 'Education & Science',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
      linkText: 'Read More',
      linkHref: '#',
    },
    {
      icon: 'brain',
      title: 'Predictive Analysis',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
      linkText: 'Read More',
      linkHref: '#',
    },
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <section style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Title and Description */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <span className="badge-custom" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              {badge}
            </span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: '700', marginBottom: '1.2rem', color: '#1a1a1a', lineHeight: '1.2' }}>
              {title}
            </h2>
            {description && (
              <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '2rem', fontSize: '1rem' }}>
                {description}
              </p>
            )}
            <a href={buttonLink} style={{ display: 'inline-block', padding: '12px 32px', backgroundColor: '#1E88E5', color: 'white', borderRadius: '50rem', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1565C0';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1E88E5';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {buttonText}
            </a>
          </div>

          {/* Right Column - 2x2 Service Cards Grid */}
          <div className="col-lg-7">
            <div className="row">
              {displayServices.map((service, index) => (
                <div key={index} className="col-lg-6 col-md-6 mb-4">
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    linkText={service.linkText}
                    linkHref={service.linkHref}
                    featured={index === 2}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
