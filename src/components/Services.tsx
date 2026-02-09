'use client';

import ServiceCard from './ServiceCard';

interface Service {
  id?: number;
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  link?: string;
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
      description: 'The Integration of AMRs, ACRs, and robotic systems. Vendor-agnostic robotics middleware with robotics-to-WMS/ERP connectivity for autonomous and semi-autonomous system design.',
      linkText: 'Read More',
      linkHref: '#',
    },
    {
      icon: 'brain',
      title: 'Machine Learning',
      description: 'AI orchestration engines and computer vision & AI vision gateways. Data-driven decision support systems for predictive maintenance and operational intelligence.',
      linkText: 'Read More',
      linkHref: '#',
    },
    {
      icon: 'graduation',
      title: 'Education & Science',
      description: 'Solution architecture and technical strategy. MVP and SaaS product development with AI-first product design and digital transformation advisory.',
      linkText: 'Read More',
      linkHref: '#',
    },
    {
      icon: 'analytics',
      title: 'Predictive Analysis',
      description: 'Advanced analytics and predictive maintenance. Operational intelligence systems that help organizations optimize operations and make data-driven decisions.',
      linkText: 'Read More',
      linkHref: '#',
    },
  ];

  const displayServices = services && services.length > 0 ? services : defaultServices;

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

          {/* Right Column - Service Cards Grid */}
          <div className="col-lg-7">
            <div className="row">
              {displayServices.map((service, index) => (
                <div key={service.id || index} className="col-lg-6 col-md-6 mb-4">
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    linkText={service.linkText}
                    linkHref={service.linkHref || service.link}
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
