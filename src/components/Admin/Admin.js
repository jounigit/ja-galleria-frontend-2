import React, { useContext }  from 'react'
import { ResponsiveContainer } from './UI/containers/ResponsiveContainer'
// import { Container } from 'semantic-ui-react'
import { AuthContext } from '../../contexts/AuthContext'
import { Redirect, Route } from 'react-router'
import * as routes from '../../shared/constants/routes'
import { CategoryData } from './Category'
import { Album, Albums } from './Album'
import { PictureData } from './Picture'
import { Home } from './Home'
import { Users } from './User'
import Notification from '../Shared/Notification'

const Admin = () => {
  const { auth } = useContext(AuthContext)

  // console.log('User --', auth)

  return (
    <ResponsiveContainer>
      { !auth.isAuthenticated && <Redirect to='/home' /> }

      <Notification />

      <Route path={routes.ADMINCATEGORIES} component={CategoryData} />
      <Route path={routes.ADMINALBUMS} component={Albums} />
      <Route path={routes.ADMINALBUM} component={Album} />
      <Route path={routes.ADMINPICTURES} component={PictureData} />
      <Route path={routes.ADMINPICTURE} component={PictureData} />
      <Route path={routes.ADMINUSERS} component={Users} />
      <Route path={routes.ADMINHOME} component={Home} />
      <Route exact path={routes.ADMIN} component={Home} />

    </ResponsiveContainer>
  )
}

export default Admin