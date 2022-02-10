// const sensor = require("node-dht-sensor");

// sensor.read(11, 4, function(err, temperature, humidity) {
//   if (!err) {
//     console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
//   }
// });

let sensorReadings = {
  probe: {
    measures: 'temperature',
    reading: `${Math.floor(Math.random() * 80)} °C`
  },
  humidity: {
    measures: 'humidity',
    reading: `${Math.floor(Math.random() * 80)}%`
  },
  moisture: {
    measures: 'soil moisture',
    reading: `${Math.floor(Math.random() * 80)}%`
  }
}

const getSensorReadings = () => sensorReadings

const refreshSensorReadings = () => {
  setInterval(() => {
    sensorReadings = {
      ...sensorReadings,
      probe: {
        measure: 'temperature',
        reading: `${Math.floor(Math.random() * 80)} °C`
      },
      humidity: {
        measure: 'humidity',
        reading: `${Math.floor(Math.random() * 80)}%`
      },
      moisture: {
        measure: 'soil moisture',
        reading: `${Math.floor(Math.random() * 80)}%`
      }
    }
  }, 10000)
}

module.exports = { sensorReadings, getSensorReadings, refreshSensorReadings }
