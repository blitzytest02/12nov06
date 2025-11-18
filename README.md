# Node.js Hello World Tutorial

A simple, educational Node.js project that demonstrates how to create a web server with a single HTTP endpoint. This tutorial is perfect for beginners learning Node.js web development fundamentals.

## Project Description

This project implements a minimal web server using Express.js that responds to HTTP GET requests at the `/hello` endpoint with the text "Hello world". It demonstrates:

- Setting up a Node.js project with npm
- Installing and using the Express.js web framework
- Creating HTTP endpoints and route handlers
- Configuring servers with environment variables
- Following Node.js and Express.js best practices

## Learning Objectives

By studying and running this project, you will learn:

- How to initialize a Node.js project with `package.json`
- How to install dependencies using npm
- How to create a basic Express.js web server
- How to define routes and handle HTTP requests
- How to configure applications with environment variables
- How to start and test a Node.js web server

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** version 18.0.0 or higher (this project was tested with v20.19.5)
  - Check your version: `node --version`
  - Download from: https://nodejs.org/
- **npm** (comes with Node.js installation)
  - Check your version: `npm --version`
- **Basic command line knowledge**
  - Ability to navigate directories and run commands
- **Text editor or IDE** for viewing code (optional)

## Installation

Follow these steps to set up the project on your local machine:

### Step 1: Get the Project Files

If you haven't already, download or clone this project to your local machine and navigate to the project directory:

```bash
cd nodejs-hello-tutorial
```

### Step 2: Install Dependencies

Run the following command to install Express.js and all required dependencies:

```bash
npm install
```

**Expected output:**
```
added 69 packages, and audited 70 packages in 3s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

This command will:
- Read the `package.json` file to identify dependencies
- Download Express.js version 4.21.2 and its dependencies
- Create a `node_modules/` directory with all installed packages
- Generate a `package-lock.json` file to lock dependency versions

## Running the Server

Once installation is complete, you can start the server using either of these methods:

### Method 1: Using npm script (recommended)

```bash
npm start
```

### Method 2: Direct node command

```bash
node server.js
```

**Expected console output:**
```
Server is running on http://localhost:3000
Visit http://localhost:3000/hello to see the response
```

When you see this message, your server is successfully running and ready to accept requests!

## Testing the Endpoint

Once the server is running, you can test the `/hello` endpoint using several methods:

### Method 1: Web Browser

1. Open your web browser (Chrome, Firefox, Safari, etc.)
2. Navigate to: `http://localhost:3000/hello`
3. You should see the text response: **Hello world**

### Method 2: Command Line with curl

Open a new terminal window (keep the server running in the first terminal) and run:

```bash
curl http://localhost:3000/hello
```

**Expected response:**
```
Hello world
```

### Method 3: Using wget

```bash
wget -qO- http://localhost:3000/hello
```

### What about the root path?

If you visit `http://localhost:3000/` (without `/hello`), you'll get a 404 error. This is expected behavior! This tutorial implements only the `/hello` endpoint to maintain focus on the fundamentals.

## Project Structure

Here's what each file in this project does:

```
nodejs-hello-tutorial/
├── server.js           # Main application - Express.js server with /hello route
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Locked versions of all dependencies (generated)
├── .gitignore         # Files to exclude from version control
├── .env.example       # Example environment configuration
├── README.md          # This documentation file
└── node_modules/      # Installed dependencies (generated, not in Git)
```

### Understanding server.js

Let's walk through the main application file:

```javascript
// Import the Express.js framework
const express = require('express');

// Initialize the Express application
const app = express();

// Configure the port from environment variable or use default 3000
const PORT = process.env.PORT || 3000;

// Define the GET route for /hello endpoint
app.get('/hello', (req, res) => {
  res.send('Hello world');
});

// Start the HTTP server and listen on the configured port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Visit http://localhost:${PORT}/hello to see the response`);
});
```

**Key concepts:**

1. **require('express')**: Imports the Express.js module
2. **express()**: Creates a new Express application instance
3. **process.env.PORT**: Reads the PORT environment variable (if set)
4. **|| 3000**: Uses 3000 as the default port if PORT is not defined
5. **app.get('/hello', ...)**: Defines a route handler for GET requests to `/hello`
6. **req, res**: Request and Response objects passed to the handler function
7. **res.send()**: Sends the response back to the client
8. **app.listen()**: Starts the HTTP server on the specified port

## Configuration

### Changing the Port

By default, the server runs on port 3000. To use a different port:

#### Option 1: Environment Variable (Linux/Mac)

```bash
PORT=8080 npm start
```

#### Option 2: Environment Variable (Windows Command Prompt)

```cmd
set PORT=8080
npm start
```

#### Option 3: Environment Variable (Windows PowerShell)

```powershell
$env:PORT=8080
npm start
```

#### Option 4: Using .env file

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and change the PORT value:
   ```
   PORT=8080
   ```

3. Start the server:
   ```bash
   npm start
   ```

## Stopping the Server

To stop the running server:

1. Go to the terminal window where the server is running
2. Press `Ctrl+C` (on both Windows and Mac/Linux)
3. You should see the process terminate and return to the command prompt

## Troubleshooting

### Error: "Cannot find module 'express'"

**Problem:** Express.js is not installed.

**Solution:** Run `npm install` in the project directory.

### Error: "EADDRINUSE: address already in use"

**Problem:** Another application is already using port 3000.

**Solutions:**
1. Stop the other application using port 3000
2. Use a different port: `PORT=8080 npm start`
3. Find and kill the process using the port:
   - Linux/Mac: `lsof -ti:3000 | xargs kill`
   - Windows: `netstat -ano | findstr :3000` then `taskkill /PID <pid> /F`

### Error: "EACCES: permission denied"

**Problem:** You don't have permission to bind to the port (common for ports below 1024).

**Solution:** Use a port number above 1024, or run with appropriate permissions (not recommended for development).

### Server starts but browser shows "Cannot GET /"

**Problem:** You're visiting the root path instead of `/hello`.

**Solution:** Make sure to visit `http://localhost:3000/hello` (note the `/hello` at the end).

### Module Not Found Errors

**Problem:** Dependencies weren't installed correctly.

**Solution:**
1. Delete the `node_modules/` folder
2. Delete `package-lock.json`
3. Run `npm install` again

## Next Steps and Learning Path

Now that you have a working Node.js web server, here are suggested next steps to expand your knowledge:

### Immediate Extensions

1. **Add more routes**: Create additional endpoints like `/goodbye` or `/time`
2. **Add request parameters**: Learn about route parameters (`/hello/:name`)
3. **Handle POST requests**: Accept data from clients
4. **Serve static files**: Add HTML, CSS, and images
5. **Add JSON responses**: Return structured data instead of plain text

### Learning Resources

- **Express.js Official Documentation**: https://expressjs.com/
- **Node.js Official Documentation**: https://nodejs.org/docs/
- **Express.js Routing Guide**: https://expressjs.com/en/guide/routing.html
- **MDN HTTP Documentation**: https://developer.mozilla.org/en-US/docs/Web/HTTP

### Professional Development Topics

As you progress, consider learning about:

- **Middleware**: Express.js's powerful request processing pipeline
- **Error handling**: Graceful error handling and logging
- **Testing**: Unit and integration tests with Jest or Mocha
- **Database integration**: Connecting to MongoDB, PostgreSQL, etc.
- **Authentication**: User login and authorization
- **API design**: RESTful API principles
- **Deployment**: Hosting on Heroku, AWS, or other platforms
- **Security**: HTTPS, CORS, helmet middleware
- **Performance**: Caching, compression, load balancing

## Production Considerations

**Important:** This is a tutorial project for learning purposes. For production applications, you would need to add:

- **HTTPS/TLS encryption** for secure communication
- **Logging** (Winston, Bunyan) for debugging and monitoring
- **Error handling middleware** for graceful error responses
- **Security middleware** (Helmet) for setting HTTP headers
- **Request validation** to sanitize and validate input
- **Environment-based configuration** for different deployment environments
- **Process management** (PM2) for automatic restarts and clustering
- **Monitoring and alerting** for production health checks
- **Load balancing** for high-availability scenarios

## License

This project is provided as-is for educational purposes. Feel free to use, modify, and distribute as needed for learning.

## Questions or Issues?

If you encounter any problems or have questions about this tutorial:

1. Review the Troubleshooting section above
2. Check the Express.js documentation
3. Ensure all prerequisites are properly installed
4. Verify you're using Node.js version 18.0.0 or higher

Happy learning! 🚀