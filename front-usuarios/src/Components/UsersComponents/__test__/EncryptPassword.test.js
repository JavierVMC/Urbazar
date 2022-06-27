/* eslint-disable no-undef */
import EncryptPassword from '../Login/EncryptPassword'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'

configure({ adapter: new Adapter() })
describe('Test de prueba para encriptar contraseña con el módulo bcrypt', () => {
  it('Debería generar una contraseña encriptada con el patrón de bcrypt', async() => {
    expect(await EncryptPassword('Mayorga1234')).toMatch(/\$[a-zA-Z0-9_"-"]+/)
  })
})
