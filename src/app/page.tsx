'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/admin/content');
        const data = await response.json();
        setConfig(data);
      } catch (error) {
        console.error('Failed to fetch config:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        color: 'white',
        fontSize: '1.2rem',
      }}>
        Loading content...
      </div>
    );
  }

  if (!config) {
    return <div>Failed to load content</div>;
  }

  const { navbar, hero, about, services, features, faq, team, testimonials, newsletter, footer } = config;

  return (
    <>
      <Navbar brand={navbar.brand} links={navbar.links} />

      <Hero
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        primaryBtnText={hero.primaryBtnText}
        secondaryBtnText={hero.secondaryBtnText}
        primaryBtnLink={hero.primaryBtnLink}
        secondaryBtnLink={hero.secondaryBtnLink}
        image={hero.image}
      />

      <div id="about" />

      <About
        badge={about.badge}
        title={about.title}
        description={about.description}
        description2={about.description2}
        features={about.features}
        image={about.image}
        buttonText={about.buttonText}
        buttonLink={about.buttonLink}
        showSocial={about.showSocial}
      />

      <div id="services" />

      <Services
        badge={services.badge}
        title={services.title}
        description={services.description}
        services={services.serviceList}
        buttonText={services.buttonText}
        buttonLink={services.buttonLink}
      />

      <Features
        badge={features.badge}
        title={features.title}
        description={features.description}
        features={features.featureList}
        stats={features.stats}
        image={features.image}
      />

      <FAQ
        badge={faq.badge}
        title={faq.title}
      />

      <div id="team" />

      <Team
        badge={team.badge}
        title={team.title}
        description={team.description}
        members={team.members}
        buttonText={team.buttonText}
        buttonLink={team.buttonLink}
      />

      <Testimonials
        badge={testimonials.badge}
        title={testimonials.title}
        subtitle={testimonials.subtitle}
      />

      <Newsletter
        badge={newsletter.badge}
        title={newsletter.title}
        placeholderText={newsletter.placeholderText}
        descriptionText={newsletter.descriptionText}
        image={newsletter.image}
      />

      <Footer
        brand={footer.brand}
        tagline={footer.tagline}
        email={footer.email}
        phone={footer.phone}
        address={footer.address}
        copyright={footer.copyright}
      />
    </>
  );
}
