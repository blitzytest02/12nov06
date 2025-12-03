# 12nov06 - Express.js API Server

A simple Express.js web server application that demonstrates HTTP endpoint handling with two greeting endpoints.

## Description

This project is a Node.js application built with Express.js framework that serves two HTTP endpoints:
- A "Hello world" endpoint for basic greeting functionality
- A "Good evening" endpoint for evening greeting functionality

The application showcases fundamental Express.js concepts including routing, request handling, and server configuration.

## Prerequisites

Before running this application, ensure you have the following installed:

| Requirement | Version | Description |
|-------------|---------|-------------|
| Node.js | ≥ 18.x | JavaScript runtime environment |
| npm | ≥ 9.x | Node.js package manager |

### Verifying Prerequisites

Check your Node.js version:
```bash
node --version
```

Check your npm version:
```bash
npm --version
```

## Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd 12nov06
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This will install all required packages including:
   - `express` - Web framework for Node.js
   - `jest` - Testing framework (dev dependency)
   - `supertest` - HTTP assertions for testing (dev dependency)
   - `nodemon` - Development server with auto-reload (dev dependency)

## Running the Application

### Production Mode

Start the server in production mode:
```bash
npm start
```

The server will start and listen on the configured port (default: 3000).

### Development Mode

Start the server in development mode with auto-reload on file changes:
```bash
npm run dev
```

This uses `nodemon` to automatically restart the server when you make changes to the source files.

### Successful Startup

When the server starts successfully, you should see:
```
Server is running on port 3000
```

## API Endpoints

### GET /hello

Returns a simple "Hello world" greeting.

**Request:**
```bash
curl http://localhost:3000/hello
```

**Response:**
- **Status Code:** 200 OK
- **Content-Type:** text/html
- **Body:** `Hello world`

**Example:**
```bash
$ curl http://localhost:3000/hello
Hello world
```

---

### GET /evening

Returns a "Good evening" greeting.

**Request:**
```bash
curl http://localhost:3000/evening
```

**Response:**
- **Status Code:** 200 OK
- **Content-Type:** text/html
- **Body:** `Good evening`

**Example:**
```bash
$ curl http://localhost:3000/evening
Good evening
```

## Running Tests

Execute the test suite to verify endpoint functionality:

```bash
npm test
```

This runs Jest with Supertest to validate:
- `/hello` endpoint returns "Hello world" with HTTP 200
- `/evening` endpoint returns "Good evening" with HTTP 200

### Test Output

Expected output on successful tests:
```
 PASS  tests/routes.test.js
  GET /hello
    ✓ should return Hello world
  GET /evening
    ✓ should return Good evening

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
```

## Environment Variables

The application supports configuration through environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | The port number on which the server listens |

### Setting Environment Variables

**Linux/macOS:**
```bash
export PORT=8080
npm start
```

**Windows (Command Prompt):**
```cmd
set PORT=8080
npm start
```

**Windows (PowerShell):**
```powershell
$env:PORT=8080
npm start
```

### Using .env File

For development, you can create a `.env` file in the project root. Reference the `.env.example` file for the template:

```bash
cp .env.example .env
```

Then edit the `.env` file with your desired configuration:
```
PORT=3000
```

## Development Setup

### Project Structure

```
12nov06/
├── src/
│   ├── index.js          # Application entry point
│   └── routes/
│       └── index.js      # Route definitions
├── tests/
│   └── routes.test.js    # Endpoint tests
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore patterns
├── package.json          # npm package manifest
└── README.md             # This documentation file
```

### Making Changes

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Edit source files** - The server will automatically restart when changes are detected.

3. **Run tests** to verify your changes:
   ```bash
   npm test
   ```

### Adding New Endpoints

To add a new endpoint:

1. Open `src/routes/index.js`
2. Add a new route handler:
   ```javascript
   router.get('/your-endpoint', (req, res) => {
     res.send('Your response');
   });
   ```
3. Save the file - the development server will restart automatically

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | ≥ 18.x | JavaScript runtime |
| Express.js | ^5.2.1 | Web framework |
| Jest | ^29.7.0 | Testing framework |
| Supertest | ^7.0.0 | HTTP testing utilities |
| Nodemon | ^3.1.0 | Development auto-reload |

## Troubleshooting

### Port Already in Use

If you see an error like `EADDRINUSE: address already in use :::3000`:

1. Change the port using environment variable:
   ```bash
   PORT=3001 npm start
   ```

2. Or find and stop the process using the port:
   ```bash
   # Linux/macOS
   lsof -i :3000
   kill -9 <PID>
   
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

### Module Not Found Errors

Ensure all dependencies are installed:
```bash
rm -rf node_modules
npm install
```

### Node.js Version Issues

Express.js 5.x requires Node.js 18.x or higher. Upgrade Node.js if needed:
- Visit [nodejs.org](https://nodejs.org/) to download the latest LTS version
- Or use a version manager like `nvm`:
  ```bash
  nvm install 18
  nvm use 18
  ```

## License

This project is for educational and demonstration purposes.
