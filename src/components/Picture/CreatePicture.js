import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import UploadPicture from './UploadPicture'
import SavePictureData from './SavePictureData'

const CreatePicture = ({ ...props }) => {
  const [uploaded, setUploaded] = useState(null)
  const [dataSaved, setDataSaved] = useState(false)

  // :::::::::::::::::::::::::::::::::::: //

  console.log('CREATE ---', uploaded)

  // :::::::::::::::::::::::::::::::::::: //
  if (dataSaved) {
    setTimeout(() => props.setModalOpen(), 3000)
  }

  return ( // <Modal as={Form} onSubmit={e => handleSubmit(e)} open={true} size="tiny">
    <Container>
      {
        <UploadPicture
          uploaded={uploaded}
          setUploaded={setUploaded}
        />
      }
      {
        uploaded &&
        <SavePictureData
          id={ uploaded.id }
          title={ uploaded.title }
          content={ uploaded.content || '' }
          setDataSaved={setDataSaved}
        />
      }

    </Container>

  )
}

export default CreatePicture