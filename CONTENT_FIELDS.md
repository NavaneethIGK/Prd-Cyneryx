# Content Fields Reference

All website content is stored in: **`src/config/content.ts`**

## All Editable Fields

### 🏢 Navbar
- `navbar.brand` - Website name
- `navbar.links[].label` - Menu link text
- `navbar.links[].href` - Menu link URL

### 🎯 Hero Section
- `hero.badge` - Badge text
- `hero.title` - Main heading (3.2rem)
- `hero.description` - Subheading paragraph
- `hero.primaryBtnText` - First button text
- `hero.secondaryBtnText` - Second button text
- `hero.primaryBtnLink` - First button link
- `hero.secondaryBtnLink` - Second button link
- `hero.image` - Hero image path

### 📖 About Section
- `about.badge` - Badge text
- `about.title` - Section title
- `about.description` - First paragraph
- `about.description2` - Second paragraph
- `about.features[]` - Feature list items
- `about.image` - About image path
- `about.buttonText` - Button text
- `about.buttonLink` - Button link
- `about.showSocial` - Show social icons (true/false)

### 🛠️ Services Section
- `services.badge` - Badge text
- `services.title` - Section title
- `services.description` - Description text
- `services.buttonText` - Button text
- `services.buttonLink` - Button link

### ⭐ Features Section (Why Choose Us)
- `features.badge` - Badge text
- `features.title` - Section title
- `features.description` - Description text
- `features.featureList[].icon` - Icon type (e.g., 'check')
- `features.featureList[].text` - Feature description
- `features.stats[].number` - Stat number
- `features.stats[].label` - Stat label
- `features.image` - Features image path

### ❓ FAQ Section
- `faq.badge` - Badge text
- `faq.title` - Section title

### 👥 Team Section
- `team.badge` - Badge text
- `team.title` - Section title
- `team.description` - Description text
- `team.members[].name` - Team member name
- `team.members[].role` - Team member title/role
- `team.members[].image` - Team member photo path
- `team.buttonText` - Button text
- `team.buttonLink` - Button link

### 💬 Testimonials Section
- `testimonials.badge` - Badge text
- `testimonials.title` - Section title
- `testimonials.subtitle` - Subtitle text

### 📧 Newsletter Section
- `newsletter.badge` - Badge text
- `newsletter.title` - Section title
- `newsletter.placeholderText` - Email input placeholder
- `newsletter.descriptionText` - Description text
- `newsletter.image` - Newsletter image path

### 🔗 Footer Section
- `footer.brand` - Company name
- `footer.tagline` - Company tagline
- `footer.email` - Contact email
- `footer.phone` - Contact phone
- `footer.address` - Company address
- `footer.copyright` - Copyright text

---

## Image Directory: `public/images/`

### Available Images
- `hero-img.png` (1920x1080)
- `about-img.jpg` (500x600)
- `feature.png` (500x600)
- `newsletter.png` (500x400)
- `team-1.jpg` (280x280)
- `team-2.jpg` (280x280)
- `team-3.jpg` (280x280)
- `team-4.jpg` (280x280)
- `testimonial-1.jpg` (100x100)
- `testimonial-2.jpg` (100x100)
- `testimonial-3.jpg` (100x100)
- `project-1.jpg` (optional)
- `project-2.jpg` (optional)
- `project-3.jpg` (optional)

---

## Data Types

- **String**: Text content (e.g., `"Hello World"`)
- **Array**: List of items (e.g., `['Item 1', 'Item 2']`)
- **Object**: Structured data (e.g., `{ name: 'John', role: 'CEO' }`)
- **Boolean**: true/false (e.g., `showSocial: true`)

---

## Editing Tips

✅ Keep text clear and concise
✅ Use proper capitalization
✅ Test image paths before saving
✅ Use # for anchor links (#about, #services, etc.)
✅ Save file and refresh browser to see changes

---

Generated on: 2024-12-04
Last Updated: 2024-12-04
