const Gpio = require('onoff').Gpio

const lightsSwitch = new Gpio(19, 'out');
const fanSwitch = new Gpio(21, 'out');
const heaterSwitch = new Gpio(26, 'out');

const castNumberToBoolean = (value) => value === 1


// const lightsSwitch = {
//   readSync: () => 1,
//   writeSync: (value) => value 
// };
// const fanSwitch = {
//   readSync: () => 1,
//   writeSync: (value) => value 
// };
// const heaterSwitch = {
//   readSync: () => 1,
//   writeSync: (value) => value 
// };

const fan = {
  name: 'fan',
  isOn: castNumberToBoolean(fanSwitch.readSync()),
  icon: {
    prefix: 'fas',
    name: 'fan'
  }
}

const heater = {
  name: 'heater',
  isOn: castNumberToBoolean(heaterSwitch.readSync()),
  icon: {
    prefix: 'fab',
    name: 'hotjar'
  }
}

const lights = {
  name: 'lights',
  icon: {
    prefix: 'fas',
    name: 'lightbulb'
  },
  isOn: castNumberToBoolean(lightsSwitch.readSync()),
}

const toggleLights = () => {
  lightsSwitch.writeSync(lightsSwitch.readSync() ^ 1);
  return getDevicesStatus()
}

const toggleFan = () => {
  fanSwitch.writeSync(fanSwitch.readSync() ^ 1)
  return getDevicesStatus()
}

const toggleHeater = () => {
  heaterSwitch.writeSync(heaterSwitch.readSync() ^ 1)
  return getDevicesStatus()
}

const getDevicesStatus = async () => await [
  lights,
  heater,
  fan
]

module.exports = { getDevicesStatus, toggleLights, toggleFan, toggleHeater }
