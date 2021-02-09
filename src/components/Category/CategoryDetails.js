import React, { useContext, } from 'react'
import { useParams } from 'react-router'
import { Container, Divider, Header, Segment } from 'semantic-ui-react'
import { AlbumContext } from '../../contexts/AlbumContext'
import { CategoryContext } from '../../contexts/CategoryContext'
import AlbumListItem from '../Album/AlbumListItem'
import Breadcrumbs from '../Shared/Breadcrumbs'

const CategoryDetails = () => {
  const { categories: { data: Categories } } = useContext(CategoryContext)
  const { albums: { data: Albums } } = useContext(AlbumContext)
  let { slug } = useParams()

  // :::::::::: find category :::::::::::::::::::: //
  let category = Categories && Categories.find((item) => item.slug === slug)

  if (category === undefined) { return <div className='Item-center'>Loading...</div> }

  const { title, content, user, albums: Ids } = category

  // :::::::::: find albums :::::::::::::::::::: //
  // const ids = category.albums && category.albums

  const catAlbumsObjs = Albums && Ids &&
  Albums.map(a => Ids.includes(a.id) ? a : null).filter(a => a !== null)

  console.log('CATS Albums: ', catAlbumsObjs)

  /*********** map data to girds *************************************/
  const mappedAlbums = catAlbumsObjs && catAlbumsObjs.map( (album, i) =>
    <div key={i}>
      <AlbumListItem album={album} cssClass='Light-gray' />
    </div>
  )

  console.log('CATS Albums 000: ', mappedAlbums)

  /**************************************************************** */
  return (
    <Container>
      <Segment basic>
        <Breadcrumbs path='/categories' linkName='Categories' active={ title } />
      </Segment>

      <Divider horizontal>{title}</Divider>

      <Header as='h1' data-cy='header'>
        { title.toUpperCase() }
      </Header>

      { content }

      <Header as='h4'> Author - { user.username } </Header>

      <div className='Grid2'>
        { Albums && mappedAlbums }
      </div>

    </Container>
  )
}

export default CategoryDetails

