const express = require('express')
const router = express.Router()
const { getSensorInformation } = require('../handlers/sensors')

router.get('/', async (req, res) => {
  console.log('wchodzi fo rutera')
  res.send(await getSensorInformation())
})

module.exports = router
