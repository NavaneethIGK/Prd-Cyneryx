'use client';

type ButtonVariant = 'primary' | 'light' | 'outline' | 'sm' | 'dark';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  style,
}: ButtonProps) {
  const buttonClass = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
