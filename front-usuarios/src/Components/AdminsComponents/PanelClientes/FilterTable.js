function FilterProduct() {
  const rows = document.getElementsByClassName('MuiTableRow-root')
  const input = document.getElementById('Input')
  const inputText = input.value
  console.log(rows)
  for (let i = 1; i < rows.length; i++) {
    const fila = rows[i]
    const nombres = fila.querySelector('.interes')
    const r = nombres.textContent
    if (r.toLowerCase().indexOf(inputText.toLowerCase().trim()) > -1) {
      fila.style.display = null
      break
    } else {
      fila.style.display = 'none'
    }
  }
}
export default FilterProduct
