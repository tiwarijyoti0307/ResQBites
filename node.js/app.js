// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Import route files
const groceryRoutes = require('./routes/groceryRoutes');
const authRoutes = require('./routes/authRoutes');

// Mount routes
app.use('/api/groceries', groceryRoutes);
app.use('/api/auth', authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
