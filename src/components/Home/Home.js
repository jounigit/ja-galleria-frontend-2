import React from 'react'
import { AlbumContext } from '../../contexts/AlbumContext'
import AlbumListHome from '../Album/AlbumListHome'
import CategoryListHome from '../Category/CategoryListHome'

const Home = (props) => {
  const { albums } = React.useContext(AlbumContext)
  console.log('A test: ', albums)

  console.log(props.location)
  return (
    <div>

      <CategoryListHome amount='2' />
      <AlbumListHome amount='3' />

    </div>
  )
}

export default Home