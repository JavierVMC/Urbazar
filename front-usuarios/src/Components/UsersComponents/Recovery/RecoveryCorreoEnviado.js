import styled from 'styled-components'
import React, { useState, useRef, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import NavBarLanding from '../../LandingPage/components/navBarLanding/NavBarLanding'

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

const ContenedorBoton = styled.div`
    
`
const BotonERecuperar = styled.button`
    background: #f4733e;
    border: 4px;
    :hover {
    background: ${(props) => props.theme.colors.darkOrange};
    color: ${(props) => props.theme.colors.white};
    }
`
const Timer = styled.h6`
    color: #b8b8b8;
`

function CorreoEnviado() {
  const input = 'natroram@espol.edu.ec'

  const parametros = {
    correo: ''
  }
  // const history = useHistory()

  const [disabled, setDisabled] = useState(false)

  const Ref = useRef(null)
  const [timer, setTimer] = useState('00:00:00')

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / 1000 / 60 / 60) % 24)
    return {
      total, hours, minutes, seconds
    }
  }

  const startTimer = (e) => {
    const { total, hours, minutes, seconds } =
                    getTimeRemaining(e)
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':' +
                (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer('00:00:20')

    if (Ref.current) clearInterval(Ref.current)
    const id = setInterval(() => {
      startTimer(e)
    }, 1000)
    Ref.current = id
  }

  const getDeadTime = () => {
    const deadline = new Date()
    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 20)
    return deadline
  }

  useEffect(() => {
    clearTimer(getDeadTime())
  }, [])

  const onClickReset = () => {
    clearTimer(getDeadTime())
  }

  function deshabilitar(e) {
    e.preventDefault()
    setDisabled(true)
    setTimeout(() => {
      setDisabled(false)
    }, 20000)
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
    deshabilitar(e)
    onClickReset()
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
          <Titulo>MENSAJE ENVIADO</Titulo>
        </ContenedorTitulo>
        <ContenedorDescripcion className='text-center'>
          <Descripcion>Se ha enviado un mensaje a {input}</Descripcion>
          <h6>si no lo recibe en los proximos 2 minutos utilice el boton Reenviar</h6>
        </ContenedorDescripcion>
          <ContenedorBoton className='mx-auto text-center'>
          <BotonERecuperar className="btn font-weight-bold col-6 mb-2" onClick={clickBoton} disabled={disabled}>
            Reenviar
          </BotonERecuperar>
          <Timer>{timer}</Timer>
          </ContenedorBoton>
        </div>
        </div>
      </ContenedorFormulario>
    </main>
    </>
  )
}

export default CorreoEnviado
