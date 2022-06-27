import { Checkbox } from '@material-ui/core'
import React from 'react'
import { Label } from 'reactstrap'
import './tabla.css'
import checkValue from './Filtro'

const Tabla = () => {
  return (
      <div className="filters-container">
      <span className="text-left">Categorias</span>
      <ul>
        <li>
        <Checkbox id='1' onChange={checkValue}></Checkbox>
          <Label htmlFor= 'Ropa'>Ropa</Label>
        </li>
        <li>
          <Checkbox id='2' onChange={checkValue}></Checkbox>
          <Label htmlFor= 'Tecnologia'>Tecnologia</Label>
        </li>
        <li>
          <Checkbox id='3' onChange={checkValue}></Checkbox>
          <Label htmlFor= 'Comida'>Comida</Label>
        </li>
        <li>
          <Checkbox id='4' onChange={checkValue}></Checkbox>
          <Label htmlFor= 'Hogar'>Hogar</Label>
        </li>
        <li>
          <Checkbox id='5' onChange={checkValue}></Checkbox>
          <Label htmlFor= 'Otros'>Otros</Label>
        </li>
      </ul>
      <span className="text-left" onChange={checkValue}>Rango de Precios</span>
      <ul>
        <li>
          <Checkbox id='zero-twenty' onChange={checkValue}></Checkbox>
          <Label htmlFor= 'zero-twenty'>0-20</Label>
        </li>
        <li>
          <Checkbox id='twenty-fifty' onChange={checkValue}></Checkbox>
          <Label htmlFor= 'twenty-fifty'>20-50</Label>
        </li>
        <li>
          <Checkbox id='fifty-hundred' onChange={checkValue}></Checkbox>
          <Label htmlFor= 'fifty-hundred'>50-100</Label>
        </li>
        <li>
          <Checkbox id='hundred-fivehundred' onChange={checkValue}></Checkbox>
          <Label htmlFor= 'hundred-fivehundred'>100-500</Label>
        </li>
        <li>
          <Checkbox id='thousand-plus' onChange={checkValue}></Checkbox>
          <Label htmlFor= 'thousand-plus'>1000+</Label>
        </li>
      </ul>
    </div>
  )
}

export default Tabla
