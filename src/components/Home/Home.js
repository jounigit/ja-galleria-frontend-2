import React from 'react'
import AlbumListHome from '../Album/AlbumListHome'
import CategoryListHome from '../Category/CategoryListHome'
import Info from './Info'

const Home = () => {
  // const { albums } = React.useContext(AlbumContext)
  // console.log('A test: ', albums)

  // console.log(props.location)
  return (
    <div>

      <Info />
      <CategoryListHome amount='2' />
      <AlbumListHome amount='3' />

    </div>
  )
}

export default Home