const express = require('express')
const router = express.Router()
const { getSensorInformation } = require('../handlers/sensors')

router.get('/', (req, res) => {
  res.send(getSensorInformation())
})

module.exports = router
