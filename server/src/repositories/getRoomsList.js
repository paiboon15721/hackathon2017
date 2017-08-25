const Room = require('../models/room')
const Owner = require('../models/owner')

module.exports = (startPrice, endPrice) => {
  const find =
    endPrice !== '0'
      ? { price: { $gte: startPrice, $lte: endPrice } }
      : { price: { $gte: startPrice } }
  return Room.find(find).populate('owner')
}
