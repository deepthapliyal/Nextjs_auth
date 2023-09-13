// TODO
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
// export async function POST(request) {

//     const { to, subject, text } = request.json();
//     const transporter = nodemailer.createTransport({
//         // Set up your SMTP configuration here
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: false,
//         auth: {
//             user: '',
//             pass: '',
//             // Use the generated app password here
//         }
//     });
   
//     try {
//         await transporter.sendMail({
//             from: '',
//             to: to,
//             subject: subject,
//             text: text,
//         });
        
   
//         return NextResponse.json({
//             message: "successfull"
//           }, {
//             status: 200,
//           });
        
//     } catch (error) {
//         console.error('An error occurred while sending the email:', error);
//         return NextResponse.json({
//             message: "error occured"
//           }, {
//             status: 400,
//           });
//     }

// }