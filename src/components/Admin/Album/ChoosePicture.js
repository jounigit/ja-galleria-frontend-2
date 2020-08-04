import React, { useContext } from 'react'
import { PictureContext } from '../../../contexts/PictureContext'
import { Container, Grid, Header, Divider } from 'semantic-ui-react'
import ChooseForm from './ChooseForm'
import apiService from '../../../services/apiService'
import { AlbumContext } from '../../../contexts/AlbumContext'
import { UPDATE_ALBUM } from '../../../reducers/actionTypes'
import UnChooseForm from './UnChooseForm'

const ChoosePicture = ({ id, albumPics }) => {
  const { pictures } = useContext(PictureContext)
  const { dispatch } = useContext(AlbumContext)

  // ::::::::: handle pictures ::::::::::::::::: //
  const pics = pictures.data
  const ids = albumPics.map(p => p.id)

  const choosable = pics.map(a =>
    ids.includes(a.id) ? null : a).filter(a => a !== null)

  const sortedPics = choosable.sort((a,b) =>  b.id-a.id )

  console.log('Valitut kuvat --', albumPics)
  console.log('Valittavat kuvat --', sortedPics)

  //
  const handleSelected = picture_id =>  saveSelected( picture_id )
  const handleDelete = picture_id =>  removeSelected( picture_id )

  // ::::::::::: actions ::::::::::::::::::::::::: //
  const removeSelected = async( picture_id ) => {
    const data = {
      album_id: id,
      picture_id: picture_id
    }
    console.log('DATA --', data)

    const all = await apiService.getAll('album-pictures')
    const filtered = all.filter(ob => ob.album_id === id && ob.picture_id === picture_id)
    console.log('ALL --', all)
    console.log('FIT --', filtered)
    console.log('FITid --', filtered[0].id)


    try {
      const result = await apiService.remove('album-pictures', filtered[0].id)
      const newAlbum = result.data
      console.log('API --', result)

      dispatch({
        type: UPDATE_ALBUM,
        data: newAlbum
      })
    } catch (error) {
      console.error()
    }
  }
  // save
  const saveSelected = async( picture_id ) => {
    const data = {
      album_id: id,
      picture_id: picture_id
    }

    try {
      const result = await apiService.create('album-pictures', data)
      const newAlbum = result.data

      dispatch({
        type: UPDATE_ALBUM,
        data: newAlbum
      })
    } catch (error) {
      console.error()
    }
  }
  // :::::::::::::::::::::::::::::::::::: //
  return (
    <Container>
      <Grid doubling columns={4}>
        <Header as='h4' content='Valitut' />
        {
          albumPics.map(pic =>
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