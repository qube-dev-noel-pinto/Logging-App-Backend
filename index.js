const express = require('express');
const app = express();
const routes = require('./routes/routes');  // Import top-level routes
require('./config/db');  // Connect to MongoDB

app.use(express.json());  // Middleware for parsing JSON
app.use(routes);          // Use top-level routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
