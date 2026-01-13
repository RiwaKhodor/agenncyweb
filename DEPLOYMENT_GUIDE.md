# Free Hosting Guide for Agenncy Website

This guide will help you deploy your website for free to show your manager.

## Option 1: Vercel (Frontend) + Railway (Backend) - RECOMMENDED ⭐

### Step 1: Deploy Frontend to Vercel

1. **Create a GitHub account** (if you don't have one):
   - Go to https://github.com
   - Sign up for free

2. **Push your code to GitHub**:
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit"
   
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel**:
   - Go to https://vercel.com
   - Sign up with GitHub (free)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - **Build Settings:**
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `out`
   - Click "Deploy"
   - Your site will be live in ~2 minutes! 🎉

### Step 2: Deploy Backend to Railway

1. **Sign up for Railway**:
   - Go to https://railway.app
   - Sign up with GitHub (free tier available)

2. **Deploy Backend**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-detect Node.js
   - **Configure:**
     - Root Directory: `server`
     - Start Command: `node server.js`
     - Add Environment Variables:
       - `PORT` = (auto-set by Railway)
       - `SMTP_HOST` = your email host
       - `SMTP_PORT` = your email port
       - `SMTP_USER` = your email
       - `SMTP_PASS` = your email password
       - `EMAIL_RECIPIENT` = mail@agenncy.de

3. **Get Backend URL**:
   - Railway will give you a URL like: `https://your-app.railway.app`
   - Copy this URL

4. **Update Frontend API URL**:
   - In Vercel, go to your project settings
   - Add Environment Variable:
     - `VITE_API_URL` = `https://your-app.railway.app`
   - Redeploy your frontend

---

## Option 2: Netlify (Frontend) + Render (Backend)

### Frontend on Netlify:

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Deploy!

### Backend on Render:

1. Go to https://render.com
2. Sign up (free tier available)
3. Click "New" → "Web Service"
4. Connect your GitHub repo
5. Settings:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Add environment variables (same as Railway)
6. Get the URL and update `VITE_API_URL` in Netlify

---

## Option 3: Quick Demo (Frontend Only - No Forms)

If you just need to show the website without working forms:

1. **Deploy to Vercel** (follow Step 1 above)
2. **Skip backend** - forms won't submit, but the site will look perfect
3. You can add a note that "forms are for demo purposes"

---

## Quick Deploy Commands (Alternative)

If you prefer command line:

### Vercel CLI:
```bash
npm i -g vercel
vercel login
vercel
```

### Netlify CLI:
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

---

## Important Notes:

1. **Free Tier Limits:**
   - Vercel: Unlimited for personal projects
   - Railway: $5 free credit/month (usually enough for demo)
   - Render: Free tier with some limitations

2. **Environment Variables:**
   - Make sure to add all required env vars in your hosting platform
   - Never commit `.env` files to GitHub

3. **Custom Domain (Optional):**
   - Vercel/Netlify allow free custom domains
   - You can use a subdomain like `demo.agenncy.berlin`

4. **Build Output:**
   - Your Vite config outputs to `out` directory
   - Make sure your hosting platform is configured correctly

---

## Troubleshooting:

- **Build fails?** Check the build logs in Vercel/Netlify
- **API not working?** Make sure backend URL is correct in environment variables
- **Images not loading?** Check if image URLs are accessible (Readdy AI URLs should work)

---

## Recommended: Vercel + Railway

This is the fastest and easiest combination:
- ✅ Vercel: Best for React/Vite apps, instant deployments
- ✅ Railway: Simple backend hosting, good free tier
- ✅ Both integrate with GitHub seamlessly

Your site will be live in under 10 minutes! 🚀

