import React from 'react'
import PictureDetails from './PictureDetails'
import { Grid, Divider } from 'semantic-ui-react'
// import CreatePicture from './CreatePicture'
import UploadPicture from './UploadPicture'


const PictureListContext = ({ pictures }) => {
// console.log('List ---', pictures)
  const sortedPics = pictures.sort((a,b) =>  b.id-a.id )

  return (
    <div className='PictureList'>
      <h2>Kuvat</h2>
      <UploadPicture />
      {/* <CreatePicture /> */}
      <Divider />
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