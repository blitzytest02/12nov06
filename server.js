// Import the Express.js framework
const express = require('express');

// Initialize the Express application
const app = express();

// Configure the port from environment variable or use default 3000
const PORT = process.env.PORT || 3000;

// Define the GET route for /hello endpoint
// This route responds with "Hello world" as plain text
app.get('/hello', (req, res) => {
  res.send('Hello world');
});

// Start the HTTP server and listen on the configured port
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Visit http://localhost:${PORT}/hello to see the response`);
});

// Basic error handling for server startup issues
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Error: Port ${PORT} is already in use`);
    console.error('Please try a different port or stop the other process');
    process.exit(1);
  } else {
    console.error('Server error:', error.message);
    process.exit(1);
  }
});
