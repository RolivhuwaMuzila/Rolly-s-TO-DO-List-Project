// Import Express
const express = require('express');

// Initialize the Express app
const app = express();

// Set up a static file server to serve files from the "public" folder
app.use(express.static('public'));

// Set up the root route to serve your index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
