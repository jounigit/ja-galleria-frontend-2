import React from 'react'
import { Container } from 'semantic-ui-react'

const PictureListItem = ({ picture }) => {

  console.log('DETAIL ---', picture)
  // const img_src = picture.image
  // const img_url = `https://$picture.image`
  return (
    <div data-cy='pictureListItem'>
      <Container>
        <img src ={ 'https://' + picture.image }  alt='KUVA' />

        {/* <Popup
          content={picture.content}
          header={picture.title}
          trigger={<Image src={picture.image} data-cy='picture' fluid />}
        /> */}

      </Container>

    </div>
  )
}

export default PictureListItem
