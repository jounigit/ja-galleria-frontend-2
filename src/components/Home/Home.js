import React from 'react'
import { AlbumContext } from '../../contexts/AlbumContext'
import AlbumListHome from '../Album/AlbumListHome'
import CategoryList from '../Category/CategoryList'

const Home = (props) => {
  const { albums } = React.useContext(AlbumContext)
  console.log('A test: ', albums)

  console.log(props.location)
  // console.log(props.match)
  // console.log(props.history)
  return (
    <div>

      <CategoryList amount='2' />
      <AlbumListHome amount='3' />

    </div>
  )
}

export default Home