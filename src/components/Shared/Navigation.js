import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Navigation = () => {
  const [ activeItem, setActiveItem ] = useState()
  console.log('Active -- ', activeItem)

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
        <Link  to="/categories">categories</Link>
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
        <Menu.Item
          name='signup'
          active={activeItem === 'signup'}
          onClick={handleItemClick}
        >
                  Sign Up
        </Menu.Item>
        <Menu.Item
          name='help'
          active={activeItem === 'help'}
          onClick={handleItemClick}
        >
                  Login
        </Menu.Item>
      </Menu.Menu>
      {/* <Menu.Item link>
                {user
                  ? <em>{user} logged in</em>
                  : <Link to="/login">login</Link>
                }
              </Menu.Item> */}
    </Menu>
  )
}

export default Navigation