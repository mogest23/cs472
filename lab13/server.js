const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = 3000;

// Lab13 Express
// Exercise 1: convert Lab13 Question2 to the Express application.
// Exercise 2: Write an Express application to provide a calculator API.
// • There should be an API endpoint for each basic math
// operation: addition, subtraction, multiplication, division, and modulus.
// • Each endpoint will receive the input numbers and return a JSON response
// with the results as follows: { results: 0 }. Use the EchoAPI vscode extension or
// Postman to test your API endpoints.
// • The calculator router should be designed with flexibility to receive the input
// numbers as query parameters, parameters, or in the body as JSON or
// urlEncoded format, For example, all these requests will return the same
// results value { results: 5 }:
// o GET /addition/2/3
// o GET /addition/?a=2&b=3
// o POST /addition/ BODY ?a=2&b=3
// o POST /addition/ BODY {a:2,b:3}

const app = express();

app.get("/home", async (req, res, next) => {
    const x = req.body;

    res.send("Welcome to my website");
});

app.listen(PORT);




// const server = http.createServer((req, res) => {
//     const { url, method } = req;

//     if (method === 'GET') {
//         switch (url) {
//             case '/':
//             case '/home':
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end('Welcome to my website');
//                 break;

//             case '/image':
//                 const imagePath = path.join(__dirname, 'sample-image.jpg');
//                 fs.readFile(imagePath, (err, data) => {
//                     if (err) {
//                         res.writeHead(500);
//                         res.end('Error loading image');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'image/jpeg' });
//                     res.end(data);
//                 });
//                 break;

//             case '/pdf':
//                 const pdfPath = path.join(__dirname, 'sample.pdf');
//                 fs.readFile(pdfPath, (err, data) => {
//                     if (err) {
//                         res.writeHead(500);
//                         res.end('Error loading PDF');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'application/pdf' });
//                     res.end(data);
//                 });
//                 break;

//             case '/about':
//                 const aboutPath = path.join(__dirname, 'about.txt');
//                 fs.readFile(aboutPath, (err, data) => {
//                     if (err) {
//                         res.writeHead(500);
//                         res.end('Error loading about text');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'text/plain' });
//                     res.end(data);
//                 });
//                 break;

//             default:
//                 res.writeHead(404, { 'Content-Type': 'text/html' });
//                 res.end('404 Not Found');
//         }
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('404 Not Found');
//     }
// });

// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// }); 