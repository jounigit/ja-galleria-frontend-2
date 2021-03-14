import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AlbumContext } from '../../contexts/AlbumContext'
import { Container, Divider, Header, Segment } from 'semantic-ui-react'
import { PictureContext } from '../../contexts/PictureContext'
import SimpleReactLightbox from 'simple-react-lightbox'
import LightboxWithCustomCaptions from '../Lightbox/LightboxWithCustomCaptions'
import Breadcrumbs from '../Shared/Breadcrumbs'
import LightboxA from '../Lightbox/LightboxA'

const AlbumDetails = () => {
  const { albums: { data: Albums, loading } } = useContext(AlbumContext)
  const { pictures: { data: Pictures } } = useContext(PictureContext)
  let { slug } = useParams()

  // :::::::::: find album :::::::::::::::::::: //
  const album = Albums && Albums.find((item) => item.slug === slug)

  if (loading && !album) { return <div>Loading...</div> }

  const { title, content, user, pictures: PicIds } = album

  // :::::::::: find pictures ::::::::::::::::: //
  let albumPictures = null

  if (Pictures && Array.isArray(PicIds) && PicIds.length > 0) {
    albumPictures =
    Pictures.map(p => PicIds.includes(p.id) ? p : null).filter(p => p !== null)
  }

  const lightbox1 = albumPictures &&
  <SimpleReactLightbox>
    {<LightboxA pictures={albumPictures} />}
  </SimpleReactLightbox>

  const lightbox2 = albumPictures &&
  <SimpleReactLightbox>
    {<LightboxWithCustomCaptions pictures={albumPictures} />}
  </SimpleReactLightbox>

  console.log('IDS:', PicIds, ' APICS: ', albumPictures, lightbox2)
  // :::::::::: Details to columns ::::::::::::::::: //
  const headTitle =
    <Header as='h4'>
      {title}
      <Header.Subheader>
        Author - {user.username}
      </Header.Subheader>
    </Header>

  const htmlContent = <div dangerouslySetInnerHTML={{ __html: content }}></div>
  // const contentNoHtml = content ? content.replace(/(<([^>]+)>)/gi, '') : ''

  // :::::::::::::: Contents to columns ::::::::::::::::::::::::::::://
  // ::::::::: Grids, not semantic :::::::::::::::: //
  const colTest2 =
  <div className='Grid-with-gap'>
    <div className='box'>
      {headTitle}
      {htmlContent}
    </div>
    <div className='box'>
      { albumPictures && lightbox1}
      { !albumPictures && <h1>No pictures yet!</h1> }
    </div>
  </div>

  // :::::::::::::::::::::::::::::::::::: //

  return (
    <Container style={{ marginBottom: 50 }}>
      <Segment basic>
        <Breadcrumbs path='/albums' linkName='Albums' active={title} />
      </Segment>

      <div className='album' data-cy='album'>

        <Divider horizontal>{title}</Divider>

        {colTest2}

      </div>
    </Container>

  )
}

export default AlbumDetails

// const oneColumn =
// <Grid>
//   <Grid.Row>
//     <Grid.Column>
//       <Header as='h4'>
//         {title}
//         <Header.Subheader>
//           Author - {user.username}
//         </Header.Subheader>
//       </Header>

//       {htmlContent}

//     </Grid.Column>
//   </Grid.Row>

//   <Grid.Row>
//     <Grid columns={2}>
//       {lightbox1}
//     </Grid>
//   </Grid.Row>
// </Grid>

// const twoColumns =
// <Grid.Column>
//   {headTitle}
//   <Grid>
//     <Grid.Column width={4}>
//       <div dangerouslySetInnerHTML={{ __html: album.content }}></div>
//     </Grid.Column>
//     <Grid.Column width={12}>
//       {lightbox2}
//     </Grid.Column>
//   </Grid>
// </Grid.Column>


// const colTest =
// <Grid>
//   <Grid.Row columns='2'>
//     <Grid.Column>
//       {headTitle}
//       {htmlContent}
//     </Grid.Column>
//     <Grid.Column>
//       {lightbox1}
//     </Grid.Column>
//   </Grid.Row>
// </Grid>
{/* <p>***********************************************</p>
{colTest}
<p>***********************************************</p>
{oneColumn}

<p>***********************************************</p>
{content && contentNoHtml.length > 3 && twoColumns} */}
