import React, { useContext } from 'react'
import { AlbumContext } from '../../contexts/AlbumContext'
import '../../helpers/Colors.scss'
import AlbumListHomeItem from './AlbumListHomeItem'


const AlbumListHome = ({ amount }) => {
  const { albums: { data: Albums } } = useContext(AlbumContext)
  console.log(amount)

  /** constants */
  const isArr = Array.isArray(Albums)

  /********** items wanted for show, eg. Home page ***************************/
  let sortedAlbums = Albums && Albums.sort((a,b) =>  b.id-a.id)
  sortedAlbums = ( isArr && amount ) ? sortedAlbums.slice(0, amount) : sortedAlbums

  /*********** map data to girds *************************************/
  const mappedAlbums = Albums && isArr && sortedAlbums.map( (album, i) =>
    <div key={i} >
      <AlbumListHomeItem album={album} />
    </div>

  )

  /******************************************* style={{ margin: '2em' }}****************************/
  return (
    <div className='AlbumListHome Grid2'>

      { Albums && mappedAlbums }

    </div>
  )
}

export default AlbumListHome