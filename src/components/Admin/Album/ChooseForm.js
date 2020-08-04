import React, { useState } from 'react'
import { Container, Image, Checkbox } from 'semantic-ui-react'

const ChooseForm = ({ picture_id, thumb, handleSelected }) => {
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    setChecked(!checked)
    handleSelected(picture_id)
  }
  // console.log(checked)
  return (
    <Container>
      <Image size='small' src={thumb} />
      <Checkbox label='choose' onChange={handleCheck} />
      {/* <input type="checkbox"
        onChange={handleCheck}
        defaultChecked={checked}/> */}
    </Container>
  )
}

export default ChooseForm