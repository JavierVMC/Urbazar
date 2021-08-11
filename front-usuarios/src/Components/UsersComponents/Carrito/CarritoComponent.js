import React,{useState,useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import '../../../css/CarritoComponent.css'
import NavbarComponent from '../navBar/navbarComponent'
import { Label, Input, Button, Modal, FormGroup } from 'reactstrap'
import CarritoDetalle from './CarritoDetalle'
import PaymentInputs from './PaymentComponent'
import data from '../../../enviroment';
import axios from 'axios';

const ProductoBack = () => {
    let [listaComponent,setListaComponent] = useState([])
    useEffect(() => {
        axios.get(`http://${data.number}/clientes/persona/${localStorage.getItem('userId')}`).then(res => {
            let resultado = res.data[0];
            axios.get(`http://${data.number}/carrito/cliente/${resultado.id}`).then(res => {
                let resultado = res.data[0];
                axios.get(`http://${data.number}/detalle-carrito/carrito/${resultado.id}`).then(res => {
                    let lista = res.data;
                    if(lista.length > 0) {
                        for(let item of lista){
                            axios.get(`http://${data.number}/productos/${item.idProducto}`).then(res => {
                                let producto = res.data;
                                const nombre = producto.nombre
                                const precio = producto.precio
                                const imagen = producto.source
                                const desc = producto.descripcion
                                const cant = item.cantidad
                                setListaComponent(current => current.concat(<CarritoDetalle key={item.id} nombre ={nombre} precio ={precio} src={imagen}
                                    descripcion={desc} cantidad={cant} />))
                                console.log(producto);
                            })
                        }
                    }
                    else{
                        return <div>Carrito Vacio</div>
                    }
    
                })
            })
        })
    },[])

    return <div>{listaComponent}</div>;
}


const Resumen = () => {
  const listaLi = []

  if (localStorage.getItem('carrito')) {
    const jsonCarro = JSON.parse(localStorage.getItem('carrito'))
    const productLista = jsonCarro.carrito
    let precioTotal = 0
    for (let i = 0; i < productLista.length; i++) {
      const nombre = productLista[i].nombre
      const precio = parseFloat(productLista[i].precio) 
      precioTotal = precioTotal + precio
      listaLi.push(<tr>
                <td>{nombre}</td>
                <td>${precio}</td>
            </tr>)
    }
    localStorage.setItem('precio', precioTotal)
    return (

        <table className="w-100">
            <tr>
                <th>Productos</th>
                <th>Precio</th>
            </tr>
            {listaLi}
            <tr>
                <td id="precioTotal" colSpan="2"><strong>Precio Total: ${precioTotal}</strong></td>
            </tr>
        </table>
    )
  } else {
    return (<p></p>)
  }
}

const CarritoComponent = (props) => {
    const [liveDemo, setLiveDemo] = React.useState(false);
    const auth = parseInt(localStorage.getItem("auth"), 10)
    const role= localStorage.getItem("role");
    
    
    if( auth && (role==="0" || role==="1")){         
        return ( 
        <>

                <NavbarComponent/>

                <div id="main">
                    <section id="productos_detail" className="col-md-8">
                        <ProductoBack></ProductoBack>
                    </section>
                    <section id="info_detail" className="col-md-4">
                        <div id="contenedor_info">
                            <div id="title_detail">
                               <h3> Resumen </h3>
                            </div>
                            <div>
                                <Resumen />
                            </div>
                            <div id="Pago">
                                 Método de pago
                            </div>
                            <div id="metodo_selection">
                                   <PaymentInputs/>
                            </div>
                            <div id="record_method">
                                <FormGroup check>
                                    <Label check>
                                    <Input type="checkbox" />{' '}
                                    Guardar Tarjeta
                                    </Label>
                                </FormGroup>
                            </div>

                            <div id="time_send">
                                <Label> Tiempo estimado de recibo: 2 días</Label>
                                <div id="btn_continue">
                                    <Button type="button" onClick={() => setLiveDemo(true)}> Confirmar </Button>
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
                                    <p>Se descontará de su cuenta el saldo de ${localStorage.getItem('precio')}<br/>
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
                                          localStorage.setItem('carrito', '')
                                          localStorage.setItem('precio', 0)
                                          localStorage.setItem('contador_items', 0)
                                        }

                                        }
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
        );
    }
    //Por ahora estas validaciones quedan de esta forma, cuando se desarrollen bien los dashboards de admins se dividirá esto
   else if(auth && (role=="2" || role=="3")){
        return  <Redirect to='/admin/dashboard/report'/> 
    }
    else return  <Redirect to='/login'/> 
    
    
}

export default CarritoComponent
