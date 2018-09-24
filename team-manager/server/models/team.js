const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema(
  {
    playerName: {
      type: String,
      trim: true,
      required: [true, 'Player Name is required'],
      min: [2, 'Player name must be longer than two characters']
    },
    prefPosition: {
      type: String,
      required: false,
      trim: true,
    },
    game1: {
      type: String,
      trim: true,
      required: [true, 'Game 1 status is required'],
      default: 'Undecided'
    },
    game2: {
      type: String,
      trim: true,
      required: [true, 'Game 2 status is required'],
      default: 'Undecided'
    },
    game3: {
      type: String,
      trim: true,
      required: [true, 'Game 3 status is required'],
      default: 'Undecided'
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Team', teamSchema);
