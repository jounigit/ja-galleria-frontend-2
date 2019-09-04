import React, {useState, useEffect} from 'react'
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
        setPictures(response.data)
      })
  }, [])

  console.log('Render', Pictures.length, 'products')

  

  return (
    <div>

        <h1>Muistiinpanot</h1>

        

    </div>
  );
}

export default App;
