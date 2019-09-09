import React, { useState, useEffect } from 'react'
import pictureService from '../../services/pictureService'
import Picture from './Picture'

const PictureList = () => {
  const [Pictures, setPictures] = useState([])

  useEffect(() => {
    pictureService
      .getAll()
      .then(response => {
        setPictures(response.data)
      })
  }, [])

  const showPictures = () => Pictures.map(picture =>
    <Picture key={picture.id} picture={picture} />
  )

  return (
    <div>
      <h2>Kuvat</h2>
      { showPictures() }
    </div>
  )
}

export default PictureList