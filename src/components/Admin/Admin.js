import React, { useContext }  from 'react'
import { ResponsiveContainer } from './UI/containers/ResponsiveContainer'
import { Container } from 'semantic-ui-react'
import { AuthContext } from '../../contexts/AuthContext'
import { Redirect, Switch, Route } from 'react-router'
import * as routes from '../../shared/constants/routes'
import { CategoryData } from './Category'

const Admin = () => {
  const { auth } = useContext(AuthContext)

  return (
    <Container>
      <ResponsiveContainer>
        { auth.loggedOut && <Redirect to='/home' /> }
        <h2>Admin page</h2>
        <Switch>
          <Route path={routes.ADMINCATEGORIES} component={CategoryData} />
        </Switch>
      </ResponsiveContainer>
    </Container>
  )
}

export default Admin