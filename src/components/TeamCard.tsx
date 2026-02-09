'use client';

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

interface TeamCardProps {
  member: TeamMember;
  showSocial?: boolean;
}

export default function TeamCard({ member, showSocial = true }: TeamCardProps) {
  const socialIcons = [
    { key: 'facebook', icon: 'facebook-f' },
    { key: 'twitter', icon: 'twitter' },
    { key: 'linkedin', icon: 'linkedin-in' },
    { key: 'instagram', icon: 'instagram' },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Circular Image */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      {/* Name and Role */}
      <h5 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1a1a1a' }}>
        {member.name}
      </h5>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1rem', fontWeight: '500' }}>
        {member.role}
      </p>

      {/* Social Icons */}
      {showSocial && member.social && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {socialIcons.map((social) => {
            const url = member.social?.[social.key as keyof SocialLinks];
            if (!url) return null;
            
            return (
              <a
                key={social.key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#1E88E5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1565C0';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1E88E5';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <i className={`fab fa-${social.icon}`} style={{ fontSize: '0.9rem' }}></i>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
