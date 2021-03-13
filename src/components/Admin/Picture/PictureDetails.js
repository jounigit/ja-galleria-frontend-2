import React, { useContext } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { AuthContext } from '../../../contexts/AuthContext'
import RemovePicture from './RemovePicture'
import UpdatePicture from './UpdatePicture'
import ModalPortal from '../../Shared/modal/modalPortal'
import permission from '../../Shared/Permission'

const PictureDetails = ({ picture }) => {
  const { auth } = useContext(AuthContext)

  console.log('PICTURE DETAIL ---', picture)
  if (!permission(auth, picture.user)) { return null }

  const updateAction =
  <ModalPortal
    btnIcon='edit'
    header='Update Picture'
  >
    <UpdatePicture
      id={ picture.id }
      title={ picture.title }
      content={ picture.content || '' }
      thumb={ picture.thumb }
    />
  </ModalPortal>

  const removeAction = <RemovePicture
    id={ picture.id }
    title={ picture.title }
  />

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
          { auth.user && removeAction }
          { auth.user && updateAction }
        </Card.Content>
      </Card>
    </div>
  )
}

export default PictureDetails