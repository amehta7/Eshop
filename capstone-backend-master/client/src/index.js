import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
)
