require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// ← THIS LINE MUST BE FIRST — serves search.html and all static files instantly
app.use(express.static(path.join(__dirname, 'public')));

// API routes (sync endpoint)
app.use('/api', require('./routes/syncRoute'));

// Fallback: send search.html for any other route (SPA style)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'search.html'));
});

module.exports = app;
