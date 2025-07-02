// backend/src/server.js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Basic test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});