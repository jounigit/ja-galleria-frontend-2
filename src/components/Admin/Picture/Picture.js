import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Picture = ({ picture }) => {

  // console.log('DETAIL ---', picture)
  return (
    <div data-cy='picture'>
      <Card>
        <Image src={picture.image} wrapped ui={false} />
      </Card>
    </div>
  )
}

export default Picture