const express = require('express')
const sensorRouter = require('./routes/sensors')
const devicesRouter = require('./routes/devices')

const app = express()

app.use(express.static('dist'))
app.use('/api/sensors', sensorRouter)
app.use('/api/devices', devicesRouter)

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
)
