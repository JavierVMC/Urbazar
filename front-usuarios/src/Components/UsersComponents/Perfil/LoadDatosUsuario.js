import { useEffect, useState } from 'react'

export default function UseInformation(ruta) {
  const [informacion, setInformacion] = useState([])

  useEffect(() => {
    fetch(ruta)
      .then(response => response.json())
      .then(data => {
        setInformacion(data)
      })
      .catch(error => console.log('Hubo un error ' + error))
  }, [])

  return (informacion)
}
