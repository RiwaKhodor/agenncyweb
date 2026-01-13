# Backend Setup Instructions - Node.js + Nodemailer

This guide will help you set up a professional backend API using Node.js and Nodemailer to send emails from your contact forms.

## ✅ What's Already Done

- ✅ Backend server code created (`server/server.js`)
- ✅ API endpoints configured:
  - `/api/consultation` - For consultation popup form
  - `/api/contact` - For contact page form
- ✅ Frontend forms updated to use the backend API
- ✅ Both forms send emails to: **riwakhodour@gmail.com**

## 📋 Setup Steps

### Step 1: Install Backend Dependencies

1. Open terminal in your project root
2. Navigate to the server folder:
   ```bash
   cd server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Step 2: Configure Gmail SMTP (Recommended)

#### Option A: Using Gmail App Password (Recommended)

1. **Enable 2-Step Verification** on your Gmail account:
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Agenncy Backend" as the name
   - Click "Generate"
   - **Copy the 16-character password** (you'll use this in Step 3)

#### Option B: Using Other Email Providers

- **Outlook/Hotmail**: `smtp-mail.outlook.com`, port `587`
- **Zoho**: `smtp.zoho.com`, port `587`
- **Custom SMTP**: Use your company's SMTP settings

### Step 3: Create Environment File

1. In the `server` folder, create a file named `.env`
2. Add these lines (replace with your actual values):

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=riwakhodour@gmail.com
SMTP_PASS=your_16_character_app_password_here

# Server Configuration
PORT=3001
```

**Important:** 
- Replace `your_16_character_app_password_here` with the App Password from Step 2
- Use the App Password, NOT your regular Gmail password

### Step 4: Start the Backend Server

1. Make sure you're in the `server` folder:
   ```bash
   cd server
   ```

2. Start the server:
   ```bash
   npm run dev
   ```

   You should see:
   ```
   🚀 Server running on http://localhost:3001
   ✅ SMTP Server is ready to send emails
   📧 Emails will be sent to: riwakhodour@gmail.com
   ```

### Step 5: Configure Frontend API URL

1. In your project root, create or update `.env` file:
   ```env
   VITE_API_URL=http://localhost:3001
   ```

2. For production, update this to your backend URL:
   ```env
   VITE_API_URL=https://your-backend-domain.com
   ```

3. **Restart your frontend dev server** after adding/updating `.env`

### Step 6: Test the Forms

1. **Test Consultation Popup**:
   - Open your website
   - Click "Schedule Consultation"
   - Fill out and submit the form
   - Check `riwakhodour@gmail.com` for the email

2. **Test Contact Page**:
   - Navigate to `/contact`
   - Fill out and submit the form
   - Check `riwakhodour@gmail.com` for the email

## 🚀 Running Both Servers

You need to run **two servers** simultaneously:

### Terminal 1 - Backend Server:
```bash
cd server
npm run dev
```

### Terminal 2 - Frontend Server:
```bash
npm run dev
```

## 📧 Email Configuration Summary

- **Recipient:** riwakhodour@gmail.com
- **SMTP:** Gmail (smtp.gmail.com:587)
- **Authentication:** App Password (not regular password)
- **Forms:** Consultation Popup + Contact Page

## 🔒 Security Notes

- **Never commit `.env` files to git** (they're in `.gitignore`)
- **Use App Passwords**, not regular passwords
- For production, use environment variables in your hosting platform
- Consider adding rate limiting for production

## 🐛 Troubleshooting

### "SMTP Error" or "Authentication failed"
- ✅ Make sure 2-Step Verification is enabled
- ✅ Use App Password, not regular password
- ✅ Check that SMTP_USER matches the email that generated the App Password

### "Connection timeout"
- ✅ Check your firewall settings
- ✅ Verify SMTP_HOST and SMTP_PORT are correct
- ✅ For Gmail, make sure "Less secure app access" is NOT needed (use App Password instead)

### "CORS error" in browser
- ✅ Make sure backend server is running
- ✅ Check that VITE_API_URL matches your backend URL
- ✅ CORS is already configured in the backend

### "Network error" or "Failed to fetch"
- ✅ Ensure backend server is running on port 3001
- ✅ Check that VITE_API_URL in frontend `.env` is correct
- ✅ Restart both servers after changing `.env` files

## 📁 Project Structure

```
project-4987240/
├── server/
│   ├── server.js          # Backend API
│   ├── package.json       # Backend dependencies
│   └── .env               # SMTP credentials (create this)
├── src/
│   ├── components/
│   │   └── ConsultationPopup.tsx  # Updated to use API
│   └── pages/
│       └── contact/
│           └── ContactForm.tsx    # Updated to use API
└── .env                   # Frontend API URL (create this)
```

## 🎯 Next Steps for Production

1. **Deploy Backend** to a hosting service (Heroku, Railway, Render, etc.)
2. **Update VITE_API_URL** to your production backend URL
3. **Set environment variables** in your hosting platform
4. **Add rate limiting** to prevent spam
5. **Add email validation** and spam protection

---

**Total Setup Time:** ~10-15 minutes

Once completed, both forms will send professional emails to riwakhodour@gmail.com! 🎉

