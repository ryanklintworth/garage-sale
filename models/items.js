const mongoose = require('mongoose')

const garageSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: String,
  location: String
})

const Item = mongoose.model('Item', garageSchema)

module.exports = Item
