import React, { useContext, useEffect } from 'react'
import { SummaryBar } from './partials'
import { Cards } from './partials'
import { Background } from '../../widgets'
import { AppContext } from '../../context/AppState'
import { getDevicesInformation } from '../../actions/getters/devices'

export default () => {
  const [state, dispatch] = useContext(AppContext)

  useEffect(async () => {
    const ws = new WebSocket('ws://localhost:7070')

    dispatch({
      type: 'getDevicesInformation',
      payload: await getDevicesInformation()
    })

    ws.onmessage = (message) => {
      dispatch({
        type: 'getSensorReadings',
        payload: JSON.parse(message.data)
      })
    }
  }, [])

  return (
    <Background>
      <SummaryBar />
      <Cards />
    </Background>
  )
}
