import React, { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import UserList from './UserList'

const Users = () => {
  const { users } = useContext(UserContext)
  const usersData = users && users.data

  return (
    <div className="Users">
      {users.loading && <div className="loader">Loading ...</div>}
      {!users.loading && users.data
         && <UserList users = { usersData } />
      }
    </div>
  )

}

export default Users