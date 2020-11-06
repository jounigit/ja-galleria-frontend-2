import React, { useContext, useState } from 'react'
import { Container, Header } from 'semantic-ui-react'
import UploadPicture from './UploadPicture'
import SavePictureData from './SavePictureData'
import { ModalContext } from '../../../contexts/modalContext'
import { CLOSE_MODAL } from '../../../reducers/actionTypes'

const CreatePicture = () => {
  const [uploaded, setUploaded] = useState(null)
  const [dataSaved, setDataSaved] = useState(false)
  const [message, setMessage] = useState(null)
  const { modalDispatch } = useContext(ModalContext)

  // :::::::::::::::::::::::::::::::::::: //

  console.log('CREATE uploaded: ', uploaded)

  // :::::::::::::::::::::::::::::::::::: //
  if (dataSaved) {
    setTimeout(() => modalDispatch({ type: CLOSE_MODAL }), 2000)
  }

  if (message) {
    setTimeout(() => setMessage(), 2000)
  }

  return (
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