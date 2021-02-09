import React, { useContext } from 'react'
// import AlbumListItem from './AlbumListItem'
import { AlbumContext } from '../../contexts/AlbumContext'
// import {
//   // Header,
//   Grid, Responsive } from 'semantic-ui-react'
import {
// colors,
// setBgColor,
// shuffleArray,
} from '../../helpers'
import '../../helpers/Colors.scss'
import { usePathname } from '../../helpers/getPathName'
import AlbumListItem from './AlbumListItem'


const AlbumList = ({ amount }) => {
  const { albums: { data: Albums } } = useContext(AlbumContext)

  console.log('PATHNAME Albumlist: ', usePathname())

  if (Albums === undefined) { return <div className='Item-center'>Loading...</div> }

  /** constants */
  const isArr = Array.isArray(Albums)

  let sortedAlbums = Albums.sort((a,b) =>  b.id-a.id)
  sortedAlbums = ( isArr && amount ) ? sortedAlbums.slice(0, amount) : sortedAlbums

  /*********** map data to girds *************************************/
  const mappedAlbums = isArr && sortedAlbums.map( (album, i) =>
    <div key={i}>
      <AlbumListItem album={album} cssClass='Light-gray' />
    </div>
  )

  /***********************************************************************/
  return (
    <div className='AlbumList' style={{ margin: '2em' }}>

      <div className='Item-center'><h1>ALBUMS</h1></div>

      <div className='Grid2'>

        { Albums && mappedAlbums }

      </div>

    </div>
  )
}

export default AlbumList