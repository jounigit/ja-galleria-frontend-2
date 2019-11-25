import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import CategoryContextProvider from './contexts/CategoryContext'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <CategoryContextProvider>
      <App />
    </CategoryContextProvider>

  </BrowserRouter>, document.getElementById('root'))

