const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Express Day 1 Server Running');
});

const PORT = 3000
const HOST="127.0.0.1"
app.listen(PORT,HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
