import React, { Component } from 'react'
import CarritoComponent from './CarritoComponent'
import { connect } from 'react-redux'
import AuthA from '../../../store/actions/AuthA'

class CarritoPC extends Component {
  render() {
    return <CarritoComponent auth={this.props.auth} />
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthR.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authFn: AuthA(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarritoPC)
