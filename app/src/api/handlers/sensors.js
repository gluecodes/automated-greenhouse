const getSensorInformation = () => {
  try {
    const sensorOutput = [
      {
        name: 'temperature',
        reading: '23°C'
      },
      {
        name: 'humidity',
        reading: '80%'
      },
      {
        name: 'soil moisture',
        reading: '30%'
      }
    ]
    return sensorOutput
  } catch (err) {
    console.log(err)
  }
}

module.exports = getSensorInformation()
