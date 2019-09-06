import React from 'react'

const Picture = ({picture}) => {
    return (
        <div className='picture'>
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

export default Picture