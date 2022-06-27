import { useState, useEffect } from 'react'
import axios from 'axios'
import data from '../../../enviroment'
const useImporte = (etapaCliente, etapaVendedor) => {
  const [importe, setImporte] = useState(0)

  useEffect(() => {
    axios.get(`http://${data.number}/matriz/1`)
      .then((response) => {
        const respuesta = JSON.parse(response.data.data)
        const posc = respuesta.vertexes.indexOf(etapaCliente)
        const posv = respuesta.vertexes.indexOf(etapaVendedor)
        // console.log("et1", etapa_vendedor);
        // console.log("et2", localStorage.getItem("etapa"));
        console.log(respuesta.matrix)
        console.log(respuesta.vertexes)
        console.log(posv, posc)
        console.log('HOLA')
        setImporte(respuesta.matrix[posv][posc])
        console.log('importe', importe)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return importe
}

export default useImporte
