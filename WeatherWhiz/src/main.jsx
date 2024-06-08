import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Approuter from '../router/Approuter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Approuter>
    <App />
    </Approuter>
  </React.StrictMode>,
)
