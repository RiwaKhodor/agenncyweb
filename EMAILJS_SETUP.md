# EmailJS Setup Instructions

To enable email sending from the consultation popup, you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (riwakhodour@gmail.com)
5. Copy the **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:** New Consultation Request from {{from_name}}

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
You can reply directly to this email to contact {{from_name}}.
```

4. Set "To Email" to: `riwakhodour@gmail.com`
5. Set "From Name" to: `{{from_name}}`
6. Set "Reply To" to: `{{reply_to}}`
7. Save the template and copy the **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (User ID)

## Step 5: Configure Environment Variables
1. Create a `.env` file in the root directory of your project
2. Add these lines (replace with your actual values):

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Restart your development server after creating/updating the `.env` file

## Testing
After setup, test the form by:
1. Opening the consultation popup
2. Filling in the form
3. Submitting it
4. Check riwakhodour@gmail.com for the email

## Troubleshooting
- Make sure your `.env` file is in the root directory (same level as package.json)
- Restart the dev server after adding environment variables
- Check the browser console for any error messages
- Verify your EmailJS service is connected and active

