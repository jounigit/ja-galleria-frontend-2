import React, { useState, useContext } from 'react'
import AlbumListItem from './AlbumListItem'
import { AuthContext } from '../../App'
import { Button } from 'semantic-ui-react'
import AlbumForm from './AlbumForm'

const AlbumList = ({ albums }) => {
  const { state } = useContext(AuthContext)
  const [formVisibility, setFormVisibility] = useState(false)

  const showWhenVisible = { display: formVisibility ? '' : 'none' }

  // console.log('LIST --', albums)
  // console.log('STATE album user --', state.user)
  return (
    <div className='AlbumList'>
      {state.user && <Button data-cy='addNewAlbum'  onClick={() => setFormVisibility(!formVisibility)}>new album</Button>}
      <div style={showWhenVisible}>
        <AlbumForm />
      </div>
      <h2>Albumit</h2>
      {
        albums.map(album =>
          <AlbumListItem key={album.id} album={album} user={state.user} />
        )
      }
    </div>
  )
}

export default AlbumList