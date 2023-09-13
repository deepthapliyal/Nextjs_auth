// TODO : 😒😒😒😒😒😒
// "use client"
// import React, { useState } from 'react';
// import axios from 'axios';

// function ContactForm() {
//     const [email, setEmail] = useState('');

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         const data = {
//             to: email,
//             subject: '',
//             text: ''
//         };

//         try {
//             await axios.post('/api/reset', data);
//             console.log('Email sent successfully!');
//         } catch (error) {
//             console.error('An error occurred while sending the email:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleFormSubmit}>
//             <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Recipient Email"
//             />
//             <button type="submit">Send Email</button>
//         </form>
//     );
// }

// export default ContactForm;
