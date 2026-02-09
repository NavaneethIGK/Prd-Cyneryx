import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyneryx - Artificial Intelligence Solutions",
  description: "Professional AI technology solutions for your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            // Parallax scroll effect for hero
            const heroSection = document.querySelector('.hero-extended');
            if (heroSection) {
              window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                const parallaxElements = heroSection.querySelectorAll('.hero-accent-dot');
                parallaxElements.forEach((el, index) => {
                  const speed = 0.5 + (index * 0.1);
                  el.style.transform = \`translateY(\${scrollY * speed}px)\`;
                });
              });
            }

            // Advanced scroll animation handler
            const observerOptions = {
              threshold: 0.15,
              rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  // Add animation class to element
                  entry.target.classList.add('scroll-animated');
                  
                  // Trigger counter animations for stat elements
                  if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                  }
                  
                  observer.unobserve(entry.target);
                }
              });
            }, observerOptions);

            // Observe animated elements on page load
            document.addEventListener('DOMContentLoaded', () => {
              // Cards and testimonials
              document.querySelectorAll('.card, .testimonial, .case-item, .team-card, .faq-item, .feature-box').forEach(el => {
                observer.observe(el);
              });
              
              // Stat numbers
              document.querySelectorAll('.stat-number').forEach(el => {
                observer.observe(el);
              });
              
              // Badge elements
              document.querySelectorAll('.badge-custom').forEach(el => {
                observer.observe(el);
              });
            });

            // Counter animation function
            function animateCounter(element) {
              const finalValue = parseInt(element.textContent) || element.textContent;
              const isNumeric = !isNaN(finalValue);
              
              if (isNumeric) {
                let currentValue = 0;
                const increment = Math.ceil(finalValue / 30);
                const timer = setInterval(() => {
                  currentValue += increment;
                  if (currentValue >= finalValue) {
                    element.textContent = finalValue;
                    clearInterval(timer);
                  } else {
                    element.textContent = currentValue;
                  }
                }, 30);
              }
            }

            // Scroll progress indicator (client-side only to prevent hydration mismatch)
            if (typeof window !== 'undefined') {
              window.addEventListener('scroll', () => {
                const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                document.documentElement.style.setProperty('--scroll-progress', scrollPercentage + '%');
              });
            }

            // Mouse move effect for hero (optional interactive effect)
            const heroExtended = document.querySelector('.hero-extended');
            if (heroExtended) {
              document.addEventListener('mousemove', (e) => {
                const mouseX = e.clientX / window.innerWidth;
                const mouseY = e.clientY / window.innerHeight;
                
                const dots = heroExtended.querySelectorAll('.hero-accent-dot');
                dots.forEach((dot, index) => {
                  const moveX = (mouseX - 0.5) * 20 * (index + 1);
                  const moveY = (mouseY - 0.5) * 20 * (index + 1);
                  dot.style.filter = \`brightness(\${1 + (mouseX * 0.2)})\`;
                });
              });
            }
          })();
        `}} /> 
      </head>
      <body>{children}</body>
    </html>
  );
}
