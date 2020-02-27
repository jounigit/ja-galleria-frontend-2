import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const PictureDetails = ({ picture }) => {

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

      </Card>
    </div>
  )
}

export default PictureDetails