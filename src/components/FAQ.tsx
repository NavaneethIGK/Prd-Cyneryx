'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  badge?: string;
  title: string;
  faqs?: FAQItem[];
}

export default function FAQ({
  badge = 'Popular FAQs',
  title,
  faqs = [],
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const defaultFAQs: FAQItem[] = [
    {
      question: 'How to build a website?',
      answer: 'Building a website involves planning your content, choosing a domain name, selecting a hosting provider, and using website builders or coding to create your site.',
    },
    {
      question: 'How long will it take to get a new website?',
      answer: 'The timeline depends on the complexity of your project. Simple websites can be completed in 2-4 weeks, while more complex ones may take several months.',
    },
    {
      question: 'Do you only create HTML websites?',
      answer: 'No, we create responsive websites using modern technologies including HTML5, CSS3, JavaScript, React, and other frameworks suited to your needs.',
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Yes, all our websites are built with mobile-first design principles and are fully responsive across all devices and screen sizes.',
    },
    {
      question: 'Will you maintain my site for me?',
      answer: 'Yes, we offer comprehensive maintenance and support packages to keep your website secure, updated, and performing optimally.',
    },
    {
      question: "I'm on a strict budget. Do you have any low cost options?",
      answer: 'Absolutely! We offer flexible pricing options and can work with various budget constraints while maintaining quality standards.',
    },
  ];

  const displayFAQs = faqs.length > 0 ? faqs : defaultFAQs;
  const midPoint = Math.ceil(displayFAQs.length / 2);
  const leftColumn = displayFAQs.slice(0, midPoint);
  const rightColumn = displayFAQs.slice(midPoint);

  const FAQItemComponent = ({ faq, index }: { faq: FAQItem; index: number }) => (
    <div
      key={index}
      className="faq-item mb-4"
      style={{
        backgroundColor: '#f5f6f8',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #e8e9ec',
      }}
    >
      <button
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: '#f5f6f8',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.9rem',
          fontWeight: '600',
          color: '#333',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#e8e9ec';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#f5f6f8';
        }}
      >
        <span>{faq.question}</span>
        <i
          className={`fas fa-${openIndex === index ? 'minus' : 'plus'}`}
          style={{ color: 'var(--primary)', fontSize: '0.9rem', marginLeft: '15px', flexShrink: 0 }}
        ></i>
      </button>
      {openIndex === index && (
        <div
          style={{
            padding: '20px',
            borderTop: '1px solid #e8e9ec',
            backgroundColor: 'white',
            color: '#666',
            lineHeight: '1.8',
            fontSize: '0.95rem',
          }}
        >
          {faq.answer}
        </div>
      )}
    </div>
  );

  return (
    <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge-custom" style={{ display: 'inline-block', marginBottom: '0.8rem' }}>
            {badge}
          </span>
          <h2 style={{ fontSize: '2.1rem', fontWeight: '700', marginBottom: '0', color: '#1a1a1a' }}>
            {title}
          </h2>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            {leftColumn.map((faq, index) => (
              <FAQItemComponent key={index} faq={faq} index={index} />
            ))}
          </div>
          <div className="col-lg-6">
            {rightColumn.map((faq, index) => (
              <FAQItemComponent key={midPoint + index} faq={faq} index={midPoint + index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
