import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../../helpers/colors.css'
import { PictureContext } from '../../contexts/PictureContext'
import defaultBg from '../../assets/default_bg.jpg'
import BaseSpinning from '../Shared/loaders/BaseSpinning'

const AlbumListHomeItem = ({ album }) => {
  const { pictures: { data: Pictures } } = useContext(PictureContext)

  if (album === undefined) { return <BaseSpinning /> }

  const albumPictures = album.pictures

  const showAlbumPicLength = () => {
    return albumPictures.length === 1 ? '1 picture' :
      albumPictures.length > 1 ? albumPictures.length+' pictures' :
        'No pictures yet'
  }

  /****** get first album picture id, filter picture form pictures array ***/
  const getFirst = albumPictures && albumPictures.length && albumPictures[0]
  let firstPic = !getFirst === 0 && Pictures.find(p => p.id === getFirst)

  firstPic = firstPic ? firstPic.landscape : defaultBg

  const textWrapper = {
    position: 'relative',
    width: '100%',
    height: '265px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    opacity: 1,
  }

  /**** background image for div */
  const module = {
    // margin: '10px',
    width: '100%',
    height: '20em',
    backgroundImage:
    `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${ firstPic })`,
    backgroundSize: 'cover',
    // resize: 'both'
  }


  console.log('ALBUMlistItem module: ', module, firstPic)
  /**********************************************************/
  return (
    <div>
      <Link className='Orange-pantone' to={`/album/${album.slug}`} data-cy='AlbumListItemBgLink'>

        <div style={ module }>
          <span style={ textWrapper }>
            <h1>{album.title.toUpperCase()}</h1>
            <h3>
              { showAlbumPicLength() }
            </h3>
          </span>
        </div>

      </Link>
    </div>

  )
}

export default AlbumListHomeItem
