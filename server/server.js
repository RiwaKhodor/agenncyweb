import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create reusable transporter object using SMTP transport
// Handle password with # characters - read directly from .env file to avoid comment issues
let smtpPass = '';

try {
  const fs = require('fs');
  const path = require('path');
  const envPath = path.join(__dirname, '.env');
  const envContent = fs.readFileSync(envPath, 'utf8');
  
  // Match SMTP_PASS="..." or SMTP_PASS='...' (handles passwords with #)
  const passMatch = envContent.match(/SMTP_PASS\s*=\s*["']([^"']+)["']/);
  if (passMatch && passMatch[1]) {
    smtpPass = passMatch[1];
  } else {
    // Fallback to process.env if regex doesn't match
    smtpPass = process.env.SMTP_PASS?.replace(/^["']|["']$/g, '') || '';
  }
} catch (err) {
  // Fallback to process.env if file read fails
  smtpPass = process.env.SMTP_PASS?.replace(/^["']|["']$/g, '') || '';
  console.log('⚠️  Could not read .env file directly, using process.env');
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // Your email (e.g., Mail@agenncy.de)
    pass: smtpPass, // Your email password (quotes stripped if present)
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  }
});

// Debug: Log SMTP configuration (without password)
console.log('📧 SMTP Configuration:');
console.log('   Host:', process.env.SMTP_HOST);
console.log('   Port:', process.env.SMTP_PORT);
console.log('   User:', process.env.SMTP_USER);
console.log('   Password (raw from .env):', process.env.SMTP_PASS ? `"${process.env.SMTP_PASS}"` : 'not set');
console.log('   Password (cleaned, used for auth):', smtpPass ? `"${smtpPass}"` : 'not set');
console.log('   Password length:', smtpPass.length);
console.log('   Password starts with quote?', smtpPass.startsWith('"') || smtpPass.startsWith("'"));

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('❌ SMTP Error:', error.message);
    console.log('💡 Troubleshooting tips:');
    console.log('   1. Check if password is correct');
    console.log('   2. Try port 465 with SSL (set SMTP_PORT=465 in .env)');
    console.log('   3. Try smtp.ionos.de instead of smtp.ionos.com');
    console.log('   4. Make sure password doesn\'t have quotes in .env file');
  } else {
    console.log('✅ SMTP Server is ready to send emails');
  }
});

// Consultation Popup Form Endpoint
app.post('/api/consultation', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_RECIPIENT || 'Mail@agenncy.de',
      replyTo: email,
      subject: `New Consultation Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6B7F39;">New Consultation Request</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Agenncy website consultation form.
          </p>
        </div>
      `,
      text: `
New Consultation Request

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    };

    // Send email
    console.log('📤 Attempting to send consultation email...');
    console.log('📤 Using password length:', smtpPass.length);
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Consultation email sent:', info.messageId);

    res.json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('❌ Error sending consultation email:', error);
    console.error('❌ Error details:', {
      message: error.message,
      code: error.code,
      response: error.response,
      command: error.command
    });
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email',
      details: error.message,
      code: error.code || 'UNKNOWN'
    });
  }
});

// Contact Page Form Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, service, budget, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        error: 'Name, email, and phone are required' 
      });
    }

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_RECIPIENT || 'Mail@agenncy.de',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6B7F39;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
            ${message ? `
              <p><strong>Message:</strong></p>
              <p style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                ${message.replace(/\n/g, '<br>')}
              </p>
            ` : ''}
          </div>
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Agenncy website contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
${company ? `Company: ${company}` : ''}
${service ? `Service Interest: ${service}` : ''}
${budget ? `Budget: ${budget}` : ''}
${message ? `\nMessage:\n${message}` : ''}
      `,
    };

    // Send email
    console.log('📤 Attempting to send contact email...');
    console.log('📤 Using password length:', smtpPass.length);
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Contact email sent:', info.messageId);

    res.json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('❌ Error sending contact email:', error);
    console.error('❌ Error details:', {
      message: error.message,
      code: error.code,
      response: error.response,
      command: error.command
    });
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email',
      details: error.message,
      code: error.code || 'UNKNOWN'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Agenncy API is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Emails will be sent to: Mail@agenncy.de`);
  console.log(`✅ Server is ready to receive requests`);
});

// Handle uncaught errors to prevent server crashes
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
  console.log('⚠️  Server will continue running, but please check the error above');
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  console.log('⚠️  Server will continue running, but please check the error above');
});

// Handle port already in use
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use.`);
    console.log(`💡 Try: netstat -ano | findstr :${PORT} to find the process`);
    console.log(`💡 Or change PORT in .env file to a different port (e.g., 3002)`);
    process.exit(1);
  } else {
    throw err;
  }
});

