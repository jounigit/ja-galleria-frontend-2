import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import {
  CategoryContextProvider,
  AlbumContextProvider,
  PictureContextProvider } from './contexts'

import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <AlbumContextProvider>
      <PictureContextProvider>
        <CategoryContextProvider>
          <App />
        </CategoryContextProvider>
      </PictureContextProvider>
    </AlbumContextProvider>
  </BrowserRouter>, document.getElementById('root'))

