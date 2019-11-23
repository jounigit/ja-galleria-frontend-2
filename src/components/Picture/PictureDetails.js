import React from 'react'

const PictureDetails = ({ picture }) => {

  // console.log('PICTURE -', picture)

  return (
    <div className='picture' data-cy='picture'>
      <img src={picture.thumb} className="App-logo" alt={picture.thumb} />
      <h2>
        {picture.title}
      </h2>
      <p>
        {picture.content}
      </p>
    </div>
  )
}

export default PictureDetails