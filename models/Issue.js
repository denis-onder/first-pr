const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IssueSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Issue = mongoose.model('issues', IssueSchema);