import React, { useContext } from 'react'
import { SummaryBar } from '../../../../widgets'
import { AppContext } from '../../../../context/AppState'

export default () => {
  const [state] = useContext(AppContext)
  const sensorReadings = state.getSensorReadings || {}

  const items = Object.keys(sensorReadings).map((sensor) => ({
    measures: sensorReadings[sensor].measures,
    reading: sensorReadings[sensor].reading
  }))

  const modes = [
    {
      text: 'auto',
      submit: () => alert('auto')
    },
    {
      text: 'manual',
      submit: () => alert('manual')
    }
  ]

  const navigation = [
    {
      text: '',
      redirect: '/settings',
      icon: ['fas', 'cog']
    }
  ]

  return (
    <SummaryBar summaryItems={items} modes={modes} navigation={navigation} />
  )
}
