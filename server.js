// server.js

import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors'; // Import cors

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json());

// Endpoint to handle subscriptions
app.post('/api/subscribe', async (req, res) => {
    console.log('Received subscription request:', req.body); // Log the incoming request

    const { email } = req.body;

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email address.' });
    }

    try {
        // Here you can save the email to your database
        // e.g., await saveEmailToDatabase(email);

        // Send confirmation email (optional)
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // or any other email service
            auth: {
                user: 'your-email@gmail.com', // Your email address
                pass: 'your-email-password', // Your email password
            },
        });

        const mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: 'Subscription Confirmation',
            text: 'Thank you for subscribing! You will receive stock updates.',
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Subscription successful! Check your email for confirmation.' });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'An error occurred while processing your subscription.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
