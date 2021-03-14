import React from 'react'
// import Editor from '../../Editor/Editor'

const Home = () => {

  return (
    <div>
      <h2>Galleria-portfolio sovelluksen hallintasivu</h2>

      <h4>Hallintasivulla näät vain omat päivityksesi.</h4>
      <h4>Pictures-sivulta (kuva-arkisto) voit hallinnoida kuvia.</h4>
      <h4>Albums-sivulta voit hallinnoida albumeja/projekteja,
        lisätä tekstiä ja hakea kuvia kuva-arkistosta.</h4>
      <h5>
        Categories-sivulla voit koota albumeita/projekteja sopivien teemojen alle.<br />
        Kategoriat näkyvät etusivulla galleria-linkissä ja
        albumit on koottu katgorioiden alle.
      </h5>
      {/* <Editor /> */}
    </div>
  )
}

export default Home