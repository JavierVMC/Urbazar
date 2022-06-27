import React from 'react'
import NavbarComponent from '../navBar/navbarComponent'
import { Card, CardTitle, CardBody, Modal } from 'reactstrap'
import '../../../css/ContactanosComponent.css'
import 'react-datetime/css/react-datetime.css'
import { Redirect } from 'react-router-dom'
import data from '../../../enviroment'
function ContactanosComponent() {
  const [liveDemo, setLiveDemo] = React.useState(false)
  const auth = parseInt(localStorage.getItem('auth'), 10)
  const role = localStorage.getItem('role')

  if (auth && (role === '0' || role === '1')) {
    return (
            <>
                <NavbarComponent/>
                <div id="header">
                    ¡En UrbazApp nos importan tus comentarios!
                </div>
                <div className="registro">
                    <Card id="contact_form">
                        <CardTitle id="titulo">Contáctanos</CardTitle>
                        <CardBody>
                        <form action={`http://${data.number}/api/contactanos`} method="post" >
                            <div className="col-md-12 form-double">
                                <div className="col-md-4 nombre">
                                    <label htmlFor="nombres">Nombre</label>
                                    <input type="text" className="form-control" id="nombres" name="nombres" required/>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="urbanizacion">Urbanización</label>
                                    <select name="urbanizacion" className="form-control">
                                        <option>---</option>
                                        <option>Las joyas</option>
                                        <option>Los ceibos</option>
                                        <option>Villa bonita</option>
                                        <option>Ciudad Celeste</option>
                                    </select>

                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="etapa">Etapa</label>
                                    <select name="etapa" className="form-control">
                                        <option>---</option>
                                        <option>Primera</option>
                                        <option>Segunda</option>
                                        <option>Tercera</option>
                                        <option>Cuarta</option>
                                    </select>

                                    </div>

                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                                <small id="emailHelp" className="form-text text-muted">Asegurate de ingresar un email válido al que podamos contactarte.</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="asunto">Asunto</label>
                                <input type="text" name="asunto" className="form-control" id="asunto"/>
                            </div>

                            <div id="message" className="form-group">
                                <label htmlFor="mensaje">Mensaje</label>
                                <textarea type="text" className="form-control" name="mensaje" id="mensaje" placeholder="Dejanos tu mensaje..."/>
                            </div>
                            <div id="send_button">
                                <button type="submit" onClick={() => setLiveDemo(true)} className="btn">Enviar</button>
                            </div>
                            </form>
                        </CardBody>
                    </Card>
                </div>

                <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
                                    <div className="modal-header">
                                    <h5 className="modal-title" id="ConfirmationModel">
                                        Correo enviado
                                    </h5>
                                    <button
                                        aria-label="Close"
                                        className="close"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={() => setLiveDemo(false)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                    </div>
                                    <div className="modal-body">
                                    <p>El mensaje ha sido enviado de forma exitosa. Te contactaremos lo más pronto posible.
                                    </p>
                                    </div>

                                </Modal>

        </>
    )
  } else if (auth && (role === '2' || role === '3')) {
    return <Redirect to='/admin/dashboard/report'/>
  } else return <Redirect to='/login'/>
}

export default ContactanosComponent
