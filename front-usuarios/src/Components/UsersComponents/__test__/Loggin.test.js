/* eslint-disable no-undef */

import React from 'react'
import Main from '../Main/MainComponent'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })
describe('Test para verificar que si el usuario no está loggueado no puede acceder al sistema', () => {
  it('Si el usuario no está loggueado no puede acceder al sistema', () => {
    localStorage.setItem('auth', 0)

    const wrapper = shallow(<Main />)

    // El banner principal únicamente se muestra cuando se ingresa al main, por ende si no tiene acceso a el,
    // la longitud de la sgt solicitud debe ser 0
    expect(wrapper.find('.banner_container')).toHaveLength(0)
  })
  it('Si el usuario ingresa sus datos correctamente puede logguearse al sistema', () => {
    localStorage.setItem('auth', 1)
    localStorage.setItem('role', '0')

    const wrapper = shallow(<Main />)
    expect(wrapper.find('.banner_container')).toHaveLength(1)
  })
})
