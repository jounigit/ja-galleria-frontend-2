import React from 'react'
import PictureDetails from './PictureDetails'
import { Grid } from 'semantic-ui-react'
import CreatePicture from './CreatePicture'


const PictureListContext = ({ pictures }) => {
  return (
    <div className='PictureList'>
      <h2>Kuvat</h2>
      <CreatePicture />
      <Grid doubling columns={3}>
        {
          pictures.map(picture =>
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