/* eslint-disable no-undef */
import React from 'react'
import ProductDetailComponent from '../Producto/ProductDeatilComponent'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })
describe('Test para el detalle del producto', () => {
  localStorage.setItem('auth', 1)
  localStorage.setItem('role', 0)

  it('Debería renderizarse sin error', () => {
    const wrapper = shallow(<ProductDetailComponent />)
    expect(wrapper).toHaveLength(1)
  })

  it('Debería aumentar la cantidad del producto al dar clic sobre el botón más', () => {
    const wrapper = shallow(<ProductDetailComponent />)

    expect(wrapper.find('#cantidad_producto').text().includes('1')).toBe(true)
    wrapper.find('#aumentar_prod_button').simulate('click')

    expect(wrapper.find('#cantidad_producto').text().includes('2')).toBe(true)

    wrapper.find('#aumentar_prod_button').simulate('click')
    expect(wrapper.find('#cantidad_producto').text().includes('3')).toBe(true)
  })

  it('Debería disminuir la cantidad del producto al dar clic sobre el botón menos', () => {
    const wrapper = shallow(<ProductDetailComponent />)

    // aumento la cantidad 3 veces(Se esperaría cantidad=4)
    wrapper.find('#aumentar_prod_button').simulate('click')
    wrapper.find('#aumentar_prod_button').simulate('click')
    wrapper.find('#aumentar_prod_button').simulate('click')

    // disminuyo cantidad de producto en una unidad (Se esperaría cantidad=3)
    wrapper.find('#disminuir_prod_button').simulate('click')
    expect(wrapper.find('#cantidad_producto').text().includes('3')).toBe(true)
    wrapper.find('#disminuir_prod_button').simulate('click')
    expect(wrapper.find('#cantidad_producto').text().includes('2')).toBe(true)
  })

  it('No debería disminuir la cantidad del producto si el valor es 1', () => {
    const wrapper = shallow(<ProductDetailComponent />)

    expect(wrapper.find('#cantidad_producto').text().includes('1')).toBe(true)
    wrapper.find('#disminuir_prod_button').simulate('click')

    expect(wrapper.find('#cantidad_producto').text().includes('0')).toBe(false)
  })

  it('El total a pagar debe ser igual a la cantidad de productos por su precio', () => {
    const wrapper = shallow(<ProductDetailComponent />)

    const cantidad = parseInt(wrapper.find('#cantidad_producto').text())
    const precio = parseInt(wrapper.find('#preciolbl').text())
    const total = cantidad * precio

    expect(wrapper.find('#totalabel').text()).toBe('$ ' + total.toString())
  })

  it('Al agregar el producto al carrito debe notificar al vendedor el costo del importe por envío', async() => {
    const wrapper = shallow(<ProductDetailComponent />)
    await wrapper.find('#btn_info').simulate('click')

    expect(wrapper.find('#info_Importe').text()).toEqual('El proveedor se encuentra en la etapa "etapa 1". El importe por envío tiene un costo de $0.03')
  })
})
