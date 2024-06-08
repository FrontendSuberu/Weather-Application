import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../src/Pages/Home/Home'

export default function Approuter() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}
