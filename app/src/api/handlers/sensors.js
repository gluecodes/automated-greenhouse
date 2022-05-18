const { getSensorReadings } = require('../models/sensors')

const getSensorInformation = async () => {
  try {
    const { probe, humidity } = await getSensorReadings()

    return { probe: probe, humidity: humidity }
  } catch (err) {
    console.log(err)
  }
}

module.exports = { getSensorInformation }
