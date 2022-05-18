import React, { useContext, useEffect } from 'react'
import { Form } from './partials'
import { Background } from '../../widgets'
import { AppContext } from '../../context/AppState'

export default () => {
  const [state, dispatch] = useContext(AppContext)

  useEffect(async () => {}, [])

  return (
    <Background>
      <Form />
    </Background>
  )
}
