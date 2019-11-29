import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { AuthContext } from '../../App'

const Navigation = () => {
  const { state, dispatch } = useContext(AuthContext)
  const [ activeItem, setActiveItem ] = useState()
  // console.log('Active -- ', activeItem)

  const handleItemClick = (e, { name }) => setActiveItem({ name })

  return (
    <Menu inverted>
      <Menu.Item as={Link} to="/home"
        active={activeItem === 'home'}
        onClick={() => setActiveItem('home')}>
        home
      </Menu.Item>
      <Menu.Item as={Link} to="/categories"
        active={activeItem === 'categories'}
        onClick={() => setActiveItem('categories')}>
        categories
      </Menu.Item>
      <Menu.Item as={Link} to="/albums"
        active={activeItem === 'albums'}
        onClick={() => setActiveItem('albums')}>
        albums
      </Menu.Item>
      <Menu.Item as={Link} to="/pictures"
        active={activeItem === 'pictures'}
        onClick={() => setActiveItem('pictures')}>
        pictures
      </Menu.Item>
      <Menu.Menu position='right'>
        {
          state.user === null ?
            <Menu.Item as={Link} to="/login"
              name='login'
              active={activeItem === 'login'}
              onClick={handleItemClick}  data-cy='login' >
              Login
            </Menu.Item>
            :
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={() => dispatch({ type: 'LOGOUT' })}  data-cy='logout' >
              Logout - {state.user.name}
            </Menu.Item>
        }
      </Menu.Menu>
    </Menu>
  )
}

export default Navigation