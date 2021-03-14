import React, { Fragment } from 'react'
import '../../helpers/colors.css'
import defaultBg from '../../assets/default_bg.jpg'
import { Responsive } from 'semantic-ui-react'

const Info = () => {

  // if (album === undefined) { return <div className='Item-center'>Loading...</div> }

  /*********************************/


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

  const textWrapper = {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    opacity: 1,
    paddingTop: '4em',
    paddingBottom: '3em',
    fontSize: '.8em'
  }

  const textWrapperMobile = {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    opacity: 1,
    padding: '3em 2em 2em'
  }

  const infoText =
  <>
    <h1>GALLERIA - PORTFOLIO</h1>
    <h5 style={{ marginBottom: '-0.4em' }}>
            Sovellusta voi käyttää portfoliona erilaisten projektien ja teosten esittelyyn.<br />
            Mahdollisia käyttäjiä ovat eri alojen suunnittelijat, taitelijat jne.
    </h5>
    <h5 style={{ marginBottom: '-0.4em' }}>
            Projektit esitellään albumeissa, jotka sisältävät teksti- ja kuvaosion.<br />
            Albumit kootaan teemoittain kategorioiden alle.<br />
            Kuvat valitaan kuva-arkistosta.
    </h5>
    <h4>
            Voit testata näillä tunnuksilla tai tehdä omat:<br />
            Email: demo@mail.com<br />
            Password: demopass
    </h4>
  </>

  console.log('Info module: ', module)
  /**********************************************************/
  return (
    <Fragment>

      <div style={ module }>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <span style={ textWrapperMobile }>
            { infoText }
          </span>
        </Responsive>

        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <span style={ textWrapper }>
            { infoText }
          </span>
        </Responsive>

      </div>

    </Fragment>

  )
}

export default Info
