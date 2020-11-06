import React, { useContext } from 'react'
import PictureDetails from './PictureDetails'
import { Grid, Header } from 'semantic-ui-react'
import CreatePicture from './CreatePicture'
import { AuthContext } from '../../../contexts/AuthContext'
import ModalPortal from '../../Shared/modal/modalPortal'

const PictureList = ({ pictures }) => {
  const { auth } = useContext(AuthContext)


  const sortedPics = auth.user &&
    pictures &&
    pictures.sort((a,b) =>  b.id-a.id )

  return (
    <div className='PictureList'>
      { auth.user &&
       <ModalPortal
         header='New Picture'
         btnContent='new picture'
         btnIcon='edit'
         dataCy='newPicture'
       >
         <CreatePicture  />
       </ModalPortal>
      }

      <Header as='h2' dividing content='Kuvat' />

      { pictures && !pictures.length > 0 && <h3>no pictures yet!</h3>}

      <Grid doubling columns={4}>
        { sortedPics &&
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

export default PictureList