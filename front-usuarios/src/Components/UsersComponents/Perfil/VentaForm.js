/* eslint-disable no-unused-vars */
/* eslint-disable node/handle-callback-err */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import data from '../../../enviroment'

const subirProducto = (selectedFile, clientId, categoria, nombre, precio, descripcion, stock) => {
  const bodyFormData = new FormData()
  bodyFormData.append('file', selectedFile)
  axios.post(`http://${data.number}/upload`, bodyFormData, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }).then(res => {
    console.log(res.data)
    const urlimg = `http://${data.number}/products/${res.data.filename}`
    axios.post(`http://${data.number}/productos`, {
      idVendedor: clientId,
      ID_Categoria: `${categoria}`,
      nombre: nombre,
      precio: parseInt(precio),
      activo: 1,
      descripcion: descripcion,
      stock: parseInt(stock),
      promedioPuntuacion: 0,
      pedidoAnticipado: 0,
      source: urlimg
    }).then(res => {
      const response = res.data
      console.log(response)
      axios.post(`http://${data.number}/sourcesproductos`, {
        id_producto: response.id,
        source: response.source
      }).then(res => {

      })
    })
  })
}

const VentaForm = () => {
  const [categorias, setCategorias] = useState([])
  const [selectedFile, setSelectedFile] = useState()
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [stock, setStock] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [categoria, setCategoria] = useState('')
  const [info, setInfo] = useState({})
  const [clientId, setClientId] = useState(0)
  useEffect(() => {
    axios.get(`http://${data.number}/categorias`).then(res => {
      setCategorias(res.data)
    })
    axios.get(`http://${data.number}/personas/` + localStorage.getItem('userId')).then(res => {
      setInfo(res.data)
      console.log(res.data)
      axios.get(`http://${data.number}/clientes/persona/${localStorage.getItem('userId')}`).then(res => {
        setClientId(res.data[0].id)
        console.log(res.data[0])
        axios.post(`http://${data.number}/vendedors`, {
          idUsuario: res.data[0].id,
          valoracion: 0
        }).catch(err => {

        })
      })
    })
  }, [])
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])
  }
  return (
        <div className="">
        <h6>Subir un Producto</h6>
        <div className="mr-auto cont_productos">
            <form>
                <div className="row mt-2">
                    <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="Nombre">Nombre</label>
                        <input type="text" className="form-control" id="Nombre" name="nombre"
                            onChange={(e) => {
                              setNombre(e.target.value)
                            }}
                        ></input>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="form-group">
                    <label htmlFor="Stock">Stock</label>
                        <input type="number" className="form-control" id="Stock" name="stock"
                            onChange={(e) => {
                              setStock(e.target.value)
                            }}
                        ></input>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="form-group">
                    <label htmlFor="Precio">Precio</label>
                        <input type="number" className="form-control" id="Precio" name="precio"
                            onChange={(e) => {
                              setPrecio(e.target.value)
                            }}
                        ></input>
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Categorias</label>
                    <select className="form-control" id="categorias" name="categoria"
                        onChange={(e) => {
                          for (const item of categorias) {
                            if (item.nombre === e.target.value) {
                              setCategoria(item.id)
                              console.log(item.id)
                            }
                          }
                        }}
                    >
                        {categorias.length > 0
                          ? <>
                         {categorias.map((item, key) => {
                           return (
                                 <option key={key}>{item.nombre}</option>
                           )
                         })}
                        </>
                          : <React.Fragment></React.Fragment>}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion" name="descripcion">Descripcion</label>
                    <textarea className="form-control" id="descripcion" rows="3"
                        onChange={(e) => {
                          setDescripcion(e.target.value)
                        }}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="imagen">Subir imagen</label>
                    <input type="file" className="form-control-file" id="imagen" name="imagen" onChange={changeHandler}/>
                </div>

                <div className="container d-flex align-items-center justify-content-center">
                <button type="button" className="btn" onClick={() => { subirProducto(selectedFile, clientId, categoria, nombre, precio, descripcion, stock) }}>Subir</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default VentaForm
