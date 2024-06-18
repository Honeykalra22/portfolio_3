import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Port_ContextProvider from './Context/Port_Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Port_ContextProvider>
    <App/>
  </Port_ContextProvider>
)
