// Import mongoose to create a Mongoose model
const mongoose = require('mongoose');

// Create Schema
const TodoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'in progress', 'completed'],
    default: 'pending'
  }
});

// Export this Schema
module.exports = mongoose.model('todo', TodoItemSchema);
