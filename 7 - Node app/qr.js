// Import dependencies and setup Express
const express = require('express');
const QRCode = require('qrcode');
const app = express();
const PORT = 3000;

// Defined QR Generation route
app.get('/qrcode', (req, res) => {
    // define the url that we would like to convert into qr code
    const url = 'https://www.example.com';
    
    // Convert url -> dataURL(QR image representation)
    QRCode.toDataURL(url, (err, qrCodeUrl) => {
        // Handle QR Code generation Error
        // Conditional statement

        if(err){
            // IF there's an error, we will get a response of '500 internal server error'
            res.status(500).send('Internal Server Error');
        } else {
            // if there is no error, we will send a response that include HTML page
            res.send(`<!DOCTYPE html>
            <head>
                <title>QR Code Generator</title>
            </head>
            <body>
                <h1>QR Code Generator</h1>
                <img src="${qrCodeUrl}" alt="QR Code" />
                <p>Scan teh QR Code to visit the website</p>
            </body>
            </html>
            `);
        };
    });
});

// Start the server and listen to the request
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});