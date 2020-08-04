import React, { useState } from 'react'
import { Container, Image, Checkbox } from 'semantic-ui-react'

const UnChooseForm = ({ picture_id, thumb, handleDelete }) => {
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    setChecked(!checked)
    handleDelete(picture_id)
  }
  // console.log(checked)
  return (
    <Container>
      <Image size='small' src={thumb} />
      <Checkbox label='delete' onChange={handleCheck} />
    </Container>
  )
}

export default UnChooseForm