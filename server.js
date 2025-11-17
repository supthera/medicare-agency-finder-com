require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from public (frontend + data)
app.use(express.static(path.join(__dirname, 'public')));

// API sync route (your existing logic)
app.use('/api', require('./routes/syncRoute'));

// Home page: Serve search.html (the beautiful finder)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'search.html'));
});

// Fallback for any other routes: Serve search.html (SPA style)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'search.html'));
});

module.exports = app;
