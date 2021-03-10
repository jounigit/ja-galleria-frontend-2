import React, { Fragment } from 'react'
import '../../helpers/colors.css'
import defaultBg from '../../assets/default_bg.jpg'

const Info = () => {

  // if (album === undefined) { return <div className='Item-center'>Loading...</div> }

  /****** get first album picture id, filter picture form pictures array ***/

  const textWrapper = {
    position: 'relative',
    width: '100%',
    height: '265px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    opacity: 1,
    paddingTop: '4.75em',
    paddingBottom: '1em'
  }

  /**** background image for div */
  const module = {
    // margin: '10px',
    width: '100%',
    minHeight: '25em',
    backgroundImage:
    `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${ defaultBg })`,
    backgroundSize: 'cover',
    // resize: 'both'
  }


  console.log('Info module: ', module)
  /**********************************************************/
  return (
    <Fragment>

      <div style={ module }>
        <span style={ textWrapper }>
          <h1>GALLERIA - PORTFOLIO</h1>
          <h3>
            Sovellusta voi käyttää portfoliona erilaisten projektien ja teosten esittelyyn.<br />
            Mahdollisia käyttäjiä ovat eri alojen suunnittelijat, taitelijat jne.
          </h3>
          <h4>
            Projektit esitellään albumeissa, jotka sisältävät teksti- ja kuvaosion.<br />
            Albumit kootaan teemoittain kategorioiden alle.<br />
            Kuvat valitaan kuva-arkistosta.
          </h4>
          <h4>
            Voit testata näillä tunnuksilla tai tehdä omat:<br />
            Email: demo@mail.com<br />
            Password: demopass
          </h4>
        </span>
      </div>

    </Fragment>

  )
}

export default Info
