const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  score: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
