import React from 'react'
import Modal from '../components/Modal'

function MovieDetail(props) {
  return (
    <Modal
      isActive={props.isActive}
      title={props.title}
      onClose={props.onClose}
      footer={
        <footer className="modal-card-foot">
            <button onClick={props.onClose} className="button is-medium">
              Cancelar
            </button>
        </footer>
      }>
      {props.children}
    </Modal>
  )
}

export default MovieDetail