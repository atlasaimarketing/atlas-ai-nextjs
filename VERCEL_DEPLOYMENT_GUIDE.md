# Atlas AI Website - Vercel Deployment Guide

## Overview

This guide will walk you through deploying the Atlas AI website to Vercel, giving you a professional, permanent URL that's perfect for sharing. The entire process takes about 10-15 minutes.

---

## What You'll Need

- GitHub account (free) - [Sign up here](https://github.com/signup)
- Vercel account (free) - [Sign up here](https://vercel.com/signup)
- The Atlas AI project files (you have these)

---

## Step 1: Create a GitHub Account (If You Don't Have One)

1. Go to [github.com/signup](https://github.com/signup)
2. Enter your email address
3. Create a password
4. Choose a username
5. Verify your account via email
6. Choose the free plan

**Why GitHub?** Vercel deploys directly from GitHub, making updates automatic and easy.

---

## Step 2: Upload Project to GitHub

### Option A: Using GitHub Desktop (Easiest for Non-Developers)

1. **Download GitHub Desktop**
   - Go to [desktop.github.com](https://desktop.github.com)
   - Download and install for your operating system
   - Sign in with your GitHub account

2. **Create a New Repository**
   - Click "File" → "New Repository"
   - Name: `atlas-ai-website`
   - Description: "Atlas AI Growth & Marketing Agency Website"
   - Local Path: Choose where to save it
   - Click "Create Repository"

3. **Add Your Project Files**
   - Copy all files from the `atlas-ai-nextjs` folder
   - Paste them into the new repository folder
   - GitHub Desktop will show all the new files

4. **Commit and Push**
   - In GitHub Desktop, you'll see all the files listed
   - In the bottom left, add a commit message: "Initial Atlas AI website"
   - Click "Commit to main"
   - Click "Publish repository" at the top
   - Choose "Public" or "Private" (either works)
   - Click "Publish Repository"

### Option B: Using GitHub Web Interface (Alternative Method)

1. **Create New Repository**
   - Go to [github.com](https://github.com)
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name: `atlas-ai-website`
   - Description: "Atlas AI Growth & Marketing Agency Website"
   - Choose Public or Private
   - Click "Create repository"

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop all files from `atlas-ai-nextjs` folder
   - Or click "choose your files" and select all
   - Add commit message: "Initial Atlas AI website"
   - Click "Commit changes"

---

## Step 3: Create a Vercel Account

1. Go to [vercel.com/signup](https://vercel.com/signup)
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Complete your profile (name, optional team name)
5. You're now in your Vercel dashboard!

---

## Step 4: Deploy to Vercel

1. **Import Your Project**
   - In your Vercel dashboard, click "Add New..." → "Project"
   - You'll see a list of your GitHub repositories
   - Find `atlas-ai-website` and click "Import"

2. **Configure Project**
   - **Project Name:** `atlas-ai` (or whatever you prefer)
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `pnpm build` (should auto-detect)
   - **Output Directory:** `.next` (should auto-detect)
   - **Install Command:** `pnpm install` (should auto-detect)

3. **Environment Variables**
   - You don't need any for this project
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel will build and deploy your site (takes 1-3 minutes)
   - You'll see a progress screen with logs
   - When complete, you'll see confetti! 🎉

5. **Your Site is Live!**
   - You'll get a URL like: `https://atlas-ai.vercel.app`
   - Click "Visit" to see your live website
   - This URL is permanent and shareable!

---

## Step 5: Add a Custom Domain (Optional)

If you own `atlasaimarketing.co` or another domain:

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Enter your domain: `atlasaimarketing.co`
   - Click "Add"

2. **Configure DNS**
   - Vercel will show you DNS records to add
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the DNS records Vercel provides
   - Wait 24-48 hours for DNS propagation

3. **SSL Certificate**
   - Vercel automatically provides free SSL (https://)
   - No configuration needed!

---

## Step 6: Making Updates (For Tarrell)

### Method 1: GitHub Desktop (Easiest)

1. Open GitHub Desktop
2. Make changes to files in your local folder
3. GitHub Desktop will show what changed
4. Add a commit message describing the changes
5. Click "Commit to main"
6. Click "Push origin"
7. **Vercel automatically deploys the update!** (takes 1-2 minutes)

### Method 2: Direct File Edit on GitHub

1. Go to your repository on GitHub.com
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down, add commit message
6. Click "Commit changes"
7. **Vercel automatically deploys!**

---

## Understanding Your Vercel Dashboard

### Key Sections:

**Deployments**
- See all versions of your site
- Each update creates a new deployment
- Click any deployment to see that version
- Rollback to previous versions if needed

**Analytics**
- See visitor traffic (basic on free plan)
- Page views, unique visitors
- Top pages and referrers

**Settings**
- Manage domains
- Environment variables
- Team members (add Tarrell here!)
- Danger zone (delete project)

---

## Link Previews

When you share your Vercel URL via text or social media, people will see:

- **Title:** Atlas AI - Where Industry Expertise Meets AI Innovation
- **Description:** AI-powered growth and marketing agency...
- **Image:** Atlas AI logo

This is configured in the website's metadata and works automatically!

---

## Troubleshooting

### Build Failed

**Problem:** Deployment shows "Build Failed"

**Solution:**
1. Check the build logs in Vercel
2. Most common issue: missing dependencies
3. Make sure all files were uploaded to GitHub
4. Contact Vercel support (very responsive)

### Site Not Loading

**Problem:** URL shows error or blank page

**Solution:**
1. Wait 2-3 minutes after deployment
2. Clear your browser cache
3. Try incognito/private browsing mode
4. Check Vercel deployment status

### Changes Not Showing

**Problem:** Made changes but site looks the same

**Solution:**
1. Verify changes were pushed to GitHub
2. Check Vercel deployments - new one should appear
3. Wait for deployment to complete (1-2 minutes)
4. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

---

## Adding Team Members

To give Tarrell access to manage the site:

1. **In Vercel Dashboard**
   - Go to Settings → Team
   - Click "Invite Member"
   - Enter Tarrell's email
   - Choose role: "Member" (can deploy) or "Viewer" (can only view)
   - Click "Invite"

2. **Tarrell Accepts**
   - Tarrell receives email invitation
   - Creates Vercel account (if needed)
   - Accepts invitation
   - Now has access to deploy and manage!

---

## Cost Breakdown

**Vercel Free Plan:**
- ✅ Unlimited deployments: FREE
- ✅ 100GB bandwidth/month: FREE
- ✅ SSL certificate: FREE
- ✅ Custom domain: FREE
- ✅ Automatic builds: FREE
- ✅ Preview deployments: FREE

**You only pay if:**
- Traffic exceeds 100GB/month (unlikely for your site)
- You need advanced analytics
- You need team collaboration features beyond basic

**Expected cost for Atlas AI: $0/month** ✅

---

## Support Resources

**Vercel Documentation**
- [vercel.com/docs](https://vercel.com/docs)
- Comprehensive guides and tutorials

**Vercel Support**
- [vercel.com/support](https://vercel.com/support)
- Email support (responds within 24 hours)
- Community forum

**GitHub Help**
- [docs.github.com](https://docs.github.com)
- GitHub support

---

## Quick Reference

### Your URLs
- **Vercel Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard)
- **GitHub Repository:** `github.com/[your-username]/atlas-ai-website`
- **Live Website:** `https://atlas-ai.vercel.app` (or your custom domain)

### Important Files to Know
- `app/page.tsx` - Homepage
- `app/services/page.tsx` - Services page
- `components/Footer.tsx` - Footer (contact info)
- `components/Navigation.tsx` - Navigation menu
- `public/assets/` - All images

### Quick Deploy Process
1. Make changes to files
2. Commit to GitHub
3. Push to GitHub
4. Vercel auto-deploys (1-2 min)
5. Done! ✅

---

## Next Steps

1. ✅ Follow Step 1-4 to deploy your site
2. ✅ Share your new URL with your team
3. ✅ Add Tarrell as a team member
4. ✅ (Optional) Connect custom domain
5. ✅ Start sharing your professional website!

---

**Questions?** Review the troubleshooting section or contact Vercel support. They're very helpful and responsive!

**Congratulations!** Your Atlas AI website is now live with professional hosting, automatic deployments, and a clean shareable URL. 🎉

