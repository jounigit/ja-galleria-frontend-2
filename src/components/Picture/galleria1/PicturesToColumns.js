import React from 'react'
import PictureListItem from './PictureListItem'
import {
  Grid,
} from 'semantic-ui-react'
import { chunkArray } from '../../../helpers'

const picsToArrays = (array, cols) => {
  let factor = Math.ceil((array.length/cols))
  return chunkArray(array, factor)
}

const PicturesToColumns = ({ pictures }) => {

  const picsToComputer = picsToArrays(pictures, 3)

  const picsToTablet = picsToArrays(pictures, 2)

  const tabletPics = pictures &&
  picsToTablet.map(imageArray => (
    imageArray.map((p, i) =>
      <Grid.Column key={i}>
        <PictureListItem picture={p} />
      </Grid.Column>
    )
  ))

  const computerPics = pictures &&
    picsToComputer.map(imageArray => (
      imageArray.map((p, i) =>
        <Grid.Column key={i}>
          <PictureListItem picture={p} />
        </Grid.Column>
      )
    ))

  const picsToMobile = pictures.map(p => <PictureListItem key={p.id} picture={p} /> )

  return (
    <div>

      <div className='Item-center'><h1>PICTURES</h1></div>

      { !pictures.length > 0 && <h3>no pictures yet!</h3>}

      <Grid columns={4}>
        <Grid.Column only='mobile' mobile={16}>
          { picsToMobile }
        </Grid.Column>

        <Grid.Row only='tablet' columns='2'>
          { tabletPics }
        </Grid.Row>

        <Grid.Row only='computer' columns='3'>
          { computerPics }
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default PicturesToColumns