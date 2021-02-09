import React, { useContext } from 'react'
import { CategoryContext } from '../../contexts/CategoryContext'
// import { CategoryDetails } from '../Category'
import { Grid } from 'semantic-ui-react'
import {
  colors,
  shuffleArray
} from '../../helpers'
import AlbumList from '../Album/AlbumList'
import CategoryItemHomePage from '../Category/CategoryItemHomePage'

const Home = () => {
  const { categories } = useContext(CategoryContext)
  const categoriesData = categories.data && categories.data

  const colorRedish = shuffleArray(colors.redish)
  // const colorGreenish = shuffleArray(colors.greenish)

  const columnsDivider = ( cols=1, colorArr ) =>
    <Grid columns={cols} padded>
      {/* <Grid.Row> */}
      {
        categoriesData.map((category, i) =>
          <Grid.Column  key={category.id}
            className={ colorArr[i] }
          >
            <CategoryItemHomePage category={category} />
          </Grid.Column>
        )
      }
      {/* </Grid.Row> */}
    </Grid>

  console.log('PITUUS: ', categoriesData)

  return (
    <div>
      <h1>Kuvagalleria</h1>

      { categoriesData && columnsDivider(categoriesData.length, colorRedish) }
      {/* { categoriesData && columnsDivider(1) } */}
      <AlbumList amount='3' />

    </div>
  )
}

export default Home