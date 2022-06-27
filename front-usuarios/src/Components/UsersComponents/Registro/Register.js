/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */

import React from 'react'
import '../../../css/register.css'
import NavbarComponent from './navBarRegistro'
import StepComponent from './StepComponent'
import { Redirect, Link } from 'react-router-dom'
import {
  Card, CardTitle,
  Container
} from 'reactstrap'
import logo2 from '../../../imagenes/logoUrbazapp.PNG'

import styled from 'styled-components'

const Enlace = styled(Link)`
    color:#02023D;
    padding-left:1px;
`

function Register(props) {
  const [checkTarjeta, setCheckTarjeta] = React.useState(false)

  const auth = parseInt(localStorage.getItem('auth'), 10)
  const role = localStorage.getItem('role')

  if (auth && (role == '2' || role == '3')) {
    return <Redirect to="/admin/dashboard/report" />
  } else if (auth && (role == '0' || role == '1')) {
    return <Redirect to="/" />
  } else {
    return (
            <div id="cont_general">

                <div id="cont_secForm">
                    <div id="seccionForm">
                        <div className="img_urbi">
                        <div className='fotoLogoL img-fluid'>
                             <img src={logo2} />
                        </div>
                        <div className='cajaLogoR'>
                            <span className="Urbaz-partR">Urbaz</span><span className="app-partR">App</span>
                        </div>
                        </div>
                        <div className="panelDatos">
                            <Container className="container_reg">
                                <Card body id="tarjeta" className="trj">
                                    <div id="logo_resp">
                                        <img src={logo2} />
                                    </div>
                                    <CardTitle>
                                    <h4> Registrar</h4>
                                      <div id="feedbackvacios"></div>
                                    </CardTitle>
                                    <div id="contenido_registro">
                                        <form>
                                        <StepComponent
                                            signUp={props.signUp}
                                            usernames = {props.usernames}
                                            validarCedula={props.validarCedula}
                                            validarTelefono={props.validarTelefono}
                                            validarCorreo = {props.validarCorreo}
                                            validarVacios = {props.validarvacios}
                                            handleModal={props.handleModal}/>
                                        </form>
                                    </div>
                                    <p>¿Ya tienes una cuenta?<Enlace to="/login"> Iniciar Sesión</Enlace></p>
                                </Card>
                            </Container>

                        </div>
                    </div>
                </div>
            </div>

    )
  }
}

export default Register
