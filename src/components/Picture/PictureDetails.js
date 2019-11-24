import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const PictureDetails = ({ picture }) => {

  // console.log('PICTURE -', picture)

  return (
    <div data-cy='picture'>
      <Card>
        <Image src={picture.thumb} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{picture.title}</Card.Header>
          <Card.Meta>
            <span className='date'>{picture.created_at}</span>
          </Card.Meta>
          <Card.Description>
            {picture.content}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  )
}

export default PictureDetails