import React, { useContext } from 'react'
import { AppContext } from '../../../../context/AppState'
import { Cards } from '../../../../widgets'

export default () => {
  const [state] = useContext(AppContext)
  const devices = state.getDevicesInformation || []
  const sensors = state.getSensorReadings || {}

  const addSensorInformationToDevice = () =>
    devices.map((device) => ({
      ...device,
      sensor: sensors[device.sensor]
    }))

  return <Cards cards={addSensorInformationToDevice()} />
}
