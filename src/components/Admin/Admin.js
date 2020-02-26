import React, { useContext }  from 'react'
import { ResponsiveContainer } from './UI/containers/ResponsiveContainer'
// import { Container } from 'semantic-ui-react'
import { AuthContext } from '../../contexts/AuthContext'
import { Redirect, Route } from 'react-router'
import * as routes from '../../shared/constants/routes'
import { CategoryData } from './Category'
import { Albums, Album } from './Album'
import { PictureData } from './Picture'

const Admin = () => {
  const { auth } = useContext(AuthContext)

  return (
    <ResponsiveContainer>
      { auth.loggedOut && <Redirect to='/home' /> }
      {/* <h2>Admin page</h2> */}
      <Route path={routes.ADMINCATEGORIES} component={CategoryData} />
      <Route path={routes.ADMINALBUMS} component={Albums} />
      <Route path={routes.ADMINALBUM} component={Album} />
      <Route path={routes.ADMINPICTURES} component={PictureData} />
      <Route path={routes.ADMINPICTURE} component={PictureData} />

    </ResponsiveContainer>
  )
}

export default Admin