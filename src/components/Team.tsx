'use client';

import TeamCard from './TeamCard';

interface SocialLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social?: SocialLinks;
}

interface TeamProps {
  badge?: string;
  title: string;
  description?: string;
  members?: TeamMember[];
  buttonText?: string;
  buttonLink?: string;
}

export default function Team({
  badge = 'Our Team',
  title,
  description,
  members = [],
  buttonText = 'Read More',
  buttonLink = '#',
}: TeamProps) {
  const defaultMembers: TeamMember[] = [
    {
      name: 'Jawwad Khan',
      role: 'Founder & CEO',
      image: '/api/uploads/1767791118573-Jawwad_Cyneryx_DP.jpeg',
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      name: 'Roshanara Aamer',
      role: 'Co-Founder & Creative Director',
      image: '/api/uploads/1768618143717-Screenshot_2025-05-01_124415.png',
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
      },
    },
  ];

  const displayMembers = members.length > 0 ? members : defaultMembers;

  return (
    <section style={{ padding: '60px 0', backgroundColor: '#f0f6ff' }}>
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
            <a
              href={buttonLink}
              style={{
                display: 'inline-block',
                padding: '12px 32px',
                backgroundColor: '#1E88E5',
                color: 'white',
                borderRadius: '50rem',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
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

          {/* Right Column - 2x2 Team Members Grid */}
          <div className="col-lg-7">
            <div className="row">
              {displayMembers.map((member, index) => (
                <div key={index} className="col-lg-6 col-md-6 mb-4">
                  <TeamCard member={member} showSocial={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
