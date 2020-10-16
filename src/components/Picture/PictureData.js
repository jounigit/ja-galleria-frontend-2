import React, { Fragment, useContext }  from 'react'
import { useParams } from 'react-router-dom'
import { PictureContext } from '../../contexts/PictureContext'
import PictureDetails from './PictureDetails'
import PictureList from './PictureList'

const PictureData = () => {
  const { pictures } = useContext(PictureContext)
  let { id } = useParams()
  console.log('Picdata ---', pictures)
  let picturesData = pictures.data && pictures.data

  return (
    <Fragment>
      {pictures.loading && <div className="loader">Loading ...</div>}

      { !id && pictures.data && <PictureList pictures= { picturesData } /> }
      { id &&  pictures.data && <PictureDetails picture={ picturesData.find((item) => item.id === parseInt(id)) } /> }
    </Fragment>
  )

}

export default PictureData