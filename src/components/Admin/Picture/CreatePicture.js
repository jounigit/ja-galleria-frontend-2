import React, { useState } from 'react'
import { Container, Header } from 'semantic-ui-react'
import UploadPicture from './UploadPicture'
import SavePictureData from './SavePictureData'

const CreatePicture = ({ ...props }) => {
  const [uploaded, setUploaded] = useState(null)
  const [dataSaved, setDataSaved] = useState(false)
  const [message, setMessage] = useState(null)

  // :::::::::::::::::::::::::::::::::::: //

  console.log('CREATE uploaded: ', uploaded)

  // :::::::::::::::::::::::::::::::::::: //
  if (dataSaved) {
    setTimeout(() => props.setModalOpen(), 2000)
  }

  if (message) {
    setTimeout(() => setMessage(), 2000)
  }

  return ( // <Modal as={Form} onSubmit={e => handleSubmit(e)} open={true} size="tiny">
    <Container>
      {
        !uploaded &&
        <UploadPicture
          uploaded={uploaded}
          setUploaded={setUploaded}
          setMessage={setMessage}
        />
      }
      {
        message &&
        <Header as='h4' color='green'>{message}</Header>
      }
      {
        uploaded && !message &&
        <SavePictureData
          id={ uploaded.id }
          title={ uploaded.title }
          thumb={uploaded.thumb}
          content={ uploaded.content || '' }
          setDataSaved={setDataSaved}
        />
      }

    </Container>

  )
}

export default CreatePicture