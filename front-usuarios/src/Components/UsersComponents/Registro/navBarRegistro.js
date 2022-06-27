import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import '../../../css/MainComponent.css'
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const NavbarComponent = ({ isLogin }) => {
  return (
    <React.Fragment>
      <Navbar color="faded" dark className="navBarRegister">
        <NavbarBrand className="logo_reg">
          {' '}
          <span className="Urbaz-part">Urbaz</span>
          <span className="app-part">App</span>
        </NavbarBrand>

        <div id="link_login">
          {isLogin ? <p></p> : <a href={'/login'}>Iniciar sesión</a>}
        </div>
      </Navbar>
    </React.Fragment>
  )
}

export default NavbarComponent
