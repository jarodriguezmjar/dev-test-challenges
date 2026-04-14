// server.js
// BUG #1: missing await in async DB simulation — always returns undefined
// BUG #2: 200 status returned on error — misleads client
// BUG #3: no input validation on POST /save
// BUG #4: memory leak — global array grows without limit
// BUG #5: no error handling middleware
// BUG #6: GET /data returns wrong field (undefined)

const express = require('express');
const app = express();
app.use(express.json());

// BUG #4: unbounded global array — memory leak under load
const requestLog = [];

// Simulated async DB read
async function getDataFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, value: 'hello' }), 100);
  });
}

// GET /data
// BUG #1: missing await — data is always undefined
// BUG #6: returns data.result which doesn't exist on the object
app.get('/data', async (req, res) => {
  requestLog.push({ ts: Date.now() });   // BUG #4: never trimmed

  const data = getDataFromDB();          // BUG #1: missing await

  if (!data) {
    res.status(200).json({ error: 'No data found' });  // BUG #2: should be 404
    return;
  }

  res.json({ result: data.result });     // BUG #6: should be data.value
});

// POST /save
// BUG #3: no validation — accepts anything including empty, null, XSS payloads
// BUG #4: every request logged permanently
app.post('/save', (req, res) => {
  const { name, value } = req.body;

  // BUG #3: no validation at all
  requestLog.push({ name, value, ts: Date.now() });  // BUG #4

  res.status(200).json({ saved: true, name, value });
});

// BUG #5: no error handling middleware — unhandled errors crash or leak stack traces
// Missing: app.use((err, req, res, next) => { ... })

app.listen(3001, () => {
  console.log('Server running on port 3001');
});

module.exports = app;