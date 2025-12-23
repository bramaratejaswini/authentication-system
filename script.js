const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

app.use(express.json());

app.post('/new', (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.json({ message: 'Login data received' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
