/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap'
import '../../../css/MainComponent.css'
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const NavbarAdmins = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(true)

  return (
     <>
        <Navbar color='faded' dark className='navbar'>
        <NavbarToggler onClick={toggle} className="toggler mr-2 custom-toggler"/>
        {/* menu toggler */}

        <NavbarBrand className='logo'>UrbazApp</NavbarBrand>
        <NavbarBrand className='logo2'>UApp</NavbarBrand>
        <div id="space"></div>
        <p id='p_bienvenido'>Bienvenido</p>
        <p id='nombre_user'>{localStorage.getItem('nombre_usuario')}!</p>

        <button type='button' className='button_nav' onClick={props.logout} href="/login"><i className="fas fa-power-off"></i></button>

      </Navbar>

    </>
  )
}

export default NavbarAdmins
