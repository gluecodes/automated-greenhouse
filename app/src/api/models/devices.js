const Gpio = require('onoff').Gpio

// const led = new Gpio(17, 'out');

let fan = {
  name: 'fan',
  isOn: false,
  icon: {
    prefix: 'fas',
    name: 'fan'
  },
  sensor: 'humidity',
  link: {
    text: 'example link',
    url: 'www.glue.codes'
  }
}

let heater = {
  name: 'heater',
  isOn: false,
  icon: {
    prefix: 'fab',
    name: 'hotjar'
  },
  sensor: 'probe',
  link: {
    text: 'example link',
    url: 'www.glue.codes'
  }
}

let lights = {
  name: 'lights',
  icon: {
    prefix: 'fas',
    name: 'lightbulb'
  },
  sensor: 'probe',
  isOn: false,
  link: {
    text: 'example link',
    url: 'www.glue.codes'
  }
}

let fountainPump = {
  name: 'fountain',
  icon: {
    prefix: 'fas',
    name: 'water'
  },
  sensor: 'moisture',
  isOn: false,
  link: {
    text: 'example link',
    url: 'www.glue.codes'
  }
}

let waterPump = {
  name: 'fountain',
  icon: {
    prefix: 'fas',
    name: 'water'
  },
  sensor: 'moisture',
  isOn: false,
  link: {
    text: 'example link',
    url: 'www.glue.codes'
  }
}

const getDevicesStatus = () => ({
  waterPump,
  fountainPump,
  lights,
  heater,
  fan
})

module.exports = { getDevicesStatus }
