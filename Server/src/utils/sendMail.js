import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
export const sendOTPEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use Mailtrap/sendgrid in prod
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: '"AquaQuick" <your-email@gmail.com>',
    to: email,
    subject: 'Your AquaQuick OTP Code',
    text: `Your OTP code is: ${otp}. It will expire in 5 minutes.`
  };

  await transporter.sendMail(mailOptions);
};
