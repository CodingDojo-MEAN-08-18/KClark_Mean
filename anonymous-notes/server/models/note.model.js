const mongoose = require('mongoose');

const { Schema } = mongoose;

const noteSchema = new Schema(
  {
    note: {
      type: String,
      trim: true,
      required: [true, 'note content is required'],
      min: [3, 'note must be three chars or longer']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Note', noteSchema);
