export default function checkValue (filtro) {
  fetch(`http://[::1]:3000/productos/categoria/${filtro.target.id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log('Data')
      console.log(data)
    })
    .catch((error) => console.log('Hubo un error ' + error))
}
