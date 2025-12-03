/**
 * Express.js Application Entry Point
 * 
 * This module initializes and configures the Express.js HTTP server.
 * It serves as the main entry point for the application, setting up
 * middleware, routes, and starting the server.
 * 
 * @module index
 * @requires express
 * @requires ./routes
 */

const express = require('express');
const routes = require('./routes');

/**
 * Express application instance.
 * This is the main Express app that handles all HTTP requests.
 * @type {express.Application}
 */
const app = express();

/**
 * Server port configuration.
 * Uses PORT environment variable if available, otherwise defaults to 3000.
 * @type {number}
 */
const PORT = process.env.PORT || 3000;

/**
 * Register route handlers.
 * Mounts the routes module on the root path, enabling all defined endpoints.
 * Routes include:
 * - GET /hello - Returns "Hello world"
 * - GET /evening - Returns "Good evening"
 */
app.use('/', routes);

/**
 * Start the HTTP server.
 * Only starts listening if this file is run directly (not imported for testing).
 * This allows supertest to use the app without starting the server.
 */
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

/**
 * Export the Express application for testing purposes.
 * This allows supertest to make requests against the app without needing
 * to start a real server.
 * 
 * @exports app
 */
module.exports = app;
