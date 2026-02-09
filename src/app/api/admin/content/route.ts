import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const contentFile = path.join(process.cwd(), 'src/config/content.json');

function ensureContentFile() {
  if (!fs.existsSync(contentFile)) {
    const defaultContent = {
      navbar: {
        brand: 'Cyneryx',
        links: [
          { label: 'Home', href: '#' },
          { label: 'About', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'Team', href: '#team' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      hero: {
        badge: 'Welcome to Cyneryx',
        title: 'Harness the Power of Artificial Intelligence',
        description: 'Transform your business with cutting-edge AI solutions.',
        primaryBtnText: 'Get Started',
        secondaryBtnText: 'Learn More',
        primaryBtnLink: '#services',
        secondaryBtnLink: '#about',
        image: '/images/hero-img.png',
      },
      footer: {
        brand: 'Cyneryx',
        tagline: 'Transforming businesses with artificial intelligence solutions',
        email: 'contact@aitech.com',
        phone: '+1 (555) 123-4567',
        address: '123 Tech Street, San Francisco, CA 94105',
        copyright: '© 2024 Cyneryx. All Rights Reserved.',
      },
    };
    fs.writeFileSync(contentFile, JSON.stringify(defaultContent, null, 2));
  }
}

export async function GET() {
  try {
    ensureContentFile();
    const content = fs.readFileSync(contentFile, 'utf-8');
    return NextResponse.json(JSON.parse(content));
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to read content' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verify admin token
    const token = request.cookies.get('adminToken');
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const updatedContent = await request.json();
    ensureContentFile();
    fs.writeFileSync(contentFile, JSON.stringify(updatedContent, null, 2));

    return NextResponse.json({ success: true, message: 'Content updated' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update content' },
      { status: 500 }
    );
  }
}
