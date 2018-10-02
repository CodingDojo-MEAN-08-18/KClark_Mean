const mongoose = require('mongoose');

const { Schema } = mongoose;

const authorSchema = new Schema(
  {
    author: {
      type: String,
      trim: true,
      required: [true, 'Author name is required'],
      min: [3, 'Author name must be three chars or longer']
    }
  }


)