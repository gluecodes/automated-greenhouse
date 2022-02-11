import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Settings } from './pages'

export default () => (
  <BrowserRouter basename='/'>
    <Routes>
      <Route exact path='/' element={<Dashboard />}></Route>
      <Route exact path='/settings' element={<Settings />}></Route>
    </Routes>
  </BrowserRouter>
)
