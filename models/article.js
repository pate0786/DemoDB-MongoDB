const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  topic: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  role: String,
  region: String,
});

const ArticleModel = mongoose.model('Article', articleSchema);

module.exports = ArticleModel;
