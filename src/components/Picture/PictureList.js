import React from 'react'
import PictureDetails from './PictureDetails'
import { Grid, Header } from 'semantic-ui-react'
import CreatePicture from './CreatePicture'
import ModalSection from '../Shared/modal/ModalSection'


const PictureListContext = ({ pictures }) => {
// console.log('List ---', pictures)
  const sortedPics = pictures.sort((a,b) =>  b.id-a.id )

  return (
    <div className='PictureList'>
      <ModalSection
        btnIcon={'edit'}
        btnContent={'new picture'}
        compToModal={ CreatePicture }
        headerContent={'New Picture'}
      />

      <Header as='h2' dividing content='Kuvat' />

      <Grid doubling columns={3}>
        {
          sortedPics.map(picture =>
            <Grid.Column  key={picture.id}>
              <PictureDetails key={picture.id} picture={picture} />
            </Grid.Column>
          )
        }
      </Grid>
    </div>
  )
}

export default PictureListContext