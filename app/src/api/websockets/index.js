const WebSocket = require('ws')
const { getSensorReadings } = require('../models/sensors')

const initWebSocketConnection = (server) => {
  const wss = new WebSocket.Server({ server })

  wss.on('connection', (ws) => {
    setInterval(async () => {
      ws.send(JSON.stringify(await getSensorReadings()))
    }, 5000)
  })
}

module.exports = { initWebSocketConnection }
