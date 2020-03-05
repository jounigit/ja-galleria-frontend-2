import React, { useContext } from 'react'
import PictureListItem from './PictureListItem'
import { Grid, Header } from 'semantic-ui-react'
import { PictureContext } from '../../contexts/PictureContext'


const PictureList = () => {
  const { pictures } = useContext(PictureContext)

  const sortedPics = pictures.data && pictures.data.sort((a,b) =>  b.id-a.id )

  const mappedPics = pictures.data && sortedPics.map(picture =>
    <Grid.Column
      // color='grey'
      mobile={16} tablet={8} computer={2}
      key={picture.id}>
      <PictureListItem picture={picture} />
    </Grid.Column>
  )

  return (
    <div className='PictureList'>
      {pictures.loading && <div className="loader">Loading ...</div>}

      <Header as='h2' content='Kuvat' />

      <Grid padded>
        <Grid.Column color='grey'>
          <Grid>
            { !pictures.loading && pictures.data &&
              mappedPics
            }
          </Grid>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default PictureList