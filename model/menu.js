const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true
  },
  hostel: {
    type: String,
    required: true,
  },
  meal: {
    type: String,
    required: true
  },
  complementary1: {
    type: String,
    required: true
  },
  complementary2: {
    type: String,
    required: true
  },
  food: {
    type: String,
    required: true
  },
});

const menu = mongoose.model('menu', menuSchema);

module.exports = menu;