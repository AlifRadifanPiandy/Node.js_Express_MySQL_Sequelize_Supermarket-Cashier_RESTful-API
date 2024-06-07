const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes'); // Import the main router from the routes folder

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use the main router
app.use('/api', routes); // Using routes under /api, adjust as needed

// Handle 404 errors
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message || 'Internal Server Error',
    },
  });
});

// Start the server with Nodemon
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export app for testing with Mocha or other tests
