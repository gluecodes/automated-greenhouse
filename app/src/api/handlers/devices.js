const getDevicesInformation = () => {
  try {
    const devices = [
      {
        name: 'fan',
        isOn: false,
        icon: {
          prefix: 'fas',
          name: 'fan'
        },
        sensor: {
          name: 'humidity',
          reading: '80%'
        },
        link: {
          text: 'example link',
          url: 'www.glue.codes'
        }
      },
      {
        name: 'heater',
        isOn: true,
        icon: {
          prefix: 'fab',
          name: 'hotjar'
        },
        sensor: {
          name: 'temperature',
          reading: '80%'
        },
        link: {
          text: 'example link',
          url: 'www.glue.codes'
        }
      },
      {
        name: 'lights',
        icon: {
          prefix: 'fas',
          name: 'lightbulb'
        },
        sensor: {
          name: 'temperature',
          reading: '80%'
        },
        isOn: false,
        link: {
          text: 'example link',
          url: 'www.glue.codes'
        }
      },
      {
        name: 'fountain',
        icon: {
          prefix: 'fas',
          name: 'water'
        },
        sensor: {
          name: 'temperature',
          reading: '80%'
        },
        isOn: true,
        link: {
          text: 'example link',
          url: 'www.glue.codes'
        }
      }
    ]
    return devices
  } catch (err) {
    console.log(err)
  }
}

module.exports = getDevicesInformation()
