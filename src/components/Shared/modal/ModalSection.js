import React, { useState } from 'react'
import MyModal from './MyModal'
import { Button } from 'semantic-ui-react'

const ModalSection = ({ ...props }) => {
  const [modalOpen, setModalOpen] = useState(false)
// console.log('Mod --', props)
  return([
    <Button // Button to click to activate the Modal
      key='button1'
      size='tiny'
      //   primary
      positive
      content={props.btnContent}
      icon={props.btnIcon}
      onClick={
        () => {
          setModalOpen(true)
        }
      }
    />,
    <MyModal // The invisible modal itself
      key='modal1'
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      handleClose={
        () => {
          setModalOpen(false)
        }
      }
      component={ props.compToModal }
      header={props.headerContent}
      id={props.id}
      title={props.title}
      content={props.content}
      thumb={ props.thumb }
      author={props.author}
      category_id={props.category_id}
    />
  ])

}

export default ModalSection