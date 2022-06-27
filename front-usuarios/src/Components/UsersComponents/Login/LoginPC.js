import React, { Component } from 'react'
import { connect } from 'react-redux'
import AuthA from '../../../store/actions/AuthA'
import Register from './Register'
import data from '../../../enviroment'
class LoginPC extends Component {
    login = async() => {
      const payload = {
        username: document.getElementById('username').value,
        password: document.getElementById('passwordLogin').value,
        number: data.number
      }
      console.log(payload.username)
      this.props.authFn.login(payload)
    }

    render() {
      return (<Register
            login={this.login}
            auth= {this.props.auth} />)
    }
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthR.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authFn: AuthA(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPC)
