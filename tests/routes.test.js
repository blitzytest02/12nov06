/**
 * Unit Tests for Express.js API Endpoints
 * 
 * This module contains comprehensive tests for the API endpoints defined in the application.
 * Uses Jest as the test runner and Supertest for HTTP assertions.
 * 
 * Test Coverage:
 * - GET /hello endpoint - Returns "Hello world" with HTTP 200 status
 * - GET /evening endpoint - Returns "Good evening" with HTTP 200 status
 * 
 * @module tests/routes
 * @requires supertest
 * @requires ../src/index
 */

const request = require('supertest');
const app = require('../src/index');

/**
 * API Endpoints Test Suite
 * 
 * Tests all HTTP endpoints defined in the Express.js application.
 * Each endpoint is tested for correct response body and HTTP status code.
 */
describe('API Endpoints', () => {
  /**
   * Tests for GET /hello endpoint
   */
  describe('GET /hello', () => {
    /**
     * Verifies that the /hello endpoint returns the correct response.
     * Expected: HTTP 200 status with body "Hello world"
     */
    it('should return "Hello world"', async () => {
      const response = await request(app).get('/hello');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Hello world');
    });

    /**
     * Verifies the Content-Type header is set correctly.
     */
    it('should return text/html content type', async () => {
      const response = await request(app).get('/hello');
      expect(response.headers['content-type']).toMatch(/text\/html/);
    });
  });

  /**
   * Tests for GET /evening endpoint
   */
  describe('GET /evening', () => {
    /**
     * Verifies that the /evening endpoint returns the correct response.
     * Expected: HTTP 200 status with body "Good evening"
     */
    it('should return "Good evening"', async () => {
      const response = await request(app).get('/evening');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Good evening');
    });

    /**
     * Verifies the Content-Type header is set correctly.
     */
    it('should return text/html content type', async () => {
      const response = await request(app).get('/evening');
      expect(response.headers['content-type']).toMatch(/text\/html/);
    });
  });

  /**
   * Tests for undefined routes (404 handling)
   */
  describe('Undefined routes', () => {
    /**
     * Verifies that undefined routes return 404 status.
     */
    it('should return 404 for undefined routes', async () => {
      const response = await request(app).get('/undefined-route');
      expect(response.status).toBe(404);
    });
  });
});
