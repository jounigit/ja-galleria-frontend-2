import React, { useContext } from 'react'
import UserDetails from './UserDetails'
import { AuthContext } from '../../../contexts/AuthContext'
// import CreateUser from './CreateUser'
// import ModalSection from '../../Shared/modal/ModalSection'
import { Header, Grid } from 'semantic-ui-react'
import ModalPortal from '../../Shared/modal/modalPortal'

const UserList = ({ users }) => {
  const { auth } = useContext(AuthContext)
  const isAdmin = auth.user && auth.user.is_admin === 1
  // console.log('UsersList --', users)

  return (
    <div className='UserList'>
      {isAdmin &&
      <ModalPortal
        header='New User'
        btnContent='new user'
        btnIcon='edit'
        dataCy='addNewUser'
      />

      }

      <Header as='h2' dividing content='Userit' />

      <Grid doubling columns={4}>
        {
          users.map(user =>
            <Grid.Column  key={user.id}>
              <UserDetails
                user={user}
                isAdmin={isAdmin}
              />
            </Grid.Column>
          )
        }
      </Grid>

    </div>
  )
}

export default UserList

{/* <ModalSection
        btnIcon={'edit'}
        btnContent={'new user'}
        dataCy={'addNewUser'}
        // compToModal={ CreateUser }
        headerContent={'New User'}
      /> */}