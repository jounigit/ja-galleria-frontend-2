import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const BaseSpinning = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader size='medium'>Loading</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

  </div>
)

export default BaseSpinning