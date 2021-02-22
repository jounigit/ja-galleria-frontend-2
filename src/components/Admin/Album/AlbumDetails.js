import React, { useContext, } from 'react'
import { Picture } from '../Picture'
import { Grid, Header, Segment, Divider, Container } from 'semantic-ui-react'
import ChoosePicture from './ChoosePicture'
import UpdateAlbum from './UpdateAlbum'
import RemoveAlbum from './RemoveAlbum'
import { AuthContext } from '../../../contexts/AuthContext'
import { PictureContext } from '../../../contexts/PictureContext'
import ModalPortal from '../../Shared/modal/modalPortal'
import { CategoryContext } from '../../../contexts/CategoryContext'

const AlbumDetails = ({ album }) => {
  const { categories: { data: CatData } } = useContext(CategoryContext)
  const { pictures: { data: Pictures } } = useContext(PictureContext)
  const { auth } = useContext(AuthContext)

  const { id: AlbumId, title, content, category: CategoryId, user, pictures: PicIds } = album
  console.log('AlbumDetails: ',AlbumId,'', title,' ', content,' - ',CategoryId,' - ', user,' ', PicIds)

  // :::::::::: find category :::::::::::::::::::: //
  let categoryTitle = 'no category yet'
  if ( CategoryId ) {
    const cat = CatData.find(c => c.id === CategoryId)
    console.log('AlbumDetails CAT: ', cat)
    console.log('AlbumDetails CAT id: ', CategoryId)
    categoryTitle = cat && cat.title
  }

  // :::::::::: find pictures ::::::::::::::::: //
  const albumPictures = Pictures && PicIds &&
    Pictures.map(p => PicIds.includes(p.id) ? p : null).filter(p => p !== null)

  // ::::::::::: actions ::::::::::::::::::::::::: //
  const removeAction = <RemoveAlbum
    id={ AlbumId }
    title={title}
    author={user.name}
  />

  const chooseAction =
  <ModalPortal
    btnIcon='file image outline'
    btnContent='choose/delete pictures'
  >
    <ChoosePicture
      header='Choose pictures to album'
      id={ AlbumId }
      albumPics={ album.pictures }
    />
  </ModalPortal>

  const editAction =
  <ModalPortal btnIcon='edit'>
    <UpdateAlbum
      id={ AlbumId }
      title={title}
      content={content}
      categoryId={ CategoryId }
    />
  </ModalPortal>
  // :::::::::::::::: content variables ::::::::::::::::::::::: //

  const albumContentInfo = content ?
    <div dangerouslySetInnerHTML={{ __html: album.content }}></div> :
    <Header as='h5'>No content yet. Edit album content.</Header>

  const showTexContent =
  <>
    <Header as='h5'>
      {title}
      <Header.Subheader>
            Author - {user.username}
      </Header.Subheader>
    </Header>
    <Header as='h5'>Category - { categoryTitle }</Header>
    {albumContentInfo}
  </>

  //********************************************/
  return (

    <div className='album' data-cy='album'>

      <Container>
        <Segment>

          <Grid
            columns={2} relaxed='very' divided>

            {/************* text part ************************/}
            <Grid.Column>

              <Grid>
                <Grid.Column tablet={2} computer={2}>{ editAction }</Grid.Column>
                <Grid.Column tablet={2} computer={2}>{ removeAction }</Grid.Column>
              </Grid>

              <Divider section />
              {
                showTexContent
              }
            </Grid.Column>

            {/************** picture part ******************* */}
            <Grid.Column>
              { auth.user && chooseAction }

              <Divider section />

              <Grid columns={4}>
                {
                  albumPictures.map(picture =>
                    <Grid.Column  key={picture.id}>
                      <Picture key={picture.id} picture={picture} />
                    </Grid.Column>
                  )
                }
              </Grid>
            </Grid.Column>

          </Grid>
        </Segment>
      </Container>

    </div>

  )
}

export default AlbumDetails