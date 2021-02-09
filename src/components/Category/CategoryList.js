import React, { useContext } from 'react'
import { colors, shuffleArray } from '../../helpers'
import { CategoryContext } from '../../contexts/CategoryContext'
import CategoryItemHomePage from './CategoryItemHomePage'

const CategoryList = ({ amount }) => {
  const { categories: { data: Categories } } = useContext(CategoryContext)

  if (Categories === undefined) { return <div className='Item-center'>Loading...</div> }
  /** constants */
  const isArr = Array.isArray(Categories)
  const colorArr = shuffleArray(colors.redish)
  console.log(isArr, amount)

  /********** items wanted for show ********************************/
  const catsToShow = ( isArr && amount ) ? Categories.slice(0, amount) : Categories

  /*********** map data to girds *************************************/
  const mappedCategories = Categories && catsToShow.map((category, i) =>
    <div key={i} className={ colorArr[i]}>
      <CategoryItemHomePage key={i} category={category} cssClass={ colorArr[i] }  />
    </div>
  )

  /***********************************************************************/
  return (
    <div className='CategoryList Grid2'>

      { mappedCategories }

    </div>
  )
}

export default CategoryList


{/* <Header as='h2' dividing content='Kategoriat' /> */}

{/* Tablet, mobile */}
{/* <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
        <Grid columns={2}>
          { mappedCategories }
        </Grid>
      </Responsive> */}

{/* Computer */}
{/* <Responsive minWidth={Responsive.onlyComputer.minWidth}> */}

{/* { mappedCategories } */}

{/* <Grid>
          {
            <Grid.Row columns={ computerCols } style={ columnStyle }>
              { mappedCategories }
            </Grid.Row>

          }
        </Grid> */}

{/* </Responsive> */}