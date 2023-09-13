// utils/email.js
const nodemailer = require('nodemailer');

const smtpServer = 'smtp.gmail.com';
const smtpPort = 587;

const transporter = nodemailer.createTransport({
    host: smtpServer,
    port: smtpPort,
    secure: false,
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password'
    }
});

async function sendEmail(to, subject, text) {
    try {
        await transporter.sendMail({
            from: 'your_email@gmail.com',
            to: to,
            subject: subject,
            text: text
        });
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('An error occurred while sending the email:', error);
    }
}

module.exports = sendEmail;
