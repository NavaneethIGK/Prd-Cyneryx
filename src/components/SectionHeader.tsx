'use client';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {badge && <button className="btn btn-sm mb-4">{badge}</button>}
      <h2>{title}</h2>
      {subtitle && <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '1rem' }}>{subtitle}</p>}
    </div>
  );
}
