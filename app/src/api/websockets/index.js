const WebSocket = require('ws')
const { getSensorReadings } = require('../models/sensors')

const initWebSocketConnection = (server) => {
  const wss = new WebSocket.Server({ server })

  wss.on('connection', (ws) => {
    setInterval(() => {
      ws.send(JSON.stringify(getSensorReadings()))
    }, 5000)
  })
}

module.exports = { initWebSocketConnection }
