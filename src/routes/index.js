/**
 * Express.js Route Definitions
 * 
 * This module defines HTTP endpoints for the application using Express Router.
 * Provides modular route organization that can be mounted on the main Express app.
 * 
 * @module routes/index
 * @requires express
 */

const express = require('express');

/**
 * Express Router instance for defining application routes.
 * This router is exported and mounted by the main application (src/index.js).
 * @type {express.Router}
 */
const router = express.Router();

/**
 * GET /hello
 * 
 * Returns a simple "Hello world" greeting as plain text.
 * 
 * @name GetHello
 * @route {GET} /hello
 * @returns {string} Plain text response "Hello world"
 * @example
 * // Request: GET /hello
 * // Response: 200 OK
 * // Body: "Hello world"
 */
router.get('/hello', (req, res) => {
  res.send('Hello world');
});

/**
 * GET /evening
 * 
 * Returns an evening greeting as plain text.
 * 
 * @name GetEvening
 * @route {GET} /evening
 * @returns {string} Plain text response "Good evening"
 * @example
 * // Request: GET /evening
 * // Response: 200 OK
 * // Body: "Good evening"
 */
router.get('/evening', (req, res) => {
  res.send('Good evening');
});

/**
 * Export the router for use by the main Express application.
 * The router should be mounted using app.use() in src/index.js.
 * 
 * @exports router
 */
module.exports = router;
