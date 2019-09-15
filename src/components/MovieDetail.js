import React from 'react'
import Modal from './Modal'

function MovieDetail(props) {
  return (
    <Modal
      isActive={props.isActive}
      title={props.title}
      onClose={props.onClose}>
      {props.children}
    </Modal>
  )
}

export default MovieDetail