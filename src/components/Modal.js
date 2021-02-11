import React from 'react'

function ModalFooter(props) {
  return (
    <footer className="modal-card-foot">
      <button className={`button is-info is-medium`}>
        Buscar
            </button>
      <button
        className={`button is-medium`}>
        Cancelar
            </button>
    </footer>
  )
}

function Modal(props) {
  return (
    <div className={`modal ${props.isActive ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={props.onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.title}</p>
          <button className="delete" aria-label="close" onClick={props.onClose}></button>
        </header>
        <section className="modal-card-body">
          {props.children}
        </section>
        {props.footer ? props.footer : <ModalFooter />}
      </div>
    </div>
  )
}

export default Modal