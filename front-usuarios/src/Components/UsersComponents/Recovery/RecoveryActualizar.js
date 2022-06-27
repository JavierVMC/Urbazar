/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { FormGroup } from 'reactstrap'
import NavBarLanding from '../../LandingPage/components/navBarLanding/NavBarLanding'
import { useHistory } from 'react-router-dom'
import validator from 'validator'
import './RecoveryActualizar.css'
import styled from 'styled-components'

const main = styled.main`

`
const BarraNavegacionCont = styled.div`
    background-color: #02023D;
    color: #02023D;
    max-height: 50px;
`
const ContenedorFormulario = styled.div`
    padding-top: 15rem;
`
const ContenedorTitulo = styled.div`
    padding-bottom: 10px;
    justify-content: center;
`
const Titulo = styled.h3`
    color: #02023D;
    font-size: 25px;
    font-weight: bold;
    justify-content: center;
`
const ContenedorDescripcion = styled.div`
    padding-bottom: 10px;
    color: #b8b8b8;
`
const Descripcion = styled.h6`
    
`
const Formulario = styled(FormGroup)`
    
`

const InputPassword = styled.input`
    background-color: #fff;
    color: #000;
    border: 2px solid #02023D;

    
`
const EmailErrorSpan = styled.p`
    fontWeight: 'bold';
    color: 'red';
    margin: 0.5em;
`
const ContenedorBoton = styled.div`
    display: flex;
    justify-content: center;
`
const BotonERecuperar = styled.button`
    background: #f4733e;
    border: 4px;
    :hover {
    background: ${(props) => props.theme.colors.darkOrange};
    color: ${(props) => props.theme.colors.white};
    }
`
const InputGroup = styled.div`
    
`
function RecoveryCorreoEnviado() {
  const history = useHistory()
  const [viewPassword1, setViewPassword1] = React.useState(false)
  const [viewPassword2, setViewPassword2] = React.useState(false)

  const changeView1 = () => {
    setViewPassword1(!viewPassword1)
  }
  const changeView2 = () => {
    setViewPassword2(!viewPassword2)
  }

  const [errorMessage, setErrorMessage] = useState('')
  // const [errorMessage2, setErrorMessage2] = useState('')

  // let password1 = ''
  const validate = (value) => {
    // password1 = value
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
      })
    ) {
      setErrorMessage('Proteccion: Fuerte')
    } else {
      setErrorMessage('Proteccion: Debil')
    }
  }

  // function equalPassword(e) {
  //   const confirmacion = e.target.value
  //   if (!(confirmacion == password1)) {
  //     setErrorMessage2('Las contraseñas ingresadas no son iguales')
  //   } else {
  //     setErrorMessage2('Contraseñas iguales!')
  //   }
  // }

  function actualizado() {
    history.push('/recovery-updated-success')
  }

  return (
    <>
    <header>
      <BarraNavegacionCont id="nav-bar">
        <NavBarLanding></NavBarLanding>
      </BarraNavegacionCont>
    </header>

    <main>

      <ContenedorFormulario className="container">
        <div className="row">
        <div className="col-lg-6 col-md-8 mx-auto">
        <ContenedorTitulo className='text-center'>
          <Titulo>RECUPERACION DE CONTRASEÑA</Titulo>
        </ContenedorTitulo>
        <ContenedorDescripcion className='text-center'>
          <Descripcion >Ingrese su nueva contraseña y confirmela</Descripcion >
        </ContenedorDescripcion>
        <Formulario>
          <div className='row d-flex justify-content-center'>
          <div className='col-9 col-md-8 col-lg-7'>
          <InputGroup className="input-group-pass row m-2">
            {viewPassword1
              ? (
              <InputPassword
                onChange={(e) => validate(e.target.value)}
                id="password"
                type="text"
                name="contrasena"
                placeholder="Contraseña"
                className='form-control col-10'
              />
                )
              : (
              <InputPassword
                onChange={(e) => validate(e.target.value)}
                id="password"
                type="password"
                name="contrasena"
                placeholder="Contraseña"
                className='form-control col-10'
              />
                )}
            <div className="btn_eye col-2" onClick={changeView1}>
              {viewPassword1
                ? (
                <VisibilityIcon className='text-danger' />
                  )
                : (
                <VisibilityOffIcon />
                  )}
            </div>
            <div>
            <EmailErrorSpan className='text-center text-danger font-weight-bold'>
              {errorMessage}
            </EmailErrorSpan>
            </div>
            </InputGroup>
            <InputGroup className="input-group-pass row m-2">
            {viewPassword2
              ? (
              <InputPassword
                onChange={(e) => validate(e.target.value)}
                id="password"
                type="text"
                name="contrasena"
                placeholder="Confirme su contraseña"
                className='form-control col-10'
              />
                )
              : (
              <InputPassword
                // onChange={equalPassword}
                id="password"
                type="password"
                name="contrasena"
                placeholder="Confirme su contraseña"
                className='form-control col-10'
              />
                )}
            <div className="btn_eye col-2" onClick={changeView2}>
              {viewPassword2
                ? (
                <VisibilityIcon className='text-danger'/>
                  )
                : (
                <VisibilityOffIcon />
                  )}
            </div>
            {/* <div>
            <EmailErrorSpan className='text-center text-danger font-weight-bold'>
              {errorMessage2}
            </EmailErrorSpan>
            </div> */}
          </InputGroup>

          </div>
          </div>
        </Formulario>

        <ContenedorBoton>

            <BotonERecuperar className="btn font-weight-bold col-5" onClick={actualizado}>
              Actualizar
            </BotonERecuperar>

        </ContenedorBoton>
        </div>
        </div>
      </ContenedorFormulario>
    </main>
    </>
  )
}

export default RecoveryCorreoEnviado
