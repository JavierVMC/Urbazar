import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { useHistory } from 'react-router-dom'
import NavBarLanding from '../../LandingPage/components/navBarLanding/NavBarLanding'

import validator from 'validator'
import { FormGroup } from 'reactstrap'

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

const InputEmail = styled.input`
    background-color: #fff;
    color: #000;
    border: 2px solid #02023D;
    max-width: 
    
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

function Recovery() {
  const history = useHistory()

  // function goToCorreoEnviado() {
  //   history.push('/recovery-email-sent')
  // }

  const parametros = {
    correo: ''
  }

  // const navigate = useNavigate()

  const pasarCorreo = () => {
    history.push({
      pathname: '/recovery-email-sent',
      state: { correo: input }
    })
  }

  const [input, setInput] = useState('')

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    const email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Ingrese un correo valido')
    }
  }

  function sendEmail(e) {
    e.preventDefault()
    parametros.correo = input

    emailjs
      .send(
        'service_ww5512d',
        'template_ja4eqf7',
        parametros,
        'user_KDuxs3qSHhiZiepVEuClQ'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log(input)
          // alert('El correo con la instrucciones ha sido enviado', result.text)
        },
        (error) => {
          console.log(error.text)
          // alert('Error al enviar el correo', error.text)
        }
      )
  }

  function clickBoton(e) {
    sendEmail(e)
    pasarCorreo()
  }

  return (
    <>
      <header>
      <BarraNavegacionCont>
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
          <Descripcion>Ingrese su correo electrónico para recuperar su contraseña</Descripcion>
        </ContenedorDescripcion>
        <Formulario>
          <div className='row d-flex justify-content-center'>
          <div className='col-9 col-md-8 col-lg-7'>
          <InputEmail
            value={input}
            onInput={(e) => setInput(e.target.value)}
            onChange={(e) => validateEmail(e)}
            type="email"
            id="email"
            name="email"
            autoComplete='None'
            placeholder="Correo"
            className="form-control"
          />
          </div>
          </div>
          <EmailErrorSpan className='text-center text-danger font-weight-bold'> {emailError} </EmailErrorSpan>
          <ContenedorBoton>
          <BotonERecuperar className="btn font-weight-bold col-6" onClick={clickBoton}>
            Recuperar
          </BotonERecuperar>
          </ContenedorBoton>
        </Formulario>
        </div>
        </div>
      </ContenedorFormulario>
    </main>
  </>
  )
}

export default Recovery
