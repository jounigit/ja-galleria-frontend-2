import React from 'react'
import { Image, Container, Popup } from 'semantic-ui-react'

const PictureListItem = ({ picture }) => {

  // console.log('DETAIL ---', picture)
  return (
    <div data-cy='pictureListItem'>
      <Container>

        <Popup
          content={picture.content}
          header={picture.title}
          trigger={<Image src={picture.image} size='medium' fluid />}
        />

      </Container>

    </div>
  )
}

export default PictureListItem

{/* <Image src={picture.image} size='medium' fluid />
      <Header as='h2'>{picture.title}</Header> */}
{/* <Segment> */}
{/* <Image src={picture.image} size='medium' fluid /> */}
{/* <Image src={picture.image} size='medium' centered /> */}
{/* <Header as='h2'>{picture.title}</Header> */}
{/* {picture.content} */}
{/* </Segment> */}

{/* <Card>
          <Image src={picture.thumb} wrapped ui={false} />
          <Card.Content header={picture.title} />
          <Card.Content>
            <Card.Meta>
              <span className='date'>{picture.created_at}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content description={picture.content} />
        </Card> */}