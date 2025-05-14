const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const { url, method } = req;

    if (method === 'GET') {
        switch (url) {
            case '/':
            case '/home':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('Welcome to my website');
                break;

            case '/image':
                const imagePath = path.join(__dirname, 'sample-image.jpg');
                fs.readFile(imagePath, (err, data) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('Error loading image');
                        return;
                    }
                    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                    res.end(data);
                });
                break;

            case '/pdf':
                const pdfPath = path.join(__dirname, 'sample.pdf');
                fs.readFile(pdfPath, (err, data) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('Error loading PDF');
                        return;
                    }
                    res.writeHead(200, { 'Content-Type': 'application/pdf' });
                    res.end(data);
                });
                break;

            case '/about':
                const aboutPath = path.join(__dirname, 'about.txt');
                fs.readFile(aboutPath, (err, data) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('Error loading about text');
                        return;
                    }
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(data);
                });
                break;

            default:
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('404 Not Found');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
}); 