import React, { useContext } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { AuthContext } from '../../../contexts/AuthContext'
import RemovePicture from './RemovePicture'
import UpdatePicture from './UpdatePicture'
import ModalSection from '../../Shared/modal/ModalSection'

const PictureDetails = ({ picture }) => {
  const { auth } = useContext(AuthContext)

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
          { auth.user &&
              <RemovePicture
                id={ picture.id }
                title={ picture.title }
              />
          }
          { auth.user &&
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