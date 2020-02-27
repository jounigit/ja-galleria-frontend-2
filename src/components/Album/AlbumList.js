import React, { useContext } from 'react'
import AlbumListItem from './AlbumListItem'
import { AlbumContext } from '../../contexts/AlbumContext'
import { Header, Grid } from 'semantic-ui-react'

const AlbumList = () => {
  const { albums } = useContext(AlbumContext)

  const sortedAlbums = albums.data
  && albums.data.sort((a,b) =>  b.id-a.id )

  return (
    <div className='AlbumList'>
      {albums.loading && <div className="loader">Loading ...</div>}

      <Header as='h2' dividing content='Albumit' />

      <Grid>
        { !albums.loading && albums.data &&
        sortedAlbums.map(album =>
          <Grid.Column mobile={16} tablet={8} computer={4}  key={album.id}>
            <AlbumListItem album={album} />
          </Grid.Column>
        )
        }
      </Grid>

    </div>
  )
}

export default AlbumList