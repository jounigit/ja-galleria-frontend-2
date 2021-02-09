import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../../helpers/colors.css'
import {
  Image,
  Segment
} from 'semantic-ui-react'
import { PictureContext } from '../../contexts/PictureContext'
import { usePathname } from '../../helpers/getPathName'

const AlbumListItem = ({ album, cssClass }) => {
  const { pictures: { data: Pictures } } = useContext(PictureContext)
  const currentPath = usePathname()
  console.log('PATHNAME Albumlist Itembg: ', currentPath)

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

  /***********************************************************************/
  return (
    <div style={{ marginBottom: 30, textAlign:'center' }}>

      <Segment raised>

        <Link className={ cssClass } to={`/album/${album.slug}`} data-cy='AlbumListItemLink'>

          { image }

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