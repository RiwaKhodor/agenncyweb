# Email Setup Instructions

Both the **Consultation Popup** and **Contact Page** forms are now configured to send emails to **riwakhodour@gmail.com** using EmailJS.

## ✅ What's Already Done

- ✅ EmailJS package installed
- ✅ Consultation Popup form configured
- ✅ Contact Page form configured
- ✅ Both forms will send to: **riwakhodour@gmail.com**

## 📋 What You Need to Do Next

### Step 1: Create EmailJS Account (5 minutes)

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (free account allows 200 emails/month)
3. Create your account

### Step 2: Add Email Service (3 minutes)

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (or your preferred email provider)
4. Connect your Gmail account (**riwakhodour@gmail.com**)
5. **Copy the Service ID** (looks like: `service_xxxxx`)

### Step 3: Create Email Template (5 minutes)

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**

#### For Consultation Popup Template:

**Subject:** `New Consultation Request from {{from_name}}`

**Content:**
```
Hello,

You have received a new consultation request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

**Settings:**
- **To Email:** `riwakhodour@gmail.com`
- **From Name:** `{{from_name}}`
- **Reply To:** `{{reply_to}}`

#### For Contact Page Template:

**Subject:** `New Contact Form Submission from {{from_name}}`

**Content:**
```
Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service: {{service}}
Budget: {{budget}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

**Settings:**
- **To Email:** `riwakhodour@gmail.com`
- **From Name:** `{{from_name}}`
- **Reply To:** `{{reply_to}}`

4. **Save both templates** and copy the **Template IDs** (looks like: `template_xxxxx`)

### Step 4: Get Your Public Key (1 minute)

1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (User ID)

### Step 5: Create .env File (2 minutes)

1. In your project root folder (same level as `package.json`), create a file named **`.env`**
2. Add these lines (replace with your actual values):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

### Step 6: Restart Your Development Server

1. Stop your current dev server (Ctrl+C)
2. Run `npm run dev` again
3. The environment variables will now be loaded

## 🧪 Testing

1. Open your website
2. Fill out the **Consultation Popup** form and submit
3. Check **riwakhodour@gmail.com** for the email
4. Fill out the **Contact Page** form and submit
5. Check **riwakhodour@gmail.com** again

## ⚠️ Important Notes

- The `.env` file should be in the **root directory** (same folder as `package.json`)
- **Restart your dev server** after creating/updating the `.env` file
- The `.env` file should **NOT** be committed to git (it's usually in `.gitignore`)
- For production, you'll need to set these environment variables in your hosting platform

## 🐛 Troubleshooting

- **"Email sending error"**: Check that your Service ID, Template ID, and Public Key are correct
- **No email received**: Check spam folder, verify EmailJS service is connected
- **Environment variables not working**: Make sure you restarted the dev server after creating `.env`

## 📧 Email Configuration Summary

- **Recipient:** riwakhodour@gmail.com
- **Forms:** Consultation Popup + Contact Page
- **Service:** EmailJS (free tier: 200 emails/month)

---

**Total Setup Time:** ~15-20 minutes

Once completed, both forms will automatically send emails to riwakhodour@gmail.com when submitted!

