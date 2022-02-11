import React, { useContext } from 'react'
import { SummaryBar, Loader } from '../../../../widgets'
import { AppContext } from '../../../../context/AppState'

export default () => {
  const [state] = useContext(AppContext)
  const sensorReadings = state.getSensorReadings || {}

  const items = Object.keys(sensorReadings).map((sensor) => ({
    measures: sensorReadings[sensor].measure,
    reading: sensorReadings[sensor].reading
  }))

  const modeButtons = [
    {
      text: 'auto',
      submit: () => alert('auto')
    },
    {
      text: 'manual',
      submit: () => alert('manual')
    }
  ]

  return <SummaryBar summaryItems={items} modeButtons={modeButtons} />
}
