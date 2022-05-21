const express = require('express')
const router = express.Router()
const { getSensorInformation } = require('../handlers/sensors')

router.get('/', async (req, res) => {
  res.send(await getSensorInformation())
})

module.exports = router
