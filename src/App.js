import React from 'react'
import {  Route, Switch } from 'react-router-dom'
import './App.css'
import { ResponsiveContainer } from './components/UI/containers/ResponsiveContainer'
import * as routes from './shared/constants/routes'
import { PictureData, PictureList } from './components/Picture'
import { Home } from './components/Home'
import { CategoryDetails, CategoryList } from './components/Category'
import { AlbumList, AlbumDetails } from './components/Album'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Footer from './components/UI/footers/AppFooter'
import Admin from './components/Admin/Admin'
import Notification from './components/Shared/Notification'
// import NotFound from './components/Notfound/NotFound'

const App = () => {

  return (
    <>
      <div  className='page-container'>
        <Switch>
          <Route path={routes.ADMIN} component={Admin} />
          <ResponsiveContainer>
            <Notification />
            <Route path={routes.CATEGORIES} component={CategoryList} />
            <Route path={routes.CATEGORY} component={CategoryDetails} />
            <Route path={routes.ALBUM} component={AlbumDetails} />
            <Route path={routes.ALBUMS} component={AlbumList} />
            <Route path={routes.PICTURE} component={PictureData} />
            <Route path={routes.PICTURES} component={PictureList} />
            <Route path={routes.LOGIN} component={Login} />
            <Route path={routes.SIGNUP} component={Signup} />
            {/* <Route path={routes.HOME} component={Home} /> */}
            <Route exact path="/" component={Home} />
            {/* <Route component={NotFound} /> */}
          </ResponsiveContainer>
        </Switch>
      </div>
      <Footer />
    </>
  )
}

export default App