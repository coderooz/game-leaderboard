const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const playerRoutes = require('./routes/players');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost/game-leaderboard', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Routes
app.use('/api/players', playerRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Game Leaderboard API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
