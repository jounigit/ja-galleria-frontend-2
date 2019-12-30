import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import SavePictureData from './SavePictureData'

const UpdatePicture = ({ ...props }) => {
  const [dataSaved, setDataSaved] = useState(false)

  // :::::::::::::::::::::::::::::::::::: //
  if (dataSaved) {
    setTimeout(() => props.setModalOpen(), 3000)
  }

  return (
    <Container>
      <SavePictureData
        id={ props.id }
        title={ props.title }
        content={ props.content || '' }
        thumb={ props.thumb }
        setDataSaved={setDataSaved}
      />
    </Container>

  )
}

export default UpdatePicture