'use client';

import { useState } from 'react';

interface NewsletterProps {
  badge?: string;
  title: string;
  description?: string;
  placeholderText?: string;
  descriptionText?: string;
  onSubmit?: (email: string) => void;
  image?: string;
}

export default function Newsletter({
  badge = 'Newsletter',
  title,
  description,
  placeholderText = 'Enter Your Email',
  descriptionText = 'Diam sed sed dolor stet amet eirmod',
  onSubmit,
  image = 'https://via.placeholder.com/500x400?text=Robot+Hand',
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
      onSubmit?.(email);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        color: 'white',
        padding: '60px 0',
        minHeight: '450px',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Image */}
          <div className="col-lg-5 d-flex align-items-center justify-content-center mb-5 mb-lg-0">
            <img src={image} alt="Newsletter" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>

          {/* Right Column - Form */}
          <div className="col-lg-7" style={{ paddingLeft: '1.5rem' }}>
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

            <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  gap: '0',
                  borderRadius: '50rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                }}
              >
                <input
                  type="email"
                  placeholder={placeholderText}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    padding: '14px 24px',
                    borderRadius: '50rem 0 0 50rem',
                    border: 'none',
                    fontSize: '1rem',
                    backgroundColor: 'white',
                    color: '#333',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '14px 40px',
                    borderRadius: '0 50rem 50rem 0',
                    backgroundColor: '#1E88E5',
                    color: 'white',
                    border: 'none',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '1rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1565C0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1E88E5';
                  }}
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>

              {submitted && (
                <p style={{ marginTop: '12px', fontSize: '0.9rem', color: '#c3e7ff' }}>
                  ✓ Thank you! Check your email for confirmation.
                </p>
              )}
            </form>

            {descriptionText && (
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0' }}>
                {descriptionText}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
