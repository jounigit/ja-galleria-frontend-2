import React, { useContext }  from 'react'
import { useParams } from 'react-router-dom'
import { AlbumContext } from '../../../contexts/AlbumContext'
import AlbumDetails from './AlbumDetails'
import AlbumDetailsMobile from './AlbumDetailsMobile'
import { Responsive } from 'semantic-ui-react'
import { CLEAR_ERROR, CLEAR_MSG } from '../../../reducers/actionTypes'
import { NotificationContext, notify } from '../../../contexts/NotificationContext'

const Album = () => {
  const { albums, dispatch } = useContext(AlbumContext)
  const { msgDispatch } = useContext(NotificationContext)

  let { id } = useParams()
  let albumsData = albums.data && albums.data

  const album =  id && albums.data && albumsData &&
  albumsData.find((a) => a.id === id)

  const albumData = id && albums.data &&
  <AlbumDetails album={ album } />
  const albumDataMobile = id && albums.data &&
  <AlbumDetailsMobile album={ album } />

  console.log('Album middle: ', album)

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

      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        { albumDataMobile }
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        { albumData }
      </Responsive>

    </div>
  )
}

export default Album