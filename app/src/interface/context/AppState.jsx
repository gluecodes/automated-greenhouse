import React, { useReducer, useMemo, createContext } from 'react'

export const AppContext = createContext()

const reduce = (state, action) => {
  try {
    return {
      ...state,
      [action.type]: action.payload
    }
  } catch (err) {
    console.warn(err)
  }
}

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reduce, {})
  const value = useMemo(() => [state, dispatch], [state])

  return <AppContext.Provider value={value} {...props} />
}
