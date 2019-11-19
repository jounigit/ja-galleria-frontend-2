import React from 'react'
import useFetch from '../../utils/useFetch'
import Picture from './Picture'

const baseUrl = 'http://localhost:8000/api'

const PictureList = () => {
  const pictures = useFetch(
    `${baseUrl}/pictures`
  )

  return (
    <div className='PictureList'>
      <h2>Kuvat</h2>
      {pictures.loading && <div className="loader" />}
      {pictures.data &&
        pictures.data.data.data.length > 0 &&
        pictures.data.data.data.map(picture =>
          <Picture key={picture.id} picture={picture} />
        )
      }
    </div>
  )
}

export default PictureList