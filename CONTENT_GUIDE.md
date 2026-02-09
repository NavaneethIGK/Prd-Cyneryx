# Cyneryx - Dynamic Content Management Guide

## Overview
All website content is now centralized in a single configuration file for easy editing. No need to edit component code - just update the content file!

## How to Edit Content

### 1. **Main Content File Location**
```
src/config/content.ts
```

This is the ONLY file you need to edit to change website content and images.

### 2. **Content Sections Available**

#### **Navbar (Navigation)**
```typescript
navbar: {
  brand: 'Cyneryx',              // Website name/logo text
  links: [                        // Navigation menu items
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    // Add more links as needed
  ]
}
```

#### **Hero Section**
```typescript
hero: {
  badge: 'Welcome to Cyneryx',
  title: 'Main heading text',
  description: 'Subheading/description text',
  primaryBtnText: 'Get Started',  // First button text
  secondaryBtnText: 'Learn More', // Second button text
  primaryBtnLink: '#services',    // Where first button links to
  secondaryBtnLink: '#about',     // Where second button links to
  image: '/images/hero-img.png',  // Path to hero image
}
```

#### **About Section**
```typescript
about: {
  badge: 'About Us',
  title: 'Section title',
  description: 'First paragraph text',
  description2: 'Second paragraph text',
  features: [                     // Feature checklist items
    'Award Winning',
    '24/7 Support',
    'Professional Staff',
    'Fair Prices',
  ],
  image: '/images/about-img.jpg', // About section image
  buttonText: 'Read More',
  buttonLink: '#',
  showSocial: true,               // Show social media icons
}
```

#### **Services Section**
```typescript
services: {
  badge: 'Our Services',
  title: 'Services heading',
  description: 'Services description',
  buttonText: 'Read More',
  buttonLink: '#',
}
```

#### **Features Section (Why Choose Us)**
```typescript
features: {
  badge: 'Why Choose Us',
  title: 'Feature section title',
  description: 'Feature section description',
  featureList: [                  // List of features with icons
    { icon: 'check', text: 'Feature description' },
    { icon: 'check', text: 'Another feature' },
  ],
  stats: [                        // Statistics display
    { number: '9999', label: 'Happy Clients' },
    { number: '9999', label: 'Project Complete' },
  ],
  image: '/images/feature.png',
}
```

#### **FAQ Section**
```typescript
faq: {
  badge: 'Popular FAQs',
  title: 'Frequently Asked Questions',
}
```

#### **Team Section**
```typescript
team: {
  badge: 'Our Team',
  title: 'Team section title',
  description: 'Team description',
  members: [                      // Team members
    { 
      name: 'John Doe', 
      role: 'Job Title',
      image: '/images/team-1.jpg' // Member photo path
    },
    // Add more team members
  ],
  buttonText: 'Read More',
  buttonLink: '#',
}
```

#### **Testimonials Section**
```typescript
testimonials: {
  badge: 'Success Stories',
  title: 'Client testimonials title',
  subtitle: 'Short subtitle/description',
}
```

#### **Newsletter Section**
```typescript
newsletter: {
  badge: 'Newsletter',
  title: 'Newsletter heading',
  placeholderText: 'Enter Your Email',
  descriptionText: 'Newsletter description',
  image: '/images/newsletter.png',
}
```

#### **Footer Section**
```typescript
footer: {
  brand: 'Cyneryx',
  tagline: 'Company tagline',
  email: 'contact@example.com',
  phone: '+1 (555) 123-4567',
  address: 'Company address',
  copyright: '© 2024 Cyneryx. All Rights Reserved.',
}
```

## 3. **How to Change Images**

### Adding New Images
1. Place images in: `public/images/` folder
2. Update the path in `src/config/content.ts`

Example:
```typescript
// Old
image: '/images/hero-img.png'

// New (if you rename file)
image: '/images/my-new-image.png'
```

### Available Image Paths
- `/images/hero-img.png` - Hero section
- `/images/about-img.jpg` - About section
- `/images/feature.png` - Features section
- `/images/newsletter.png` - Newsletter section
- `/images/team-1.jpg` to `/images/team-4.jpg` - Team members
- `/images/testimonial-1.jpg` to `/images/testimonial-3.jpg` - Client testimonials
- `/images/project-1.jpg` to `/images/project-3.jpg` - Case studies

## 4. **How to Add/Remove Items**

### Add New Team Member
```typescript
members: [
  { name: 'John Doe', role: 'CEO', image: '/images/team-1.jpg' },
  { name: 'Jane Smith', role: 'CTO', image: '/images/team-2.jpg' },
  // Add new member here:
  { name: 'New Person', role: 'Job Title', image: '/images/new-image.jpg' },
]
```

### Add New Feature
```typescript
featureList: [
  { icon: 'check', text: 'Existing feature' },
  // Add new feature here:
  { icon: 'check', text: 'New feature description' },
]
```

### Add New Navigation Link
```typescript
links: [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  // Add new link here:
  { label: 'Blog', href: '/blog' },
]
```

## 5. **Quick Reference: Anchor Links**

These are special links that jump to sections on the page:

```typescript
primaryBtnLink: '#about'      // Jumps to About section
primaryBtnLink: '#services'   // Jumps to Services section
primaryBtnLink: '#team'       // Jumps to Team section
```

## 6. **Making Changes**

### Step 1: Open Configuration File
```
src/config/content.ts
```

### Step 2: Find the Section to Edit
(See "Content Sections Available" above)

### Step 3: Update Text/Images
```typescript
// Example: Change hero title
title: 'Transform Your Business Today' // Update this text
```

### Step 4: Save File
The development server will automatically reload with your changes.

## 7. **Best Practices**

✅ **DO:**
- Keep text concise and clear
- Use descriptive titles and headings
- Ensure image paths are correct
- Maintain consistent branding

❌ **DON'T:**
- Don't edit component files (in `src/components/`)
- Don't change section structure
- Don't modify TypeScript types
- Don't commit node_modules/

## 8. **Common Tasks**

### Change Company Name
1. Open `src/config/content.ts`
2. Find `navbar.brand`, `hero.badge`, `footer.brand`
3. Change all instances to your company name

### Update Contact Information
1. Find `footer` section
2. Update `email`, `phone`, `address`

### Change Hero Image
1. Upload new image to `public/images/`
2. Update `hero.image` path in config file

### Add New Team Member
1. Add new photo to `public/images/`
2. Add to `team.members` array with name, role, and image path

## 9. **Support**

For any technical issues:
- Check that all image paths are correct
- Ensure TypeScript syntax is valid
- Verify file is saved (Ctrl+S)
- Restart dev server if needed (`npm run dev`)

---

**Happy editing! 🚀**
