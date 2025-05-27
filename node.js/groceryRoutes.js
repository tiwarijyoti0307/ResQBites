// groceryRoutes.js
const express = require('express');
const router = express.Router();

// Route to get all groceries
router.get('/groceries', (req, res) => {
  // Logic to fetch all groceries from the database
  res.json({ message: 'Get all groceries' });
});

// Route to add a new grocery
router.post('/groceries', (req, res) => {
  // Logic to add a new grocery to the database
  const { itemName, quantity, expiryDate } = req.body;
  res.json({ message: 'Add new grocery', itemName, quantity, expiryDate });
});

module.exports = router;
