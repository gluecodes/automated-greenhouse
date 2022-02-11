const { getDevicesStatus } = require('../models/devices')

const getDevicesInformation = () => {
  try {
    const { fan, heater, lights, fountainPump } = getDevicesStatus()

    return [fan, heater, lights, fountainPump]
  } catch (err) {
    console.log(err)
  }
}

module.exports = { getDevicesInformation }
