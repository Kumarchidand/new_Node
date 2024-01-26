const mongoose=require("mongoose");
const menuItemSchema = new mongoose.Schema({
  name: {
  type: String,
  required: true,
  },
  price: {
  type: Number,
  required: true,
  },
  taste: {
  type: String,
  enum: ['Sweet', 'Spicy', 'Sour'],
  },
  is_drink: {
  type: Boolean,
  default: false,
  },
  ingredients: {
  type: [String],
  default: [],
  },
  num_sales: {
  type: Number,
  default: 0,
  }
  });
  // now export this part
  const MenuItem = mongoose.model('MenuItem', menuItemSchema);
  module.exports = MenuItem;