const router = require('express').Router()
const c = require('../controllers')
const requireAuth = require('../middlewares/requireAuth')

router.get('/bookings', c.getBookingsList)
router.get('/bookings/:id', c.getBooking)
router.put('/bookings', requireAuth, c.updateBooking)
router.post('/bookings', requireAuth, c.addBooking)

module.exports = router
