import React, { useContext } from 'react'
import PictureDetails from './PictureDetails'
import { Grid, Header } from 'semantic-ui-react'
import CreatePicture from './CreatePicture'
import ModalSection from '../Shared/modal/ModalSection'
import { AuthContext } from '../../App'


const PictureListContext = ({ pictures }) => {
  const { state } = useContext(AuthContext)

  const sortedPics = pictures.sort((a,b) =>  b.id-a.id )

  return (
    <div className='PictureList'>
      { state.user &&
      <ModalSection
        btnIcon={'edit'}
        btnContent={'new picture'}
        compToModal={ CreatePicture }
        headerContent={'New Picture'}
      />
      }

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