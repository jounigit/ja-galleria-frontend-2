import React, { useState, useContext } from 'react'
import ListItemAlbum from './ListItemAlbum'
import RemoveCategory from './RemoveCategory'
import UpdateCategory from './UpdateCategory'
import { AuthContext } from '../../../contexts/AuthContext'
import { Segment, Grid, Header } from 'semantic-ui-react'
// import { ModalContext } from '../../../contexts/modalContext'
import ModalPortal from '../../Shared/modal/modalPortal'

const CategoryDetails = ({ category }) => {
  const [visible, setVisible] = useState(false)
  const { auth } = useContext(AuthContext)
  // const { modalDispatch } = useContext(ModalContext)
  console.log('CategoryDetail auth:', auth.id)

  const permission  = (user, documentUser) => {
    const permission = (user.id === documentUser.toString()) || (user.role === 'editor')
    console.log('Params: ', user.id, documentUser)
    // console.log('Grant Access: ', permission)
    return permission
  }

  console.log('Permission: ', category.title, permission(auth, category.user.id))

  if (!permission(auth, category.user.id)) { return null }

  const albums = () => category.albums.map((a, i ) =>
    <ListItemAlbum key={i} albumID={a} />
  )

  const showWhenVisible = { display: visible ? '' : 'none' }
  const linkable = {
    color: 'Blue',
    textDecoration: 'Underline'
  }

  const editAction =
    <ModalPortal btnIcon='edit'>
      <UpdateCategory
        id={category.id}
        title={category.title}
        content={category.content}
      />
    </ModalPortal>

  const removeAction = <RemoveCategory
    id={category.id}
    title={category.title}
    author={category.user.name}
  />

  return (
    <div className='category' data-cy='category'>
      { auth.user &&
      <Segment>
        <Grid>
          <Grid.Column mobile={16} tablet={16} computer={4}>
            <Header as='h3' data-cy='header' content={category.title} />
          </Grid.Column>

          <Grid.Column mobile={16} tablet={16} computer={10}>
            <p>{category.content}</p>
            <Header as='h5'>Author - {category.user.username}</Header>
          </Grid.Column>
          <Grid.Column  mobile={1} tablet={1} computer={1}>
            { editAction }
          </Grid.Column>

          <Grid.Column  mobile={1} tablet={1} computer={1}>
            { removeAction }
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <h4  data-cy='linkable' style={linkable} onClick={() => setVisible(!visible)}>
                      Albums
            </h4>
            <ul style={showWhenVisible}>
              {albums().length > 0 ? albums() : 'no albums'}
            </ul>
          </Grid.Column>
        </Grid>
      </Segment>

      }
    </div>
  )
}

export default CategoryDetails

