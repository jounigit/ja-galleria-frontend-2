import React from 'react'
import { Card } from 'semantic-ui-react'
import RemoveUser from './RemoveUser'

const UserDetails = ({ user, isAdmin }) => {

  const removeAction = <RemoveUser
    id={ user.id }
    user={ user }
  />

  return (
    <div className='user' data-cy='user'>
      <Card>
        <Card.Content header={user.name} />
        <Card.Content>
          <Card.Meta>
            {user.email}
          </Card.Meta>
        </Card.Content>
        { isAdmin &&
        <Card.Content extra>
          { removeAction }
        </Card.Content>
        }
      </Card>
    </div>


  )
}

export default UserDetails