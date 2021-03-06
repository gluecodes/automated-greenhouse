const sensor = require("node-dht-sensor").promises;

const initializeSensor = () => sensor.initialize(22, 4);

const getSensorReadings = async () => {
  let temperature, humidity
  try {
    await sensor.read(22, 4)
      .then((res) => {
        temperature = res.temperature.toFixed(1)
        humidity = res.humidity.toFixed(1)
      });
  } catch (err) {
    console.log(err)
    temperature = 'n/a'
    humidity = 'n/a'
  }

  return ({
    probe: {
      measures: 'temperature',
      reading: `${temperature} °C`
    },
    humidity: {
      measures: 'humidity',
      reading: `${humidity}%`
    }
  })
}

const refreshSensorReadings = () => {
  setInterval(() => getSensorReadings(), 5000)
}

module.exports = { getSensorReadings, refreshSensorReadings, initializeSensor }
