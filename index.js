// server.js or index.js
const express = require('express');
const app = express();

// Root endpoint
app.get('/', (req, res) => {
  res.send('Timestamp Microservice');
});

// API endpoint
app.get('/api/:date?', (req, res) => {
  let dateString = req.params.date;

  let date;

  // If no date param, use current time
  if (!dateString) {
    date = new Date();
  } else {
    // If it's a Unix timestamp (only digits), convert to number
    if (!isNaN(dateString) && /^\d+$/.test(dateString)) {
      date = new Date(parseInt(dateString));
    } else {
      date = new Date(dateString);
    }
  }

  // Check if date is valid
  if (date.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// Server listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
