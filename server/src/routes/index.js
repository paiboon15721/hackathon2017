const c = require('../controllers')

module.exports = app => {
  app.get('/rooms', c.getRoomsList)
}