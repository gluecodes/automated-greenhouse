import React, { useContext } from 'react'
import { AppContext } from '../../../../context/AppState'
import { Cards } from '../../../../widgets'
import { toggleDevice } from '../../../../actions/setters/devices'

export default () => {
  const [state] = useContext(AppContext)
  const devices = state.getDevicesInformation || []


  const addSensorInformationToDevice = () =>
    devices.map((device) => ({
      onClick: () => toggleDevice({ deviceName: device.name }),
      ...device
    }))

  return <Cards cards={addSensorInformationToDevice()} />
}
