import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import {
  CategoryContextProvider,
  AlbumContextProvider,
  PictureContextProvider,
  AuthContextProvider
} from './contexts'

import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <AlbumContextProvider>
        <PictureContextProvider>
          <CategoryContextProvider>
            <App />
          </CategoryContextProvider>
        </PictureContextProvider>
      </AlbumContextProvider>
    </AuthContextProvider>
  </BrowserRouter>, document.getElementById('root'))

