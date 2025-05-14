# HTTP Server for Lab 12

A simple HTTP server that handles different routes and serves different content types.

## Available Routes

- `/` or `/home` - Returns "Welcome to my website" text
- `/image` - Serves a sample image file
- `/pdf` - Serves a sample PDF file
- `/about` - Serves a text file
- Any other path returns a 404 Not Found

## How to Run

1. Make sure you have Node.js installed
2. Navigate to this directory
3. Run the server with:
   ```
   node server.js
   ```
4. The server will start on port 3000
5. Visit http://localhost:3000 in your browser

## Testing the Routes

- http://localhost:3000/ - Home page
- http://localhost:3000/image - Sample image
- http://localhost:3000/pdf - Sample PDF
- http://localhost:3000/about - Text file content 