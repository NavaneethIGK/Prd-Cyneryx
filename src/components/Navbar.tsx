'use client';

import { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  brand: string;
  links: NavLink[];
}

export default function Navbar({ brand = 'Cyneryx', links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-blue container-fluid" style={{ padding: '1rem 20px', position: 'relative' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0' }}>
        <div className="navbar-brand-blue">
          {brand}
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: '6px',
            zIndex: 1001,
          }}
          aria-label="Toggle menu"
        >
          <span style={{
            width: '25px',
            height: '3px',
            backgroundColor: 'white',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(45deg) translate(10px, 10px)' : 'none',
          }}></span>
          <span style={{
            width: '25px',
            height: '3px',
            backgroundColor: 'white',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            opacity: isOpen ? '0' : '1',
          }}></span>
          <span style={{
            width: '25px',
            height: '3px',
            backgroundColor: 'white',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none',
          }}></span>
        </button>

        <ul
          className={`nav-links-blue ${isOpen ? 'mobile-active' : ''}`}
          style={{
            transition: 'all 0.3s ease',
          }}
        >
          {links.map((link, index) => (
            <li key={index} onClick={() => setIsOpen(false)}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hamburger-btn {
            display: flex !important;
          }

          .nav-links-blue {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            width: 100%;
            padding: 0;
            text-align: center;
            list-style: none;
            margin: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }

          .nav-links-blue.mobile-active {
            max-height: 500px;
            padding: 1rem 0;
          }

          .nav-links-blue li {
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .nav-links-blue li:last-child {
            border-bottom: none;
          }

          .nav-links-blue a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
