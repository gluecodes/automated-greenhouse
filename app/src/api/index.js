const express = require('express')
const { initWebSocketConnection } = require('./websockets')
const sensorRouter = require('./routes/sensors')
const devicesRouter = require('./routes/devices')
const { refreshSensorReadings } = require('./models/sensors')
const http = require('http')

const app = express()
const server = http.createServer(app)

app.use(express.static('dist'))
app.use('/api/sensors', sensorRouter)
app.use('/api/devices', devicesRouter)

app.on('listening', () => refreshSensorReadings())

initWebSocketConnection(server)

server.listen(process.env.PORT || 8080, () => {
  refreshSensorReadings()
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
})
