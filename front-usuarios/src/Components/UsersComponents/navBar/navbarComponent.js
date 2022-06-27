/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ToggleMenu from './ToggleMenuPC'
import '../../../css/MainComponent.css'
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.css'
export let idCarritoDef
export const cantidadProd = 0

const Orders = styled.div`
  font-weight: 500;
  margin: 0 30px;
  a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
  }
`

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cantProductos, setCantProductos] = useState(0)
  const [idCarrito, setIdCarrito] = useState(0)
  const toggle = () => setIsOpen(true)

  useEffect(() => {
    console.log(localStorage.getItem('userId'))
  }, [])

  idCarritoDef = idCarrito
  const cantidad = 0
  /**
 *   axios.get(`http://${data.number}/detalle-carrito/${idCarritoDef}`)
    .then(response => response.data)
    .then((res2) => {
      for (let i = 0; i < res2.length; i++) {
        if (res2[i].idCarrito === idCarrito) {
          cantidad++
        }
      }
      setCantProductos(cantidad)
      cantidadProd = cantProductos
    }
    )
*/

  return (
    <>
      <Navbar color="faded" dark className="navbar">
        <NavbarToggler
          onClick={toggle}
          className="toggler mr-2 custom-toggler"
        />
        {/* menu toggler */}
        <ToggleMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        <NavbarBrand
          data-intro="¡Bienvenido a UrbazApp! Demos un tour"
          href="/"
          className="logo"
        >
          <span className="Urbaz-part">Urbaz</span>
          <span className="app-part">App</span>
        </NavbarBrand>
        <NavbarBrand href="/" className="logo2">
          UApp
        </NavbarBrand>

        <form
          className="mr-auto search_form"
          action={`http://${window.location.host}/buscador`}
        >
          <input
            id="myInput"
            data-intro="Busca productos de tu interés"
            type="text"
            placeholder="Buscar..."
            name="search"
            required
          />
          <button type="submit">
            <i className="fas fa-search mr-auto"></i>
          </button>
        </form>

        <p id="p_bienvenido">Bienvenido</p>
        <p id="nombre_user">{localStorage.getItem('nombre_usuario')}!</p>
        <Orders>
          <Link to="/historial-de-compras">Pedidos</Link>
        </Orders>
        <button type="button" className="button_nav boton_notificacion">
          <i className="fas fa-bell fa-lg"></i>
        </button>
        <div id="cont_icon_carrito">
          <a href={`/carrito/${Number(idCarrito)}`}>
            <button
              type="button"
              data-intro="Accede a tu carrito de compras"
              className="button_nav"
              href="/carrito"
            >
              <i className="fas fa-shopping-cart fa-lg"></i>{' '}
            </button>
          </a>
          <p> {cantProductos}</p>
        </div>
      </Navbar>
    </>
  )
}

export default NavbarComponent
