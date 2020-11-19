import React, { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { Button, Header, Modal } from 'semantic-ui-react'
import { ModalContext } from '../../../contexts/modalContext'
import { CLOSE_MODAL, OPEN_MODAL } from '../../../reducers/actionTypes'

const ModalPortal = ({ children, btnContent, btnIcon, dataCy, header }) => {
  const [show, setShow] = useState(false)
  const { modal, modalDispatch } = useContext(ModalContext)

  // console.log('Modal portal state: show-', show, ' modal: ', modal.open)
  // console.log('Modal portal rerender', modal)

  const openModal = () => {
    setShow(true)
    modalDispatch({ type: OPEN_MODAL, header })
  }

  const closeModal = () => {
    setShow(false)
    modalDispatch({ type: CLOSE_MODAL })
  }

  const content = show &&
  modal.open &&
  (
    <Modal
      open={show}
      closeOnEscape={true}
    >
      <Button floated='right'
        type='button'
        icon='remove'
        onClick={closeModal}
      />
      <Header content={header} />
      <Modal.Content>
        { children }
      </Modal.Content>
    </Modal>
  )

  return (
    <>
      <Button
        size='tiny'
        data-cy={dataCy}
        positive
        content={btnContent}
        icon={btnIcon}
        onClick={openModal}
      />
      {createPortal(content, document.body)}
    </>
  )
}

export default ModalPortal
