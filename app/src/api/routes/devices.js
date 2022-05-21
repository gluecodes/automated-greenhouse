const express = require('express')
const router = express.Router()
const { getDevicesInformation, toggleDevice } = require('../handlers/devices')

router.get('/', async (req, res) => {
  res.send(await getDevicesInformation())
})
router.get('/toggleDevice/:deviceName', async (req, res) => {

  res.send(await toggleDevice(req.params.deviceName))
})


module.exports = router
