import React from 'react'

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
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button" onClick={props.onClose}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}

export default Modal