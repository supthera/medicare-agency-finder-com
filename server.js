const express = require('express');
const path = require('path');
require('dotenv').config();


const app = express();

// Serve the entire public folder statically
app.use(express.static('public'));

// Serve static data files (redundant, but keeps legacy route)
app.use('/data', express.static(path.join(__dirname, 'public/data')));
// API route for sync
app.use('/api', require('./routes/syncRoute'));

// Home route serves search.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/search.html');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
