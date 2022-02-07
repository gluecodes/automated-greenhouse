import React, { useContext, useEffect } from 'react'
import { SummaryBar } from './partials'
import { Cards } from './partials'
import { Background } from '../../components'
import { AppContext } from '../../context/AppState'
import { getSensorReadings } from '../../actions/getters/sensors'
import { getDevicesInformation } from '../../actions/getters/devices'

export default () => {
  const [state, dispatch] = useContext(AppContext)

  useEffect(async () => {
    dispatch({
      type: 'getSensorReadings',
      payload: await getSensorReadings()
    })
    dispatch({
      type: 'getDevicesInformation',
      payload: await getDevicesInformation()
    })
  }, [])

  console.log(state)

  return (
    <Background>
      <SummaryBar />
      <Cards />
    </Background>
  )
}
