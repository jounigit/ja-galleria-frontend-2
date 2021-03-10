import React, { useContext } from 'react'
import { colors, shuffleArray } from '../../helpers'
import { CategoryContext } from '../../contexts/CategoryContext'
import CategoryListHomeItem from './CategoryListHomeItem'
import BaseSpinning from '../Shared/loaders/BaseSpinning'

const CategoryListHome = ({ amount }) => {
  const { categories: { data: Categories } } = useContext(CategoryContext)

  if (Categories === undefined) { return <BaseSpinning /> }
  /** constants */
  const isArr = Array.isArray(Categories)
  const colorArr = shuffleArray(colors.redish)
  console.log(isArr, amount)

  /********** items wanted for show ********************************/
  const catsToShow = ( isArr && amount ) ? Categories.slice(0, amount) : Categories

  /*********** map data to girds *************************************/
  const mappedCategories = Categories && catsToShow.map((category, i) =>
    <div key={i} className={ colorArr[i]}>
      <CategoryListHomeItem key={i} category={category} cssClass={ colorArr[i] }  />
    </div>
  )

  /***********************************************************************/
  return (
    <div className='CategoryList Grid2'>

      { mappedCategories }

    </div>
  )
}

export default CategoryListHome
