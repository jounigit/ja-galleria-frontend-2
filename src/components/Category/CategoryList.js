import React from 'react'
import CategoryDetails from './CategoryDetails'
import { Header, Grid } from 'semantic-ui-react'

const CategoryList = ({ categories }) => {

  return (
    <div className='CategoryList'>

      <Header as='h2' dividing content='Kategoriat' />

      <Grid doubling columns={3}>
        {
          categories.map(category =>
            <Grid.Column  key={category.id}>
              <CategoryDetails key={category.id} category={category} />
            </Grid.Column>
          )
        }
      </Grid>
    </div>
  )
}

export default CategoryList