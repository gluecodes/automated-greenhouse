import React, { useContext } from 'react'
import { AppContext } from '../../../../context/AppState'
import { Cards } from '../../../../components'

export default () => {
  const [state] = useContext(AppContext)
  const cards = state.getDevicesInformation

  return <Cards cards={cards} />
}
