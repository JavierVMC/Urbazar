
import {Redirect} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import {Container} from 'reactstrap';
import {LoadStars} from './LoadResourcesProducts';
import '../../../css/product.css';
import NavbarComponent from "../navBar/navbarComponent";
import ListaProductos from './ListaProductos';
import CalcularImporte from "./Importe";
import axios from 'axios';
import { Avatar, Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductComponent() {
    const [calificaciones,setCalificaciones] = useState("");
    const [load,setLoad] = useState(false)
    const [cantidad, setCantidad] = React.useState(1);
    const [etapaVendedor, setEtapaVendedor] = useState('');
    const [etapaCliente, setEtapaCliente] = useState('');
    const [importe, setImporte] = useState(0);
    const [message, setMessage] = useState("");
    const [message2, setMessage2] = useState("");
    


    let lista_productos = ListaProductos("http://134.209.215.193:3000/productos"); 
    
    
    let url2 = window.location.href;
    let temp = url2.split('/');
    let id_producto = temp[4];
    let id_vendedor = temp[5];
    

    

    useEffect(() => {
        
        axios.get(`http://134.209.215.193:3000/personas/`+id_vendedor)
            .then((response) => {
                    return response.data.id_etapa;
                })

            .then((idetapa)=>{
                        axios.get(`http://134.209.215.193:3000/etapas/`+idetapa)
                        .then((response)=>{                            
                            setEtapaVendedor(response.data.nombre);                            


                        })

            })
            
    
              
    }, [])


    useEffect(() => {
        axios.get(`http://134.209.215.193:3000/etapas/`+localStorage.getItem("etapa"))
            .then((response)=>{                            
                setEtapaCliente(response.data.nombre);   
               
            })
                                 
              
    }, []);
    
    

   
    let producto_selec = {};
    lista_productos.map(producto => {
        if(producto.id == id_producto){
            producto_selec = producto
        }
    });
   
    let comentarios = ListaProductos("http://134.209.215.193:3000/calificaciones?filter[where][idProducto]="+id_producto)
    let sources = ListaProductos("http://134.209.215.193:3000/sourcesproductos?filter[where][id_producto]="+id_producto)
    
    let settings={
        arrows:true,
        dots:true,
        infinite:true,
        swipeToSlide:true,
        speed: 300,
        slidesToShow: 1,        
        slidesToScroll: 1,
        cssEase: "linear",
        
    }

    

    const seleccionarProducto = id => {
        
       let producto = {}
       for(let prod of lista_productos){
           if(prod.id == id){
               producto = prod;
           }
       }
       let p = producto
       p.cantidad = 1
       //obtener idCarrito
       axios.get('/carrito', {"where": {"idUsuario": localStorage.getItem('userId')}})
        .then(respuesta => respuesta.data)
        .then(res => {
            console.log(res);
        });



        if(localStorage.getItem("carrito")){
            let inCarrito = false;
            let data = JSON.parse(localStorage.getItem("carrito"))
            for(let j of data.carrito){
                //verifica si ya existe en carrito
                if(p.id == j.id){
                    j.cantidad = j.cantidad + 1;
                    inCarrito = true;


                    break;
                }
            }
            if(!inCarrito){
                data.carrito.push(p)
                let items = parseInt(localStorage.getItem("contador_items"));
                localStorage.setItem("contador_items", items+1)
                let val_actual = document.getElementById("cont_icon_carrito").getElementsByTagName("p")[0];
                val_actual.textContent = items+1;
            }
            
            localStorage.setItem("carrito",JSON.stringify(data))
        }
        else{
            localStorage.setItem("carrito",JSON.stringify({"carrito":[p]}))
            let items = parseInt(localStorage.getItem("contador_items"));
            localStorage.setItem("contador_items", items+1)
            let val_actual = document.getElementById("cont_icon_carrito").getElementsByTagName("p")[0];
            val_actual.textContent = items+1;
        }
        

        
    }

   

    const printImporte = () =>{
        
        axios.get(`http://134.209.215.193:3000/matriz/1`)
        .then((response) => {
                let respuesta = JSON.parse(response.data.data);
                let posc = respuesta.vertexes.indexOf(etapaCliente);
                let posv = respuesta.vertexes.indexOf(etapaVendedor);
                setImporte(respuesta.matrix[posv][posc]);   
                let div = document.getElementById("info_Importe");
                div.innerHTML =  `El proveedor se encuentra en la etapa "${etapaVendedor}". 
                El importe por envío tiene un costo de $`+respuesta.matrix[posv][posc];                
        

        })
        .catch(error=> {
            
            console.log("Error al cargar la matriz de adyacencia")   
        });
        

    }


    const aumentar = () => {
        if(cantidad<producto_selec.stock){
            setCantidad(cantidad+1);
        }     
        
       
    };

    const disminuir = () => {
        if(cantidad>1){
            setCantidad(cantidad-1);
        }
    };

    const auth = parseInt(localStorage.getItem("auth"), 10)
    const role= localStorage.getItem("role");
      
    
    if( auth && (role=="0" || role=="1")){       

        return (
            <>
        <NavbarComponent />
        <Container className='cont_detail'>   
    
            <div className="row justify-content-center">
                <div className="col-sm-6 col-12" id="imgContainer">
                    <div className="card mb-3" id="imgCard">
                        <div className="card-body">
                          <h5 className="card-title name_product">{producto_selec.nombre}</h5>
                        </div>
                        <div id="card-body-img">
                           
                            <Slider {...settings} className="Slide_img">
                                {   
                                    sources.map(fuentes =>(
                                        <img key="imagen" src={fuentes.source} className="card-img-bottom image" />
                                    )     )
                                         
                                }
                            </Slider>
                        </div>
                      </div>
                </div>
                <div className="col-sm-6 col-12" id="productoVendedor">
                    <div className="container" id="productoUpRight">
                        <div className="row justify-content">
                            <div className="col-12">
                                <h5>Vendedor</h5>
                            </div>
                            <div className="col-6">
                                <p>Andrea Rodriguez</p> 
                            </div>
                            <div className="col-6 text-right">
                                <div>
                                    Calificación: 
                                    <div id='estrellas_val'>
                                        
                                       <LoadStars estrellas={producto_selec.promedioPuntuacion}/>
                                    </div>
                                    </div>
                            </div>
                            <div className="col-12" id="productoDescripcion"> 
                                <p>{producto_selec.descripcion}</p>                            
                            </div>
                            
                            <div className="col-6">
                                <h6>Distancia</h6>
                            </div>
                            <div className="col-6">
                                <p>{producto_selec.id} Etapas</p>
                            </div>
                            <div className="col-12" id="cont_comentarios">
                                <h5>Comentarios</h5>
                                <div data-list="[producto_selec.comentarios]" id="comentarios">
                                </div>
                                                           
                                
                                    {console.log(comentarios)}
                                    {comentarios.map(comenta=>(
                                            <div key="box" style={{ padding: 14 }} className="commentsBox">
                                            
                                                <Grid style={{ margin: "10px" }} item>
                                                <Avatar alt="Remy Sharp" src={"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"} />
                                                </Grid>
                                                <Grid justifyContent="left" item xs zeroMinWidth>
                                                <h6 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h6>
                                                <p style={{ textAlign: "left" }}>
                                                    {comenta.comentario}
                                                </p>
                                                </Grid>
                                                                                  

                                            </div> 
                                    ))}
                                
                                
                            </div>  
                        </div>
                    </div>
                </div>
    
                
    
                <div className="col-sm-6 col-12" id="productoPreFactura">
                    <div className="container" id="productoTwoLeft">
                        <div className="row justify-content">
                            <div className="col-6">
                                <p>Precio</p>
                            </div>
                            <div className="col-6 text-center">
                                <p id="preciolbl">$ {producto_selec.precio}</p>
                            </div>



                            <div className="col-6">
                                <p>Cantidad</p>
                            </div>
                            <div className="col-6 text-center cantProductoBox">
                                <Button id="aumentar_prod_button" onClick={aumentar} color="primary">+</Button>
                                <p id="cantidad_producto"> {cantidad} </p>
                                <Button  id="disminuir_prod_button" onClick={disminuir} color="primary">-</Button>
                            </div>
                            <div className="col-6" id="totlabel">
                                <p>Total</p>
                            </div>
                            <div className="col-6 text-center" id = "valtotlabel">
                                <p id="totalabel">$ {producto_selec.precio  * cantidad}</p> 
                            </div>
                            
                            <div className="col-12 text-center">
                                <button type="button" id="btnAgregarCarrito" className="btn btn-primary"
                                onClick = { () => {seleccionarProducto(id_producto); printImporte()}}><i className='fas fa-shopping-cart fa-lg'></i>{" "}Agregar a carrito</button>
                            </div> 
                        </div>
                    </div>
                    <div id="info_Importe_cont">
                        <div className="col-1 text-center">
                                <i className="fas fa-info-circle" id="btn_info" onClick={printImporte}></i>
                        </div>
                    <div id="info_Importe" className="text-justify">
                        
                    </div>
                        
                    </div>
                </div>  
                                    
    
              </div>
        </Container>
            </>
    
        );
    
    
  
    
  }
  else if(auth && (role=="2" || role=="3")){
    return  <Redirect to='/admin/dashboard/report'/> 
    }
    else return  <Redirect to='/login'/> 

  


}
  export default ProductComponent;