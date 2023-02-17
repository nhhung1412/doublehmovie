import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import { Provider } from 'react-redux'
import { store } from './features/store'

import { Layout } from './components/Layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={500}
          closeOnClick
          theme="colored"
          hideProgressBar
        />
        <Layout />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
