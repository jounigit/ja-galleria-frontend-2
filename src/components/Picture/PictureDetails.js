import React, { useContext } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { AuthContext } from '../../App'
import RemovePicture from './RemovePicture'
import UpdatePicture from './UpdatePicture'
import ModalSection from '../Shared/modal/ModalSection'

const PictureDetails = ({ picture }) => {
  const { state } = useContext(AuthContext)

  // console.log('DETAIL ---', picture)
  return (
    <div data-cy='picture'>
      <Card>
        <Image src={picture.thumb} wrapped ui={false} />
        <Card.Content header={picture.title} />
        <Card.Content>
          <Card.Meta>
            <span className='date'>{picture.created_at}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content description={picture.content} />
        <Card.Content extra>
          { state.user &&
              <RemovePicture
                id={ picture.id }
                title={ picture.title }
              />
          }
          { state.user &&
              <ModalSection
                btnIcon={'edit'}
                compToModal={ UpdatePicture }
                headerContent={'Update Picture'}
                id={ picture.id }
                title={ picture.title }
                content={ picture.content || '' }
                thumb={ picture.thumb }
              />
          }
        </Card.Content>
      </Card>
    </div>
  )
}

export default PictureDetails