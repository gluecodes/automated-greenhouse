const { getDevicesStatus, toggleLights, toggleFan, toggleHeater } = require('../models/devices')

const getDevicesInformation = async () => {
  try {
    const devices = await getDevicesStatus()

    return devices
  } catch (err) {
    console.log(err)
  }
}

const toggleDevice = async (deviceName) => {
  try {
    switch (deviceName) {
      case 'fan':
        return toggleFan()
      case 'lights':
        return toggleLights()
      case 'heater':
        return toggleHeater()
      default:
        break
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = { getDevicesInformation, toggleDevice }
