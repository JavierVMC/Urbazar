import data from '../../../enviroment'
function handleClick(e) {
  e.preventDefault()
  console.log('The link was clicked.')
  if (window.location.href !== `http://${data.number}/buscador`) {
    window.location.href = `http://${data.number}/buscador`
  }
}

function filter() {
  const productos = document.getElementsByClassName('MuiGrid-grid-lg-3')
  console.log(productos)
  const input = document.getElementById('myInput')
  const inputText = input.value
  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i]

    const nombre_producto = producto.querySelector('#name_product')
    const texto = nombre_producto.textContent

    if (texto.toLowerCase().indexOf(inputText.toLowerCase().trim()) > -1) {
      producto.style.display = null
    } else {
      producto.style.display = 'none'
    }
  }
}

module.exports = {
  filter,
  handleClick
}
