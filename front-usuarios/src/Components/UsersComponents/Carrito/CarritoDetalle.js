/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Row, Col, Container } from 'reactstrap'
import '../../../css/Detalle.css'
import data from '../../../enviroment'
import axios from 'axios'
const CarritoDetalle = ({
  src,
  nombre,
  descripcion,
  precio,
  cantidad,
  idDetalle
}) => {
  const [borrado, setBorrado] = useState(false)
  const borrarElemento = () => {
    axios
      .delete(`http://${data.number}/detalle-carrito/${idDetalle}`)
      .then((res) => {
        window.location.reload()
      })
  }
  if (borrado) {
    return <span></span>
  } else {
    return (
      <Container className="productoContenedor">
        <div className="w-100 text-right borrarDiv">
          <span className="pr-5 borrar" onClick={borrarElemento}>
            X
          </span>
        </div>
        <Row className="align-items-center px-5">
          <Col sm="10">
            <div className="producto media" id="tarjeta1">
              <div className="foto_producto align-self-center mr-3">
                <img src={src} alt={nombre} />
              </div>
              <div className="descripcion">
                <div>
                  <h5>{nombre}</h5>
                </div>
                <div className="">
                  <div>
                    <p>{descripcion}</p>
                  </div>
                </div>
                <div>
                  <strong>Vendedor:</strong> prueba
                  <br />
                  Cantidad: {cantidad}
                </div>
              </div>
            </div>
          </Col>
          <Col sm="2">
            <div className="valor">
              <h3> ${precio} </h3>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CarritoDetalle
