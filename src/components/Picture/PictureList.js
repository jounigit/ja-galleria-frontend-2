import React, { useContext } from 'react'
import PictureListItem from './PictureListItem'
import { Grid, Header } from 'semantic-ui-react'
import { PictureContext } from '../../contexts/PictureContext'


const PictureList = () => {
  const { pictures } = useContext(PictureContext)

  const sortedPics = pictures.data && pictures.data.sort((a,b) =>  b.id-a.id )

  return (
    <div className='PictureList'>
      {pictures.loading && <div className="loader">Loading ...</div>}

      <Header as='h2' dividing content='Kuvat' />

      <Grid>
        { !pictures.loading && pictures.data &&
          sortedPics.map(picture =>
            <Grid.Column
              color='grey'
              mobile={16} tablet={8} computer={2}
              key={picture.id}>
              <PictureListItem picture={picture} />
            </Grid.Column>
          )
        }
      </Grid>
    </div>
  )
}

export default PictureList