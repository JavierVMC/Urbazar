/* eslint-disable no-undef */
import React from 'react'
import Carrito from '../Carrito/CarritoDetalle'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })
describe('Test para el carrito de compras', () => {
  localStorage.setItem('auth', 1)
  localStorage.setItem('role', '0')

  it('Debería renderizarse sin error', () => {
    const wrapper = shallow(<Carrito />)
    expect(wrapper).toHaveLength(1)
  })
})
