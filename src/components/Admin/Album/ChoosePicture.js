import React, { useContext } from 'react'
import { PictureContext } from '../../../contexts/PictureContext'
import { Container, Grid, Header, Segment } from 'semantic-ui-react'
import ChooseForm from './ChooseForm'
import { removeAlbumPicture, addAlbumPicture } from '../../../services/apiService'
import { AlbumContext } from '../../../contexts/AlbumContext'
import { UPDATE_ALBUM } from '../../../reducers/actionTypes'
import UnChooseForm from './UnChooseForm'
import { AuthContext } from '../../../contexts/AuthContext'

const ChoosePicture = ({ id, albumPics }) => {
  const { pictures: { data: Pictures } } = useContext(PictureContext)
  const { dispatch } = useContext(AlbumContext)
  const { auth } = useContext(AuthContext)

  // ::::::::: handle pictures ::::::::::::::::: //
  const ids = albumPics

  console.log('Choose pics: ', Pictures)

  const kaikki = Pictures.map(p => p.title)
  console.log('Kaikki kuvat --', kaikki)
  const ownPictures = Pictures.filter(p => p.user === auth.id)
  console.log('Omat kuvat --', ownPictures)

  const chosen = ownPictures.map(p => ids.includes(p.id) ? p : null).filter(p => p !== null)

  const choosable = ownPictures.map(a =>
    ids.includes(a.id) ? null : a).filter(a => a !== null)

  console.log('Valitut kuvat --', chosen)
  console.log('Valittavat kuvat --', choosable)

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

      <div>
        <Header style={{ backgroundColor: 'teal', color:'white' }} as='h4' attached='top'
          content='VALITUT' />
        <Segment attached>
          <Grid doubling columns={4}>
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
        </Segment>
      </div>


      <div>
        <Header style={{ backgroundColor: 'green', color:'white' }} as='h4' attached='top'
          content='VALITSE' />
        <Segment attached>
          <Grid doubling columns={4}>
            {
              choosable.map(picture =>
                <Grid.Column  key={picture.id}>
                  <ChooseForm
                    handleSelected={handleSelected}
                    picture_id={picture.id}
                    thumb={picture.image} />
                </Grid.Column>
              )
            }
          </Grid>
        </Segment>
      </div>


    </Container>
  )
}

export default ChoosePicture