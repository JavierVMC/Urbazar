import styled from 'styled-components'
import { React } from 'react'
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

function PasswordActualizado() {
  const input = 'natroram@espol.edu.ec'
  const user = 'Natalia Ramirez'

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
          <Titulo>CONTRASEÑA ACTUALIZADA</Titulo>
        </ContenedorTitulo>
        <ContenedorDescripcion className='text-center'>
          <Descripcion>Se ha actualizado la contraseña exitosamente para el usuario {user}</Descripcion>
          <h6>con el correo {input}</h6>
        </ContenedorDescripcion>
        </div>
        </div>
      </ContenedorFormulario>
    </main>
    </>
  )
}

export default PasswordActualizado
