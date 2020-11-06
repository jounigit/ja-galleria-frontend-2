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
  NotificationContextProvider,
  ModalContextProvider
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
                <ModalContextProvider>
                  <App />
                </ModalContextProvider>
              </NotificationContextProvider>
            </UserContextProvider>
          </CategoryContextProvider>
        </PictureContextProvider>
      </AlbumContextProvider>
    </AuthContextProvider>
  </BrowserRouter>, document.getElementById('root'))

