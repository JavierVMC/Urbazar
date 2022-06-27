/* eslint-disable brace-style */
/* eslint-disable node/handle-callback-err */
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import '../../../css/CarritoComponent.css'
import NavbarComponent from '../navBar/navbarComponent'
import { Label, Input, Button, Modal, FormGroup } from 'reactstrap'
import CarritoDetalle from './CarritoDetalle'
import PaymentInputs from './PaymentComponent'
import data from '../../../enviroment'
import axios from 'axios'

const deleteProducts = async(lista) => {
  for (const idDetalle of lista) {
    await axios
      .delete(`http://${data.number}/detalle-carrito/${idDetalle}`)
      .then((res) => {})
      .catch((err) => {})
  }
  window.location.reload()
}
const ProductoBack = ({ setResumen, setDetalleId }) => {
  const [listaComponent, setListaComponent] = useState([])
  useEffect(() => {
    axios
      .get(
        `http://${data.number}/clientes/persona/${localStorage.getItem(
          'userId'
        )}`
      )
      .then((res) => {
        const resultado = res.data[0]
        axios
          .get(`http://${data.number}/carrito/cliente/${resultado.id}`)
          .then((res) => {
            const resultado = res.data[0]
            axios
              .get(
                `http://${data.number}/detalle-carrito/carrito/${resultado.id}`
              )
              .then((res) => {
                const lista = res.data
                if (lista.length > 0) {
                  for (const item of lista) {
                    axios
                      .get(`http://${data.number}/productos/${item.idProducto}`)
                      .then((res) => {
                        const producto = res.data
                        const nombre = producto.nombre
                        const precio = producto.precio
                        const imagen = producto.source
                        const desc = producto.descripcion
                        const cant = item.cantidad
                        setDetalleId((current) =>
                          current.concat(item.idDetalle)
                        )
                        setResumen((current) =>
                          current.concat({ nombre, precio: precio * cant })
                        )
                        setListaComponent((current) =>
                          current.concat(
                            <CarritoDetalle
                              key={item.id}
                              nombre={nombre}
                              precio={precio * cant}
                              src={imagen}
                              descripcion={desc}
                              cantidad={cant}
                              idDetalle={item.idDetalle}
                            />
                          )
                        )
                        console.log(producto)
                      })
                  }
                }
              })
          })
      })
  }, [])

  return (
    <React.Fragment>
      {listaComponent.length > 0
        ? (
            listaComponent
          )
        : (
        <div className="h-100">
          <span className="vacioCarrito">Carrito Vacío</span>
        </div>
          )}
    </React.Fragment>
  )
}

const Resumen = ({ resumen, setPrecio }) => {
  const listaLi = []
  if (resumen.length > 0) {
    let precioTotal = 0
    for (let i = 0; i < resumen.length; i++) {
      const nombre = resumen[i].nombre
      const precio = parseFloat(resumen[i].precio)
      precioTotal = precioTotal + precio
      setPrecio(precioTotal)
      listaLi.push(
        <tr>
          <td>{nombre}</td>
          <td>${precio}</td>
        </tr>
      )
    }
    return (
      <table className="w-100">
        <tr>
          <th>Productos</th>
          <th>Precio</th>
        </tr>
        {listaLi}
        <tr>
          <td id="precioTotal" colSpan="2">
            <strong>Precio Total: ${precioTotal}</strong>
          </td>
        </tr>
      </table>
    )
  } else {
    return <p></p>
  }
}

const CarritoComponent = (props) => {
  const [liveDemo, setLiveDemo] = React.useState(false)
  const [resumen, setResumen] = useState([])
  const [precio, setPrecio] = useState(0)
  const [idDetalle, setDetalleId] = useState([])
  const auth = parseInt(localStorage.getItem('auth'), 10)
  const role = localStorage.getItem('role')

  if (auth && (role === '0' || role === '1')) {
    return (
      <>
        <NavbarComponent />

        <div id="main" className="h-100">
          <section id="productos_detail" className="col-md-8 h-100">
            <ProductoBack
              setResumen={setResumen}
              setDetalleId={setDetalleId}
            ></ProductoBack>
          </section>
          <section id="info_detail" className="col-md-4">
            <div id="contenedor_info">
              <div id="title_detail">
                <h3> Resumen </h3>
              </div>
              <div>
                <Resumen resumen={resumen} setPrecio={setPrecio} />
              </div>
              <div id="Pago">Método de pago</div>
              <div id="metodo_selection">
                <PaymentInputs />
              </div>
              <div id="record_method">
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> Guardar Tarjeta
                  </Label>
                </FormGroup>
              </div>

              <div id="time_send">
                <Label> Tiempo estimado de recibo: 2 días</Label>
                <div id="btn_continue">
                  <Button type="button" onClick={() => setLiveDemo(true)}>
                    {' '}
                    Confirmar{' '}
                  </Button>
                </div>

                <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="ConfirmationModel">
                      Confirmación de compra
                    </h5>
                    <button
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => setLiveDemo(false)}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>
                      Se descontará de su cuenta el saldo de ${precio}
                      <br />
                      ¿Está seguro que desea realizar esta compra?
                    </p>
                  </div>
                  <div className="modal-footer">
                    <div className="left-side">
                      <Button
                        className="btn-link"
                        color="default"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => setLiveDemo(false)}
                      >
                        Cancelar
                      </Button>
                    </div>
                    <div className="divider" />
                    <div className="right-side">
                      <Button
                        className="btn-link"
                        type="button"
                        id="btn_confModal"
                        onClick={() => {
                          setLiveDemo(false)
                          deleteProducts(idDetalle)
                        }}
                      >
                        Aceptar
                      </Button>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
  // Por ahora estas validaciones quedan de esta forma, cuando se desarrollen bien los dashboards de admins se dividirá esto
  else if (auth && (role === '2' || role === '3')) {
    return <Redirect to="/admin/dashboard/report" />
  } else return <Redirect to="/login" />
}

export default CarritoComponent
