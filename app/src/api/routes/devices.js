const express = require('express')
const router = express.Router()
const { getDevicesInformation } = require('../handlers/devices')

router.get('/', (req, res) => {
  res.send(getDevicesInformation())
})

module.exports = router
