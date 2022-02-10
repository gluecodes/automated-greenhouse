const { getSensorReadings } = require('../models/sensors')

const getSensorInformation = () => {
  try {
    const { probe, humidity, moisture } = getSensorReadings()

    return { probe: probe, humidity: humidity, moisture: moisture }
  } catch (err) {
    console.log(err)
  }
}

module.exports = { getSensorInformation }
