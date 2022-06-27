
export default function LoadProductos(compras) {
  const div = document.getElementById('container_productos')
  const p = document.getElementById('info_vacio')

  let nuevo_div = document.getElementById('ct')
  if (p !== undefined) {
    div.removeChild(p)
  }
  if (nuevo_div !== undefined) {
    div.removeChild(nuevo_div)
  }
  nuevo_div = document.createElement('div')
  nuevo_div.setAttribute('id', 'ct')

  for (let i = 0; i < compras.length; i++) {
    const d1 = document.createElement('div')
    d1.setAttribute('class', 'card-producti col-md-6')

    const d2 = document.createElement('div')
    d2.setAttribute('class', 'card-image col-6')
    const im = document.createElement('img')
    im.setAttribute('src', compras[i].imagen)
    d2.appendChild(im)

    const d3 = document.createElement('div')
    d3.setAttribute('class', 'card-content col-6')

    const d4 = document.createElement('div')
    d4.setAttribute('id', 'card-title')
    const h5 = document.createElement('h5')
    h5.textContent = compras[i].producto
    d4.appendChild(h5)

    const d5 = document.createElement('div')
    d5.setAttribute('id', 'card-footer')
    const ul = document.createElement('ul')
    const li1 = document.createElement('li')
    li1.textContent = 'Vendedor: ' + compras[i].vendedor

    const li2 = document.createElement('li')
    li2.textContent = 'Precio: ' + compras[i].precio

    const li3 = document.createElement('li')
    li3.textContent = 'Cantidad: ' + compras[i].cantidad

    const li4 = document.createElement('li')
    li4.textContent = 'Estado: ' + compras[i].estado

    const li5 = document.createElement('li')
    li5.textContent = 'Fecha: ' + compras[i].Fecha
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    ul.appendChild(li5)

    d5.appendChild(ul)

    d3.appendChild(d4)
    d3.appendChild(d5)

    d1.appendChild(d2)
    d1.appendChild(d3)

    nuevo_div.appendChild(d1)
  }
  div.appendChild(nuevo_div)
}
