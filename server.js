const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let fakeData = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
];

app.get('/api/data', (req, res) => {
  res.json(fakeData);
});

app.post('/api/data', (req, res) => {
  const newData = req.body;
  newData.id = fakeData.length + 1;
  fakeData.push(newData);
  res.json(newData);
});

app.listen(port, () => {
  console.log(`Fake API is running at http://localhost:${port}`);
});
