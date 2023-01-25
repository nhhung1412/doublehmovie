import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Layout } from './components/Layout'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>,
)
