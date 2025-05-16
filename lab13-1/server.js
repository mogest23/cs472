const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = 3000;

// Lab13 Express
// Exercise 1: convert Lab13 Question2 to the Express application.

const app = express();


app.get(['/', '/home'], (req, res) => {
    res.type('html').send('Welcome to my website');
});

app.get('/image', (req, res) => {
    const imagePath = path.join(__dirname, 'sample-image.jpg');
    fs.readFile(imagePath, (err, data) => {
        if (err) {
            res.status(500).send('Error loading image');
            return;
        }
        res.type('jpeg').send(data);
    });
});

app.get('/pdf', (req, res) => {
    const pdfPath = path.join(__dirname, 'sample.pdf');
    fs.readFile(pdfPath, (err, data) => {
        if (err) {
            res.status(500).send('Error loading PDF');
            return;
        }
        res.type('pdf').send(data);
    });
});

app.get('/about', (req, res) => {
    const aboutPath = path.join(__dirname, 'about.txt');
    fs.readFile(aboutPath, (err, data) => {
        if (err) {
            res.status(500).send('Error loading about text');
            return;
        }
        res.type('plain').send(data);
    });
});

app.use((req, res) => {
    res.status(404).type('html').send('404 Not Found');
});

app.listen(PORT);