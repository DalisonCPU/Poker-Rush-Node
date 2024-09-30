import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Mesa from '../components/mesa/Mesa'

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Mesa />} />
    </Routes>
    </BrowserRouter>
  )
}
