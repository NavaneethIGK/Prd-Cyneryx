'use client';

import { useState, useEffect } from 'react';

interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  brand?: string;
  tagline?: string;
  sections?: FooterSection[];
  email?: string;
  phone?: string;
  address?: string;
  bottomLinks?: FooterLink[];
  copyright?: string;
}

export default function Footer({
  brand = 'Cyneryx',
  tagline = 'Tempor erat elitr rebum at cita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam ips et tempor sit, sed stet no labore lorem sit. Sanctus cita duo justo et tempor',
  sections = [],
  email = 'info@example.com',
  phone = '+012 345 67890',
  address = '123 Street, New York, USA',
  bottomLinks = [],
  copyright = `© 2024 Cyneryx. All Rights Reserved.`,
}: FooterProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultSections: FooterSection[] = [
    {
      title: 'Get In Touch',
      links: [
        { label: address, href: '#', icon: 'map-marker-alt' },
        { label: phone, href: `tel:${phone}`, icon: 'phone-alt' },
        { label: email, href: `mailto:${email}`, icon: 'envelope' },
      ],
    },
    {
      title: 'Popular Link',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms & Condition', href: '#' },
        { label: 'Career', href: '#' },
      ],
    },
    {
      title: 'Our Services',
      links: [
        { label: 'Robotic Automation', href: '#' },
        { label: 'Machine learning', href: '#' },
        { label: 'Predictive Analysis', href: '#' },
        { label: 'Data Science', href: '#' },
        { label: 'Robot Technology', href: '#' },
      ],
    },
  ];

  const displaySections = sections.length > 0 ? sections : defaultSections;

  const defaultBottomLinks = [
    { label: 'Home', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'Help', href: '#' },
    { label: 'FAQs', href: '#' },
  ];

  const displayBottomLinks = bottomLinks.length > 0 ? bottomLinks : defaultBottomLinks;

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Ctext x="10" y="20" font-size="10" opacity="0.03" fill="white"%3E●%3C/text%3E%3C/svg%3E")',
        color: '#fff',
        paddingTop: '60px',
        paddingBottom: '20px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        {/* Main Footer Content - 4 Columns */}
        <div className="row mb-5 footer-columns" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {/* Brand Column */}
          <div className="footer-col" style={{ flex: '1 1 calc(25% - 15px)', paddingRight: '20px', marginBottom: '2rem', minWidth: '200px' }}>
            <h5 className="fw-bold mb-3" style={{ fontSize: '1.5rem' }}>
              {brand}
            </h5>
            <p style={{ color: '#9ca3af', lineHeight: '1.8', fontSize: '0.95rem' }}>
              {tagline}
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <a
                href="#"
                style={{
                  color: '#9ca3af',
                  fontSize: '1rem',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                style={{
                  color: '#9ca3af',
                  fontSize: '1rem',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                style={{
                  color: '#9ca3af',
                  fontSize: '1rem',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="#"
                style={{
                  color: '#9ca3af',
                  fontSize: '1rem',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                style={{
                  color: '#9ca3af',
                  fontSize: '1rem',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {displaySections.map((section, index) => (
            <div key={index} className="footer-col" style={{ flex: '1 1 calc(25% - 15px)', paddingRight: '20px', marginBottom: '2rem', minWidth: '200px' }}>
              <h6 className="fw-bold mb-4" style={{ fontSize: '1.1rem' }}>
                {section.title}
              </h6>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-3">
                    <a
                      href={link.href}
                      style={{
                        color: '#9ca3af',
                        textDecoration: 'none',
                        transition: 'color 0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.95rem',
                        wordBreak: 'break-word',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                    >
                      {link.icon && (
                        <i
                          className={`fas fa-${link.icon}`}
                          style={{ width: '16px', marginRight: '4px', flexShrink: 0 }}
                        ></i>
                      )}
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '40px 0 30px 0' }} />

        {/* Bottom Footer */}
        <div
          className="footer-bottom"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.9rem' }}>
            <a
              href="#"
              style={{ color: '#9ca3af', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
            >
              {copyright}
            </a>
          </p>
          <div className="footer-bottom-links" style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {displayBottomLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  fontSize: '0.9rem',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isClient && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            backgroundColor: '#1E88E5',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            zIndex: '999',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1565C0';
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1E88E5';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </footer>
  );
}
