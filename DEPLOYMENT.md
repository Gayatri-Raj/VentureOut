# VentureOut - AI Travel Concierge

Your AI Travel Concierge: Plan Smarter, Travel Better

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Google Gemini API Key (get it from [Google AI Studio](https://aistudio.google.com))

### Local Development

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env.local file with your API key
cp .env.example .env.local
# Then edit .env.local and add your GEMINI_API_KEY

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
cd frontend

# Build the app
npm run build

# Start production server
npm start
```

## 📦 Deployment to Vercel

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub** (already done ✓)
   - Your repo is public and ready

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Select your GitHub repo: `Gayatri-Raj/VentureOut`
   - Vercel will auto-detect the configuration from `vercel.json`

3. **Configure Environment Variables**
   - In Vercel Project Settings → "Environment Variables"
   - Add: `GEMINI_API_KEY` = your actual API key
   - Leave `NEXT_PUBLIC_API_URL` as default or update if needed

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your app
   - Your app will be live at `https://venture-out.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# From root directory
vercel

# Follow the prompts to:
# - Link to your Vercel account
# - Select your project settings
# - Add environment variables when prompted
```

### Option 3: Deploy via GitHub Integration

1. Go to [Vercel GitHub Integration](https://vercel.com/integrations/github)
2. Install the Vercel app on your GitHub account
3. Give it permission to access `Gayatri-Raj/VentureOut`
4. Vercel will auto-deploy on every push to main branch

## 🔧 Why 404 Error?

Common causes and fixes:

### 1. **Frontend in Subdirectory**
   - ✅ Fixed: `vercel.json` tells Vercel to build from `/frontend`
   - ✅ Fixed: Custom build commands configured

### 2. **Missing Environment Variables**
   - ✅ Action: Add `GEMINI_API_KEY` to Vercel environment
   - Without this, the AI features won't work but pages should load

### 3. **API Routes Not Found**
   - ✅ Ensure these files exist:
     - `frontend/app/api/planner/route.ts`
     - `frontend/app/api/guide/route.ts`
     - `frontend/app/api/expenses/route.ts`
     - `frontend/app/api/routes/route.ts`

### 4. **Build Failures**
   - Check Vercel Build Logs:
     1. Go to Vercel Dashboard
     2. Select your project
     3. Click "Deployments"
     4. Click the failed deployment
     5. View "Build Logs"

## 📋 Configuration Files Added

### `vercel.json`
Tells Vercel how to build your project:
- Build directory: `frontend`
- Build command: Install deps & build
- Output directory: `frontend/.next`
- Framework: Next.js

### `.vercelignore`
Excludes unnecessary files to speed up deployment:
- node_modules
- .git
- Documentation files

### `.env.example`
Template for environment variables needed locally

## 🌐 Environment Variables

### Required for Production:
- `GEMINI_API_KEY`: Your Google Gemini API key

### Optional:
- `NEXT_PUBLIC_API_URL`: API endpoint (defaults to current domain)

## 📱 Features

- ✈️ **Trip Planner**: AI-powered itinerary generation
- 📖 **Travel Guide**: Ask AI travel questions
- 💰 **Expense Tracker**: Track and visualize spending
- 🗺️ **Route Optimizer**: Compare travel routes

## 🐛 Troubleshooting

### Build fails with "Cannot find module"
- Solution: Make sure `frontend/package.json` has all dependencies
- Run: `cd frontend && npm install`

### Pages load but get 404 on API calls
- Check environment variables are set in Vercel
- Check API route files exist in `frontend/app/api/`
- View Vercel Function Logs for errors

### Styles not loading
- TailwindCSS should auto-compile during build
- If broken, check `frontend/app/globals.css` exists

### Image not showing (hero image)
- Ensure `frontend/public/Images/hero.png` exists in repo
- Check file path in `Hero.tsx` component

## 📞 Support

For Vercel-specific issues:
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app)

For code issues, check the repository issues page.

---

**Status**: Ready for Vercel deployment ✅
