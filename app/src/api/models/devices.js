const Gpio = require('onoff').Gpio

const lightsSwitch = new Gpio(19, 'out');
const fanSwitch = new Gpio(26, 'out');
const heaterSwitch = new Gpio(21, 'out');

const fan = {
  name: 'fan',
  isOn: fanSwitch.readSync(),
  icon: {
    prefix: 'fas',
    name: 'fan'
  }
}

const heater = {
  name: 'heater',
  isOn: heaterSwitch.readSync(),
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
  isOn: lightsSwitch.readSync(),
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
