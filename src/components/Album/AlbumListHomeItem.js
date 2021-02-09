import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../../helpers/colors.css'
import {
  // Card,
  Image,
  // Segment
} from 'semantic-ui-react'
import { PictureContext } from '../../contexts/PictureContext'
import { usePathname } from '../../helpers/getPathName'

const AlbumListHomeItem = ({ album }) => {
  const { pictures: { data: Pictures } } = useContext(PictureContext)
  const currentPath = usePathname()

  console.log('PATHNAME Albumlist Itembg: ', currentPath)

  if (album === undefined) { return <div className='Item-center'>Loading...</div> }

  const albumPictures = album.pictures

  const showAlbumPicLength = () => {
    return albumPictures.length === 1 ? '1 picture' :
      albumPictures.length > 1 ? albumPictures.length+' pictures' :
        'No pictures yet'
  }

  /****** get first album picture id, filter picture form pictures array ***/
  const getFirst = albumPictures && albumPictures.length && albumPictures[0]
  const firstPic = getFirst && Pictures && Pictures.filter(p => p.id === getFirst)

  const image = firstPic ? <Image src={ firstPic[0].landscape } fluid /> : ''

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

  const module = {
    // margin: '10px',
    width: '100%',
    height: '20em',
    backgroundImage:
    `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${ firstPic[0].landscape })`,
    backgroundSize: 'cover',
    // resize: 'both'
  }


  console.log('ALBUM list item PICS: ', albumPictures, showAlbumPicLength, image, module)
  /**********************************************************/
  return (
    <div>
      <Link className='Orange-pantone' to={`/album/${album.slug}`} data-cy='AlbumListItemBgLink'>

        {/* { image } */}

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

{/* <Card fluid>
<Card.Content
  style={{
    height: '300px',
    backgroundImage: `url(${ firstPic[0].landscape })`,
    backgroundSize: 'cover',
  }}
>
  <Card.Description style={{ color: 'white', textAlign:'center' }}>
    <h1>{album.title.toUpperCase()}</h1>
    <h3>
      { showAlbumPicLength() }
    </h3>
  </Card.Description>
</Card.Content>
</Card> */}