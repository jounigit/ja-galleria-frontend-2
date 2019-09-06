import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [Pictures, setPictures] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:8000/api/pictures')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setPictures(response.data.data)
      })
  }, [])

  console.log('Render', Pictures.length, 'pictures')
  console.log('Render meta', Pictures.meta)

  

  return (
    <div>

        <h1>Muistiinpanot</h1>

        

    </div>
  );
}

export default App;
