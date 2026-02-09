'use client';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  rating?: number;
}

interface TestimonialsProps {
  badge?: string;
  title: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

export default function Testimonials({
  badge = 'Testimonials',
  title,
  subtitle,
  testimonials = [],
}: TestimonialsProps) {
  const defaultTestimonials: Testimonial[] = [
    {
      quote: 'The AI solution transformed our business operations and increased efficiency by 40%. Highly recommended!',
      author: 'John Smith',
      role: 'CEO, Tech Corp',
      image: '/images/testimonial-1.jpg',
      rating: 5,
    },
    {
      quote: 'Outstanding service and support. The team understood our needs perfectly and delivered beyond expectations.',
      author: 'Sarah Johnson',
      role: 'Product Manager, Innovate Inc',
      image: '/images/testimonial-2.jpg',
      rating: 5,
    },
    {
      quote: 'Professional, responsive, and knowledgeable. They helped us implement AI in ways we never thought possible.',
      author: 'Michael Chen',
      role: 'Director, Global Solutions',
      image: '/images/testimonial-3.jpg',
      rating: 5,
    },
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  const renderStars = (rating: number = 5) => {
    return Array.from({ length: rating }).map((_, i) => (
      <i key={i} className="fas fa-star" style={{ color: '#FFD700', marginRight: '4px', fontSize: '0.9rem' }}></i>
    ));
  };

  return (
    <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge-custom" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            {badge}
          </span>
          <h2 style={{ fontSize: '2.1rem', fontWeight: '700', marginBottom: '0.8rem', color: '#1a1a1a', lineHeight: '1.2' }}>
            {title}
          </h2>
          {subtitle && <p style={{ color: '#666', fontSize: '1rem', marginTop: '0.8rem' }}>{subtitle}</p>}
        </div>

        {/* Testimonials Grid */}
        <div className="row">
          {displayTestimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '28px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  border: '1px solid #f0f0f0',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(30, 136, 229, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Stars */}
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '2px' }}>
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1.5rem', flex: 1, fontSize: '0.95rem' }}>
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '1rem', borderTop: '1px solid #f0f0f0' }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <h6 style={{ marginBottom: '0.2rem', fontWeight: '600', color: '#1a1a1a', fontSize: '0.95rem' }}>
                      {testimonial.author}
                    </h6>
                    <p style={{ marginBottom: '0', color: '#999', fontSize: '0.85rem', fontWeight: '400' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
