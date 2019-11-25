import React, { useContext } from 'react'
import { CategoryContext } from '../../contexts/CategoryContext'
import { CategoryDetails } from '../Category'
import { Grid } from 'semantic-ui-react'

const Home = () => {
  const { categories } = useContext(CategoryContext)
  const categoriesData = categories.data && categories.data.data

  return (
    <div>
      <h1>Kuvagalleria</h1>
      <Grid doubling columns={3}>
        { categoriesData &&
          categoriesData.map(category =>
            <Grid.Column  key={category.id}>
              <CategoryDetails key={category.id} category={category} />
            </Grid.Column>
          )
        }
      </Grid>
    </div>
  )
}

export default Home