import React from 'react'
import { SummaryBar } from '../../../../components'

export default () => {
  const items = [
    { text: 'temperature', value: '20C' },
    { text: 'humidity', value: '80%' },
    { text: 'earth Moisture', value: '20%' }
  ]

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
