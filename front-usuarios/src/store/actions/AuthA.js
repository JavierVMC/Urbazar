/* eslint-disable eqeqeq */
import axios from 'axios'

const AuthA = (dispatch) => {
  return {

    login: (data) => {
      const feed = document.getElementById('FeedbackLogin')
      console.log(data)
      console.log(data)
      axios.post(`http://${data.number}/login`, data)
        .then(response => {
          if (response.status == 200) {
            return response.data
          }
        })
        .then(res => {
          console.log(res)
          localStorage.setItem('user', res.data.username)
          localStorage.setItem('nombre_usuario', res.data.nombre)
          localStorage.setItem('userId', res.data.id)
          localStorage.setItem('etapa', res.data.id_etapa)
          localStorage.setItem('auth', 1)
          localStorage.setItem('token', res.token)
          localStorage.setItem('role', res.data.role)

          dispatch({ type: 'LOGIN' })
        })

        .catch((err) => {
          feed.innerHTML = 'Usuario o clave incorrectos'

          feed.style.color = 'red'
          console.log(err)
          dispatch({ type: 'LOGIN_ERR' })
        })
    },
    logout: () => {
      localStorage.setItem('auth', 0)
      localStorage.setItem('nombre_usuario', '')
      localStorage.setItem('userId', '')
      localStorage.setItem('role', '')
      localStorage.setItem('token', '')
      dispatch({ type: 'LOGOUT' })
    }
  }
}

export default AuthA
