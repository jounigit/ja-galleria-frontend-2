import React, { useContext } from 'react'
import { CategoryContext } from '../../contexts/CategoryContext'
import CategoryListItem from './CategoryListItem'

const CategoryList = () => {
  const { categories: { data: Categories } } = useContext(CategoryContext)

  if (Categories === undefined) { return <div className='Item-center'>Loading...</div> }
  /** constants */


  /*********** map data to girds *************************************/
  const mappedCategories = Categories.map((category, i) =>
    <div key={i}>
      <CategoryListItem category={category} cssClass='Light-gray' />
    </div>
  )

  /***********************************************************************/
  return (
    <div className='CategoryList' style={{ margin: '2em' }}>

      <div className='Item-center'><h1>CATEGORIES</h1></div>

      <div className='Grid2'>

        { mappedCategories }

      </div>

    </div>
  )
}

export default CategoryList