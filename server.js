const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Serve static data files
app.use('/data', express.static(path.join(__dirname, 'public/data')));
// API route for sync
app.use('/api', require('./routes/syncRoute'));

// Root route
app.get('/', (req, res) => {
  res.send('Medicare Agency Finder API is running.');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
