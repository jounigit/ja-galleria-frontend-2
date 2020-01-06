import React from 'react'
import { Modal, Header, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const MyModal = ({ ...props }) => {

  const closeM = () => props.setModalOpen(false)
  return (
    <Modal
      open={props.modalOpen}
      size='small'
      closeOnEscape={true}
    >
      <Button floated='right'
        // negative
        type='button'
        icon='remove'
        onClick={props.handleClose}
      />
      <Header content={props.header} />
      <Modal.Content>
        <props.component
          setModalOpen={closeM}
          id={props.id}
          title={props.title}
          content={props.content}
          author={props.author}
          thumb={ props.thumb }
          category_id={props.category_id}
          albumPics={ props.albumPics }
        />
      </Modal.Content>
    </Modal>
  )

}

MyModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default MyModal