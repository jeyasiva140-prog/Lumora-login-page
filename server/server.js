import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// A simple test route to check whether the server is running.
app.get('/', (req, res) => {
  res.send('Login project server is running');
});

// This route checks the demo email and password.
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please enter your email and password.' });
  }

  if (email === 'demo@example.com' && password === 'password123') {
    return res.json({ message: 'Login successful!' });
  }

  return res.status(401).json({ message: 'Incorrect email or password.' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
