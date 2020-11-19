import React, { useContext, useState } from 'react'
import { Header, Popup, Grid, Menu, Icon, Divider } from 'semantic-ui-react'
import { CategoryContext } from '../../../../contexts/CategoryContext'
import ListItemAlbum from '../../../Category/ListItemAlbum'

const PopupLinks = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const { categories } = useContext(CategoryContext)
  console.log('Popup links: ', isOpen)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const columns = (id, title, albums) =>
    <Grid.Column key={id}>
      <Header as='h4' content={title} />
      <Divider fitted />
      {
        albums.map(( a, i ) =>
          <ListItemAlbum key={i} albumID={a} handleClose={handleClose} />
        )
      }


    </Grid.Column>

  const columnsWithLinks = categories && categories.data &&
  categories.data.map( (data, i) => columns(i, data.title, data.albums) )

  console.log('Popup colums: ', columnsWithLinks)

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
      <Grid centered divided columns={3}>
        { columnsWithLinks }
      </Grid>
    </Popup>
  )
}


export default PopupLinks