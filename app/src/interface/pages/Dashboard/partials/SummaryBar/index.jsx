import React, { useContext } from 'react'
import { SummaryBar } from '../../../../components'
import { AppContext } from '../../../../context/AppState'

export default () => {
  const [state] = useContext(AppContext)
  const items = state.getSensorReadings

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
