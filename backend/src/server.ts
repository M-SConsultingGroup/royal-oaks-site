import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// Email credentials (replace with your actual email and password)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD
  }
});

// Middleware to handle errors globally
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

// Route to handle form submissions
app.post('/submit-form', async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Email to the submitter
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Form Submission Confirmation',
      text: `Thank you for your request, ${name}! We will get back to you shortly.`
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