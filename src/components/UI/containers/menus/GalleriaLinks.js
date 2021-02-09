import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header, Popup, Grid, Menu, Icon, Divider } from 'semantic-ui-react'
import { CategoryContext } from '../../../../contexts/CategoryContext'
import ListItemAlbum from '../../../Category/ListItemAlbum'

const GalleriaLinks = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const { categories } = useContext(CategoryContext)
  // console.log('Popup links: ', isOpen)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  /**************************************************************** */
  const columns = (id, slug, title, albums) =>
    <Grid.Column key={id}>
      <Link to={`/category/${slug}`} onClick={handleClose}>
        <Header as='h4' content={title} style={{ marginBottom: 20 }} />
      </Link>
      <Divider fitted />
      {
        albums.map(( a, i ) =>
          <ListItemAlbum key={i} albumID={a} handleClose={handleClose} />
        )
      }
    </Grid.Column>

  const columnsWithLinks = categories && categories.data &&
  categories.data.map( data => columns(data.id, data.slug, data.title, data.albums) )

  // console.log('Popup colums: ', columnsWithLinks)

  /**************************************************************** */
  return (
    <Popup
      trigger={<Menu.Item> GALLERIA &nbsp; <Icon name='caret down' /> </Menu.Item>}
      flowing
      hoverable
      // on='click'
      open={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <Grid divided columns={3}>
        { columnsWithLinks }
      </Grid>
    </Popup>
  )
}


export default GalleriaLinks