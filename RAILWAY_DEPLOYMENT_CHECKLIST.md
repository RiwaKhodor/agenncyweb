# 🚀 Railway Deployment Checklist - Complete Setup

## ✅ Server Configuration Status

Your `server/server.js` is **100% ready for Railway**:

- ✅ Uses `process.env.PORT || 3001` (Railway auto-assigns PORT)
- ✅ Binds to `0.0.0.0` (required for Railway)
- ✅ Root route `/` exists (Railway health check)
- ✅ SMTP uses environment variables correctly
- ✅ CORS enabled for frontend connections
- ✅ Error handling in place

---

## 📋 Railway Environment Variables

Make sure these **5 variables** are set in Railway Dashboard:

| Variable | Example Value | Description |
|----------|---------------|-------------|
| `SMTP_HOST` | `smtp.ionos.de` | Your SMTP server |
| `SMTP_PORT` | `587` | SMTP port (587 for TLS, 465 for SSL) |
| `SMTP_USER` | `Mail@agenncy.de` | Your email address |
| `SMTP_PASS` | `your-password` | Your email password (no quotes needed) |
| `EMAIL_RECIPIENT` | `Mail@agenncy.de` | Where to send form submissions |

**Note:** Railway automatically sets `PORT` - **do not add it manually**.

---

## 🧪 Testing Steps

### 1. Test Backend Root URL

Visit in browser:
```
https://agencyweb-production.up.railway.app
```

**Expected Response:**
```json
{
  "status": "ok",
  "message": "Backend is running 🚀",
  "service": "Agenncy API",
  "timestamp": "2024-...",
  "endpoints": {
    "health": "/api/health",
    "consultation": "/api/consultation",
    "contact": "/api/contact"
  }
}
```

✅ If you see this → **Backend is working!**

---

### 2. Test Health Endpoint

Visit:
```
https://agencyweb-production.up.railway.app/api/health
```

**Expected Response:**
```json
{
  "status": "ok",
  "message": "Agenncy API is running",
  "timestamp": "2024-..."
}
```

---

### 3. Test Contact Form Endpoint (POST)

Use Postman or curl:
```bash
curl -X POST https://agencyweb-production.up.railway.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "message": "Test message"
  }'
```

**Expected Response (Success):**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "..."
}
```

**Expected Response (SMTP Error):**
```json
{
  "success": false,
  "error": "Failed to send email",
  "details": "...",
  "code": "..."
}
```

---

## 🔧 Vercel Frontend Configuration

In **Vercel Dashboard** → **Settings** → **Environment Variables**, set:

| Variable | Value |
|----------|-------|
| `VITE_API_URL` | `https://agencyweb-production.up.railway.app` |

**Important:** 
- No trailing slash
- Use `https://` (Railway provides SSL)
- Redeploy Vercel after adding/updating this variable

---

## 🏠 Local Development Setup

### 1. Create `.env` file in `server/` folder:

```env
# SMTP Configuration
SMTP_HOST=smtp.ionos.de
SMTP_PORT=587
SMTP_USER=Mail@agenncy.de
SMTP_PASS=your-password-here
EMAIL_RECIPIENT=Mail@agenncy.de

# Server Configuration (optional - defaults to 3001)
PORT=3001
```

### 2. Run locally:

```bash
cd server
npm install
npm run dev
```

Server will run on `http://localhost:3001`

### 3. Test locally:

Visit: `http://localhost:3001`

---

## 🐛 Troubleshooting

### Issue: "The train has not arrived at the station"

**Cause:** Server not binding correctly or no root route

**Fix:** 
- ✅ Already fixed in `server.js` (binds to `0.0.0.0`)
- ✅ Root route `/` exists

### Issue: "Failed to send email"

**Possible Causes:**
1. SMTP credentials incorrect
2. SMTP server blocking connection
3. Firewall/network issue

**Check:**
- Railway logs for SMTP error details
- Verify SMTP credentials in Railway Dashboard
- Test SMTP connection from local dev first

### Issue: Frontend can't connect to backend

**Check:**
1. `VITE_API_URL` in Vercel matches Railway URL exactly
2. No CORS errors in browser console
3. Backend root URL works (step 1 above)

---

## 📝 Deployment Checklist

Before going live:

- [ ] All 5 SMTP variables set in Railway
- [ ] Backend root URL returns JSON (tested)
- [ ] Health endpoint works
- [ ] `VITE_API_URL` set in Vercel
- [ ] Vercel redeployed after env var change
- [ ] Test form submission from live site
- [ ] Check Railway logs for any errors
- [ ] Verify email received at `EMAIL_RECIPIENT`

---

## 🎯 Quick Reference

**Backend URL:** `https://agencyweb-production.up.railway.app`

**Endpoints:**
- `GET /` - Root/health check
- `GET /api/health` - Health check
- `POST /api/contact` - Contact form
- `POST /api/consultation` - Consultation form

**Railway Dashboard:** https://railway.app

**Vercel Dashboard:** https://vercel.com

---

## ✅ Current Status

Your server is **ready to deploy**! Just:

1. ✅ Commit and push changes
2. ✅ Railway auto-deploys
3. ✅ Test root URL
4. ✅ Update Vercel `VITE_API_URL`
5. ✅ Test form submission

Everything is configured correctly! 🚀
