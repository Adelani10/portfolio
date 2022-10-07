import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ToggleContext} from './ToggleContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ToggleContext>
    <App />
  </ToggleContext>
)
