import { Button, Modal } from 'reactstrap'
import React from 'react'

function ModalComponent(props) {
  return (
    <Modal isOpen={props.estado} toggle={props.handleModal}>
      <div className="modal-header">
        <h5 className="modal-title" id="ConfirmationModel">
          Registro exitoso
        </h5>
        <button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={props.handleModal}
          href="/login"
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className="modal-body">
        <p>
          La cuenta ha sido registrada con éxito.
          <br />
          Por favor, inicie sesión para acceder a UrbazApp.
        </p>
      </div>
      <div className="modal-footer">
        <Button
          className="btn-link"
          type="button"
          id="btn_confModal"
          href="/login"
        >
          Iniciar sesión
        </Button>
      </div>
    </Modal>
  )
}

export default ModalComponent
