const express = require('express')
const { test } = require('./websockets')
const sensorRouter = require('./routes/sensors')
const devicesRouter = require('./routes/devices')
const { refreshSensorReadings } = require('./models/sensors')

const app = express()

app.use(express.static('dist'))
app.use('/api/sensors', sensorRouter)
app.use('/api/devices', devicesRouter)

app.on('listening', () => refreshSensorReadings())

const server = app.listen(process.env.PORT || 8080, () => {
  refreshSensorReadings()
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
})

test(server)

process.on('message', (message) => {
  console.log(message)
})
