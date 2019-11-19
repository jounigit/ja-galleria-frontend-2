import React, { Fragment }  from 'react'
import useFetch from '../../utils/useFetch'
import { useParams } from 'react-router-dom'
import Picture from './Picture'
const baseUrl = 'http://localhost:8000/api'

const PictureData = () => {
  let { id } = useParams()

  const picture = useFetch(
    `${baseUrl}/pictures/${id}`
  )

  if(picture.loading) {
    return <div className='loader'>Loading ...</div>
  }

  console.log('PICTUREDATA -', picture)

  return (
    <Fragment>
      {picture.data &&  <Picture picture={picture.data.data.data} />}
    </Fragment>
  )

}

export default PictureData