/* eslint-disable no-lone-blocks */
import React from 'react'
import NavbarComponent from '../navBar/navbarComponent'
import CategoriaComponent from '../navBar/CategoriaComponent'
import { UncontrolledCarousel, Col } from 'reactstrap'
import '../../../css/MainComponent.css'
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import { Redirect } from 'react-router-dom'
import LoadProducts from './LoadProducts'
import '../../../css/slider.scss'
import banner1 from '../../../imagenes/ban1.png'
import banner7 from '../../../imagenes/ban7.png'
import banner9 from '../../../imagenes/ban9.png'
import data from '../../../enviroment'
import Tabla from '../Filtros/Tabla/Tabla'

import '../Main/Main.css'

{ <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossOrigin="anonymous"
></link> }
function Main () {
  // introJs().start();

  /* banner items */
  const items = [
    {
      src: banner1,
      caption: '',
      altText: 'Slide 1',
      key: '1'
    },
    {
      src: banner9,
      caption: '',
      altText: 'Slide 3',
      key: '2'
    },
    {
      src: banner7,
      caption: '',
      altText: 'Slide 3',
      key: '3'
    }
  ]

  const auth = parseInt(localStorage.getItem('auth'), 10)
  const role = localStorage.getItem('role')

  if (auth && (role === '0' || role === '1')) {
    return (
      <>
        <head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/intro.js@3.1.0/themes/introjs-nassim.min.css"
          />
        </head>
        <NavbarComponent />
        <CategoriaComponent isToggle={false} />

        {/* banner */}
        <section className="banner_container">
          <Col xs="12" md="12" lg="12">
            <UncontrolledCarousel items={items} className="banner" />
          </Col>
        </section>
        {/* En esta seccion se incluyen los ads de Google */}
        {/* <div>addd</div>
          <div className="ad-class">
            <GoogleAds slot="4186053521" />
          </div>
          <div>addd</div> */}

        <div className="row no-gutters">
          <div className="col-sm-2">
            <Tabla>
            </Tabla>
          </div>
          <div className="col-sm-10">
            <div className="list_productos">
              <h6
                data-intro="En esta sección puedes encontrar
                  prodcutos recientes en el catálogo"
              >
                Recientes
              </h6>
              <hr className="my-2" />
              <div className="productos mt-5 carousel">
               {LoadProducts(`http://${data.number}/productos`)}
              </div>
            </div>
          </div>
        </div>
        {/* footer */}

        <footer>
          <p>&copy; 2020 Grupo BatScript - Todos los derechos reservados</p>
        </footer>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/intro.js/3.1.0/intro.min.js"
          integrity="sha512-8HbqTH7QzK30vhgVF/hTJ4loXwV85UU9vjI4nK04AfdOFzl8zG7b3LLAEHDmvIM8I0rvserMXmQx4Hw+kRknjw=="
          crossOrigin="anonymous"
        ></script>
        <script src="./main.js"></script>
      </>
    )
  } else if (auth && (role === '2' || role === '3')) {
    return <Redirect to="/admin/dashboard/report" />
  } else return <Redirect to="/login" />
}

export default Main
