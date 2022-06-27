
import logo2 from '../../../imagenes/banner_reg_ofi.png'
import React from 'react'

import {
  Card, Button, CardTitle,
  Form, FormGroup, Input,
  Container
} from 'reactstrap'
import { Redirect } from 'react-router-dom'
import '../../../css/LoginComponent.css'

function LoginComponent(props) {
  const auth = parseInt(localStorage.getItem('auth'), 10)
  const role = localStorage.getItem('role')

  if (auth && (role === '2' || role === '3')) {
    return <Redirect to='/admin/dashboard/report'/>
  } else if (auth && (role === '0' || role === '1')) {
    return <Redirect to='/'/>
  } else {
    return (
       
        <Container className="container_login">
          <Card body id="tarjeta_login">
           
            <div id="img_login">
              <img src={logo2} className="Login-logo" alt="logo" />
            </div>
            <div>

              <div className= "Login-title">
              <CardTitle>
                <h3> UrbazApp </h3>
                {/* <img src={logo2} className="Login-logo" alt="logo" /> */}
              </CardTitle>
              </div>

              <div className= "Login-content">
                <div id="info">
                  <Form>
                    <FormGroup className="has-success">
                      <Input id="username" name="usuario" placeholder="Usuario"/>

                    </FormGroup>

                    <FormGroup className="has-success input_pass">
                    <Input id="password" type="password" name="contrasena" placeholder="Contraseña"/>

                    </FormGroup>
                    <div id="FeedbackLogin" className="feedback"></div>
                    <div id="cont_button">
                      <Button onClick={props.login} id="btn-round">
                        Ingresar
                      </Button>
                    </div>
                  </Form>

                </div>
              </div>

              <div id="registrate">
                <p>¿No tienes una cuenta? <a href="/registro">Regístrate</a></p>
              </div>
            </div>
          </Card>

          </Container>

    )
  }
}

export default LoginComponent
