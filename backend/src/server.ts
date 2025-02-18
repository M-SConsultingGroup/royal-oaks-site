import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;;

// Email credentials (replace with your actual email and password)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD
  }
});
// Use CORS middleware
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../public')));

// Body parser middleware
app.use(bodyParser.json());


app.use((req: Request, res: Response, next: NextFunction) => {
  if (!req.route) {
    // Redirect to home page
    res.redirect('/');
  } else {
    next();
  }
});

// Middleware to handle errors globally
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

// Route to handle form submissions
app.post('/submit-form', async (req: Request, res: Response) => {
  const { name, email, phone, date, message } = req.body;

  if (!name || !email || !phone || !date) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Email to the submitter
    const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td>
            <img src="https://royaloakseventvenue.com/logo.png" alt="Company Logo" style="width:150px;height:50px;" />
          </td>
          <td style="text-align: left; padding-left: 10px;">
            <h2 style="color: #555;">Royal Oaks Event Venue</h2>
          </td>
        </tr>
      </table>
      <p>Hi ${name},</p>
      <p>Thank you for booking a visit with us on ${date}! We will get back to you shortly.</p>

      <p>Best Regards,</p>
      <p><strong>The Royal Oaks Team</strong></p>
      <p>
        <small>Do not reply to this email. For support, visit our
        <a href="https://royaloakseventvenue.com/contact-us" style="color: #007BFF;">contact page</a>.
        </small>
      </p>
    </div>
  `;

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Royal Oaks Event Venue Visit Confirmation',
      html: htmlContent,
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