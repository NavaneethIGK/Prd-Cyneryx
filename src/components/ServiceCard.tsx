'use client';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  featured?: boolean;
}

export default function ServiceCard({
  icon,
  title,
  description,
  linkText = 'Read More',
  linkHref = '#',
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      style={{
        padding: '30px',
        borderRadius: '12px',
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        backgroundColor: featured ? '#1E88E5' : '#ffffff',
        border: featured ? 'none' : '1px solid #e0e0e0',
        color: featured ? 'white' : '#333',
      }}
      onMouseEnter={(e) => {
        if (!featured) {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 87, 200, 0.1)';
        }
      }}
      onMouseLeave={(e) => {
        if (!featured) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
    >
      <div
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          backgroundColor: featured ? 'rgba(255,255,255,0.2)' : 'rgba(0, 87, 200, 0.1)',
          border: featured ? '2px solid rgba(255,255,255,0.3)' : '2px solid rgba(0, 87, 200, 0.3)',
        }}
      >
        <i
          className={`fas fa-${icon}`}
          style={{
            fontSize: '2rem',
            color: featured ? 'white' : '#1E88E5',
          }}
        ></i>
      </div>
      <h5
        style={{
          fontWeight: '700',
          marginBottom: '1rem',
          fontSize: '1.2rem',
          color: featured ? 'white' : '#333',
          flex: 0,
        }}
      >
        {title}
      </h5>
      <p
        style={{
          lineHeight: '1.8',
          marginBottom: '1.5rem',
          fontSize: '0.95rem',
          color: featured ? 'rgba(255,255,255,0.9)' : '#666',
          flex: 1,
        }}
      >
        {description}
      </p>
      <a
        href={linkHref}
        style={{
          color: featured ? 'white' : '#0057C8',
          textDecoration: 'none',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          fontSize: '0.9rem',
          alignSelf: 'center',
        }}
        onMouseEnter={(e) => {
          if (featured) {
            e.currentTarget.style.color = '#c3e7ff';
          } else {
            e.currentTarget.style.color = '#1565C0';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = featured ? 'white' : '#1E88E5';
        }}
      >
        {linkText}
      </a>
    </div>
  );
}
