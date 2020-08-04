import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import {
  CategoryContextProvider,
  AlbumContextProvider,
  PictureContextProvider,
  AuthContextProvider,
  UserContextProvider,
  NotificationContextProvider
} from './contexts'
import App from './App'


ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <AlbumContextProvider>
        <PictureContextProvider>
          <CategoryContextProvider>
            <UserContextProvider>
              <NotificationContextProvider>
                <App />
              </NotificationContextProvider>
            </UserContextProvider>
          </CategoryContextProvider>
        </PictureContextProvider>
      </AlbumContextProvider>
    </AuthContextProvider>
  </BrowserRouter>, document.getElementById('root'))

