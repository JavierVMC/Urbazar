import React from 'react'
import axios from 'axios'
import data from '../../../enviroment'
const vendedoTipoChange = (tipo, info) => {
  info.vendedorTipo = tipo
  console.log(info)
  axios.put(`http://${data.number}/personas/` + localStorage.getItem('userId'), info).then((res) => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}

const VendedorCompra = ({ setVendedor, setOpen, info }) => {
  const handleClick = () => {
    setVendedor(true)
    setOpen(false)
  }
  const tipo = info.vendedorTipo

  return (
        <div className="row filaCompra">
            <div className="col d-flex align-items-stretch justify-content-center my-3">
                <div className="card sombraCard">
                <div className="fondoCard d-flex justify-content-center "><i className="iconoCompra d-flex align-items-center" aria-hidden="true">Gratis</i></div>
                    <div className="card-body">

                        <h5 className="card-title m-0">Plan Gratis</h5>
                        <p className="card-text "><small className="text-muted">$0.00 al mes</small></p>
                        <hr className="mt-0"></hr>
                        <ul className="p-0 listaCheck">
                            <li>Sed nec enim risus. Nunc.</li>
                            <li>Suspendisse laoreet lectus convallis justo.</li>
                            <li>Duis molestie, erat vitae viverra.</li>
                        </ul>

                    </div>
                    <button className="btn mb-2" onClick={(e) => { handleClick(); vendedoTipoChange(0, info) }}>{tipo === 0 ? 'Ya tengo este plan' : 'Comprar'}</button>
                </div>
            </div>
            <div className="col d-flex align-items-stretch justify-content-center my-3">
                <div className="card sombraCard">
                <div className="fondoCard d-flex justify-content-center "><i className="fa fa-user iconoCompra d-flex align-items-center" aria-hidden="true"></i></div>
                    <div className="card-body">

                        <h5 className="card-title m-0">Plan Básico</h5>
                        <p className="card-text "><small className="text-muted">$5.00 al mes</small></p>
                        <hr className="mt-0"></hr>
                        <ul className="p-0 listaCheck">
                            <li>Sed nec enim risus. Nunc.</li>
                            <li>Suspendisse laoreet lectus convallis justo.</li>
                            <li>Duis molestie, erat vitae viverra.</li>
                        </ul>

                    </div>
                    <button className="btn mb-2" onClick={(e) => { handleClick(); vendedoTipoChange(1, info) }}>{tipo === 1 ? 'Ya tengo este plan' : 'Comprar'}</button>
                </div>
            </div>
            <div className="col d-flex align-items-stretch justify-content-center my-3">
                <div className="card sombraCard">
                <div className="fondoCard d-flex justify-content-center "><i className="fa fa-star iconoCompra d-flex align-items-center" aria-hidden="true"></i></div>
                    <div className="card-body ">
                        <h5 className="card-title m-0">Plan Premium</h5>
                        <p className="card-text "><small className="text-muted">$10.00 al mes</small></p>
                        <hr className="mt-0"></hr>
                        <ul className="p-0 listaCheck">
                            <li>Sed nec enim risus. Nunc.</li>
                            <li>Suspendisse laoreet lectus convallis justo.</li>
                            <li>Duis molestie, erat vitae viverra.</li>
                            <li>Sed nec enim risus. Nunc.</li>
                            <li>Suspendisse laoreet lectus convallis justo.</li>
                            <li>Duis molestie, erat vitae viverra.</li>
                        </ul>
                    </div>
                    <button className="btn mb-2" onClick={(e) => { handleClick(); vendedoTipoChange(2, info) }}>{tipo === 2 ? 'Ya tengo este plan' : 'Comprar'}</button>
                </div>
            </div>
            <div className="col d-flex align-items-stretch justify-content-center my-3">
                <div className="card sombraCard">
                <div className="fondoCard d-flex justify-content-center "><i className="fa fa-building iconoCompra d-flex align-items-center" aria-hidden="true"></i></div>
                    <div className="card-body ">
                        <h5 className="card-title m-0">Plan Empresa</h5>
                        <p className="card-text "><small className="text-muted">$100.00 al mes</small></p>
                        <hr className="mt-0"></hr>
                        <ul className="p-0 listaCheck">
                            <li>Sed nec enim risus. Nunc.</li>
                            <li>Suspendisse laoreet lectus convallis justo.</li>
                            <li>Duis molestie, erat vitae viverra.</li>
                            <li>Sed nec enim risus. Nunc.</li>
                            <li>Suspendisse laoreet lectus convallis justo.</li>
                            <li>Duis molestie, erat vitae viverra.</li>
                        </ul>
                    </div>
                    <button className="btn mb-2" onClick={(e) => { handleClick(); vendedoTipoChange(3, info) }}>{tipo === 3 ? 'Ya tengo este plan' : 'Comprar'}</button>
                </div>
            </div>

        </div>
  )
}

export default VendedorCompra
