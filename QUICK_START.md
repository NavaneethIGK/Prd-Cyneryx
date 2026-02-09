# ⚡ Quick Start - Edit Content

## File to Edit: `src/config/content.ts`

That's it! All content and images are in this ONE file.

### Common Changes

**Change Company Name**
```typescript
export const siteConfig = {
  navbar: {
    brand: 'Your Company Name', // Change here
```

**Change Hero Heading**
```typescript
hero: {
  title: 'Your New Heading Here',
```

**Change Hero Image**
```typescript
hero: {
  image: '/images/new-image.png', // Change image path
```

**Add Team Member**
```typescript
team: {
  members: [
    { name: 'John Doe', role: 'CEO', image: '/images/team-1.jpg' },
    // Add this line:
    { name: 'New Person', role: 'CTO', image: '/images/new-photo.jpg' },
  ],
```

**Update Contact Info**
```typescript
footer: {
  email: 'newemail@example.com',
  phone: '+1 (555) 999-8888',
  address: 'New Address Here',
```

**Change About Section Text**
```typescript
about: {
  title: 'New Title',
  description: 'New description paragraph',
  description2: 'Second paragraph',
```

---

## Image Locations

Place all images in: **`public/images/`**

Example paths:
- `/images/hero-img.png`
- `/images/team-1.jpg`
- `/images/about-img.jpg`

---

## After Editing

1. ✅ Save the file (Ctrl+S)
2. ✅ Changes appear automatically in browser
3. ✅ If not, refresh page or restart: `npm run dev`

---

That's all you need to know! 🎉
