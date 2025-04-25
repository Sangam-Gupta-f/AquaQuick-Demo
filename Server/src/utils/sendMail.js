import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
export const sendOTPEmail = async (email, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use Mailtrap/sendgrid in prod
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: subject,
    text: text 
  };

  await transporter.sendMail(mailOptions);
};
