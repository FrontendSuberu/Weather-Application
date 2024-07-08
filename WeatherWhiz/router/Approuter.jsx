import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Weather from '../src/Pages/Weather/Weather'
import App from '../src/App';



export default function Approuter() {
    return (
        <div>
            {/* browserrouter */}
            <BrowserRouter>
                <Routes>
                <Route path='/' element={<App />} />
                    <Route path='/weatherWhiz-Weather' element={<Weather />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
