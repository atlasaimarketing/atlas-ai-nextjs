# Atlas AI Website - Designer Handoff Guide

**For: Tarrell (Web Designer)**  
**From: Kameel E. Gaines**  
**Project: Atlas AI Growth & Marketing Agency Website**

---

## Welcome!

This document will help you understand the Atlas AI website structure, how to make updates, and how to manage the site going forward. No advanced coding knowledge required!

---

## Project Overview

**Technology Stack:**
- **Framework:** Next.js 16 (React-based)
- **Styling:** Tailwind CSS + inline styles
- **Language:** TypeScript (but you can treat it like JavaScript)
- **Hosting:** Vercel (free, automatic deployments)
- **Version Control:** GitHub

**Website Structure:**
- 9 total pages
- Responsive design (mobile-friendly)
- Professional branding with Atlas AI colors and imagery

---

## File Structure (What's Where)

```
atlas-ai-nextjs/
├── app/                          # All pages live here
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Site-wide layout & metadata
│   ├── globals.css               # Global styles
│   ├── services/
│   │   └── page.tsx              # Services page
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── insights/
│   │   └── page.tsx              # Insights/Blog page
│   ├── qa/
│   │   └── page.tsx              # Q&A page
│   ├── privacy/
│   │   └── page.tsx              # Privacy Policy
│   ├── terms/
│   │   └── page.tsx              # Terms of Service
│   └── cookies/
│       └── page.tsx              # Cookie Policy
├── components/                   # Reusable components
│   ├── Navigation.tsx            # Top navigation menu
│   └── Footer.tsx                # Footer (on all pages)
├── public/                       # Static files
│   └── assets/                   # All images
│       ├── logo.png
│       ├── brand-systems.png
│       ├── marketing-growth.png
│       ├── thought-leadership.png
│       ├── ai-integration.png
│       ├── fractional-cmo.png
│       ├── team-training.png
│       ├── innovation.png
│       ├── logistics-hero.png
│       └── founder.png
├── package.json                  # Project dependencies
└── README.md                     # Project documentation
```

---

## Common Editing Tasks

### 1. Changing Text Content

**Example: Update homepage hero text**

1. Open `app/page.tsx`
2. Find the hero section (around line 20-40)
3. Look for the text you want to change
4. Edit it directly
5. Save the file
6. Push to GitHub → Vercel auto-deploys!

```typescript
// Before
<h1>Where Industry Expertise Meets AI Innovation</h1>

// After (your edit)
<h1>Your New Headline Here</h1>
```

### 2. Updating Contact Information

**Email and Phone are in 4 places:**

1. **Footer** (`components/Footer.tsx` - line 67-72)
2. **Homepage CTA** (`app/page.tsx` - around line 291)
3. **Contact Page** (`app/contact/page.tsx` - line 15-19)
4. **Q&A Page** (`app/qa/page.tsx` - line 20)

**To update:**
- Search for `info@atlasaimarketing.co` or `832-583-9000`
- Replace with new email/phone
- Save all files
- Push to GitHub

### 3. Changing Images

**To replace an image:**

1. Prepare your new image:
   - Same dimensions as the original (or similar aspect ratio)
   - Optimized for web (compressed, not huge file size)
   - PNG or JPG format

2. Name it the same as the file you're replacing:
   - Example: `brand-systems.png`

3. Replace the file in `public/assets/`

4. Push to GitHub → Image updates automatically!

**Image Locations:**
- Logo: `public/assets/logo.png`
- Service images: `public/assets/[service-name].png`
- Founder photo: `public/assets/founder.png`

### 4. Updating the Services

**Services are defined in two places:**

**Homepage Service Cards** (`app/page.tsx` - around line 75-105):
```typescript
{
  image: "/assets/brand-systems.png",
  title: "AI-Powered Brand Systems",
  description: "Brand systems that think: from identity..."
}
```

**Services Page Details** (`app/services/page.tsx` - line 5-88):
```typescript
{
  title: "AI-Powered Brand Systems",
  tagline: "Atlas AI builds brand systems...",
  description: "Whether you're launching a new brand...",
  image: "/assets/brand-systems.png",
  features: [
    "Brand strategy and positioning",
    "Visual identity design",
    ...
  ]
}
```

**To update a service:**
1. Edit the title, description, or features
2. Save the file
3. Push to GitHub

### 5. Changing Colors

**Main brand colors are:**
- Navy Blue: `#001F54` (headings, navigation)
- Electric Blue: `#00BFFF` (links, accents)
- Dark Navy: `#001f3f` (footer background)
- Light Gray: `#f9f9f9` (section backgrounds)

**To change a color:**
1. Search for the hex code (e.g., `#001F54`)
2. Replace with your new color
3. Save and push

**Pro Tip:** Use Find & Replace (Ctrl+H or Cmd+H) to change all instances at once!

### 6. Adding a New Page

**Steps:**

1. Create a new folder in `app/`:
   ```
   app/new-page/
   ```

2. Create `page.tsx` inside:
   ```typescript
   export default function NewPage() {
     return (
       <main style={{ padding: "6rem 2rem", minHeight: "60vh" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
           <h1>Your New Page Title</h1>
           <p>Your content here...</p>
         </div>
       </main>
     );
   }
   ```

3. Add link to navigation (`components/Navigation.tsx`)

4. Add link to footer (`components/Footer.tsx`)

5. Push to GitHub!

---

## Styling Guide

### Inline Styles (Current Approach)

Most styling is done with inline `style` objects:

```typescript
<div style={{
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
}}>
  Content here
</div>
```

### Common Style Patterns

**Section Padding:**
```typescript
style={{ padding: "6rem 2rem" }}
```

**Centered Container:**
```typescript
style={{ maxWidth: "1200px", margin: "0 auto" }}
```

**Heading Styles:**
```typescript
style={{
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#001F54",
  marginBottom: "2rem"
}}
```

**Button/Link Styles:**
```typescript
style={{
  backgroundColor: "#00BFFF",
  color: "white",
  padding: "1rem 2rem",
  borderRadius: "8px",
  textDecoration: "none"
}}
```

---

## Development Workflow

### Option 1: Edit Locally (Recommended)

**Tools Needed:**
- **Code Editor:** [VS Code](https://code.visualstudio.com/) (free, highly recommended)
- **GitHub Desktop:** [desktop.github.com](https://desktop.github.com) (free, easy)
- **Node.js:** [nodejs.org](https://nodejs.org/) (free, required to run locally)

**Workflow:**
1. Clone repository from GitHub to your computer
2. Open project in VS Code
3. Run `pnpm install` (first time only)
4. Run `pnpm dev` to start local server
5. Open `http://localhost:3000` in browser
6. Make changes → See updates instantly!
7. When done, commit and push to GitHub
8. Vercel auto-deploys

### Option 2: Edit on GitHub.com (Quick Changes)

**Workflow:**
1. Go to repository on GitHub.com
2. Navigate to file you want to edit
3. Click pencil icon (Edit)
4. Make changes
5. Scroll down, add commit message
6. Click "Commit changes"
7. Vercel auto-deploys (1-2 minutes)

**Best for:** Quick text changes, small updates

---

## Testing Before Publishing

### Preview Deployments

Every time you push to GitHub, Vercel creates:
1. **Production deployment** (your main URL)
2. **Preview deployment** (temporary URL for testing)

**To test before going live:**
1. Create a new branch in GitHub
2. Make your changes on that branch
3. Push to GitHub
4. Vercel creates a preview URL
5. Test the preview
6. If good, merge branch to main
7. Production site updates!

---

## Responsive Design

The site is already mobile-responsive! Here's how it works:

**Grid Layouts:**
```typescript
style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem"
}}
```
- Automatically stacks on mobile
- Side-by-side on desktop

**Mobile Navigation:**
- Hamburger menu appears on small screens
- Controlled by `components/Navigation.tsx`
- Already implemented and working!

---

## SEO & Metadata

**Site-wide metadata** is in `app/layout.tsx`:

```typescript
export const metadata = {
  title: "Atlas AI - Where Industry Expertise Meets AI Innovation",
  description: "AI-powered growth and marketing agency...",
  openGraph: {
    title: "Atlas AI...",
    description: "...",
    images: ["/assets/logo.png"]
  }
}
```

**This controls:**
- Browser tab title
- Search engine results
- Social media link previews
- Twitter/X cards

**To update:**
1. Edit `app/layout.tsx`
2. Change title, description, or image
3. Push to GitHub

---

## Common Issues & Solutions

### Issue: Changes not showing

**Solution:**
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Check Vercel deployment status
4. Wait 2-3 minutes for deployment to complete

### Issue: Build failed on Vercel

**Solution:**
1. Check Vercel build logs
2. Look for error messages
3. Common causes:
   - Missing closing tag
   - Typo in file name
   - Missing comma in code
4. Fix error and push again

### Issue: Image not loading

**Solution:**
1. Check file path is correct: `/assets/image-name.png`
2. Verify image exists in `public/assets/`
3. Check file name matches exactly (case-sensitive!)
4. Make sure image was pushed to GitHub

### Issue: Mobile menu not working

**Solution:**
1. Check `components/Navigation.tsx`
2. Verify "use client" directive is at top of file
3. Check browser console for JavaScript errors

---

## Best Practices

### 1. Always Test Locally First
- Run `pnpm dev` and test changes at `localhost:3000`
- Catch errors before pushing to production

### 2. Write Clear Commit Messages
- Bad: "update"
- Good: "Update homepage hero text and service descriptions"

### 3. Make Small, Focused Changes
- Don't change 10 things at once
- Easier to debug if something breaks

### 4. Keep Backups
- GitHub automatically keeps all versions
- Can rollback anytime in Vercel dashboard

### 5. Optimize Images
- Compress before uploading
- Use appropriate dimensions
- Tools: TinyPNG, ImageOptim, Squoosh

---

## Useful Commands

**Install dependencies:**
```bash
pnpm install
```

**Start development server:**
```bash
pnpm dev
```

**Build for production (test):**
```bash
pnpm build
```

**Check for errors:**
```bash
pnpm lint
```

---

## Resources for Learning

**Next.js Documentation:**
- [nextjs.org/docs](https://nextjs.org/docs)
- Official tutorials and guides

**React Basics:**
- [react.dev/learn](https://react.dev/learn)
- Interactive tutorials

**Tailwind CSS:**
- [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Utility-first CSS framework

**VS Code Tips:**
- [code.visualstudio.com/docs](https://code.visualstudio.com/docs)
- Keyboard shortcuts, extensions

---

## Contact Information

**Current Contact Details on Site:**
- Email: info@atlasaimarketing.co
- Phone: 832-583-9000

**To update these:**
- See "Common Editing Tasks" → "Updating Contact Information" above

---

## Quick Reference Card

| Task | File to Edit | Line Number (approx) |
|------|--------------|---------------------|
| Homepage hero text | `app/page.tsx` | 20-40 |
| Service descriptions | `app/services/page.tsx` | 5-88 |
| Footer contact info | `components/Footer.tsx` | 67-72 |
| Navigation links | `components/Navigation.tsx` | 15-30 |
| Site title/SEO | `app/layout.tsx` | 10-25 |
| About page content | `app/about/page.tsx` | 9-15 |
| Contact page | `app/contact/page.tsx` | 14-19 |

---

## Next Steps for You

1. ✅ Get access to GitHub repository (Kameel will add you)
2. ✅ Get access to Vercel project (Kameel will invite you)
3. ✅ Install VS Code, GitHub Desktop, Node.js
4. ✅ Clone repository to your computer
5. ✅ Run `pnpm install` and `pnpm dev`
6. ✅ Make a small test change
7. ✅ Push to GitHub and watch it deploy!
8. ✅ You're ready to manage the site! 🎉

---

**Questions?** Don't hesitate to ask Kameel or reach out to Vercel support. You've got this! 💪

**Welcome to the Atlas AI team!** 🚀

