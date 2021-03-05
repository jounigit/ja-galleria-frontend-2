import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../../helpers/colors.css'
import {
  Image,
  Segment
} from 'semantic-ui-react'
import { PictureContext } from '../../contexts/PictureContext'

const AlbumListItem = ({ album, cssClass }) => {
  const { pictures: { data: Pictures } } = useContext(PictureContext)

  // console.log('PATHNAME Albumlist Itembg: ', Pictures)

  if (album === undefined) { return <div className='Item-center'>Loading...</div> }

  const albumPictures = album.pictures

  const showAlbumPicLength = () => {
    return albumPictures.length === 1 ? '1 picture' :
      albumPictures.length > 1 ? albumPictures.length+' pictures' :
        'No pictures yet'
  }

  /****** get first album picture id, filter picture from pictures array ***/
  const getFirst = albumPictures.length && albumPictures[0]
  let firstPic = !getFirst === 0 && Pictures.find(p => p.id === getFirst)

  firstPic = firstPic ? <Image src={ firstPic.landscape } fluid /> : null

  console.log('ALBUM list item getFirst: ', getFirst)
  console.log('ALBUM list item PICS: ', albumPictures, albumPictures.length, firstPic)

  /***********************************************************************/
  return (
    <div style={{ marginBottom: 30, textAlign:'center' }} data-cy='albumListItem'>

      <Segment raised>

        <Link className={ cssClass } to={`/album/${album.slug}`} data-cy='albumListItemLink'>

          { firstPic && firstPic }

          <h2>{album.title}</h2>
          { <h5>Author - {album.user.username}</h5> }
          <h3>
            { showAlbumPicLength() }
          </h3>

        </Link>

      </Segment>
    </div>

  )
}

export default AlbumListItem