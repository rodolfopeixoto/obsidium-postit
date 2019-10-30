const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  body: String,
  user_id: Number,
});

module.exports = mongoose.model('Story', StorySchema);