import React, { useContext } from 'react'
import { PictureContext } from '../../../contexts/PictureContext'
import { Container, Grid, Header, Divider } from 'semantic-ui-react'
import ChooseForm from './ChooseForm'
import { removeAlbumPicture, addAlbumPicture } from '../../../services/apiService'
import { AlbumContext } from '../../../contexts/AlbumContext'
import { UPDATE_ALBUM } from '../../../reducers/actionTypes'
import UnChooseForm from './UnChooseForm'

const ChoosePicture = ({ id, albumPics }) => {
  const { pictures } = useContext(PictureContext)
  const { dispatch } = useContext(AlbumContext)

  // ::::::::: handle pictures ::::::::::::::::: //
  const pics = pictures.data
  const ids = albumPics

  const chosen = pics.map(p => ids.includes(p.id) ? p : null).filter(p => p !== null)

  const choosable = pics.map(a =>
    ids.includes(a.id) ? null : a).filter(a => a !== null)

  const sortedPics = choosable.sort((a,b) =>  b.id-a.id )

  console.log('Valitut kuvat --', chosen)
  console.log('Valittavat kuvat --', sortedPics)

  //
  const handleSelected = picture_id =>  saveSelected( picture_id )
  const handleDelete = picture_id =>  removeSelected( picture_id )

  // ::::::::::: actions ::::::::::::::::::::::::: //
  const removeSelected = async (pictureID) => {
    const res = await removeAlbumPicture(dispatch, UPDATE_ALBUM, 'albums', id, pictureID)
    console.log('Album picture delete: ', res)
  }
  // save
  const saveSelected = async (pictureID) => {
    console.log('Album picture id: ', pictureID)
    const result = await addAlbumPicture(dispatch, UPDATE_ALBUM, id, pictureID)
    console.log('Album picture saved: ', result)
  }

  // :::::::::::::::::::::::::::::::::::: //
  return (
    <Container>
      <Grid doubling columns={4}>
        <Header as='h4' content='Valitut' />
        {
          chosen.map(pic =>
            <Grid.Column key={pic.id}>
              <UnChooseForm
                handleDelete={handleDelete}
                picture_id={pic.id}
                thumb={pic.image}
              />
            </Grid.Column>
          )
        }
      </Grid>
      <Divider />
      <Grid doubling columns={4}>
        <Header as='h4' content='Valitse' />
        {
          sortedPics.map(picture =>
            <Grid.Column  key={picture.id}>
              <ChooseForm
                handleSelected={handleSelected}
                picture_id={picture.id}
                thumb={picture.image} />
            </Grid.Column>
          )
        }

      </Grid>
    </Container>
  )
}

export default ChoosePicture