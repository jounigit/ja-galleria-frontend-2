import React, { useContext } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { AuthContext } from '../../App'
import RemovePicture from './RemovePicture'
import UpdatePicture from './UpdatePicture'

const PictureDetails = ({ picture }) => {
  const { state } = useContext(AuthContext)

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
              <UpdatePicture
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