
const express = require('express');
const router = express.Router();
const Player = require('../models/player');

// Get all players
router.get('/', async (req, res) => {
  try {
    const players = await Player.find().sort({ score: -1 }).limit(10);
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new player
router.post('/', async (req, res) => {
  const player = new Player({
    name: req.body.name,
    score: req.body.score
  });

  try {
    const newPlayer = await player.save();
    res.status(201).json(newPlayer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
