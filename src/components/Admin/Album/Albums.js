import React, { useContext }  from 'react'
import { AlbumContext } from '../../../contexts/AlbumContext'
import { CLEAR_ERROR, CLEAR_MSG } from '../../../reducers/actionTypes'
import AlbumList from './AlbumList'
import { NotificationContext, notify } from '../../../contexts/NotificationContext'

const Albums = () => {
  const { albums, dispatch } = useContext(AlbumContext)
  const { msgDispatch } = useContext(NotificationContext)
  let albumsData = albums.data && albums.data

  console.log('= Albums dataaaaa:', albumsData)
  // console.log('= Albums album:', album)

  /******************** messages *************************/
  if(albums.errorMessage) {
    let errorMsg = albums.errorMessage.response.data.message
    dispatch({ type: CLEAR_ERROR })
    notify( msgDispatch, errorMsg, 4, 'red')
  }

  if(albums.message) {
    let msg = albums.message
    dispatch({ type: CLEAR_MSG })
    notify( msgDispatch, msg, 4, 'green')
  }

  /****************************************************************/
  return (
    <div className="Albums">
      {albums.loading && <div className="loader">Loading ...</div>}
      { albumsData && <AlbumList albums = { albumsData } />
      }

    </div>
  )
}

export default Albums