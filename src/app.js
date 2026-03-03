const express = require('express');
const app = express();

app.use(express.json());

// Basic routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Backend API' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  if (userId < 1) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  res.json({ id: userId, name: 'John Doe', email: 'john@example.com' });
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  res.status(201).json({ id: 3, name, email });
});

module.exports = app;
