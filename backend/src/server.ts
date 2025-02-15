import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const port = 3000;

// Body parser middleware
app.use(bodyParser.json());

// Email credentials (replace with your actual email and password)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});

// Middleware to handle errors globally
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

// Route to handle form submissions
app.post('/submit-form', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Email to the submitter
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Form Submission Confirmation',
      text: `Thank you for your submission, ${name}! We will get back to you shortly.`
    });

    // Email to the owner (replace with actual owner's email)
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'owner@example.com',
      subject: 'New Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    });

    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});