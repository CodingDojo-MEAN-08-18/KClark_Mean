const mongoose = require('mongoose');

const { Schema } = mongoose, 
  ObjectId = Schema.ObjectId;

const TaskSchema = new Schema(
  {
    title: { 
      type: String, 
      required: [true, 'Title is a required field'],
      minlength: 3, 
      maxlength: 64 
    }, 
    description: { 
      type: String, 
      required: [true, 'Description is a required field'], 
      minlength: 3, 
      maxlength: 255 
    },
    completed: { 
      type: Boolean, 
      required: false
    }}, { 
      timestamps: true 
    }
);

TaskSchema.virtual(`taskId`).get(function() {
  return this._id;
})

module.exports = mongoose.model('Task', TaskSchema);
