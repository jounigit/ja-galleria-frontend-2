import React, { useContext } from 'react'
import { Button } from 'semantic-ui-react'
import { AlbumContext } from '../../../contexts/AlbumContext'
import { DELETE_ALBUM } from '../../../reducers/actionTypes'
import { removeData } from '../../../services/apiService'

const RemoveAlbum = ({ id, title, author } ) => {
  const { dispatch } = useContext(AlbumContext)

  const remove = async (id, title, author) => {
    const ok = window.confirm(`remove category '${title}' by ${author}?`)
    if ( ok===false) {
      return
    }

    removeData(dispatch, DELETE_ALBUM, 'albums', id)
    localStorage.setItem('reloadPage', 'categories')

  }

  return (
    <div>
      <Button
        size='tiny'
        negative
        data-cy='delete'
        icon='trash'
        onClick={() => remove( id, title, author ) }
      />
    </div>
  )
}

export default RemoveAlbum