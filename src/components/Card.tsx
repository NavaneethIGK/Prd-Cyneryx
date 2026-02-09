'use client';

interface CardProps {
  icon?: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  image?: string;
  badge?: string;
}

export default function Card({
  icon,
  title,
  description,
  linkText = 'Read More',
  linkHref = '#',
  image,
  badge,
}: CardProps) {
  return (
    <div className="card">
      {icon && <div className="card-icon"><i className={`fas fa-${icon}`}></i></div>}
      {image && <img src={image} alt={title} className="img-fluid" style={{ marginBottom: '1rem', borderRadius: '10px' }} />}
      {badge && <span className="btn btn-sm mb-3">{badge}</span>}
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      {linkText && <a href={linkHref} className="btn btn-sm">{linkText}</a>}
    </div>
  );
}
