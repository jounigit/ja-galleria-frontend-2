import React, { useContext }  from 'react'
import { useParams } from 'react-router-dom'
import { AlbumContext } from '../../../contexts/AlbumContext'
import AlbumDetails from './AlbumDetails'
import AlbumDetailsMobile from './AlbumDetailsMobile'
import { Responsive } from 'semantic-ui-react'

const Album = () => {
  const { albums } = useContext(AlbumContext)
  let { id } = useParams()
  let albumsData = albums.data && albums.data
  const albumData = id && albums.data &&
  <AlbumDetails album={ albumsData.find((item) => item.id === parseInt(id)) } />
  const albumDataMobile = id && albums.data &&
  <AlbumDetailsMobile album={ albumsData.find((item) => item.id === parseInt(id)) } />


  console.log('Album -> Album')
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