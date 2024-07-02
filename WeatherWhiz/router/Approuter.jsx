import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../src/Pages/Home/Home'
import Weather from '../src/Pages/Weather/Weather'

export default function Approuter() {
  return (
    <>
    {/* browserrouter */}
        <BrowserRouter>

        {/* desendant of browser router */}
        <Routes>
        {/* routes */}
            <Route path='/' element={<Home />} />
            <Route path='/weatherWhiz-Weather' element={<Weather />} />
        {/* routes */}

        </Routes>
        {/* desendant of browser router */}

        </BrowserRouter>
    {/* browserrouter */}

    </>
  )
}
