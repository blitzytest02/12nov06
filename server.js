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
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Visit http://localhost:${PORT}/hello to see the response`);
});
